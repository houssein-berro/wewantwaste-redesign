# WeWantWaste Skip Selection Redesign


## Enhancements

### Animated Step Progress Bar
- Uses Framer Motion to stagger-animate each step icon (Postcode → Waste Type → Select Skip → …).

### Responsive Typography
- `src/utils/textUtils.ts` provides `responsiveClamp(minPx, maxPx) → clamp(minPx, vw%, maxPx)`.  
- Applied to headings so they scale fluidly between breakpoints.

### Loading Skeletons & Lazy-Loaded Images
- `SkipGridSkeleton.tsx` renders pulsing placeholders while fetching.  
- Each skip image in `SkipCard.tsx` uses `loading="lazy"` and a gray pulse until its `onLoad` fires.

### Client-Side Caching + Timeout
- `loadSkips` (in `skipsActions.ts`) checks `localStorage` first, then fetches with a 15s timeout.  
- If the API response differs from cached data, it overwrites and updates Redux.

### Pill-Style Filters (new feature; original site had none)
- “Road-legal only” and “Heavy-waste allowed” toggles above the grid filter out unwanted skips.  
- “Clear filters” resets both.



### Different styling
- Custom colors (`primary`, `accent`, `neutral`), fonts (`Rubik`, `Open Sans`), and base styles in `tailwind.config.js`.

---

## Installation & Running Locally

```bash
git clone https://github.com/houssein-berro/wewantwaste-assessment.git
cd wewantwaste-assessment
npm install       # or yarn install
npm start         # or yarn start
```
## Usage & Testing

### Animated Progress Bar
- Observe icons animate in sequence, highlighting “Select Skip.”

### Responsive Typography
- Resize the window: headings scale between their defined min/max values.

### Loading Skeletons
- On first load (or after clearing `localStorage`), see pulsing skip-card placeholders.

### Lazy Images
- Each skip image fades in from a gray placeholder once loaded.

### Filters
- Toggle “Road-legal only” and/or “Heavy-waste allowed” to filter the grid.
- Click “Clear filters” to reset them.

### Select a Skip → Footer
- Click a card to select. Footer appears with summary and Back | Continue buttons.
- Buttons stay side by side on every screen width.

### Error & Retry
- Temporarily break the API URL to trigger an error state and display a “Retry” button.

