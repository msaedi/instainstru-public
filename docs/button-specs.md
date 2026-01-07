## Premium Glass Button Specification

### Tailwind Classes

- Padding: `px-6 py-3` (base), `sm:px-8 sm:py-4` (sm+)
- Border radius: `rounded-full`
- Border: `border border-gray-200/50` (light), `dark:border-gray-700/50`
- Background: `bg-white/70` (light), `dark:bg-gray-800/70`
- Shadow: `shadow-lg shadow-black/5` (light), `dark:shadow-black/20`
- Text: `text-base font-semibold text-gray-700` (light), `dark:text-white`, `sm:text-lg` (sm+)
- Hover effects: `hover:bg-white/90 dark:hover:bg-gray-700/90`, `hover:shadow-xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/20`, `hover:border-purple-300/50 dark:hover:border-purple-500/50`
- Backdrop blur: `backdrop-blur-md`
- Transition: `transition-all duration-300`

### CSS Custom Properties (if any)

- `backdrop-filter: blur(12px)` from `backdrop-blur-md`

### Color Values (exact hex/rgba)

- Background (light): `rgba(255, 255, 255, 0.7)` from `bg-white/70`
- Background (dark): `rgba(31, 41, 55, 0.7)` from `bg-gray-800/70` (`#1F2937`)
- Border (light): `rgba(229, 231, 235, 0.5)` from `border-gray-200/50` (`#E5E7EB`)
- Border (dark): `rgba(55, 65, 81, 0.5)` from `dark:border-gray-700/50` (`#374151`)
- Text (light): `#374151` from `text-gray-700`
- Text (dark): `#FFFFFF`
- Shadow (light): `rgba(0, 0, 0, 0.05)` from `shadow-black/5`
- Shadow (dark): `rgba(0, 0, 0, 0.2)` from `dark:shadow-black/20`
- Hover state changes:
  - Background (light): `rgba(255, 255, 255, 0.9)` from `hover:bg-white/90`
  - Background (dark): `rgba(55, 65, 81, 0.9)` from `dark:hover:bg-gray-700/90` (`#374151`)
  - Border (light): `rgba(216, 180, 254, 0.5)` from `hover:border-purple-300/50` (`#D8B4FE`)
  - Border (dark): `rgba(168, 85, 247, 0.5)` from `dark:hover:border-purple-500/50` (`#A855F7`)
  - Shadow (light): `rgba(168, 85, 247, 0.1)` from `hover:shadow-purple-500/10`
  - Shadow (dark): `rgba(168, 85, 247, 0.2)` from `dark:hover:shadow-purple-500/20`

### Responsive Variants

- Mobile (base): `px-6 py-3 text-base`
- Desktop (sm+): `sm:px-8 sm:py-4 sm:text-lg`
