# GitHub Repository Setup Instructions

Your Moon House website code has been committed to local git. Follow these steps to push it to GitHub.

## Option 1: Using GitHub CLI (Recommended)

1. **Install GitHub CLI:**
```bash
brew install gh
```

2. **Authenticate:**
```bash
gh auth login
```

3. **Create repository and push:**
```bash
gh repo create moon-house-website --public --source=. --remote=origin --push
```

## Option 2: Using GitHub Web Interface

1. **Go to GitHub.com** and log in

2. **Create a new repository:**
   - Click the "+" icon in the top right
   - Select "New repository"
   - Name: `moon-house-website`
   - Description: "Website for Moon House - Board Game Cafe in Weaverville, CA"
   - Choose Public or Private
   - Do NOT initialize with README, .gitignore, or license
   - Click "Create repository"

3. **Push your local repository:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/moon-house-website.git
git branch -M main
git push -u origin main
```

## Verify

After pushing, visit:
`https://github.com/YOUR_USERNAME/moon-house-website`

## Add to Your Portfolio

To add this to your portfolio website, you can:

1. **Link to the live site** (after deploying to Google Cloud)
2. **Link to the GitHub repository**
3. **Add screenshots** from the running website
4. **Include in your portfolio's project section** with description:

```markdown
### Moon House Website
A full-featured restaurant website for a board game cafe in Weaverville, CA.

**Features:**
- Online ordering system
- Customer rewards program
- Photo gallery
- Responsive design

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS

**Links:**
- [Live Site](YOUR_DEPLOYED_URL)
- [GitHub Repo](https://github.com/YOUR_USERNAME/moon-house-website)
```

## Next Steps

1. Push to GitHub (using one of the options above)
2. Deploy to Google Cloud (see DEPLOYMENT.md)
3. Add to your portfolio
4. Share the live URL with Moon House owners!

## GitHub Actions (Optional)

For automatic deployment on push to main, add `.github/workflows/deploy.yml` - see DEPLOYMENT.md for the complete workflow configuration.
