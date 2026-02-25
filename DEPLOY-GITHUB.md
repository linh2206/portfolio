# Deploy Portfolio to GitHub

## Done
- ✅ Git initialized
- ✅ Initial commit created
- ✅ Remote `origin` → https://github.com/linh2206/portfolio.git

## One-Command Setup (recommended)

Run in terminal:

```bash
cd /Users/linh/portfolio
gh auth login
./setup-github.sh
```

This will authenticate with GitHub, create the repo, and push your code.

## Manual Setup

### 1. Create repo on GitHub
1. Go to [github.com/new](https://github.com/new)
2. **Repository name:** `portfolio`
3. Select **Public**
4. **Do not** check "Add a README file"
5. Click **Create repository**

### 2. Push code
```bash
cd /Users/linh/portfolio
git push -u origin main
```

### 3. Deploy on Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import `linh2206/portfolio`
3. Click **Deploy**

---
Result: **https://github.com/linh2206/portfolio**
