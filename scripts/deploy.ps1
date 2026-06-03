Param(
  [string]$Message = "chore: update site content"
)

Write-Host "== Deploy helper starting =="
Write-Host "Working directory: " (Get-Location)

# 1) Quick git checks
git status --porcelain
git branch --show-current

# 2) Optional validation
if (Test-Path .\scripts\validate-products.cjs) {
  Write-Host "Running products validator..."
  node .\scripts\validate-products.cjs

  if ($LASTEXITCODE -ne 0) {
    Write-Error "Validation failed. Aborting deploy."
    exit 1
  }

} else {
  Write-Host "No validator script found: .\scripts\validate-products.cjs"
}

# 3) Build (production)
Write-Host "Running build..."
if (-not (npm run build)) {
  Write-Error "Build failed. Aborting deploy."
  exit 1
}

# 4) Stage changes
Write-Host "Staging changes..."
git add -A

# 5) Commit if there are changes
$changes = git status --porcelain
if ($changes) {
  Write-Host "Committing changes: $Message"
  git commit -m $Message
} else {
  Write-Host "No changes to commit."
}

# 6) Push to origin/main
Write-Host "Pushing to origin/main..."

git push origin main

if ($LASTEXITCODE -ne 0) {
  Write-Error "Git push failed. Check your credentials and remote settings."
  exit 1
}

Write-Host "== Deploy helper finished =="
