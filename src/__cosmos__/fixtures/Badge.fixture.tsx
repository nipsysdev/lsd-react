import { Badge } from '@/components/ui/badge';
import { CodeExample } from '../code-example';
import { FontToggle } from '../font-toggle';
import { ThemeToggle } from '../theme-toggle';

export default function BadgeFixture() {
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
        <h2 className="lsd:text-xl lsd:font-semibold">Variants</h2>
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
        <h2 className="lsd:text-xl lsd:font-semibold">Sizes</h2>
        <CodeExample
          title="Badge Sizes"
          code={`<div className="lsd:flex lsd:gap-4 lsd:items-center">
  <Badge size="default">Default Size</Badge>
  <Badge size="sm">Small Size</Badge>
</div>`}
        >
          <div className="lsd:flex lsd:gap-4 lsd:items-center">
            <Badge size="default">Default Size</Badge>
            <Badge size="sm">Small Size</Badge>
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
    <Badge variant="filled" size="default">
      Filled Default
    </Badge>
    <Badge variant="outlined" size="default">
      Outlined Default
    </Badge>
  </div>
  <div className="lsd:flex lsd:gap-4 lsd:items-center">
    <Badge variant="filled" size="sm">
      Filled Small
    </Badge>
    <Badge variant="outlined" size="sm">
      Outlined Small
    </Badge>
  </div>
</div>`}
        >
          <div className="lsd:flex lsd:flex-col lsd:gap-4">
            <div className="lsd:flex lsd:gap-4 lsd:items-center">
              <Badge variant="filled" size="default">
                Filled Default
              </Badge>
              <Badge variant="outlined" size="default">
                Outlined Default
              </Badge>
            </div>
            <div className="lsd:flex lsd:gap-4 lsd:items-center">
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
