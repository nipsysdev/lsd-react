import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { CodeExample } from '../code-example';
import { FontToggle } from '../font-toggle';
import { ThemeToggle } from '../theme-toggle';

export default function BadgeFixture() {
  const [dismissedBadges, setDismissedBadges] = useState<Set<number>>(
    new Set(),
  );
  const [clickCount, setClickCount] = useState(0);

  const handleDismiss = (id: number) => {
    setDismissedBadges((prev) => new Set(prev).add(id));
  };

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
  };

  const CheckIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Check</title>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );

  const AlertIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Alert</title>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );

  const InfoIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Info</title>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );

  return (
    <div className="lsd:p-8 lsd:w-full lsd:space-y-8">
      <div className="lsd:flex lsd:justify-end lsd:gap-4">
        <ThemeToggle />
        <FontToggle />
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-2xl lsd:font-bold">Badge Component</h2>
        <p className="lsd:text-muted-foreground">
          A badge component that displays small pieces of information.
        </p>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Basic Variants</h2>
        <CodeExample
          title="Badge Variants"
          code={`<div className="lsd:flex lsd:gap-4 lsd:items-center">
  <Badge variant="filled">Filled</Badge>
  <Badge variant="outlined">Outlined</Badge>
</div>`}
        >
          <div className="lsd:flex lsd:gap-4 lsd:items-center">
            <Badge variant="filled">Filled</Badge>
            <Badge variant="outlined">Outlined</Badge>
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Color Variants</h2>
        <CodeExample
          title="Badge Color Variants"
          code={`<div className="lsd:flex lsd:gap-4 lsd:items-center">
  <Badge variant="destructive">Destructive</Badge>
  <Badge variant="success">Success</Badge>
  <Badge variant="warning">Warning</Badge>
  <Badge variant="info">Info</Badge>
</div>`}
        >
          <div className="lsd:flex lsd:gap-4 lsd:items-center">
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="info">Info</Badge>
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Sizes</h2>
        <CodeExample
          title="Badge Sizes"
          code={`<div className="lsd:flex lsd:gap-4 lsd:items-center">
  <Badge size="xs">Extra Small</Badge>
  <Badge size="sm">Small</Badge>
  <Badge size="md">Medium</Badge>
  <Badge size="lg">Large</Badge>
  <Badge size="xl">Extra Large</Badge>
</div>`}
        >
          <div className="lsd:flex lsd:gap-4 lsd:items-center">
            <Badge size="xs">Extra Small</Badge>
            <Badge size="sm">Small</Badge>
            <Badge size="md">Medium</Badge>
            <Badge size="lg">Large</Badge>
            <Badge size="xl">Extra Large</Badge>
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">
          Variant and Size Combinations
        </h2>
        <CodeExample
          title="Badge Variant and Size Combinations"
          code={`<div className="lsd:flex lsd:flex-col lsd:gap-4">
  <div className="lsd:flex lsd:gap-4 lsd:items-center">
    <Badge variant="filled" size="md">Filled Medium</Badge>
    <Badge variant="outlined" size="md">Outlined Medium</Badge>
    <Badge variant="destructive" size="md">Destructive</Badge>
    <Badge variant="success" size="md">Success</Badge>
  </div>
  <div className="lsd:flex lsd:gap-4 lsd:items-center">
    <Badge variant="warning" size="sm">Warning Small</Badge>
    <Badge variant="info" size="sm">Info Small</Badge>
    <Badge variant="filled" size="xs">XS Filled</Badge>
    <Badge variant="outlined" size="lg">LG Outlined</Badge>
  </div>
</div>`}
        >
          <div className="lsd:flex lsd:flex-col lsd:gap-4">
            <div className="lsd:flex lsd:gap-4 lsd:items-center">
              <Badge variant="filled" size="md">
                Filled Medium
              </Badge>
              <Badge variant="outlined" size="md">
                Outlined Medium
              </Badge>
              <Badge variant="destructive" size="md">
                Destructive
              </Badge>
              <Badge variant="success" size="md">
                Success
              </Badge>
            </div>
            <div className="lsd:flex lsd:gap-4 lsd:items-center">
              <Badge variant="warning" size="sm">
                Warning Small
              </Badge>
              <Badge variant="info" size="sm">
                Info Small
              </Badge>
              <Badge variant="filled" size="xs">
                XS Filled
              </Badge>
              <Badge variant="outlined" size="lg">
                LG Outlined
              </Badge>
            </div>
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Dismissible Badges</h2>
        <CodeExample
          title="Dismissible Badges"
          code={`<div className="lsd:flex lsd:gap-4 lsd:items-center">
  <Badge variant="success" onDismiss={() => console.log('dismissed')}>
    Success - Click to dismiss
  </Badge>
  <Badge variant="warning" onDismiss={() => console.log('dismissed')}>
    Warning - Click to dismiss
  </Badge>
  <Badge variant="destructive" onDismiss={() => console.log('dismissed')}>
    Error - Click to dismiss
  </Badge>
</div>`}
        >
          <div className="lsd:flex lsd:gap-4 lsd:items-center">
            {!dismissedBadges.has(1) && (
              <Badge variant="success" onDismiss={() => handleDismiss(1)}>
                Success - Click to dismiss
              </Badge>
            )}
            {!dismissedBadges.has(2) && (
              <Badge variant="warning" onDismiss={() => handleDismiss(2)}>
                Warning - Click to dismiss
              </Badge>
            )}
            {!dismissedBadges.has(3) && (
              <Badge variant="destructive" onDismiss={() => handleDismiss(3)}>
                Error - Click to dismiss
              </Badge>
            )}
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Clickable Badges</h2>
        <CodeExample
          title="Clickable Badges"
          code={`<div className="lsd:flex lsd:gap-4 lsd:items-center">
  <Badge onClick={() => console.log('clicked')}>
    Click me ({clickCount})
  </Badge>
  <Badge variant="info" onClick={() => console.log('clicked')}>
    Info Badge
  </Badge>
  <Badge variant="success" onClick={() => console.log('clicked')}>
    Success Badge
  </Badge>
</div>`}
        >
          <div className="lsd:flex lsd:gap-4 lsd:items-center">
            <Badge onClick={handleClick}>Click me ({clickCount})</Badge>
            <Badge variant="info" onClick={handleClick}>
              Info Badge
            </Badge>
            <Badge variant="success" onClick={handleClick}>
              Success Badge
            </Badge>
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Icon Badges</h2>
        <CodeExample
          title="Icon Badges"
          code={`<div className="lsd:flex lsd:flex-col lsd:gap-4">
  <div className="lsd:flex lsd:gap-4 lsd:items-center">
    <Badge icon={<CheckIcon />} iconPosition="left">
      With Left Icon
    </Badge>
    <Badge icon={<AlertIcon />} iconPosition="right">
      With Right Icon
    </Badge>
  </div>
  <div className="lsd:flex lsd:gap-4 lsd:items-center">
    <Badge variant="success" icon={<CheckIcon />}>
      Success
    </Badge>
    <Badge variant="warning" icon={<AlertIcon />}>
      Warning
    </Badge>
    <Badge variant="info" icon={<InfoIcon />}>
      Info
    </Badge>
  </div>
</div>`}
        >
          <div className="lsd:flex lsd:flex-col lsd:gap-4">
            <div className="lsd:flex lsd:gap-4 lsd:items-center">
              <Badge icon={<CheckIcon />} iconPosition="left">
                With Left Icon
              </Badge>
              <Badge icon={<AlertIcon />} iconPosition="right">
                With Right Icon
              </Badge>
            </div>
            <div className="lsd:flex lsd:gap-4 lsd:items-center">
              <Badge variant="success" icon={<CheckIcon />}>
                Success
              </Badge>
              <Badge variant="warning" icon={<AlertIcon />}>
                Warning
              </Badge>
              <Badge variant="info" icon={<InfoIcon />}>
                Info
              </Badge>
            </div>
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Dot Badges</h2>
        <CodeExample
          title="Dot Badges"
          code={`<div className="lsd:flex lsd:gap-4 lsd:items-center">
  <Badge variant="dot" size="xs" />
  <Badge variant="dot" size="sm" />
  <Badge variant="dot" size="md" />
  <Badge variant="dot" size="lg" />
  <Badge variant="dot" size="xl" />
</div>`}
        >
          <div className="lsd:flex lsd:gap-4 lsd:items-center">
            <Badge variant="dot" size="xs" />
            <Badge variant="dot" size="sm" />
            <Badge variant="dot" size="md" />
            <Badge variant="dot" size="lg" />
            <Badge variant="dot" size="xl" />
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">
          Dot Badges with Colors
        </h2>
        <CodeExample
          title="Dot Badges with Colors"
          code={`<div className="lsd:flex lsd:gap-4 lsd:items-center">
  <Badge variant="dot" size="md" className="lsd:bg-lsd-destructive" />
  <Badge variant="dot" size="md" className="lsd:bg-lsd-success" />
  <Badge variant="dot" size="md" className="lsd:bg-lsd-warning" />
  <Badge variant="dot" size="md" className="lsd:bg-lsd-info" />
</div>`}
        >
          <div className="lsd:flex lsd:gap-4 lsd:items-center">
            <Badge variant="dot" size="md" className="lsd:bg-lsd-destructive" />
            <Badge variant="dot" size="md" className="lsd:bg-lsd-success" />
            <Badge variant="dot" size="md" className="lsd:bg-lsd-warning" />
            <Badge variant="dot" size="md" className="lsd:bg-lsd-info" />
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Combined Features</h2>
        <CodeExample
          title="Combined Features"
          code={`<div className="lsd:flex lsd:flex-col lsd:gap-4">
  <div className="lsd:flex lsd:gap-4 lsd:items-center">
    <Badge
      variant="success"
      icon={<CheckIcon />}
      onDismiss={() => console.log('dismissed')}
    >
      Success with icon and dismiss
    </Badge>
    <Badge
      variant="warning"
      icon={<AlertIcon />}
      onClick={() => console.log('clicked')}
    >
      Warning with icon and click
    </Badge>
  </div>
  <div className="lsd:flex lsd:gap-4 lsd:items-center">
    <Badge
      variant="info"
      size="lg"
      icon={<InfoIcon />}
      onDismiss={() => console.log('dismissed')}
      onClick={() => console.log('clicked')}
    >
      Large info badge with all features
    </Badge>
  </div>
</div>`}
        >
          <div className="lsd:flex lsd:flex-col lsd:gap-4">
            <div className="lsd:flex lsd:gap-4 lsd:items-center">
              {!dismissedBadges.has(4) && (
                <Badge
                  variant="success"
                  icon={<CheckIcon />}
                  onDismiss={() => handleDismiss(4)}
                >
                  Success with icon and dismiss
                </Badge>
              )}
              <Badge
                variant="warning"
                icon={<AlertIcon />}
                onClick={handleClick}
              >
                Warning with icon and click
              </Badge>
            </div>
            <div className="lsd:flex lsd:gap-4 lsd:items-center">
              {!dismissedBadges.has(5) && (
                <Badge
                  variant="info"
                  size="lg"
                  icon={<InfoIcon />}
                  onDismiss={() => handleDismiss(5)}
                  onClick={handleClick}
                >
                  Large info badge with all features
                </Badge>
              )}
            </div>
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Long Text</h2>
        <CodeExample
          title="Badge Long Text"
          code={`<div className="lsd:flex lsd:gap-4 lsd:items-center">
  <Badge>
    This is a badge with very long text that should truncate
  </Badge>
  <Badge size="sm">This is a small badge with long text</Badge>
</div>`}
        >
          <div className="lsd:flex lsd:gap-4 lsd:items-center">
            <Badge>
              This is a badge with very long text that should truncate
            </Badge>
            <Badge size="sm">This is a small badge with long text</Badge>
          </div>
        </CodeExample>
      </div>
    </div>
  );
}
