# 🚀 Portfolio Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages with a live URL.

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Node.js 18+ installed

## 🔧 Step-by-Step Deployment

### 1. Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** button → **"New repository"**
3. Repository name: `portfolio`
4. Make it **Public**
5. ✅ Check **"Add a README file"**
6. Click **"Create repository"**

### 2. Clone and Setup

\`\`\`bash
# Clone your new repository
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# Copy all your portfolio files to this directory
# (Copy all files from your v0 project)

# Install dependencies
npm install

# Test locally
npm run dev
\`\`\`

### 3. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select **"GitHub Actions"**

### 4. Push Your Code

\`\`\`bash
# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio deployment"

# Push to GitHub
git push origin main
\`\`\`

### 5. Wait for Deployment

1. Go to **Actions** tab in your repository
2. Watch the deployment process (takes 2-3 minutes)
3. Once complete, your site will be live at:
   **https://YOUR_USERNAME.github.io/portfolio**

## 🔗 Your Live URLs

Replace `YOUR_USERNAME` with your actual GitHub username:

- **Portfolio URL**: `https://YOUR_USERNAME.github.io/portfolio`
- **Repository URL**: `https://github.com/YOUR_USERNAME/portfolio`

## 📧 Setup Contact Form

### Option 1: Formspree (Recommended)

1. Go to [Formspree.io](https://formspree.io)
2. Sign up with your email
3. Create a new form
4. Copy your Form ID (e.g., `xpzgkrgw`)
5. Replace the form action in `components/contact-form.tsx`:
   \`\`\`tsx
   const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
   \`\`\`

### Option 2: EmailJS

1. Go to [EmailJS.com](https://www.emailjs.com)
2. Create account and email service
3. Get Service ID, Template ID, and Public Key
4. Update the EmailJS configuration

## 🔄 Updating Your Portfolio

Every time you make changes:

\`\`\`bash
# Make your changes
# Test locally: npm run dev

# Commit and push
git add .
git commit -m "Update portfolio"
git push origin main

# GitHub Actions will automatically redeploy
\`\`\`

## 🛠️ Troubleshooting

### Build Fails
- Check the **Actions** tab for error details
- Ensure all dependencies are in `package.json`
- Test build locally: `npm run build`

### Images Not Loading
- Ensure images are in the `public/` folder
- Use relative paths: `/images/photo.jpg`
- Check file names match exactly (case-sensitive)

### Contact Form Not Working
- Verify Formspree form ID is correct
- Check browser console for errors
- Test form on live site (not localhost)

### 404 Page Not Found
- Wait 5-10 minutes after first deployment
- Check GitHub Pages settings
- Ensure repository is public

## 📱 Mobile Testing

Test your portfolio on:
- Different screen sizes
- Mobile devices
- Various browsers

## 🎯 SEO Optimization

Your portfolio includes:
- ✅ Responsive design
- ✅ Fast loading times
- ✅ Semantic HTML
- ✅ Meta tags
- ✅ Accessible navigation

## 🔒 Security

- Contact form has spam protection
- No sensitive data exposed
- HTTPS enabled by default

## 📊 Analytics (Optional)

Add Google Analytics:
1. Create Google Analytics account
2. Get tracking ID
3. Add to your site

## 🎉 You're Live!

Your portfolio is now live and accessible worldwide! Share your URL:

**https://YOUR_USERNAME.github.io/portfolio**

## 📞 Need Help?

If you encounter issues:
1. Check the GitHub Actions logs
2. Review this guide
3. Search GitHub Issues
4. Contact support

---

**Congratulations! Your portfolio is now live! 🚀**
\`\`\`

Let's also create a simple README for your repository:
