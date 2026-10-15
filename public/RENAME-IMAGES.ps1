# Run once in PowerShell from the project folder:
#   cd "C:\Users\robin\OneDrive\Desktop\eagle eye chauffeur\public"
#   .\RENAME-IMAGES.ps1
# Then: git add -A public; git commit -m "Rename images for web"; git push

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

$map = @{
  "hero.jpg.jpg"                 = "hero.jpg"
  "logo-splash.png.PNG"          = "logo-splash.png"
  "fleet-business-sedan.png.PNG" = "fleet-business-sedan.png"
  "fleet-business-suv.png.PNG"   = "fleet-business-suv.png"
  "fleet-first-suv.png.PNG"      = "fleet-first-suv.png"
  "fleet-first-sedan.png.PNG"    = "fleet-first-sedan.png"
}

foreach ($pair in $map.GetEnumerator()) {
  $from = Join-Path $PSScriptRoot $pair.Key
  $to = Join-Path $PSScriptRoot $pair.Value
  if (Test-Path -LiteralPath $from) {
    if (Test-Path -LiteralPath $to) { Remove-Item -LiteralPath $to -Force }
    Rename-Item -LiteralPath $from -NewName $pair.Value
    Write-Host "OK: $($pair.Key) -> $($pair.Value)"
  } else {
    Write-Host "Skip (not found): $($pair.Key)"
  }
}

Write-Host "`nDone. Commit and push so Vercel gets the new names."
