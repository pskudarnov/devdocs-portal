---
name: DevDocs Premium
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#4cd7f6'
  on-tertiary: '#003640'
  tertiary-container: '#009eb9'
  on-tertiary-container: '#002f38'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-xl:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-base:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  code-snippet:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 4rem
  container-max: 1280px
  gutter: 1.5rem
---

## Brand & Style

The brand personality is rooted in **Precision, Intellectual Flow, and Technical Sophistication**. It is designed for developers who view code as craft and documentation as an essential tool rather than a chore. The design system evokes a "Command Center" feel—highly functional yet aesthetically cinematic.

The visual style is a hybrid of **Modern Minimalism** and **Glassmorphism**. It utilizes a "dark-first" philosophy where depth is not created by traditional shadows alone, but through layered translucency, subtle border highlights, and "atmospheric lighting" that guides the eye toward critical information. The interface feels lightweight and fast, mirroring the performance of the tools developers use daily.

## Colors

The palette is anchored in a deep navy-black foundation to provide maximum contrast for typography. 

- **Foundation:** Primary backgrounds use a near-black charcoal (#020617) to provide maximum contrast for typography.
- **Accents:** Electric Blue serves as the primary action color, while Violet and Cyan provide secondary categorization and syntax highlighting.
- **Utility:** Success, Warning, and Error states follow standard semantic conventions but are adjusted for high vibrancy against dark backgrounds to remain accessible.
- **Syntax:** Code blocks utilize a custom palette inspired by high-end editors, ensuring variable names, strings, and functions are instantly distinguishable.

## Typography

This design system uses **Geist** for its technical, Swiss-inspired clarity and neutral character. It provides a strong vertical rhythm essential for reading long-form documentation.

- **Scale:** Large display sizes use tight letter-spacing and heavy weights for a modern SaaS aesthetic.
- **Hierarchy:** High-contrast white is reserved for headings and primary content. Secondary information uses soft grays to establish a clear content priority.
- **Monospace:** JetBrains Mono is utilized for all code blocks and inline technical terms to ensure distinct visual separation from prose.

## Layout & Spacing

The layout employs a **Fixed Grid** model for documentation pages to ensure optimal line lengths for readability, while the landing pages utilize a **12-column fluid grid**.

- **Rhythm:** A 4px geometric scale governs all margins and padding, ensuring mathematical harmony across components.
- **Safe Areas:** Documentation sidebars are fixed at 280px, while the main content area maintains a maximum width of 800px to prevent "eye-scanning fatigue."
- **Responsive Behavior:** On mobile, margins shrink to 16px, and multi-column grids collapse into a single vertical stack. Desktop views utilize a "Master-Detail" pattern with persistent navigation.

## Elevation & Depth

Depth in this design system is achieved through **Glassmorphism and Tonal Layering** rather than heavy drop shadows.

- **Subtle Borders:** Surfaces are defined by 1px translucent borders (`#334155/20`). A "top-light" highlight (a lighter 1px line at the top edge) simulates a physical light source.
- **Backdrop Blurs:** Secondary surfaces (modals, navigation bars) use a 12px-20px backdrop blur to maintain context of the layer beneath while ensuring legibility.
- **Cinematic Lighting:** Use subtle radial gradients in the background (e.g., a faint Electric Blue glow behind a primary card) to create a sense of focus and premium quality.
- **Shadows:** When used, shadows are multi-layered and diffused (60px-80px spread) with very low opacity (10-15%) to avoid a "muddy" appearance.

## Shapes

The shape language balances **Technical Precision and Modern Softness**.

- **Standard Elements:** Buttons, input fields, and tags use a `rounded` (8px) radius.
- **Containers:** Large cards, code blocks, and feature sections use a `rounded-lg` (12px) radius to soften the overall technical density of the UI.
- **Interactive States:** Focus states should use a 2px offset ring to maintain the integrity of the component's shape while providing high visibility.

## Components

### Buttons
- **Primary:** Solid Electric Blue with a subtle inner-glow at the top. White text for maximum legibility.
- **Secondary:** Ghost style with a translucent white border that brightens on hover.
- **Icon Buttons:** Circular or square with 8px radius, used for secondary actions like "Copy Code."

### Cards
- **Architecture:** `Background Secondary` fill with a `Tertiary` 1px border.
- **Interactivity:** On hover, the border color shifts to the Primary Accent, and a faint glow appears behind the card.

### Code Blocks
- **Styling:** `Background Tertiary` with syntax highlighting. Includes a header bar with the language label and a \"Copy\" utility.
- **Typography:** Uses JetBrains Mono at 14px with generous line height (1.6) for readability.

### Inputs & Search
- **Search Bar:** Large, rounded-lg input with a glassmorphism blur. Includes a `CMD+K` shortcut indicator in the right-aligned label style.
- **Status Chips:** Small, pill-shaped labels for \"Beginner,\" \"API,\" or \"New\" with low-opacity background tints matching the semantic accent colors.

### Navigation
- **Sidebar:** Minimalist, using `text-muted` for inactive links and `text-high-contrast` with a left-aligned blue border marker for active states.
