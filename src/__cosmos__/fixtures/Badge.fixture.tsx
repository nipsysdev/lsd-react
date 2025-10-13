import { Badge } from '@/components/ui/badge';
import { CodeExample } from '../code-example';
import { FontToggle } from '../font-toggle';
import { ThemeToggle } from '../theme-toggle';

export default function BadgeFixture() {
  return (
    <div className="p-8 w-full space-y-8">
      <div className="flex justify-end gap-4">
        <ThemeToggle />
        <FontToggle />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Badge Component</h2>
        <p className="text-muted-foreground">
          A badge component that displays small pieces of information.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Variants</h2>
        <CodeExample
          title="Badge Variants"
          code={`<div className="flex gap-4 items-center">
  <Badge variant="filled">Filled</Badge>
  <Badge variant="outlined">Outlined</Badge>
</div>`}
        >
          <div className="flex gap-4 items-center">
            <Badge variant="filled">Filled</Badge>
            <Badge variant="outlined">Outlined</Badge>
          </div>
        </CodeExample>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Sizes</h2>
        <CodeExample
          title="Badge Sizes"
          code={`<div className="flex gap-4 items-center">
  <Badge size="default">Default Size</Badge>
  <Badge size="sm">Small Size</Badge>
</div>`}
        >
          <div className="flex gap-4 items-center">
            <Badge size="default">Default Size</Badge>
            <Badge size="sm">Small Size</Badge>
          </div>
        </CodeExample>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Variant and Size Combinations</h2>
        <CodeExample
          title="Badge Variant and Size Combinations"
          code={`<div className="flex flex-col gap-4">
  <div className="flex gap-4 items-center">
    <Badge variant="filled" size="default">
      Filled Default
    </Badge>
    <Badge variant="outlined" size="default">
      Outlined Default
    </Badge>
  </div>
  <div className="flex gap-4 items-center">
    <Badge variant="filled" size="sm">
      Filled Small
    </Badge>
    <Badge variant="outlined" size="sm">
      Outlined Small
    </Badge>
  </div>
</div>`}
        >
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <Badge variant="filled" size="default">
                Filled Default
              </Badge>
              <Badge variant="outlined" size="default">
                Outlined Default
              </Badge>
            </div>
            <div className="flex gap-4 items-center">
              <Badge variant="filled" size="sm">
                Filled Small
              </Badge>
              <Badge variant="outlined" size="sm">
                Outlined Small
              </Badge>
            </div>
          </div>
        </CodeExample>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Long Text</h2>
        <CodeExample
          title="Badge Long Text"
          code={`<div className="flex gap-4 items-center">
  <Badge>
    This is a badge with very long text that should truncate
  </Badge>
  <Badge size="sm">This is a small badge with long text</Badge>
</div>`}
        >
          <div className="flex gap-4 items-center">
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
