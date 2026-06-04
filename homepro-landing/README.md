# HomePro — Landing Page V1 Desktop

Pixel-perfect HTML/CSS implementation of the **Landing-Page-V1__Desktop** Figma design.

## Files

```
homepro-landing/
├── index.html   — full page markup (9 sections)
├── style.css    — all styles, exact Figma tokens
├── main.js      — FAQ accordion + review carousel
└── README.md
```

## Sections

| # | Section | Background |
|---|---------|------------|
| 1 | Hero + Navbar | Dark Navy `#1B1F3B` |
| 2 | Professional for your home services | Pink `#F9E8E8` |
| 3 | Our Services (8-card grid) | Pink |
| 4 | Fast, Friendly & Satisfaction Guarantee | Dark Navy |
| 5 | How HomePro works? | Pink |
| 6 | Reviews / Trustpilot carousel | Pink |
| 7 | Explore Insights in Our Blog | Pink |
| 8 | FAQ accordion | Pink |
| 9 | Final CTA + Footer (cyan `#15B2F5`) | Navy → Cyan |

## Design Tokens

| Token | Value |
|-------|-------|
| Navy bg | `#1B1F3B` |
| Cyan / Brand | `#15B2F5` |
| Pink bg | `#F9E8E8` |
| Font | Plus Jakarta Sans |

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "feat: HomePro landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/homepro-landing.git
git push -u origin main
```

Go to **Settings → Pages → Branch: main / root** → Save.

Your site will be live at `https://YOUR_USERNAME.github.io/homepro-landing/`
