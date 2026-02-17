# @nipsys/shadcn-lsd

A React component library implementing the Logos Design System (LSD). Built with Radix UI primitives and Tailwind CSS, following the shadcn/ui patterns.

## Installation

```bash
pnpm add @nipsys/shadcn-lsd
```

## Usage

### Import Components

```tsx
import { Dialog, DialogTrigger, DialogContent, Button } from "@nipsys/shadcn-lsd";
```

### Optional: Manual CSS Import

The CSS is automatically injected when you import components, but if you prefer to import the stylesheet explicitly, you can use:

```tsx
import '@nipsys/shadcn-lsd/css';
```

Or in CSS:

```css
@import "@nipsys/shadcn-lsd/css";
```

### Example

```tsx
import { Dialog, DialogTrigger, DialogContent, Button } from "@nipsys/shadcn-lsd";

function App() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent>
        <p>Dialog content here</p>
      </DialogContent>
    </Dialog>
  );
}

export default App;
```

### Theming

The library supports light and dark themes out of the box. Add the `dark` class to your root element to enable dark mode:

```html
<html class="dark">
  <!-- your app -->
</html>
```

### Theme Variants

A teal theme variant is also available:

```html
<html class="theme-teal">
  <!-- light teal theme -->
</html>

<html class="dark theme-teal">
  <!-- dark teal theme -->
</html>
```

### CSS Variables

The design system uses CSS custom properties that you can override:

```css
:root {
  --lsd-primary: #000000;
  --lsd-text-primary: #000000;
  --lsd-text-secondary: #808080;
  --lsd-border: #000000;
  --lsd-surface: #ffffff;
  --lsd-destructive: #b91c1c;
  --lsd-success: #15803d;
  --lsd-warning: #f59e0b;
  --lsd-info: #2563eb;
}
```

## Components

| Component | Description |
|-----------|-------------|
| Accordion | Vertically stacked collapsible sections |
| AlertDialog | Modal dialog for critical confirmations |
| Autocomplete | Input with async suggestion fetching |
| Badge | Small label for status or categorization |
| Button | Interactive button with multiple variants |
| ButtonGroup | Grouped buttons with optional separators |
| Card | Container for related content |
| Checkbox | Boolean input control |
| Command | Command palette for keyboard navigation |
| Dialog | Modal overlay for focused content |
| Input | Text input field |
| Label | Form field label |
| Menubar | Horizontal menu bar with dropdown menus |
| Popover | Floating content anchored to trigger |
| Progress | Visual indicator of completion |
| ScrollArea | Custom scrollbar container |
| Select | Dropdown selection input |
| Separator | Visual divider between sections |
| Sheet | Slide-out panel overlay |
| Sidebar | Navigation sidebar component |
| Skeleton | Loading placeholder |
| Sonner | Toast notifications |
| Switch | Toggle switch input |
| Tabs | Tabbed content navigation |
| Toggle | Two-state button |
| ToggleGroup | Group of toggle buttons |
| Tooltip | Hover information popup |
| Typography | Text styling components |

## Development
M
### Prerequisites

- Node.js >= 24.0.0
- pnpm >= 10

### Setup

```bash
# Clone the repository
git clone https://github.com/nipsysdev/shadcn-lsd.git
cd shadcn-lsd

# Install dependencies
pnpm install
```

### Scripts

```bash
# Start component playground
pnpm cosmos

# Build the library
pnpm build

# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage

# Lint code
pnpm lint

# Format code
pnpm format
```

### Component Playground

The project uses React Cosmos for component development. Run `pnpm cosmos` to start the playground at `http://localhost:5000`.

To export a static build for deployment:

```bash
pnpm cosmos-export
```

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **Radix UI** - Accessible primitives
- **Vite** - Build tooling
- **Vitest** - Testing framework
- **React Cosmos** - Component playground

## Peer Dependencies

Make sure your project has these installed:

```json
{
  "react": "^19.2.4",
  "react-dom": "^19.2.4"
}
```

## License

[GPL-3.0-or-later](LICENSE)
