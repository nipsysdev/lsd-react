# @nipsys/shadcn-lsd

A React component library implementing the Logos Design System (LSD) using shadcn / Radix UI and Tailwind CSS.

## Overview

@nipsys/shadcn-lsd follows a minimalist design system. The library offers a comprehensive set of UI components with built-in light and dark theme support.

## Installation

```bash
npm install @nipsys/shadcn-lsd
# or
pnpm add @nipsys/shadcn-lsd
```

## Quick Start

```tsx
import { Button, Input, Card } from '@nipsys/shadcn-lsd';
import '@nipsys/shadcn-lsd/css';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Card className="p-6">
        <h1 className="text-2xl mb-4">Welcome to LSD React</h1>
        <Input placeholder="Enter your name" className="mb-4" />
        <Button>Submit</Button>
      </Card>
    </div>
  );
}
```

## Theming

LSD React uses CSS custom properties for theming. The theme can be switched by adding/removing the `.dark` class on the root element (or any container).

### Light Theme (Default)

```css
:root {
  --lsd-text: 0 0 0;           /* Black */
  --lsd-border: 0 0 0;         /* Black */
  --lsd-surface-primary: 255 255 255; /* White */
  --lsd-surface-secondary: 255 255 255; /* White */
}
```

### Dark Theme

```css
.dark {
  --lsd-text: 255 255 255;     /* White */
  --lsd-border: 255 255 255;   /* White */
  --lsd-surface-primary: 0 0 0;     /* Black */
  --lsd-surface-secondary: 0 0 0;     /* Black */
}
```

## Components

LSD React provides a comprehensive set of UI components:

### Form Components
- **Input**: Text input with size variants
- **Autocomplete**: Searchable dropdown with async support
- **Select**: Native select with custom styling
- **Checkbox**: Accessible checkbox component
- **Switch**: Toggle switch component
- **Label**: Form label with variants

### Navigation Components
- **Tabs**: Tabbed interface with size variants
- **Sidebar**: Collapsible sidebar with submenus
- **Breadcrumb**: Navigation breadcrumb (coming soon)

### Layout Components
- **Card**: Container with header, content, and footer
- **Sheet**: Slide-out panel component
- **Separator**: Visual divider
- **ScrollArea**: Custom scrollable area

### Data Display Components
- **Badge**: Status and label badges
- **Typography**: Text components with variants
- **Skeleton**: Loading placeholder
- **Progress**: Progress bar with indeterminate state

### Feedback Components
- **Dialog**: Modal dialog component
- **AlertDialog**: Confirmation dialog
- **Popover**: Popup content component
- **Tooltip**: Hover tooltip
- **Sonner**: Toast notifications

### Input Components
- **Button**: Versatile button with variants and sizes
- **ButtonGroup**: Grouped buttons
- **Toggle**: Toggle button component
- **ToggleGroup**: Grouped toggle buttons

## Development

### Prerequisites

- Node.js >= 24.0.0
- pnpm >= 10

### Setup

```bash
git clone https://github.com/nipsysdev/shadcn-lsd.git
cd shadcn-lsd
pnpm install
```

### Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build the library
- `pnpm cosmos` - Start React Cosmos dev server
- `pnpm cosmos:export` - Export Cosmos site
- `pnpm lint` - Run linting


## License

Licensed under GNU GPL v3+
