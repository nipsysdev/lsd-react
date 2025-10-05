import * as React from 'react';
import { ThemeToggle } from '@/__cosmos__/theme-toggle';
import { Typography } from '@/components/ui/typography';

export default function TypographyFixture() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-10 text-center">
        <div className="flex justify-center mb-4">
          <ThemeToggle />
        </div>
        <Typography variant="h1" className="mb-4">
          Typography Component
        </Typography>
        <Typography
          variant="body1"
          color="secondary"
          className="max-w-2xl mx-auto"
        >
          This fixture demonstrates all typography variants with different
          colors and font families.
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Display Variants */}
        <div className="border border-lsd-border p-6 rounded-lg">
          <Typography
            variant="h3"
            className="mb-4 pb-2 border-b border-lsd-border"
          >
            Display Variants
          </Typography>
          <div className="flex flex-col gap-2">
            <Typography variant="display1">Display 1</Typography>
            <Typography variant="display2">Display 2</Typography>
            <Typography variant="display3">Display 3</Typography>
            <Typography variant="display4">Display 4</Typography>
          </div>
        </div>

        {/* Heading Variants */}
        <div className="border border-lsd-border p-6 rounded-lg">
          <Typography
            variant="h3"
            className="mb-4 pb-2 border-b border-lsd-border"
          >
            Heading Variants
          </Typography>
          <div className="flex flex-col gap-2">
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="h3">Heading 3</Typography>
            <Typography variant="h4">Heading 4</Typography>
            <Typography variant="h5">Heading 5</Typography>
            <Typography variant="h6">Heading 6</Typography>
          </div>
        </div>

        {/* Subtitle Variants */}
        <div className="border border-lsd-border p-6 rounded-lg">
          <Typography
            variant="h3"
            className="mb-4 pb-2 border-b border-lsd-border"
          >
            Subtitle Variants
          </Typography>
          <div className="flex flex-col gap-2">
            <Typography variant="subtitle1">
              Subtitle 1 - The quick brown fox jumps over the lazy dog
            </Typography>
            <Typography variant="subtitle2">
              Subtitle 2 - The quick brown fox jumps over the lazy dog
            </Typography>
            <Typography variant="subtitle3">
              Subtitle 3 - The quick brown fox jumps over the lazy dog
            </Typography>
            <Typography variant="subtitle4">
              Subtitle 4 - The quick brown fox jumps over the lazy dog
            </Typography>
          </div>
        </div>

        {/* Body Variants */}
        <div className="border border-lsd-border p-6 rounded-lg">
          <Typography
            variant="h3"
            className="mb-4 pb-2 border-b border-lsd-border"
          >
            Body Variants
          </Typography>
          <div className="flex flex-col gap-2">
            <Typography variant="body1">
              Body 1: This is the primary body text variant. It should be used
              for most paragraph content. The quick brown fox jumps over the
              lazy dog.
            </Typography>
            <Typography variant="body2">
              Body 2: This is the secondary body text variant. It can be used
              for less important content. The quick brown fox jumps over the
              lazy dog.
            </Typography>
            <Typography variant="body3">
              Body 3: This is the tertiary body text variant. It's suitable for
              small print and captions. The quick brown fox jumps over the lazy
              dog.
            </Typography>
          </div>
        </div>

        {/* Label Variants */}
        <div className="border border-lsd-border p-6 rounded-lg">
          <Typography
            variant="h3"
            className="mb-4 pb-2 border-b border-lsd-border"
          >
            Label Variants
          </Typography>
          <div className="flex flex-col gap-2">
            <Typography variant="label1">
              Label 1 - Form labels, captions, and small text
            </Typography>
            <Typography variant="label2">
              Label 2 - Smaller labels, captions, and fine print
            </Typography>
          </div>
        </div>

        {/* Color Variants */}
        <div className="border border-lsd-border p-6 rounded-lg">
          <Typography
            variant="h3"
            className="mb-4 pb-2 border-b border-lsd-border"
          >
            Color Variants
          </Typography>
          <div className="flex flex-col gap-2">
            <Typography variant="body1" color="primary">
              Primary color text using the theme's primary text color
            </Typography>
            <Typography variant="body1" color="secondary">
              Secondary color text using the theme's secondary text color
            </Typography>
          </div>
        </div>

        {/* Font Family Variants */}
        <div className="border border-lsd-border p-6 rounded-lg">
          <Typography
            variant="h3"
            className="mb-4 pb-2 border-b border-lsd-border"
          >
            Font Family Variants
          </Typography>
          <div className="flex flex-col gap-2">
            <Typography variant="body1" fontFamily="sans">
              Sans-serif font family - The quick brown fox jumps over the lazy
              dog
            </Typography>
            <Typography variant="body1" fontFamily="serif">
              Serif font family - The quick brown fox jumps over the lazy dog
            </Typography>
            <Typography variant="body1" fontFamily="mono">
              Monospace font family - The quick brown fox jumps over the lazy
              dog
            </Typography>
          </div>
        </div>

        {/* Custom Element Types */}
        <div className="border border-lsd-border p-6 rounded-lg md:col-span-2">
          <Typography
            variant="h3"
            className="mb-4 pb-2 border-b border-lsd-border"
          >
            Custom Element Types
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Typography
              variant="h1"
              as="div"
              className="border border-lsd-border p-4 rounded"
            >
              This is an H1 variant rendered as a div element
            </Typography>
            <Typography
              variant="body1"
              as="p"
              className="border border-lsd-border p-4 rounded"
            >
              This is a body1 variant rendered as a paragraph element
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
