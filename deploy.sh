#!/bin/bash

# Script untuk push ke GitHub dan deploy ke Vercel
# Jalankan: chmod +x deploy.sh && ./deploy.sh

REPO_NAME="lutfananas-cv"
GITHUB_USER="lutfananas"

echo "🚀 Deploying CV Website to GitHub & Vercel"
echo "=========================================="
echo ""

# Check if repository exists
echo "📦 Setting up git remote..."
git remote remove origin 2>/dev/null
git remote add origin https://github.com/${GITHUB_USER}/${REPO_NAME}.git

echo ""
echo "📤 Pushing to GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🌐 Next steps:"
    echo "   1. Go to: https://vercel.com/new"
    echo "   2. Import repository: ${GITHUB_USER}/${REPO_NAME}"
    echo "   3. Click 'Deploy'"
    echo ""
    echo "   Or use this direct link:"
    echo "   https://vercel.com/new/clone?repository-url=https://github.com/${GITHUB_USER}/${REPO_NAME}"
else
    echo ""
    echo "❌ Push failed. Please check:"
    echo "   1. Repository exists: https://github.com/${GITHUB_USER}/${REPO_NAME}"
    echo "   2. You have push access"
    echo "   3. Run: git config --global user.name 'Your Name'"
    echo "   4. Run: git config --global user.email 'your@email.com'"
fi
