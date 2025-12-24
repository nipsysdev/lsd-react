import * as React from 'react';
import { ThemeToggle } from '@/__cosmos__/theme-toggle';
import { Typography } from '@/components/ui/typography';
import { CodeExample } from '../code-example';

export default function TypographyFixture() {
  return (
    <div className="lsd:p-8 lsd:w-full lsd:max-w-6xl lsd:mx-auto">
      <div className="lsd:mb-10 lsd:text-center">
        <div className="lsd:flex lsd:justify-center lsd:mb-4">
          <ThemeToggle />
        </div>
        <Typography variant="h1" className="lsd:mb-4">
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

      <div className="lsd:grid lsd:grid-cols-1 md:grid-cols-2 lsd:gap-8 lsd:w-full">
        {/* Display Variants */}
        <div className="lsd:border lsd:border-lsd-border lsd:p-6 lsd:rounded-lg">
          <Typography
            variant="h3"
            className="lsd:mb-4 lsd:pb-2 lsd:border-b lsd:border-lsd-border"
          >
            Display Variants
          </Typography>
          <CodeExample
            title="Display Variants"
            code={`<div className="lsd:flex lsd:flex-col lsd:gap-2">
  <Typography variant="display1">Display 1</Typography>
  <Typography variant="display2">Display 2</Typography>
  <Typography variant="display3">Display 3</Typography>
  <Typography variant="display4">Display 4</Typography>
</div>`}
          >
            <div className="lsd:flex lsd:flex-col lsd:gap-2">
              <Typography variant="display1">Display 1</Typography>
              <Typography variant="display2">Display 2</Typography>
              <Typography variant="display3">Display 3</Typography>
              <Typography variant="display4">Display 4</Typography>
            </div>
          </CodeExample>
        </div>

        {/* Heading Variants */}
        <div className="lsd:border lsd:border-lsd-border lsd:p-6 lsd:rounded-lg">
          <Typography
            variant="h3"
            className="lsd:mb-4 lsd:pb-2 lsd:border-b lsd:border-lsd-border"
          >
            Heading Variants
          </Typography>
          <CodeExample
            title="Heading Variants"
            code={`<div className="lsd:flex lsd:flex-col lsd:gap-2">
  <Typography variant="h1">Heading 1</Typography>
  <Typography variant="h2">Heading 2</Typography>
  <Typography variant="h3">Heading 3</Typography>
  <Typography variant="h4">Heading 4</Typography>
  <Typography variant="h5">Heading 5</Typography>
  <Typography variant="h6">Heading 6</Typography>
</div>`}
          >
            <div className="lsd:flex lsd:flex-col lsd:gap-2">
              <Typography variant="h1">Heading 1</Typography>
              <Typography variant="h2">Heading 2</Typography>
              <Typography variant="h3">Heading 3</Typography>
              <Typography variant="h4">Heading 4</Typography>
              <Typography variant="h5">Heading 5</Typography>
              <Typography variant="h6">Heading 6</Typography>
            </div>
          </CodeExample>
        </div>

        {/* Subtitle Variants */}
        <div className="lsd:border lsd:border-lsd-border lsd:p-6 lsd:rounded-lg">
          <Typography
            variant="h3"
            className="lsd:mb-4 lsd:pb-2 lsd:border-b lsd:border-lsd-border"
          >
            Subtitle Variants
          </Typography>
          <CodeExample
            title="Subtitle Variants"
            code={`<div className="lsd:flex lsd:flex-col lsd:gap-2">
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
</div>`}
          >
            <div className="lsd:flex lsd:flex-col lsd:gap-2">
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
          </CodeExample>
        </div>

        {/* Body Variants */}
        <div className="lsd:border lsd:border-lsd-border lsd:p-6 lsd:rounded-lg">
          <Typography
            variant="h3"
            className="lsd:mb-4 lsd:pb-2 lsd:border-b lsd:border-lsd-border"
          >
            Body Variants
          </Typography>
          <CodeExample
            title="Body Variants"
            code={`<div className="lsd:flex lsd:flex-col lsd:gap-2">
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
</div>`}
          >
            <div className="lsd:flex lsd:flex-col lsd:gap-2">
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
                Body 3: This is the tertiary body text variant. It's suitable
                for small print and captions. The quick brown fox jumps over the
                lazy dog.
              </Typography>
            </div>
          </CodeExample>
        </div>

        {/* Label Variants */}
        <div className="lsd:border lsd:border-lsd-border lsd:p-6 lsd:rounded-lg">
          <Typography
            variant="h3"
            className="lsd:mb-4 lsd:pb-2 lsd:border-b lsd:border-lsd-border"
          >
            Label Variants
          </Typography>
          <CodeExample
            title="Label Variants"
            code={`<div className="lsd:flex lsd:flex-col lsd:gap-2">
  <Typography variant="label1">
    Label 1 - Form labels, captions, and small text
  </Typography>
  <Typography variant="label2">
    Label 2 - Smaller labels, captions, and fine print
  </Typography>
</div>`}
          >
            <div className="lsd:flex lsd:flex-col lsd:gap-2">
              <Typography variant="label1">
                Label 1 - Form labels, captions, and small text
              </Typography>
              <Typography variant="label2">
                Label 2 - Smaller labels, captions, and fine print
              </Typography>
            </div>
          </CodeExample>
        </div>

        {/* Color Variants */}
        <div className="lsd:border lsd:border-lsd-border lsd:p-6 lsd:rounded-lg">
          <Typography
            variant="h3"
            className="lsd:mb-4 lsd:pb-2 lsd:border-b lsd:border-lsd-border"
          >
            Color Variants
          </Typography>
          <CodeExample
            title="Color Variants"
            code={`<div className="lsd:flex lsd:flex-col lsd:gap-2">
  <Typography variant="body1" color="primary">
    Primary color text using the theme's primary text color
  </Typography>
  <Typography variant="body1" color="secondary">
    Secondary color text using the theme's secondary text color
  </Typography>
</div>`}
          >
            <div className="lsd:flex lsd:flex-col lsd:gap-2">
              <Typography variant="body1" color="primary">
                Primary color text using the theme's primary text color
              </Typography>
              <Typography variant="body1" color="secondary">
                Secondary color text using the theme's secondary text color
              </Typography>
            </div>
          </CodeExample>
        </div>

        {/* Font Family Variants */}
        <div className="lsd:border lsd:border-lsd-border lsd:p-6 lsd:rounded-lg">
          <Typography
            variant="h3"
            className="lsd:mb-4 lsd:pb-2 lsd:border-b lsd:border-lsd-border"
          >
            Font Family Variants
          </Typography>
          <CodeExample
            title="Font Family Variants"
            code={`<div className="lsd:flex lsd:flex-col lsd:gap-2">
  <Typography variant="body1" className="font-sans">
    Sans-serif font family - The quick brown fox jumps over the lazy
    dog
  </Typography>
  <Typography variant="body1" className="font-serif">
    Serif font family - The quick brown fox jumps over the lazy dog
  </Typography>
  <Typography variant="body1" className="font-mono">
    Monospace font family - The quick brown fox jumps over the lazy
    dog
  </Typography>
</div>`}
          >
            <div className="lsd:flex lsd:flex-col lsd:gap-2">
              <Typography variant="body1" className="font-sans">
                Sans-serif font family - The quick brown fox jumps over the lazy
                dog
              </Typography>
              <Typography variant="body1" className="font-serif">
                Serif font family - The quick brown fox jumps over the lazy dog
              </Typography>
              <Typography variant="body1" className="font-mono">
                Monospace font family - The quick brown fox jumps over the lazy
                dog
              </Typography>
            </div>
          </CodeExample>
        </div>

        {/* Custom Element Types */}
        <div className="lsd:border lsd:border-lsd-border lsd:p-6 lsd:rounded-lg md:col-span-2">
          <Typography
            variant="h3"
            className="lsd:mb-4 lsd:pb-2 lsd:border-b lsd:border-lsd-border"
          >
            Custom Element Types
          </Typography>
          <CodeExample
            title="Custom Element Types"
            code={`<div className="lsd:grid lsd:grid-cols-1 md:grid-cols-2 lsd:gap-4">
  <Typography
    variant="h1"
    as="div"
    className="lsd:border lsd:border-lsd-border lsd:p-4 lsd:rounded"
  >
    This is an H1 variant rendered as a div element
  </Typography>
  <Typography
    variant="body1"
    as="p"
    className="lsd:border lsd:border-lsd-border lsd:p-4 lsd:rounded"
  >
    This is a body1 variant rendered as a paragraph element
  </Typography>
</div>`}
          >
            <div className="lsd:grid lsd:grid-cols-1 md:grid-cols-2 lsd:gap-4">
              <Typography
                variant="h1"
                as="div"
                className="lsd:border lsd:border-lsd-border lsd:p-4 lsd:rounded"
              >
                This is an H1 variant rendered as a div element
              </Typography>
              <Typography
                variant="body1"
                as="p"
                className="lsd:border lsd:border-lsd-border lsd:p-4 lsd:rounded"
              >
                This is a body1 variant rendered as a paragraph element
              </Typography>
            </div>
          </CodeExample>
        </div>
      </div>
    </div>
  );
}
