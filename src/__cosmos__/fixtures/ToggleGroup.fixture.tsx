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
import { ThemeToggle } from '../theme-toggle';

export default function ToggleGroupFixture() {
  return (
    <div className="p-8 w-full space-y-8">
      <div className="flex justify-end gap-4">
        <ThemeToggle />
        <FontToggle />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Toggle Group Component</h2>
        <p className="text-muted-foreground">
          A toggle group component that allows users to select one or more
          options from a group.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">
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
    <AlignLeft className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Center aligned">
    <AlignCenter className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Right aligned">
    <AlignRight className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
        >
          <ToggleGroup
            type="single"
            defaultValue="center"
            aria-label="Text alignment"
          >
            <ToggleGroupItem value="left" aria-label="Left aligned">
              <AlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Center aligned">
              <AlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Right aligned">
              <AlignRight className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </CodeExample>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Toggle Group with Text</h2>
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
        <h2 className="text-xl font-semibold mb-4">
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
    <Bold className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline">
    <Underline className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
        >
          <ToggleGroup
            type="multiple"
            defaultValue={['bold', 'italic']}
            aria-label="Text formatting"
          >
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <Underline className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </CodeExample>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">
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
    <AlignLeft className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Center aligned">
    <AlignCenter className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Right aligned">
    <AlignRight className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
        >
          <ToggleGroup
            type="single"
            defaultValue="center"
            aria-label="Text alignment"
          >
            <ToggleGroupItem value="left" aria-label="Left aligned">
              <AlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Center aligned">
              <AlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Right aligned">
              <AlignRight className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </CodeExample>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Toggle Group Sizes</h2>
        <CodeExample
          title="Toggle Group Sizes"
          code={`<div className="space-y-4">
  <div>
    <h3 className="text-md font-medium mb-2">Small</h3>
    <ToggleGroup
      type="single"
      size="sm"
      defaultValue="center"
      aria-label="Text alignment"
    >
      <ToggleGroupItem value="left" aria-label="Left aligned">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center aligned">
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Right aligned">
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  </div>

  <div>
    <h3 className="text-md font-medium mb-2">Default</h3>
    <ToggleGroup
      type="single"
      size="default"
      defaultValue="center"
      aria-label="Text alignment"
    >
      <ToggleGroupItem value="left" aria-label="Left aligned">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center aligned">
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Right aligned">
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  </div>

  <div>
    <h3 className="text-md font-medium mb-2">Large</h3>
    <ToggleGroup
      type="single"
      size="lg"
      defaultValue="center"
      aria-label="Text alignment"
    >
      <ToggleGroupItem value="left" aria-label="Left aligned">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center aligned">
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Right aligned">
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  </div>
</div>`}
        >
          <div className="space-y-4">
            <div>
              <h3 className="text-md font-medium mb-2">Small</h3>
              <ToggleGroup
                type="single"
                size="sm"
                defaultValue="center"
                aria-label="Text alignment"
              >
                <ToggleGroupItem value="left" aria-label="Left aligned">
                  <AlignLeft className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Center aligned">
                  <AlignCenter className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Right aligned">
                  <AlignRight className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div>
              <h3 className="text-md font-medium mb-2">Default</h3>
              <ToggleGroup
                type="single"
                size="default"
                defaultValue="center"
                aria-label="Text alignment"
              >
                <ToggleGroupItem value="left" aria-label="Left aligned">
                  <AlignLeft className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Center aligned">
                  <AlignCenter className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Right aligned">
                  <AlignRight className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div>
              <h3 className="text-md font-medium mb-2">Large</h3>
              <ToggleGroup
                type="single"
                size="lg"
                defaultValue="center"
                aria-label="Text alignment"
              >
                <ToggleGroupItem value="left" aria-label="Left aligned">
                  <AlignLeft className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Center aligned">
                  <AlignCenter className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Right aligned">
                  <AlignRight className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </CodeExample>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Disabled Toggle Group</h2>
        <CodeExample
          title="Disabled Toggle Group"
          code={`<ToggleGroup
  type="single"
  defaultValue="center"
  aria-label="Text alignment"
  disabled
>
  <ToggleGroupItem value="left" aria-label="Left aligned">
    <AlignLeft className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Center aligned">
    <AlignCenter className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Right aligned">
    <AlignRight className="h-4 w-4" />
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
              <AlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Center aligned">
              <AlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Right aligned">
              <AlignRight className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </CodeExample>
      </div>
    </div>
  );
}
