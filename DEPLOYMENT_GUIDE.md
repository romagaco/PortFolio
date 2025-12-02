# GitHub Pages Deployment Guide

## Prerequisites
- Git repository already created on GitHub
- Repository name: `porftFolio` (or update the base path in `astro.config.mjs`)

## Step-by-Step Deployment Instructions

### 1. Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository: https://github.com/romagaco/porftFolio
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Build and deployment**:
   - **Source**: Select "GitHub Actions"
   - (Not "Deploy from a branch" - this is important!)

### 2. Push Your Code

Make sure all your changes are committed and pushed:

```bash
# From the cyan-chaos directory
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### 3. Monitor the Deployment

1. Go to the **Actions** tab in your GitHub repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 2-3 minutes)
4. Once it's green/complete, your site is deployed!

### 4. Access Your Site

Your portfolio will be available at:
**https://romagaco.github.io/porftFolio/**

## Configuration Files Explained

### `astro.config.mjs`
- `site`: Your GitHub Pages URL
- `base`: Your repository name (must match your repo)

### `.github/workflows/deploy.yml`
- Automatic deployment workflow
- Runs on every push to `main` branch
- Builds the Astro site and deploys to GitHub Pages

### `public/.nojekyll`
- Empty file that tells GitHub Pages NOT to use Jekyll
- Required for Astro/modern frameworks

## Troubleshooting

### Issue: 404 errors on navigation
**Solution**: Make sure `base: '/porftFolio'` matches your repository name exactly

### Issue: Workflow fails
**Solution**: 
1. Check that GitHub Pages source is set to "GitHub Actions"
2. Verify the workflow file is in `.github/workflows/deploy.yml`
3. Check Actions tab for error messages

### Issue: CSS/JS not loading
**Solution**: The `.nojekyll` file should prevent this, but verify it exists in `public/`

### Issue: Images not showing
**Solution**: Make sure image paths start with `/porftFolio/` or use relative paths

## Updating Your Site

Every time you push to the `main` branch, GitHub Actions will automatically:
1. Build your Astro site
2. Deploy it to GitHub Pages

No manual steps needed after initial setup!

## Alternative: Manual Deploy (Not Recommended)

If you prefer manual deployment:

```bash
# Build the site
pnpm build

# Deploy the dist folder
# (Use gh-pages package or manual upload)
```

But the automatic GitHub Actions workflow is much easier!

## Need Help?

If you encounter issues:
1. Check the Actions tab for error logs
2. Verify repository settings
3. Ensure all files are committed and pushed

---

**Your site should be live at:** https://romagaco.github.io/porftFolio/
