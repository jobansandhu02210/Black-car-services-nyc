# Deploy Eagle Eye Chauffeur via GitHub + Vercel

## Step 1: Push to GitHub

1. Create a **new repository** on GitHub: https://github.com/new
   - Name: `eagle-eye-chauffeur` (or any name)
   - Public, no README (you already have files)

2. In your project folder, run these in terminal (if you have Git):

```bash
cd "c:\Users\robin\OneDrive\Desktop\eagle eye chauffeur"

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repo name.

---

## Step 2: Connect Vercel to GitHub

1. Go to **https://vercel.com** and sign in (use “Sign in with GitHub”)
2. Click **Add New** → **Project**
3. Find your `eagle-eye-chauffeur` repo and click **Import**
4. **Important – fix the 404:** Check these settings before deploying:

| Setting | Value | Why |
|---------|-------|-----|
| **Framework Preset** | Next.js | Should auto-detect |
| **Root Directory** | `./` (leave blank or `.`) | **Must be the folder that contains `package.json`** |
| **Build Command** | `npm run build` | Default |
| **Output Directory** | (leave default) | Vercel handles this for Next.js |
| **Install Command** | `npm install` | Default |

5. **Root Directory** – most common cause of 404:
   - If your repo root IS your project (package.json at top level): leave **Root Directory** empty or use `./`
   - If your project is in a subfolder (e.g. `eagle eye chauffeur/` inside the repo): set Root Directory to that folder name, e.g. `eagle eye chauffeur`

6. Click **Deploy**

---

## Step 3: Check the build

- In Vercel → **Deployments** → click the latest deployment
- **Build logs** should show something like: `Building...` → `Compiled successfully`
- If you see red errors, copy them and we can fix them

---

## Step 4: Visit your site

After a successful deploy, you’ll get a URL like:
`https://eagleeyechauffeur-com-xxxx.vercel.app`

---

## If you still get 404

1. **Deployments** – does the latest deployment show a green checkmark?
2. **Build logs** – does the build finish successfully?
3. **Root Directory** – in Project **Settings** → **General** → **Root Directory**:
   - For a repo where `package.json` is at the root: leave blank
   - For a repo with a subfolder that contains `package.json`: set the subfolder path
4. **Redeploy** – change Root Directory if needed, then: Deployments → ⋮ → Redeploy

---

## Step 5: Connect your custom domain

Do this **after** the site works on your `*.vercel.app` URL.

### In Vercel

1. Open your project on [vercel.com](https://vercel.com) → **Settings** → **Domains**.
2. Enter your domain (e.g. `yourdomain.com` or `www.yourdomain.com`) → **Add**.
3. Vercel will show **DNS records** you need at your registrar (usually one of these setups):

**Option A – Use Vercel DNS (simplest)**  
- At your domain registrar (GoDaddy, Namecheap, Google Domains, etc.), change **nameservers** to the ones Vercel gives you (e.g. `ns1.vercel-dns.com`).  
- Vercel then manages DNS for you.

**Option B – Keep your current DNS**  
- Add the records Vercel shows (often **A** for `@` → `76.76.21.21` and **CNAME** for `www` → `cname.vercel-dns.com`, or a single **CNAME** as instructed).  
- Exact values are on the Domains page—copy them from Vercel.

4. Wait for DNS to propagate (often **a few minutes to 48 hours**). Vercel will show **Valid** when it works.
5. Turn on **Redirect** in Vercel if you want `yourdomain.com` → `www.yourdomain.com` (or the reverse) so visitors always use one URL.

### Tell the Next.js app your domain (SEO)

1. In Vercel → your project → **Settings** → **Environment Variables**.
2. Add:
   - **Name:** `NEXT_PUBLIC_SITE_URL`  
   - **Value:** your canonical URL, e.g. `https://www.yourdomain.com` (no trailing slash)  
   - **Environments:** Production (and Preview if you want previews to use a test URL—optional).
3. **Save**, then **Deployments** → open the latest deployment → **⋯** → **Redeploy** so the new variable is included in the build.

This updates sitemap, robots.txt, Open Graph base URL, and business schema (`lib/site.ts`).

### SSL (HTTPS)

Vercel issues a free **Let’s Encrypt** certificate automatically once the domain is valid. You do not need to buy SSL separately.

### If the domain is not on Vercel yet

You must **deploy the site to Vercel first** (Steps 1–4), then add the domain in Step 5. Connecting a domain only points traffic to wherever you host the site—your code still needs to be deployed there.
