Param(
  [string]$Message = "chore: update site content"
)

Write-Host "== Deploy helper starting =="
Write-Host "Working directory: " (Get-Location)

# 1) Quick git checks
git status --porcelain
git branch --show-current

# 2) Optional validation (prefer .cjs CommonJS validator)
$validatorCJS = '.\scripts\validate-products.cjs'
$validatorJS = '.\scripts\validate-products.js'
if (Test-Path $validatorCJS) {
  Write-Host "Running products validator (CJS)..."
  node $validatorCJS
  if ($LASTEXITCODE -ne 0) {
    Write-Error "Validator failed (CJS). Aborting deploy."; exit 1
  }
} elseif (Test-Path $validatorJS) {
  Write-Host "Running products validator (JS)..."
  # This may be an ES module; run and continue on failure but report it.
  node $validatorJS
  if ($LASTEXITCODE -ne 0) {
    Write-Warning "Validator failed (JS). Continuing deploy but check validator script." 
  }
} else {
  Write-Host "No validator script found: .\scripts\validate-products.{cjs,js}"
}

# 3) Build (production)
Write-Host "Running build..."
npm run build
if ($LASTEXITCODE -ne 0) {
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
