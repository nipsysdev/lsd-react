import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CodeExample } from '../code-example';
import { FontToggle } from '../font-toggle';
import { ThemeToggle } from '../theme-toggle';

export default function ButtonFixture() {
  return (
    <div className="lsd:p-8 lsd:w-full lsd:space-y-8">
      <div className="lsd:flex lsd:justify-end lsd:gap-4">
        <ThemeToggle />
        <FontToggle />
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-2xl lsd:font-bold">Button Component</h2>
        <p className="lsd:text-muted-foreground">
          A button component that allows users to perform actions.
        </p>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Variants</h2>
        <CodeExample
          title="Button Variants"
          code={`<div className="lsd:flex lsd:gap-4">
  <Button variant="filled">Filled</Button>
  <Button variant="outlined">Outlined</Button>
</div>`}
        >
          <div className="lsd:flex lsd:gap-4">
            <Button variant="filled">Filled</Button>
            <Button variant="outlined">Outlined</Button>
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Sizes</h2>
        <CodeExample
          title="Button Sizes"
          code={`<div className="lsd:flex lsd:gap-4 lsd:items-center">
  <Button size="sm">Small</Button>
  <Button>Default</Button>
  <Button size="lg">Large</Button>
</div>`}
        >
          <div className="lsd:flex lsd:gap-4 lsd:items-center">
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">States</h2>
        <CodeExample
          title="Button States"
          code={`<div className="lsd:flex lsd:gap-4">
  <Button>Normal</Button>
  <Button disabled>Disabled</Button>
</div>`}
        >
          <div className="lsd:flex lsd:gap-4">
            <Button>Normal</Button>
            <Button disabled>Disabled</Button>
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">All Combinations</h2>
        <CodeExample
          title="All Button Combinations"
          code={`<div className="lsd:grid lsd:grid-cols-3 lsd:gap-4">
  <Button size="sm">Small Filled</Button>
  <Button size="sm" variant="outlined">
    Small Outlined
  </Button>
  <Button size="sm" disabled>
    Small Disabled
  </Button>

  <Button>Filled</Button>
  <Button variant="outlined">Outlined</Button>
  <Button disabled>Disabled</Button>

  <Button size="lg">Large Filled</Button>
  <Button size="lg" variant="outlined">
    Large Outlined
  </Button>
  <Button size="lg" disabled>
    Large Disabled
  </Button>
</div>`}
        >
          <div className="lsd:grid lsd:grid-cols-3 lsd:gap-4">
            <Button size="sm">Small Filled</Button>
            <Button size="sm" variant="outlined">
              Small Outlined
            </Button>
            <Button size="sm" disabled>
              Small Disabled
            </Button>

            <Button>Filled</Button>
            <Button variant="outlined">Outlined</Button>
            <Button disabled>Disabled</Button>

            <Button size="lg">Large Filled</Button>
            <Button size="lg" variant="outlined">
              Large Outlined
            </Button>
            <Button size="lg" disabled>
              Large Disabled
            </Button>
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Icon Buttons</h2>
        <CodeExample
          title="Icon Button Variants"
          code={`<div className="lsd:flex lsd:gap-4 lsd:items-center">
  <Button variant="filled-icon" size="icon" aria-label="Add">
    <Plus />
  </Button>
  <Button variant="outlined-icon" size="icon" aria-label="Add">
    <Plus />
  </Button>
</div>`}
        >
          <div className="lsd:flex lsd:gap-4 lsd:items-center">
            <Button variant="filled-icon" size="icon" aria-label="Add">
              <Plus />
            </Button>
            <Button variant="outlined-icon" size="icon" aria-label="Add">
              <Plus />
            </Button>
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Icon Button Sizes</h2>
        <CodeExample
          title="Icon Button Sizes"
          code={`<div className="lsd:flex lsd:gap-4 lsd:items-center">
  <Button variant="filled-icon" size="icon-sm" aria-label="Add">
    <Plus size={14} />
  </Button>
  <Button variant="filled-icon" size="icon" aria-label="Add">
    <Plus />
  </Button>
  <Button variant="filled-icon" size="icon-lg" aria-label="Add">
    <Plus size={24} />
  </Button>
  <Button variant="filled-icon" size="icon-xl" aria-label="Add">
    <Plus size={32} />
  </Button>
</div>`}
        >
          <div className="lsd:flex lsd:gap-4 lsd:items-center">
            <Button variant="filled-icon" size="icon-sm" aria-label="Add">
              <Plus size={14} />
            </Button>
            <Button variant="filled-icon" size="icon" aria-label="Add">
              <Plus />
            </Button>
            <Button variant="filled-icon" size="icon-lg" aria-label="Add">
              <Plus size={30} />
            </Button>
            <Button variant="filled-icon" size="icon-xl" aria-label="Add">
              <Plus size={32} />
            </Button>
          </div>
        </CodeExample>
      </div>
    </div>
  );
}
