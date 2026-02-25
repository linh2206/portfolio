# Deploy Portfolio to GitHub

## Done
- ✅ Git initialized
- ✅ Initial commit created
- ✅ Remote `origin` → https://github.com/linh2206/portfolio.git

## Next Steps

### 1. Create repo on GitHub
1. Go to [github.com/new](https://github.com/new)
2. **Repository name:** `portfolio` (or another name if preferred)
3. Select **Public**
4. **Do not** check "Add a README file" (already included)
5. Click **Create repository**

### 2. Push code to GitHub
If the repo name is `portfolio`:
```bash
cd /Users/linh/portfolio
git push -u origin main
```

If the repo has a different name, update the remote:
```bash
git remote set-url origin https://github.com/linh2206/YOUR-REPO-NAME.git
git push -u origin main
```

### 3. Free deploy (Vercel)
1. Go to [vercel.com](https://vercel.com) → Sign in with GitHub
2. **Add New** → **Project** → Select `portfolio` repo
3. Click **Deploy** (Next.js auto-detected)
4. Done! You'll get a link like: `https://portfolio-xxx.vercel.app`

---
After pushing, your portfolio will be at: **https://github.com/linh2206/portfolio**
