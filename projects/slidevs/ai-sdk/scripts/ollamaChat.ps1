
$ollamaBaseUrl = 'http://localhost:11434'
$ollamaChatAPI = "$ollamaBaseUrl/api/chat"

$res = Invoke-WebRequest -Uri $ollamaChatAPI `
    -Method Post `
    -ContentType "application/json" `
    -Body (@{
        model    = "deepseek-r1:1.5b"
        messages = @(
            @{
                role    = "user"
                content = "天空为什么是蓝色的"
            }
        )
    } | ConvertTo-Json -Compress)

$resText = [System.Text.Encoding]::UTF8.GetString($res.Content)

$resText -split "`n" | ForEach-Object { (ConvertFrom-Json $_ ).message.content } | Join-String

