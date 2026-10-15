# Add your images here

Put these files **directly in this `public` folder** (same folder as this file). The site will load them automatically.

## Logos (optional)
- **logo.png** – Header logo (black on white). If missing, the site shows "Eagle Eye Chauffeur" text.
- **logo-splash.png** – Opening splash logo (white on black). If missing, the site shows text on the splash.

## Fleet (optional)
If these are missing, placeholder images are used. Use **exact** names:
- **fleet-business-sedan.png** – Volvo (Business Class Sedan)
- **fleet-business-suv.png** – Suburban (Business Class SUV)
- **fleet-first-suv.png** – Escalade (First Class SUV)
- **fleet-first-sedan.png** – Mercedes S-Class (First Class Sedan)

**Important:** File names are case-sensitive on the live server (Vercel). Use lowercase and the exact spelling above.

## If Windows saved names like `photo.png.PNG` or `hero.jpg.jpg`

Rename once in File Explorer (or the code in `app/page.tsx` / `app/fleet/page.tsx` / `SplashScreen.tsx` is updated to match those exact names). For clean names, use:

- `hero.jpg` (not `hero.jpg.jpg`)
- `logo-splash.png` (not `logo-splash.png.PNG`)
- `fleet-business-sedan.png` (not `.png.PNG`)

After renaming, update the paths in the code back to the short names (search for `.png.PNG` and `hero.jpg.jpg`).
