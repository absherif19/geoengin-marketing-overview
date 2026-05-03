---
name: "PSI UI Guidelines"
colors:
  primary: "#E0592A"
  primary-alt: "#E65F2A"
  deep-navy: "#2C2D65"
  subtext: "#848A92"
  stroke: "#E7EAE9"
  badge-bg: "#FFF7EC"
  surface: "#F5F7F9"
  white: "#FFFFFF"
  text-main: "#111827"
  text-secondary: "#4B5563"
  error-bg: "#FEF3F2"
  error-text: "#DB3B26"
  success-bg: "#DFF6EB"
  success-text: "#079455"
typography:
  display-h1:
    fontFamily: "Lato"
    fontSize: "36px"
    fontWeight: 700
  h2:
    fontFamily: "Lato"
    fontSize: "30px"
    fontWeight: 700
  h3:
    fontFamily: "Lato"
    fontSize: "24px"
    fontWeight: 600
  h4:
    fontFamily: "Lato"
    fontSize: "20px"
    fontWeight: 700
  h5:
    fontFamily: "Lato"
    fontSize: "18px"
    fontWeight: 700
  h6:
    fontFamily: "Lato"
    fontSize: "18px"
    fontWeight: 600
  base-uppercase:
    fontFamily: "Lato"
    fontSize: "16px"
    fontWeight: 700
  base-bold:
    fontFamily: "Lato"
    fontSize: "16px"
    fontWeight: 700
  base-semibold:
    fontFamily: "Lato"
    fontSize: "16px"
    fontWeight: 600
  base-medium:
    fontFamily: "Lato"
    fontSize: "16px"
    fontWeight: 500
  base-normal:
    fontFamily: "Lato"
    fontSize: "16px"
    fontWeight: 400
  small-uppercase:
    fontFamily: "Lato"
    fontSize: "14px"
    fontWeight: 600
  small-semibold:
    fontFamily: "Lato"
    fontSize: "14px"
    fontWeight: 600
  small-medium:
    fontFamily: "Lato"
    fontSize: "14px"
    fontWeight: 500
assets:
  logo-light: "https://res.cloudinary.com/dfejvtpzr/image/upload/v1777294008/Psi_Logo_blue_hujns2.svg"
  logo-dark: "https://res.cloudinary.com/dfejvtpzr/image/upload/v1777357090/Psi_Logo_2_q6z26c.svg"
rounded:
  sm: "8px"
  md: "12px"
spacing:
  base: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  xxxl: "64px"
  huge: "96px"
  xhuge: "128px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  form-input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.subtext}"
    rounded: "{rounded.sm}"
    padding: "16px 12px"
---

## Overview
This specification describes the visual identity for Odoo Internal Modules. It ensures AI agents strictly follow a clean, structured, and consistent UI style mapping directly to Odoo's frontend constraints while enforcing the brand's exact design tokens.

### Assets
- **Light Logo:** Used on white or light backgrounds. [URL]({assets.logo-light})
- **Dark Logo:** Used on dark backgrounds or in Dark Mode. [URL]({assets.logo-dark})

## Colors
The palette utilizes sharp accents, deep titles, and comprehensive feedback and structural grays.
- **Primary (#E0592A):** Core brand color for primary buttons and identity-related accents.
- **Primary Alt / Link (#E65F2A):** Used specifically for links and mandatory asterisks.
- **Deep Navy (#2C2D65):** Used for titles and major headings.
- **Subtext / Disabled (#848A92):** Used for secondary text, disabled states, and form placeholders.
- **Strokes / Dividers (#E7EAE9):** Defines borders, line separators, and component boundaries.
- **Badge Fill (#FFF7EC):** A soft background tint used for badges and light background elements.
- **Surface / BG (#F5F7F9):** Background for the app, table headers, and set backgrounds.
- **Pure White (#FFFFFF):** Used for cards, form inputs, and elevated backgrounds.
- **Error (#DB3B26 / #FEF3F2):** Text/Icon and Background for destructive or error states.
- **Success (#079455 / #DFF6EB):** Text/Icon and Background for positive feedback.

## Typography
The system exclusively uses the **Lato** font family, sourced from **Google Fonts** (`https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap`).
- **Display / H1:** 36px, Bold (700).
- **Heading 2:** 30px, Bold (700).
- **Heading 3:** 24px, Semibold (600).
- **Heading 4:** 20px, Bold (700).
- **Heading 5:** 18px, Bold (700).
- **Heading 6:** 18px, Semibold (600).
- **Base (Uppercase, Bold, Semibold, Medium, Normal):** 16px, varying weights.
- **Small (Uppercase, Semibold, Medium):** 14px, varying weights.

## Layout
The layout grid and spacing strictly follow a base **8px** unit system. 
Available tokens: `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`, `128px`.

## Elevation & Depth
Two primary levels of depth define layers and pop-overs using CSS box-shadow.
- **Base Elevation (Cards):** `0 4px 20px 0 rgba(0, 0, 0, 0.03)`
- **Hover/Pop-over Elevation:** `0 4px 6px -1px rgba(0, 0, 0, 0.05)`

## Shapes
Corner radius is standardized to ensure a modern but structured Odoo UI:
- **Small (8px):** Buttons, Inputs, Form Elements, Badges.
- **Medium (12px):** Cards and main container blocks.

## Components

### Buttons
- **Primary:** Background `{colors.primary}`, Text `#FFFFFF`, Radius 8px, Padding `20px 10px`, Font 14px Medium (line-height 24px).
- **Secondary:** Background `#FFFFFF`, Border 1px solid `{colors.stroke}`, Text `#4B5563`, Radius 8px, Padding `20px 10px`, Font 14px Medium (line-height 24px).
- **Tertiary:** Transparent Background, No Border, Text `#4B5563`, Font 14px Medium (line-height 24px).
- **Link:** No Background, Text `{colors.primary-alt}`, Font 14px Semibold (line-height auto).

### Form Elements
- **Input Background:** `{colors.white}`
- **Border:** 1px solid `{colors.stroke}`
- **Border Radius:** 8px
- **Padding:** 16px 12px
- **Text:** `{colors.subtext}` (16px Regular)
- **Mandatory State:** Asterisk (`*`) rendered in `{colors.primary-alt}`.

### Cards
- **Background:** `{colors.white}`
- **Radius:** 12px
- **Shadow:** Use Base Elevation shadow `0 4px 20px 0 rgba(0, 0, 0, 0.03)`.

## Do's and Don'ts
- **Do** map token usage explicitly. AI should pull `{colors.primary}` directly.
- **Do** rely on the defined 8px system for all spacing needs.
- **Do** import Lato via Google Fonts in the CSS/HTML head.
- **Don't** invent new colors or fallback to generic Tailwind palettes (e.g., no `blue-500`).
