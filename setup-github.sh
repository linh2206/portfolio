#!/bin/bash
# Setup and push portfolio to GitHub
set -e

echo "=== Portfolio GitHub Setup ==="
echo ""

# Check gh auth
if ! gh auth status &>/dev/null; then
  echo "GitHub CLI not authenticated."
  echo "Run: gh auth login"
  echo "Then run this script again."
  exit 1
fi

# Create repo and push
echo "Creating GitHub repository and pushing..."
if gh repo create linh2206/portfolio --public --source=. --remote=origin --push 2>/dev/null; then
  echo "Repository created and pushed!"
else
  echo "Repository may already exist. Pushing..."
  git push -u origin main
fi

echo ""
echo "=== Success! ==="
echo "Portfolio: https://github.com/linh2206/portfolio"
echo "Deploy: https://vercel.com/new?filter=next.js"
