
[CmdletBinding()]
param(



)

$deployPath = "$PSScriptRoot\dist"
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


# 准备发布文件夹
function Reset-DistPath() {
	if ( Test-Path -Path $deployPath) {
		Remove-Item  -LiteralPath  $deployPath -Recurse
		Write-Debug "del folder: $deployPath"
	}
	Write-Debug "create new  folder: $deployPath"
	New-Item -Path $deployPath -ItemType Directory -Force -ErrorAction Stop | Out-Null
	Write-Debug "create new  folder: $slidevPath"
	New-Item -Path $slidevPath -ItemType Directory -Force -ErrorAction Stop | Out-Null
}


function Build-Slidevs() {
	Get-ChildItem -LiteralPath $projectsPath | ForEach-Object {
		pnpm --filter $_.Name build
	}
}

function Copy-Slidevs() {
	Get-ChildItem -LiteralPath $projectsPath | ForEach-Object {
		Copy-Item  -Path "$_.FullName\$_.Name" -Destination "$slidevPath\$_.Name" -Recurse -ErrorAction Stop | Out-Null
	}
}

function Build-Site() {
	pnpm docs:dev
}

function Copy-Site() {
	
}
# 准备slidevs json
Get-SlidevsUrl
# 准备发布文件夹
Reset-DistPath
# 编译
Build-Slidevs

Copy-Slidevs
