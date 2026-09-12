# Chaudhary Fitness House

A premium, responsive static website in charcoal, ivory, and muted gold. Built with HTML, CSS, and lightweight JavaScript. No dependencies or API keys required.

## Local development

```sh
npm run dev
```

Open http://localhost:5173. Run `npm run build` to generate `dist/`; `npm run preview` serves that production directory.

## Deploy to Netlify

1. Push this folder to a Git repository and import it into Netlify, or run `npm run build` and upload the `dist` folder using Netlify’s manual deployment.
2. For repository deployments, `netlify.toml` configures the build command `npm run build` and publish directory `dist`.
3. Enable **form detection** in the Netlify project’s **Forms** settings and deploy/redeploy. The HTML form is named `membership-enquiry`, includes a honeypot, and redirects to `/thank-you.html` after successful submission.
4. Configure form submission email notifications in Netlify to an address managed by the gym. No email address was supplied, so none is hardcoded.
5. Submit a real test enquiry on the deployed site and check its arrival in Netlify Forms. Local previews deliberately display a notice instead of claiming to send an enquiry.

Netlify reference: https://docs.netlify.com/manage/forms/setup/

## Verified content and photography

The user supplied the gym name, owner **Mohd Ahmad**, and trainer **Muzammil**. The gym’s public Instagram profile, inspected on September 12, 2026, lists **Semariyawan** and **8948712324**. These details are included on the site. No pricing, full street address, opening hours, qualifications, testimonials, founding date, or membership counts were invented.

Source: https://www.instagram.com/chaudharyfitnesshouse/

Google Maps location supplied by the user: https://maps.app.goo.gl/sHrpRWgcK8YiXVgt5. Linked from the contact section and visiting FAQ, and included as `hasMap` in the gym’s structured data.

The following images were downloaded from the supplied public profile with the user’s permission and are served locally to avoid expiring CDN links:

- `gym-floor.jpg`: https://www.instagram.com/chaudharyfitnesshouse/reel/DUn0mC0D9pC/
- `training.jpg`: https://www.instagram.com/chaudharyfitnesshouse/reel/DUtH6zEj6Ls/
- `community.jpg`: https://www.instagram.com/chaudharyfitnesshouse/reel/DUn2Tkrj6ng/
- `strength.jpg`: https://www.instagram.com/chaudharyfitnesshouse/reel/DbQZk5gvFAc/
- `mohd-ahmad.jpg`: profile photo from the gym account, whose display name is Mohd Ahmad.

The gallery is a curated snapshot, not an automatically updating Instagram feed. Images link to their original reels. Muzammil uses a designed monogram because an identified trainer portrait was not supplied.

## Updating the site

- Copy, contact details, form options, and structured data: `index.html`.
- Colors, typography, and responsive layout: `styles.css`.
- Mobile navigation, goal selection, privacy disclosure, and local form preview: `app.js`.
- English/Hindi translations and switching: `language.js`. Text marked with `data-i18n` uses its English wording as the translation key; update both the key and fallback text when changing copy, then add the corresponding Hindi translation. Attribute translations use `data-i18n-alt`, `data-i18n-placeholder`, etc.
- Photos and favicon: `assets/`.
- Once a final domain is available, add a canonical URL and make `og:image` an absolute URL for the widest social preview compatibility.
- Confirm exact address, hours, membership pricing, and enquiry retention practices with the gym when adding them.

The site uses Google Fonts with local system fallbacks. No Instagram tracking script or live embed is loaded. Visitor enquiries are processed by Netlify; the page includes a short privacy disclosure and contact consent.

## Hindi language support

The header has an **EN / हिंदी** switch. English is the default; a visitor’s selection is saved in their browser under `cfh-language` and reused on the homepage, confirmation page, and 404 page. Switching languages keeps entered form data intact. Hindi includes navigation, content, labels, options, validation messages, image descriptions, and page titles, with Devanagari fonts and adjusted responsive spacing.

Form field names and goal values remain stable in both languages for Netlify. A hidden `preferred-language` field submits `en` or `hi` so the team knows the visitor’s preference. Redeploy after enabling form detection for Netlify to register this additional field. Language switching runs in the browser without a translation service or API key. If JavaScript is disabled, the English content remains usable.
