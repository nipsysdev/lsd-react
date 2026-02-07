import { Bold, Italic, Underline } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { CodeExample } from '../code-example';
import { FontToggle } from '../font-toggle';
import { ThemeToggle } from '../theme-toggle';

export default function ToggleFixture() {
  return (
    <div className="lsd:p-8 lsd:w-full lsd:space-y-8">
      <div className="lsd:flex lsd:justify-end lsd:gap-4">
        <ThemeToggle />
        <FontToggle />
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-2xl lsd:font-bold">Toggle Component</h2>
        <p className="lsd:text-muted-foreground">
          A toggle component that allows users to switch between two states.
        </p>
      </div>

      <div>
        <h2 className="lsd:text-xl lsd:font-semibold lsd:mb-4">
          Default Toggle
        </h2>
        <CodeExample
          title="Default Toggle"
          code={`<div className="lsd:flex lsd:gap-4">
  <Toggle aria-label="Toggle bold">
    <Bold className="lsd:h-4 lsd:w-4" />
  </Toggle>
  <Toggle aria-label="Toggle italic">
    <Italic className="lsd:h-4 lsd:w-4" />
  </Toggle>
  <Toggle aria-label="Toggle underline">
    <Underline className="lsd:h-4 lsd:w-4" />
  </Toggle>
</div>`}
        >
          <div className="lsd:flex lsd:gap-4">
            <Toggle aria-label="Toggle bold">
              <Bold className="lsd:h-4 lsd:w-4" />
            </Toggle>
            <Toggle aria-label="Toggle italic">
              <Italic className="lsd:h-4 lsd:w-4" />
            </Toggle>
            <Toggle aria-label="Toggle underline">
              <Underline className="lsd:h-4 lsd:w-4" />
            </Toggle>
          </div>
        </CodeExample>
      </div>

      <div>
        <h2 className="lsd:text-xl lsd:font-semibold lsd:mb-4">
          Outlined Toggle
        </h2>
        <CodeExample
          title="Outlined Toggle"
          code={`<div className="lsd:flex lsd:gap-4">
  <Toggle aria-label="Toggle bold">
    <Bold className="lsd:h-4 lsd:w-4" />
  </Toggle>
  <Toggle aria-label="Toggle italic">
    <Italic className="lsd:h-4 lsd:w-4" />
  </Toggle>
  <Toggle aria-label="Toggle underline">
    <Underline className="lsd:h-4 lsd:w-4" />
  </Toggle>
</div>`}
        >
          <div className="lsd:flex lsd:gap-4">
            <Toggle aria-label="Toggle bold">
              <Bold className="lsd:h-4 lsd:w-4" />
            </Toggle>
            <Toggle aria-label="Toggle italic">
              <Italic className="lsd:h-4 lsd:w-4" />
            </Toggle>
            <Toggle aria-label="Toggle underline">
              <Underline className="lsd:h-4 lsd:w-4" />
            </Toggle>
          </div>
        </CodeExample>
      </div>

      <div>
        <h2 className="lsd:text-xl lsd:font-semibold lsd:mb-4">Toggle Sizes</h2>
        <CodeExample
          title="Toggle Sizes"
          code={`<div className="lsd:flex lsd:gap-4 lsd:items-center">
  <Toggle size="sm" aria-label="Small toggle">
    <Bold className="lsd:h-4 lsd:w-4" />
  </Toggle>
  <Toggle size="md" aria-label="Medium toggle">
    <Bold className="lsd:h-4 lsd:w-4" />
  </Toggle>
  <Toggle size="lg" aria-label="Large toggle">
    <Bold className="lsd:h-4 lsd:w-4" />
  </Toggle>
</div>`}
        >
          <div className="lsd:flex lsd:gap-4 lsd:items-center">
            <Toggle size="sm" aria-label="Small toggle">
              <Bold className="lsd:h-4 lsd:w-4" />
            </Toggle>
            <Toggle size="md" aria-label="Medium toggle">
              <Bold className="lsd:h-4 lsd:w-4" />
            </Toggle>
            <Toggle size="lg" aria-label="Large toggle">
              <Bold className="lsd:h-4 lsd:w-4" />
            </Toggle>
          </div>
        </CodeExample>
      </div>

      <div>
        <h2 className="lsd:text-xl lsd:font-semibold lsd:mb-4">
          Pressed State
        </h2>
        <CodeExample
          title="Pressed State"
          code={`<div className="lsd:flex lsd:gap-4">
  <Toggle defaultPressed aria-label="Pressed bold">
    <Bold className="lsd:h-4 lsd:w-4" />
  </Toggle>
  <Toggle defaultPressed aria-label="Pressed italic">
    <Italic className="lsd:h-4 lsd:w-4" />
  </Toggle>
</div>`}
        >
          <div className="lsd:flex lsd:gap-4">
            <Toggle defaultPressed aria-label="Pressed bold">
              <Bold className="lsd:h-4 lsd:w-4" />
            </Toggle>
            <Toggle defaultPressed aria-label="Pressed italic">
              <Italic className="lsd:h-4 lsd:w-4" />
            </Toggle>
          </div>
        </CodeExample>
      </div>

      <div>
        <h2 className="lsd:text-xl lsd:font-semibold lsd:mb-4">
          Disabled State
        </h2>
        <CodeExample
          title="Disabled State"
          code={`<div className="lsd:flex lsd:gap-4">
  <Toggle disabled aria-label="Disabled bold">
    <Bold className="lsd:h-4 lsd:w-4" />
  </Toggle>
  <Toggle disabled aria-label="Disabled italic">
    <Italic className="lsd:h-4 lsd:w-4" />
  </Toggle>
</div>`}
        >
          <div className="lsd:flex lsd:gap-4">
            <Toggle disabled aria-label="Disabled bold">
              <Bold className="lsd:h-4 lsd:w-4" />
            </Toggle>
            <Toggle disabled aria-label="Disabled italic">
              <Italic className="lsd:h-4 lsd:w-4" />
            </Toggle>
          </div>
        </CodeExample>
      </div>
    </div>
  );
}
