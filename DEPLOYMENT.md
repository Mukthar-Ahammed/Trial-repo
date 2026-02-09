# Netlify Deployment Guide

## Quick Deploy (CLI Method)

1. **Login to Netlify:**
   ```bash
   netlify login
   ```

2. **Deploy to Netlify:**
   ```bash
   netlify deploy --prod --dir=dist
   ```
   
   If this is your first deployment, you'll be prompted to:
   - Create a new site, or
   - Link to an existing site

3. **Follow the prompts** to complete the deployment.

## Alternative: Drag & Drop Method

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Go to [app.netlify.com/drop](https://app.netlify.com/drop)**

3. **Drag the `dist` folder** onto the Netlify interface

4. Your site will be deployed automatically!

## Git Integration (Recommended for Continuous Deployment)

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Go to [app.netlify.com](https://app.netlify.com)**

3. **Click "Add new site" → "Import an existing project"**

4. **Connect your Git provider** and select your repository

5. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`

6. **Click "Deploy site"**

Netlify will automatically deploy on every push to your main branch!

## Configuration

The `netlify.toml` file is already configured with:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirect rules (all routes → index.html)

## Notes

- The build output is in the `dist` folder
- All routes will redirect to `index.html` for React Router compatibility
- Your site will get a random Netlify subdomain (you can customize it later)





