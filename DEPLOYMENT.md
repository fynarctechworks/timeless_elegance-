# Netlify Deployment Guide

## Prerequisites
- A GitHub/GitLab/Bitbucket account
- Your repository pushed to the platform
- A Netlify account (free tier available)

## Deployment Steps

### Option 1: Deploy via Netlify UI (Recommended)

1. **Push your code to Git**
   ```bash
   git add .
   git commit -m "Prepare for Netlify deployment"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://www.netlify.com) and log in
   - Click "Add new site" → "Import an existing project"
   - Choose your Git provider and repository
   - Netlify will auto-detect the settings from `netlify.toml`
   - Click "Deploy site"

3. **Configure domain (Optional)**
   - In Site settings → Domain management
   - Set up custom domain or use the free Netlify subdomain

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

## Configuration

### Build Settings
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18 (specified in `.nvmrc`)

### Environment Variables
If you need environment variables:
1. Go to Site settings → Environment variables
2. Add your variables (e.g., API keys)
3. Reference them in your code as `import.meta.env.VITE_YOUR_VAR_NAME`

### SPA Routing
The `netlify.toml` file includes redirect rules to handle React Router properly. All routes will redirect to `index.html` with a 200 status code.

## Testing Before Deployment

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Preview the build**
   ```bash
   npm run preview
   ```
   This will serve your production build locally at http://localhost:4173

## Post-Deployment

### Monitoring
- Check the Netlify dashboard for build logs
- Monitor deploy status and any errors

### Continuous Deployment
Once connected to Git, Netlify will:
- Auto-deploy on every push to main branch
- Create deploy previews for pull requests

### Common Issues

**Build fails**: Check the build logs in Netlify dashboard
**404 on refresh**: The `netlify.toml` redirect rules should fix this
**Assets not loading**: Check the publish directory is set to `dist`

## Additional Features

### Forms
Add `netlify` attribute to forms for serverless form handling:
```html
<form name="contact" netlify>
  <!-- form fields -->
</form>
```

### Functions
Create serverless functions in `netlify/functions/` directory

### Split Testing
Enable in Site settings → Split Testing

## Support
- [Netlify Documentation](https://docs.netlify.com)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#netlify)
