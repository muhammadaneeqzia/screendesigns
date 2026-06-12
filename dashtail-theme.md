# DashTail Theme Documentation

> **DashTail** is a developer-friendly admin dashboard template built with **Next.js** and **Tailwind CSS**.  
> Source: https://dash-tail.vercel.app/en

---

## Table of Contents

1. [Brand Identity](#1-brand-identity)
2. [Color Palette](#2-color-palette)
3. [Typography](#3-typography)
4. [Spacing & Layout](#4-spacing--layout)
5. [Border Radius](#5-border-radius)
6. [Shadows](#6-shadows)
7. [Breakpoints](#7-breakpoints)
8. [Component Tokens](#8-component-tokens)
9. [Chart Colors](#9-chart-colors)
10. [CSS Custom Properties](#10-css-custom-properties)
11. [Dark Mode](#11-dark-mode)

---

## 1. Brand Identity

| Property | Value |
|---|---|
| Template Name | DashTail |
| Framework | Next.js + Tailwind CSS |
| Primary Font | Inter |
| Primary Color | `#846CF9` (Violet/Purple) |
| Background | `#EEF1F9` (Light Blue-Gray) |

---

## 2. Color Palette

### Primary (Violet/Purple Scale)

| Token | Hex | Usage |
|---|---|---|
| `primary-50` | `#F5F5FF` | Lightest tint, foreground on dark primary |
| `primary-100` | `#E8E7FE` | Subtle background highlights |
| `primary-200` | `#D8D6FF` | Hover states, light accents |
| `primary-300` | `#B9B4FE` | Disabled states |
| `primary-400` | `#9588FC` | Lighter interactive elements |
| `primary-500` | `#846CF9` | **Base / Default primary** |
| `primary-600` | `#6338F0` | Hover on primary |
| `primary-700` | `#5224DB` | Active/pressed primary |
| `primary-800` | `#451FB7` | Deep primary, ring color |
| `primary-900` | `#3A1B98` | Darkest primary |
| `primary-950` | `#3A1B98` | Ultra-dark primary |

### Semantic Colors

| Token | Hex | Usage |
|---|---|---|
| `success` | `#22C55E` | Positive trends, completed states |
| `success-foreground` | `#F0FDF4` | Text on success backgrounds |
| `warning` | `#F97316` | Warnings, orange accent |
| `warning-foreground` | `#FFF7ED` | Text on warning backgrounds |
| `destructive` | `#EF4444` | Errors, negative trends, danger |
| `destructive-foreground` | `hsl(0 85.7% 97.3%)` | Text on destructive backgrounds |
| `info` | `#06B6D4` | Informational, cyan accent |
| `info-foreground` | `#ECFEFF` | Text on info backgrounds |

### Neutral / UI Colors

| Token | Hex | Usage |
|---|---|---|
| `background` | `#FFFFFF` | Page/component backgrounds |
| `foreground` | `#020817` | Primary text color |
| `card` | `#FFFFFF` | Card surface |
| `card-foreground` | `#020817` | Text inside cards |
| `popover` | `#FFFFFF` | Popover/dropdown surface |
| `popover-foreground` | `#020817` | Text in popovers |
| `muted` | `#F3F4F6` | Muted/disabled backgrounds |
| `muted-foreground` | `#64748B` | Secondary/muted text |
| `accent` | `#E2E8F0` | Subtle accent/hover backgrounds |
| `accent-foreground` | `#0F172A` | Text on accent backgrounds |
| `secondary` | `#E2E8F0` | Secondary elements |
| `secondary-foreground` | `#0F172A` | Text on secondary |
| `border` | `#E2E8F0` | Borders and dividers |
| `input` | `#E2E8F0` | Input borders |
| `ring` | `#7C3AED` | Focus ring color |

### Page-Level Colors

| Element | Color |
|---|---|
| Body background | `rgb(238, 241, 249)` / `#EEF1F9` |
| Sidebar background | `#FFFFFF` |
| Active sidebar item background | `#846CF9` |
| Active sidebar item text | `#F5F5FF` |
| Header height | `65px` |

---

## 3. Typography

### Font Families

| Role | Family |
|---|---|
| Sans-serif (primary) | `Inter`, ui-sans-serif, system-ui, sans-serif |
| Monospace | `ui-monospace`, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace |

### Font Weights

| Token | Value |
|---|---|
| `font-weight-light` | `300` |
| `font-weight-normal` | `400` |
| `font-weight-medium` | `500` |
| `font-weight-semibold` | `600` |
| `font-weight-bold` | `700` |

### Type Scale

| Element | Font Size | Line Height | Font Weight | Color |
|---|---|---|---|---|
| Body | `14px` | `20px` | 400 | `#020817` |
| Paragraph (small) | `12px` | `16px` | 500 | `#64748B` |
| H2 | `18px` | `28px` | 600 | `#334155` |
| H3 | `18px` | `28px` | 600 | `#0F172A` |

### Text Color Scale

| Usage | Color |
|---|---|
| Primary text | `rgb(2, 8, 23)` / `#020817` |
| Heading dark | `rgb(15, 23, 42)` / `#0F172A` |
| Heading medium | `rgb(30, 41, 59)` / `#1E293B` |
| Subheading | `rgb(51, 65, 85)` / `#334155` |
| Body / secondary | `rgb(71, 85, 105)` / `#475569` |
| Muted / caption | `rgb(100, 116, 139)` / `#64748B` |
| Primary accent | `rgb(132, 108, 249)` / `#846CF9` |
| Success | `rgb(34, 197, 94)` / `#22C55E` |
| Destructive | `rgb(239, 68, 68)` / `#EF4444` |

---

## 4. Spacing & Layout

| Property | Value |
|---|---|
| Base spacing unit | `0.25rem` (4px) |
| Sidebar collapsed width | `72px` (icon-only bar) |
| Sidebar expanded width | `248px` |
| Header height | `65px` |
| Card padding | `12px 24px` |
| Button padding (default) | `10px 16px` |

---

## 5. Border Radius

| Token | Value | Usage |
|---|---|---|
| `radius` (base) | `0.5rem` / `8px` | Default — inputs, selects, dropdowns |
| `radius-xl` | `0.75rem` / `12px` | Medium components |
| `radius-2xl` | `1rem` / `16px` | Cards, modals |
| `radius-3xl` | `1.5rem` / `24px` | Larger pill-style elements |
| Rounded-full (pill) | `9999px` | Badges, avatars, toggle switches |
| Card (computed) | `6px` | Rendered card border radius |

---

## 6. Shadows

| Token | Value | Usage |
|---|---|---|
| `shadow-sm` (card) | `rgba(15, 22, 36, 0.06) 0px 1px 2px, rgba(15, 22, 36, 0.10) 0px 1px 3px` | Cards, panels |

---

## 7. Breakpoints

| Name | Value | Direction |
|---|---|---|
| sm | `48rem` / `768px` | min-width |
| md | `64rem` / `1024px` | min-width |
| xl | `1280px` | min-width |
| Mobile cutoff | `768px` | max-width |
| Tablet cutoff | `981px` | max-width |
| Small screen | `600px` | max-width |

---

## 8. Component Tokens

### Buttons

| Variant | Background | Text | Border Radius |
|---|---|---|---|
| Primary | `#846CF9` | `#F5F5FF` | `8px` |
| Secondary | `#E2E8F0` | `#64748B` | `9999px` (pill) |
| Outline/Ghost | `#FFFFFF` | `#475569` | `6px` |
| Stat card (purple) | `rgba(132,108,249, 0.5)` | `#020817` | `4px` |
| Stat card (orange) | `rgba(249,115,22, 0.3)` | `#64748B` | `4px` |
| Stat card (green) | `rgba(34,197,94, 0.3)` | `#64748B` | `4px` |
| Stat card (cyan) | `rgba(6,182,212, 0.3)` | `#64748B` | `4px` |

### Sidebar

| Property | Value |
|---|---|
| Background | `#FFFFFF` |
| Active item background | `#846CF9` |
| Active item text | `#F5F5FF` |
| Inactive item text | `#475569` |
| Icon bar width | `72px` |
| Expanded width | `248px` |
| Border | `#E2E8F0` |

### Cards

| Property | Value |
|---|---|
| Background | `#FFFFFF` |
| Text | `#020817` |
| Border radius | `6px` |
| Shadow | `rgba(15,22,36,0.06) 0 1px 2px, rgba(15,22,36,0.10) 0 1px 3px` |
| Padding | `12px 24px` |

### Inputs

| Property | Value |
|---|---|
| Border color | `#E2E8F0` |
| Background | `#FFFFFF` |
| Text | `#020817` |
| Focus ring | `#7C3AED` |
| Border radius | `8px` |

---

## 9. Chart Colors

| Name | Hex | Usage |
|---|---|---|
| Chart Purple | `#846CF9` | Primary data series, line chart |
| Chart Blue | `#3B82F6` | Secondary data series |
| Chart Orange | `#F97316` | Tertiary / warning data |
| Chart Red | `#EF4444` | Negative / danger data |
| Chart Cyan/Teal | `#06B6D4` | New users, info series |
| Chart Green | `#22C55E` | Positive / success data |
| Chart Peach | `rgba(255,158,105,1)` | Soft accent series |
| Chart Light Peach | `rgba(255,209,167,1)` | Soft secondary |

### Gradient (Area Chart Fill)

| Stop | Color |
|---|---|
| 0% (top) | `hsl(250, 92%, 70%)` ≈ `#846CF9` |
| 100% (bottom) | `rgba(0,0,0,0)` (transparent) |

---

## 10. CSS Custom Properties

Full list of CSS custom properties defined on `:root`:

```css
:root {
  /* Primary color scale */
  --primary:            #846CF9;
  --primary-50:         #F5F5FF;
  --primary-100:        #E8E7FE;
  --primary-200:        #D8D6FF;
  --primary-300:        #B9B4FE;
  --primary-400:        #9588FC;
  --primary-500:        #846CF9;
  --primary-600:        #6338F0;
  --primary-700:        #5224DB;
  --primary-800:        #451FB7;
  --primary-900:        #3A1B98;
  --primary-950:        #3A1B98;
  --primary-foreground: #F5F5FF;

  /* Neutral / Surface */
  --background:          #FFFFFF;
  --foreground:          #020817;
  --card:                #FFFFFF;
  --card-foreground:     #020817;
  --popover:             #FFFFFF;
  --popover-foreground:  #020817;
  --muted:               #F3F4F6;
  --muted-foreground:    #64748B;
  --accent:              #E2E8F0;
  --accent-foreground:   #0F172A;
  --secondary:           #E2E8F0;
  --secondary-foreground:#0F172A;
  --border:              #E2E8F0;
  --input:               #E2E8F0;
  --ring:                #7C3AED;

  /* Semantic */
  --success:              #22C55E;
  --success-foreground:   #F0FDF4;
  --warning:              #F97316;
  --warning-foreground:   #FFF7ED;
  --destructive:          #EF4444;
  --destructive-foreground: hsl(0 85.7% 97.3%);
  --info:                 #06B6D4;
  --info-foreground:      #ECFEFF;

  /* Border Radius */
  --radius:     0.5rem;   /* 8px  */
  --radius-xl:  0.75rem;  /* 12px */
  --radius-2xl: 1rem;     /* 16px */
  --radius-3xl: 1.5rem;   /* 24px */

  /* Spacing */
  --spacing: 0.25rem; /* 4px base unit */

  /* Typography */
  --font-sans: Inter, ui-sans-serif, system-ui, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-weight-light:    300;
  --font-weight-normal:   400;
  --font-weight-medium:   500;
  --font-weight-semibold: 600;
  --font-weight-bold:     700;
}
```

---

## 11. Dark Mode

DashTail supports dark mode via a `.dark` class toggle on the `<html>` element.  
The theme toggle button is located in the top navigation bar.

In dark mode, the following tokens are typically inverted:

| Token | Light | Dark (approximate) |
|---|---|---|
| `--background` | `#FFFFFF` | `#0F172A` |
| `--foreground` | `#020817` | `#F8FAFC` |
| `--card` | `#FFFFFF` | `#1E293B` |
| `--muted` | `#F3F4F6` | `#1E293B` |
| `--border` | `#E2E8F0` | `#334155` |
| `--muted-foreground` | `#64748B` | `#94A3B8` |

> Dark mode token values are approximate — actual dark theme values depend on which dark mode CSS variables are overridden in the `dark:` variant of Tailwind.

---

*Generated from: https://dash-tail.vercel.app/en — DashTail Next.js Admin Template*
