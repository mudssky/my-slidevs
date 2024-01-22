
[CmdletBinding()]
param(
	[ValidateSet('all', 'onlySite', 'onlySlidevs', 'onlyDeploy', 'localRelease' , 'turbo:local', 'turbo:deploy')]
	[string]$Mode = 'all'
)


$deployPath = "$PSScriptRoot\site\.vitepress\dist"
$slidevPath = "$deployPath\slidevs"
$baseUrl = '/my-slidevs/'
$slidevSubPrefix = 'slidevs/'
$slidevProjectsPath = "$PSScriptRoot\projects\slidevs"
$sitePath = "$PSScriptRoot\site"

# 排除模板项目

$projectList = Get-ChildItem -LiteralPath $slidevProjectsPath -Exclude *template*, slidev3

function Get-SlidevsUrl() {
	$urls =	$projectList | ForEach-Object { @{
			url  = $slidevSubPrefix + $_.Name
			name = $_.Name
		} } | Sort-Object -Property name
	$urlJson = ConvertTo-Json $urls
	Write-Verbose "generate url json：  $urlJson"
	Out-File  -InputObject $urlJson  -Encoding UTF8  -FilePath  "$sitePath\slidevs.json"
}


# 先编译web站点（因为默认会清空dist文件夹），之后执行下面的命令，创建slidevs目录
# 准备发布文件夹
function Set-DistPath() {
	if (Test-Path $slidevPath) {
		Write-Verbose "clean $slidevPath"
		
		Remove-Item -Path $slidevPath -Recurse -Force | Out-Null
	}
	Write-Verbose "create new  folder: $slidevPath"
	New-Item -Path $slidevPath -ItemType Directory -Force -ErrorAction Stop | Out-Null
}


function Set-Scripts {
	[CmdletBinding()]
	param (
		[string]$key , # 脚本名
		[string]$value,
		[string]$path # package.json路径
	)
	
	$jsonMap = Get-Content $path | ConvertFrom-Json -AsHashtable
	if ($jsonMap.scripts.ContainsKey($key)) {
		$jsonMap.scripts.$key = $value
	}
	else {
		$jsonMap.scripts.Add($key, $value)
	}
	ConvertTo-Json $jsonMap -Depth 100 | Out-File $path

}
function Set-BuildBase() {
	$projectList | ForEach-Object {
		$base = ($baseUrl + $slidevSubPrefix + $_.Name)
		Set-Scripts -path "$($_.FullName)\package.json" -key 'build:base' -value "slidev build --base $base"
	}
}

function Copy-Slidevs() {
	$projectList | ForEach-Object {
		
		Copy-Item  -Path  ( '{0}\dist' -f $_.FullName) -Destination ("$slidevPath\{0}" -f $_.Name) -Recurse -ErrorAction Stop | Out-Null
	}
}
function Build-Slidevs() {
	$projectList | ForEach-Object {
		$base = ($baseUrl + $slidevSubPrefix + $_.Name)
		Write-Verbose ('build base: {0},name: {1}' -f $base, $_.Name)
		pnpm --filter  $_.Name build --base $base
	}
}
function Build-Site() {
	pnpm docs:build
	Write-Verbose "build success, use `docs:preview` to previw  or `docs:deploy` to deploy manully"

}

function Deploy-Site() {
	pnpm gh-pages -d $deployPath
}


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
 "localRelease" {
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
		Write-Host 'Run pnpm docs:preview to preview'
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
 'onlyDeploy' {
		Deploy-Site
 }
 'turbo:local' {
		Get-SlidevsUrl
		Set-BuildBase
		pnpm turbo build:base --force 
		Copy-Slidevs
		Write-Host 'Run pnpm docs:preview to preview'
 }
	'turbo:deploy' {
		Get-SlidevsUrl
		# Set-BuildBase
		pnpm turbo build:base
		Copy-Slidevs
		Write-Host 'Run pnpm docs:preview to preview'
 }
}