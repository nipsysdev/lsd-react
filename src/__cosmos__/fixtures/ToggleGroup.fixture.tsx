import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Underline,
} from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { CodeExample } from '../code-example';
import { FontToggle } from '../font-toggle';
import { ThemeAccentToggle, ThemeToggle } from '../theme-toggle';

export default function ToggleGroupFixture() {
  return (
    <div className="lsd:p-8 lsd:w-full lsd:space-y-8">
      <div className="lsd:flex lsd:justify-end lsd:gap-4">
        <ThemeToggle />
        <ThemeAccentToggle />
        <FontToggle />
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-2xl lsd:font-bold">Toggle Group Component</h2>
        <p className="lsd:text-muted-foreground">
          A toggle group component that allows users to select one or more
          options from a group.
        </p>
      </div>

      <div>
        <h2 className="lsd:text-xl lsd:font-semibold lsd:mb-4">
          Single Selection Toggle Group
        </h2>
        <CodeExample
          title="Single Selection Toggle Group"
          code={`<ToggleGroup
  type="single"
  defaultValue="center"
  aria-label="Text alignment"
>
  <ToggleGroupItem value="left" aria-label="Left aligned">
    <AlignLeft className="lsd:h-4 lsd:w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Center aligned">
    <AlignCenter className="lsd:h-4 lsd:w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Right aligned">
    <AlignRight className="lsd:h-4 lsd:w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
        >
          <ToggleGroup
            type="single"
            defaultValue="center"
            aria-label="Text alignment"
          >
            <ToggleGroupItem value="left" aria-label="Left aligned">
              <AlignLeft className="lsd:h-4 lsd:w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Center aligned">
              <AlignCenter className="lsd:h-4 lsd:w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Right aligned">
              <AlignRight className="lsd:h-4 lsd:w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </CodeExample>
      </div>
      <div>
        <h2 className="lsd:text-xl lsd:font-semibold lsd:mb-4">
          Toggle Group with Text
        </h2>
        <CodeExample
          title="Toggle Group with Text"
          code={`<ToggleGroup
  type="single"
  defaultValue="option1"
  aria-label="Text options"
>
  <ToggleGroupItem value="option1" aria-label="Option 1">
    Option 1
  </ToggleGroupItem>
  <ToggleGroupItem value="option2" aria-label="Option 2">
    Option 2
  </ToggleGroupItem>
  <ToggleGroupItem value="option3" aria-label="Option 3">
    Option 3
  </ToggleGroupItem>
</ToggleGroup>`}
        >
          <ToggleGroup
            type="single"
            defaultValue="option1"
            aria-label="Text options"
          >
            <ToggleGroupItem value="option1" aria-label="Option 1">
              Option 1
            </ToggleGroupItem>
            <ToggleGroupItem value="option2" aria-label="Option 2">
              Option 2
            </ToggleGroupItem>
            <ToggleGroupItem value="option3" aria-label="Option 3">
              Option 3
            </ToggleGroupItem>
          </ToggleGroup>
        </CodeExample>
      </div>

      <div>
        <h2 className="lsd:text-xl lsd:font-semibold lsd:mb-4">
          Multiple Selection Toggle Group
        </h2>
        <CodeExample
          title="Multiple Selection Toggle Group"
          code={`<ToggleGroup
  type="multiple"
  defaultValue={['bold', 'italic']}
  aria-label="Text formatting"
>
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <Bold className="lsd:h-4 lsd:w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <Italic className="lsd:h-4 lsd:w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline">
    <Underline className="lsd:h-4 lsd:w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
        >
          <ToggleGroup
            type="multiple"
            defaultValue={['bold', 'italic']}
            aria-label="Text formatting"
          >
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="lsd:h-4 lsd:w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="lsd:h-4 lsd:w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <Underline className="lsd:h-4 lsd:w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </CodeExample>
      </div>

      <div>
        <h2 className="lsd:text-xl lsd:font-semibold lsd:mb-4">
          Outlined Variant Toggle Group
        </h2>
        <CodeExample
          title="Outlined Variant Toggle Group"
          code={`<ToggleGroup
  type="single"
  defaultValue="center"
  aria-label="Text alignment"
>
  <ToggleGroupItem value="left" aria-label="Left aligned">
    <AlignLeft className="lsd:h-4 lsd:w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Center aligned">
    <AlignCenter className="lsd:h-4 lsd:w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Right aligned">
    <AlignRight className="lsd:h-4 lsd:w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
        >
          <ToggleGroup
            type="single"
            defaultValue="center"
            aria-label="Text alignment"
          >
            <ToggleGroupItem value="left" aria-label="Left aligned">
              <AlignLeft className="lsd:h-4 lsd:w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Center aligned">
              <AlignCenter className="lsd:h-4 lsd:w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Right aligned">
              <AlignRight className="lsd:h-4 lsd:w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </CodeExample>
      </div>

      <div>
        <h2 className="lsd:text-xl lsd:font-semibold lsd:mb-4">
          Toggle Group Sizes
        </h2>
        <CodeExample
          title="Toggle Group Sizes"
          code={`<div className="lsd:space-y-4">
  <div>
    <h3 className="lsd:text-md lsd:font-medium lsd:mb-2">Small</h3>
    <ToggleGroup
      type="single"
      size="sm"
      defaultValue="center"
      aria-label="Text alignment"
    >
      <ToggleGroupItem value="left" aria-label="Left aligned">
        <AlignLeft className="lsd:h-4 lsd:w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center aligned">
        <AlignCenter className="lsd:h-4 lsd:w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Right aligned">
        <AlignRight className="lsd:h-4 lsd:w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  </div>

  <div>
    <h3 className="lsd:text-md lsd:font-medium lsd:mb-2">Default</h3>
    <ToggleGroup
      type="single"
      size="default"
      defaultValue="center"
      aria-label="Text alignment"
    >
      <ToggleGroupItem value="left" aria-label="Left aligned">
        <AlignLeft className="lsd:h-4 lsd:w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center aligned">
        <AlignCenter className="lsd:h-4 lsd:w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Right aligned">
        <AlignRight className="lsd:h-4 lsd:w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  </div>

  <div>
    <h3 className="lsd:text-md lsd:font-medium lsd:mb-2">Large</h3>
    <ToggleGroup
      type="single"
      size="lg"
      defaultValue="center"
      aria-label="Text alignment"
    >
      <ToggleGroupItem value="left" aria-label="Left aligned">
        <AlignLeft className="lsd:h-4 lsd:w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center aligned">
        <AlignCenter className="lsd:h-4 lsd:w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Right aligned">
        <AlignRight className="lsd:h-4 lsd:w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  </div>
</div>`}
        >
          <div className="lsd:space-y-4">
            <div>
              <h3 className="lsd:text-md lsd:font-medium lsd:mb-2">Small</h3>
              <ToggleGroup
                type="single"
                size="sm"
                defaultValue="center"
                aria-label="Text alignment"
              >
                <ToggleGroupItem value="left" aria-label="Left aligned">
                  <AlignLeft className="lsd:h-4 lsd:w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Center aligned">
                  <AlignCenter className="lsd:h-4 lsd:w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Right aligned">
                  <AlignRight className="lsd:h-4 lsd:w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div>
              <h3 className="lsd:text-md lsd:font-medium lsd:mb-2">Default</h3>
              <ToggleGroup
                type="single"
                defaultValue="center"
                aria-label="Text alignment"
              >
                <ToggleGroupItem value="left" aria-label="Left aligned">
                  <AlignLeft className="lsd:h-4 lsd:w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Center aligned">
                  <AlignCenter className="lsd:h-4 lsd:w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Right aligned">
                  <AlignRight className="lsd:h-4 lsd:w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div>
              <h3 className="lsd:text-md lsd:font-medium lsd:mb-2">Large</h3>
              <ToggleGroup
                type="single"
                size="lg"
                defaultValue="center"
                aria-label="Text alignment"
              >
                <ToggleGroupItem value="left" aria-label="Left aligned">
                  <AlignLeft className="lsd:h-4 lsd:w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Center aligned">
                  <AlignCenter className="lsd:h-4 lsd:w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Right aligned">
                  <AlignRight className="lsd:h-4 lsd:w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </CodeExample>
      </div>

      <div>
        <h2 className="lsd:text-xl lsd:font-semibold lsd:mb-4">
          Disabled Toggle Group
        </h2>
        <CodeExample
          title="Disabled Toggle Group"
          code={`<ToggleGroup
  type="single"
  defaultValue="center"
  aria-label="Text alignment"
  disabled
>
  <ToggleGroupItem value="left" aria-label="Left aligned">
    <AlignLeft className="lsd:h-4 lsd:w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Center aligned">
    <AlignCenter className="lsd:h-4 lsd:w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Right aligned">
    <AlignRight className="lsd:h-4 lsd:w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
        >
          <ToggleGroup
            type="single"
            defaultValue="center"
            aria-label="Text alignment"
            disabled
          >
            <ToggleGroupItem value="left" aria-label="Left aligned">
              <AlignLeft className="lsd:h-4 lsd:w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Center aligned">
              <AlignCenter className="lsd:h-4 lsd:w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Right aligned">
              <AlignRight className="lsd:h-4 lsd:w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </CodeExample>
      </div>
    </div>
  );
}
