# GitHub Repository Setup

Your code is committed and ready to push. Follow these steps:

## Option 1: Using GitHub Web Interface

1. Go to https://github.com/new
2. Repository name: `vc-website` (or any name you prefer)
3. Set visibility to **Public**
4. **DO NOT** initialize with README, .gitignore, or license
5. Click "Create repository"

6. Then run these commands:
```bash
cd /home/potato/Documents/vc\(1\)/vc
git remote add origin https://github.com/YOUR_USERNAME/vc-website.git
git branch -M main
git push -u origin main
```

## Option 2: Using GitHub CLI (if installed)

```bash
gh repo create vc-website --public --source=. --remote=origin --push
```

Replace `YOUR_USERNAME` with your actual GitHub username.
