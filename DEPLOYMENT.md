# Moon House Website - Deployment Guide

This guide covers deploying the Moon House website to Google Cloud Platform.

## Prerequisites

1. Google Cloud account with billing enabled
2. Google Cloud SDK installed (`gcloud` CLI)
3. Project ID in Google Cloud Console
4. **PROJECT_PASSWORD environment variable** - Set your desired password for the portfolio

## Option 1: Google Cloud Run (Recommended)

Google Cloud Run is serverless, scales to zero, and only charges for usage.

### Steps:

1. **Authenticate with Google Cloud:**
```bash
gcloud auth login
```

2. **Set your project:**
```bash
gcloud config set project YOUR_PROJECT_ID
```

3. **Enable required APIs:**
```bash
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com
```

4. **Build and deploy:**
```bash
# Build the Docker image
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/moon-house

# Deploy to Cloud Run with password protection
gcloud run deploy moon-house \
  --image gcr.io/YOUR_PROJECT_ID/moon-house \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 3000 \
  --set-env-vars "PROJECT_PASSWORD=your-secure-password-here"
```

**IMPORTANT:** Replace `your-secure-password-here` with your actual password.

5. **Get your URL:**
After deployment, Cloud Run will provide a URL like:
`https://moon-house-xxxxxx-uc.a.run.app`

### Cost Estimate:
- First 2 million requests/month: FREE
- $0.40 per million requests after
- Scales to zero when not in use

## Option 2: Google App Engine

App Engine provides automatic scaling and load balancing.

### Steps:

1. **Authenticate and set project:**
```bash
gcloud auth login
gcloud config set project YOUR_PROJECT_ID
```

2. **Initialize App Engine (first time only):**
```bash
gcloud app create --region=us-central
```

3. **Deploy with password protection:**
```bash
# Method 1: Set environment variable via command line
gcloud app deploy --set-env-vars PROJECT_PASSWORD=your-secure-password-here

# Method 2: Update app.yaml with your password and deploy
# (Edit env_variables in app.yaml first)
gcloud app deploy
```

**IMPORTANT:** Replace `your-secure-password-here` with your actual password.

4. **View your app:**
```bash
gcloud app browse
```

### Cost Estimate:
- Free tier: 28 instance hours/day
- After free tier: ~$0.05-0.10/hour per instance

## Option 3: Firebase Hosting (Alternative)

For static hosting with CDN:

1. **Install Firebase CLI:**
```bash
npm install -g firebase-tools
```

2. **Build the app:**
```bash
npm run build
```

3. **Initialize Firebase:**
```bash
firebase init hosting
```

4. **Deploy:**
```bash
firebase deploy
```

## Custom Domain Setup

### For Cloud Run:

1. **Map domain:**
```bash
gcloud run domain-mappings create \
  --service moon-house \
  --domain www.moonhouseweaverville.com \
  --region us-central1
```

2. **Update DNS records** with the values provided by Google Cloud

### For App Engine:

1. Go to Google Cloud Console > App Engine > Settings > Custom Domains
2. Add your domain and verify ownership
3. Update DNS records

## Password Protection

This portfolio project is password-protected. Visitors must enter the correct password to view the site.

### Required Environment Variable:
- `PROJECT_PASSWORD` - The password required to access the portfolio

### Setting the Password:

**For local development:**
1. Copy `.env.local.example` to `.env.local`
2. Update `PROJECT_PASSWORD` with your desired password
3. The default development password is `demo123`

**For production deployment:**

#### Cloud Run:
```bash
gcloud run deploy moon-house \
  --set-env-vars "PROJECT_PASSWORD=your-secure-password-here"
```

#### App Engine:
```bash
# Option 1: Command line
gcloud app deploy --set-env-vars PROJECT_PASSWORD=your-secure-password-here

# Option 2: In app.yaml (less secure)
# Add under env_variables:
#   PROJECT_PASSWORD: 'your-password'
```

**Security Notes:**
- Use a strong, unique password
- Don't commit passwords to git
- Update the password regularly
- Share the password only with intended viewers

## Environment Variables

If you need to add additional environment variables:

### Cloud Run:
```bash
gcloud run deploy moon-house \
  --set-env-vars "NODE_ENV=production,PROJECT_PASSWORD=your-password,CUSTOM_VAR=value"
```

### App Engine:
Add to `app.yaml`:
```yaml
env_variables:
  NODE_ENV: 'production'
  PROJECT_PASSWORD: 'your-password'
  CUSTOM_VAR: 'value'
```

## Continuous Deployment

### Set up GitHub Actions for Cloud Run:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloud Run

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - uses: google-github-actions/setup-gcloud@v0
        with:
          service_account_key: ${{ secrets.GCP_SA_KEY }}
          project_id: ${{ secrets.GCP_PROJECT_ID }}

      - name: Build and Push
        run: |
          gcloud builds submit --tag gcr.io/${{ secrets.GCP_PROJECT_ID }}/moon-house

      - name: Deploy
        run: |
          gcloud run deploy moon-house \
            --image gcr.io/${{ secrets.GCP_PROJECT_ID }}/moon-house \
            --platform managed \
            --region us-central1 \
            --allow-unauthenticated
```

## Monitoring and Logs

### View logs:
```bash
# Cloud Run
gcloud run logs read --service moon-house

# App Engine
gcloud app logs tail
```

### Monitor performance:
- Go to Google Cloud Console
- Navigate to Cloud Run or App Engine
- View metrics and logs

## Troubleshooting

### Build fails:
```bash
# Check build logs
gcloud builds list
gcloud builds log BUILD_ID
```

### Deploy fails:
```bash
# Check service logs
gcloud run services describe moon-house --region us-central1
```

### Images not loading:
- Ensure images are in the correct path under `/public/images/`
- Check Next.js image optimization settings
- Verify CORS settings if needed

## Updating the Website

1. Make changes to the code
2. Commit and push to GitHub
3. Redeploy:
```bash
# Cloud Run
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/moon-house
gcloud run deploy moon-house --image gcr.io/YOUR_PROJECT_ID/moon-house --platform managed --region us-central1

# App Engine
gcloud app deploy
```

## Backup and Rollback

### Cloud Run - Rollback:
```bash
# List revisions
gcloud run revisions list --service moon-house

# Rollback to previous revision
gcloud run services update-traffic moon-house --to-revisions REVISION_NAME=100
```

### App Engine - Rollback:
```bash
# List versions
gcloud app versions list

# Route traffic to previous version
gcloud app services set-traffic default --splits VERSION_ID=1
```

## Support

For deployment issues:
- Google Cloud Documentation: https://cloud.google.com/docs
- Next.js Deployment Docs: https://nextjs.org/docs/deployment
- Contact: moonhousetrinity@gmail.com
