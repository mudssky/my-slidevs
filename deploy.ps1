
[CmdletBinding()]
param(
	[ValidateSet('all', 'onlySite', 'onlySlidevs', 'onlyDeploy' )]
	[string]$Mode = 'all',
	[switch]$localRelease
)



# class 

$deployPath = "$PSScriptRoot\site\.vitepress\dist"
$slidevPath = "$deployPath\slidevs"
$slidevSubPrefix = 'slidevs/'
$projectsPath = "$PSScriptRoot\projects"
$sitePath = "$PSScriptRoot\site"
function Get-SlidevsUrl() {
	$urls =	Get-ChildItem $projectsPath  | ForEach-Object { @{
			url  = $slidevSubPrefix + $_.Name
			name = $_.Name
		} }
	$urlJson = ConvertTo-Json $urls
	Write-Debug "generate url json：  $urlJson"
	Out-File  -InputObject $urlJson  -FilePath  "$sitePath\slidevs.json"
}


# 先编译web站点（因为默认会清空dist文件夹），之后执行下面的命令，创建slidevs目录
# 准备发布文件夹
function Set-DistPath() {
	if (Test-Path $slidevPath) {
		Write-Debug "clean $slidevPath"
		Remove-Item -Path $slidevPath -Recurse -Force | Out-Null
	}
	Write-Debug "create new  folder: $slidevPath"
	New-Item -Path $slidevPath -ItemType Directory -Force -ErrorAction Stop | Out-Null
}


function Build-Slidevs() {
	Get-ChildItem -LiteralPath $projectsPath | ForEach-Object {
		pnpm --filter $_.Name build --base ("/my-slidevs/slidevs/" + $_.Name)
	}
}

function Copy-Slidevs() {
	Get-ChildItem -LiteralPath $projectsPath | ForEach-Object {
		Copy-Item  -Path  ( '{0}\dist' -f $_.FullName) -Destination ("$slidevPath\{0}" -f $_.Name) -Recurse -ErrorAction Stop | Out-Null
	}
}

function Build-Site() {
	pnpm docs:build

}

function Deploy-Site() {
	if ( -not  $localRelease) {
		pnpm gh-pages -d $deployPath
	}
	else {
		Write-Host "local release mode, run pnpm docs:preview to preview"
	}

}

# if ($Mode -eq 'onlySite' ) {
# 	Get-SlidevsUrl
# 	Reset-DistPath
# 	Build-Site
# 	Copy-Site

# }
switch ($mode) {
 "all" {
		# 1.准备slidevs json
		Get-SlidevsUrl
		# 2.编译site
		Build-Site
		# 3.准备slievs文件夹
		Set-DistPath
		# 4.编译slidevs
		Build-Slidevs
		# 5.拷贝到站点文件夹
		Copy-Slidevs
		Deploy-Site
 }
 "onlySlidevs" {
		# 3.准备slievs文件夹
		Set-DistPath
		# 4.编译slidevs
		Build-Slidevs
		# 5.拷贝到站点文件夹
		Copy-Slidevs
		Deploy-Site
 }
}