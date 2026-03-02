$ErrorActionPreference = 'Stop'

$root = 'C:\Users\djvolvo\.openclaw\workspace\nible-site'
$archive = Join-Path $root 'archive'
$outDir = Join-Path $root 'research\data'
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$targets = @(
  @{ Category='theories'; Path='theories'; Pattern='*.html' },
  @{ Category='news'; Path='news'; Pattern='*.html' },
  @{ Category='laboratory'; Path='laboratory'; Pattern='*.htm' },
  @{ Category='stories'; Path='story'; Pattern='*.html' }
)

$papers = @()

foreach ($t in $targets) {
  $dir = Join-Path $archive $t.Path
  if (-not (Test-Path $dir)) { continue }
  Get-ChildItem $dir -File -Filter $t.Pattern | ForEach-Object {
    $raw = Get-Content $_.FullName -Raw -ErrorAction SilentlyContinue
    if (-not $raw) { return }

    $title = [regex]::Match($raw, '<title[^>]*>(.*?)</title>', 'IgnoreCase,Singleline').Groups[1].Value
    if (-not $title) { $title = $_.BaseName }

    $txt = $raw -replace '(?is)<script.*?</script>', ' '
    $txt = $txt -replace '(?is)<style.*?</style>', ' '
    $txt = $txt -replace '(?is)<[^>]+>', ' '
    $txt = [System.Net.WebUtility]::HtmlDecode($txt)
    $txt = ($txt -replace '\s+', ' ').Trim()

    if ($txt.Length -gt 1800) { $txt = $txt.Substring(0,1800) + '…' }

    $papers += [pscustomobject]@{
      id = ($t.Category + '-' + $_.BaseName.ToLower())
      category = $t.Category
      source = ('/archive/' + $t.Path + '/' + $_.Name)
      title = $title
      summary = if($txt.Length -gt 280){$txt.Substring(0,280)+'…'} else {$txt}
      body = $txt
    }
  }
}

$papers = $papers | Sort-Object category,title
$papers | ConvertTo-Json -Depth 5 | Set-Content (Join-Path $outDir 'papers.json') -Encoding UTF8
Write-Output "Built $($papers.Count) papers"