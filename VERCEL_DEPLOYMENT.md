# 🚀 Vercel Deployment Guide

## Prerequisites
- GitHub account with your repository pushed
- Vercel account (free at vercel.com)
- Node.js installed locally

---

## Step 1: Create Vercel Account (If You Don't Have One)
1. Go to **https://vercel.com**
2. Click **Sign Up**
3. Choose **Sign up with GitHub** (easiest)
4. Authorize Vercel to access your GitHub account

---

## Step 2: Connect Your GitHub Repository to Vercel

1. Navigate to **https://vercel.com/dashboard**
2. Click **Add New Project**
3. Select **Import Git Repository**
4. Search for `Stock_Trading_APP_` or your repo name
5. Click **Import**

---

## Step 3: Configure Project Settings

### Root Directory
- Leave as `.` (root)

### Framework Preset
- Select **Other** (we have a custom setup)

### Build & Output Settings
- **Build Command**: `cd backend && npm install && cd ../frontend && npm install && npm run build`
- **Output Directory**: `frontend/build`
- **Install Command**: (leave default)

### Environment Variables
Click **Environment Variables** and add:

| Key | Value | Notes |
|-----|-------|-------|
| `JWT_SECRET` | `your-super-secret-key-change-this` | Change to something secure |
| `MONGO_URI` | (leave empty) | Uses mock data |

---

## Step 4: Deploy

1. Click **Deploy**
2. Wait 2-5 minutes for deployment to complete
3. You'll see **Congratulations!** when done

---

## Step 5: Get Your Vercel Domain

After deployment:
1. Go to your project dashboard
2. Look for **Production** domain (e.g., `stock-trading-app.vercel.app`)
3. Copy the full URL

---

## Step 6: Update Frontend API URL

1. Go back to Vercel dashboard
2. Click **Settings** → **Environment Variables**
3. Update `REACT_APP_API_URL`:
   ```
   https://your-vercel-domain.vercel.app/api
   ```
4. Go to **Deployments** tab
5. Click the latest deployment
6. Click **Redeploy** (top right)

---

## Step 7: Test Your App

1. Visit your Vercel domain: `https://your-vercel-domain.vercel.app`
2. You should see the **Login** page
3. Click **Register**
4. Create a test account
5. Buy/sell stocks to test functionality

---

## Troubleshooting

### Issue: "Cannot find module" errors
**Solution**: Check that all files in `backend/` are included in git (run `git add .` and `git commit`)

### Issue: API requests failing (404)
**Solution**: Ensure `REACT_APP_API_URL` is correctly set to your Vercel domain

### Issue: "Build failed" error
**Solution**: Check the build logs in Vercel dashboard and ensure:
- `backend/package.json` has all dependencies
- `frontend/package.json` has all dependencies
- No syntax errors in code

### Issue: Backend endpoints returning errors
**Solution**: 
- Check environment variables are set correctly
- Verify all route files exist in `backend/routes/`
- Check that models are properly imported

---

## Commands for Local Testing Before Deployment

```bash
# Test locally first
cd backend
npm install

cd ../frontend
npm install
npm run build

# Then commit and push to GitHub
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

---

## Next Steps

✅ Frontend (React) - Deployed on Vercel  
✅ Backend (Express API) - Deployed on Vercel serverless  
✅ Database - Using mock data (no MongoDB needed)

**Your app is now live on the internet!** 🎉

---

## Optional: Database (MongoDB)

If you want to use a real database later:
1. Create account at **https://www.mongodb.com/atlas**
2. Create a free cluster
3. Get connection string
4. Add `MONGO_URI` to Vercel environment variables
5. Redeploy

---

## Support

For more Vercel help: https://vercel.com/docs
For React deployment: https://vercel.com/docs/frameworks/next-js
