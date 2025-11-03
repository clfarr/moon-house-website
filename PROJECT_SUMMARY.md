# Moon House Website - Project Summary

## Project Overview

A modern, fully-functional website for Moon House, a board game cafe in Weaverville, CA. The website features an online ordering system, customer rewards program, photo gallery, and complete business information.

## Location

**Project Directory:** `/Users/carolinefarr/moon-house-website`

## What's Been Built

### 1. Core Features

#### Navigation
- Sticky header with logo
- Responsive mobile menu
- Smooth scroll navigation
- Brand colors (teal #1e5a5a and yellow #f5d547)

#### Hero Section
- Full-screen hero with background image
- Restaurant logo and tagline
- Call-to-action buttons
- Contact information

#### Photo Gallery
- 9 high-quality food photos
- Grid layout (responsive: 1, 2, or 3 columns)
- Lightbox for full-size viewing
- Hover effects and transitions

#### Online Ordering System
- Category filtering (Pitas, Bowls, Waffles, Soups, Coffee, Tea, Drinks)
- Shopping cart functionality
- Quantity management
- Customer information form
- Order total calculation
- Mobile-responsive cart modal

#### Rewards Program
- Customer registration
- Point tracking (10 points per purchase)
- Free drink redemption at 100 points
- Progress bar visualization
- localStorage persistence
- Purchase history

#### Contact Section
- Full business information
- Phone and email links
- Google Maps integration
- List of offerings

#### Footer
- Quick links
- Contact information
- Copyright notice

### 2. Technical Implementation

#### Tech Stack
- **Framework:** Next.js 16 (App Router)
- **UI:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Optimization:** Next.js Image component

#### Components Structure
```
app/components/
├── Navigation.tsx    # Top navigation
├── Hero.tsx         # Hero section
├── Gallery.tsx      # Photo gallery
├── Order.tsx        # Ordering system
├── Rewards.tsx      # Loyalty program
├── Contact.tsx      # Contact info
└── Footer.tsx       # Footer
```

#### Features
- Server-side rendering (SSR)
- Image optimization
- Responsive design
- SEO optimized
- Accessible navigation
- Fast performance

### 3. Deployment Configuration

#### Files Created
- `Dockerfile` - Container configuration for Cloud Run
- `app.yaml` - App Engine configuration
- `.dockerignore` - Docker ignore rules
- `DEPLOYMENT.md` - Detailed deployment guide
- `GITHUB_SETUP.md` - GitHub setup instructions

#### Deployment Options
1. **Google Cloud Run** (Recommended - serverless, pay-per-use)
2. **Google App Engine** (Auto-scaling platform)
3. **Firebase Hosting** (Static hosting with CDN)

### 4. Documentation

- `README.md` - Project overview and getting started
- `DEPLOYMENT.md` - Complete deployment guide
- `GITHUB_SETUP.md` - GitHub repository setup
- `PROJECT_SUMMARY.md` - This file

## How to Run Locally

1. **Navigate to project:**
```bash
cd /Users/carolinefarr/moon-house-website
```

2. **Install dependencies (if needed):**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Open in browser:**
```
http://localhost:3000 (or 3001 if 3000 is in use)
```

## Next Steps

### Immediate
1. ✅ Website built and tested locally
2. ✅ Code committed to git
3. ⏳ Push to GitHub (see GITHUB_SETUP.md)
4. ⏳ Deploy to Google Cloud (see DEPLOYMENT.md)

### For GitHub
```bash
# Option 1: Install gh CLI
brew install gh
gh auth login
gh repo create moon-house-website --public --source=. --remote=origin --push

# Option 2: Manual
# Create repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/moon-house-website.git
git push -u origin main
```

### For Google Cloud Deployment

#### Quick Deploy to Cloud Run:
```bash
# Set project
gcloud config set project YOUR_PROJECT_ID

# Enable APIs
gcloud services enable run.googleapis.com cloudbuild.googleapis.com

# Build and deploy
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/moon-house
gcloud run deploy moon-house \
  --image gcr.io/YOUR_PROJECT_ID/moon-house \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 3000
```

### Add to Portfolio

1. Deploy the website and get the live URL
2. Take screenshots of key features
3. Add to your portfolio with:
   - Project description
   - Tech stack
   - Features list
   - Links to live site and GitHub repo
   - Screenshots

Example portfolio entry:
```
Moon House Website
Board game cafe website with online ordering and rewards program

Stack: Next.js, React, TypeScript, Tailwind CSS
Features: Online ordering, rewards system, photo gallery
Links: [Live Site] [GitHub]
```

## Project Statistics

- **Lines of Code:** ~1,500+
- **Components:** 7
- **Pages:** 1 (single-page application)
- **Images:** 13 food photos + logo + building + owners
- **Menu Items:** 19
- **Deployment Options:** 3

## Support

- **Local Development Issues:** Check README.md
- **Deployment Issues:** Check DEPLOYMENT.md
- **GitHub Issues:** Check GITHUB_SETUP.md

## Contact

For questions about Moon House:
- Phone: 530-784-0408
- Email: moonhousetrinity@gmail.com
- Address: 30891 State HWY 3, Weaverville, CA

---

**Built with Claude Code**
https://claude.com/claude-code
