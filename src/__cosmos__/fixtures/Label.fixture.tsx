import { useId } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { CodeExample } from '../code-example';
import { FontToggle } from '../font-toggle';
import { ThemeToggle } from '../theme-toggle';

export default function LabelFixture() {
  const defaultCheckboxId = useId();
  const primaryCheckboxId = useId();
  const secondaryCheckboxId = useId();
  const smallCheckboxId = useId();
  const mediumCheckboxId = useId();
  const largeCheckboxId = useId();
  const checkbox1Id = useId();
  const checkbox2Id = useId();
  const checkbox3Id = useId();
  const combo1Id = useId();
  const combo2Id = useId();
  const disabledCheckboxId = useId();
  return (
    <div className="p-8 w-full space-y-8">
      <div className="flex justify-end gap-4">
        <ThemeToggle />
        <FontToggle />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Label Component</h2>
        <p className="text-muted-foreground">
          A label component that provides text labels for form controls and
          other UI elements.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Default Label</h2>
        <CodeExample
          title="Label Default"
          code={`<div className="flex items-center space-x-2">
  <Checkbox id="default-checkbox" />
  <Label htmlFor="default-checkbox">Default Label</Label>
</div>`}
        >
          <div className="flex items-center space-x-2">
            <Checkbox id={defaultCheckboxId} />
            <Label htmlFor={defaultCheckboxId}>Default Label</Label>
          </div>
        </CodeExample>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Label Variants</h2>
        <CodeExample
          title="Label Variants"
          code={`<div className="space-y-4">
  <div className="flex items-center space-x-2">
    <Checkbox id="primary-checkbox" />
    <Label variant="default" htmlFor="primary-checkbox">
      Primary Label (Default)
    </Label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="secondary-checkbox" />
    <Label variant="secondary" htmlFor="secondary-checkbox">
      Secondary Label
    </Label>
  </div>
</div>`}
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id={primaryCheckboxId} />
              <Label variant="default" htmlFor={primaryCheckboxId}>
                Primary Label (Default)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id={secondaryCheckboxId} />
              <Label variant="secondary" htmlFor={secondaryCheckboxId}>
                Secondary Label
              </Label>
            </div>
          </div>
        </CodeExample>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Label Sizes</h2>
        <CodeExample
          title="Label Sizes"
          code={`<div className="space-y-4">
  <div className="flex items-center space-x-2">
    <Checkbox id="small-checkbox" />
    <Label size="sm" htmlFor="small-checkbox">
      Small Label
    </Label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="medium-checkbox" />
    <Label size="md" htmlFor="medium-checkbox">
      Medium Label (Default)
    </Label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="large-checkbox" />
    <Label size="lg" htmlFor="large-checkbox">
      Large Label
    </Label>
  </div>
</div>`}
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id={smallCheckboxId} />
              <Label size="sm" htmlFor={smallCheckboxId}>
                Small Label
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id={mediumCheckboxId} />
              <Label size="md" htmlFor={mediumCheckboxId}>
                Medium Label (Default)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id={largeCheckboxId} />
              <Label size="lg" htmlFor={largeCheckboxId}>
                Large Label
              </Label>
            </div>
          </div>
        </CodeExample>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Label with Checkbox</h2>
        <CodeExample
          title="Label with Checkbox"
          code={`<div className="space-y-4">
  <div className="flex items-center space-x-2">
    <Checkbox id="terms-checkbox" />
    <Label htmlFor="terms-checkbox">Accept terms and conditions</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="newsletter-checkbox" />
    <Label variant="secondary" htmlFor="newsletter-checkbox">
      Subscribe to newsletter
    </Label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="disabled-checkbox" disabled />
    <Label htmlFor="disabled-checkbox" className="opacity-50">
      Disabled option
    </Label>
  </div>
</div>`}
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id={checkbox1Id} />
              <Label htmlFor={checkbox1Id}>Accept terms and conditions</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id={checkbox2Id} />
              <Label variant="secondary" htmlFor={checkbox2Id}>
                Subscribe to newsletter
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id={checkbox3Id} disabled />
              <Label htmlFor={checkbox3Id} className="opacity-50">
                Disabled option
              </Label>
            </div>
          </div>
        </CodeExample>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Label Combinations</h2>
        <CodeExample
          title="Label Combinations"
          code={`<div className="space-y-4">
  <div className="flex items-center space-x-2">
    <Checkbox id="combo1-checkbox" />
    <Label variant="secondary" size="sm" htmlFor="combo1-checkbox">
      Secondary Small Label
    </Label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="combo2-checkbox" />
    <Label variant="default" size="lg" htmlFor="combo2-checkbox">
      Primary Large Label
    </Label>
  </div>
</div>`}
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id={combo1Id} />
              <Label variant="secondary" size="sm" htmlFor={combo1Id}>
                Secondary Small Label
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id={combo2Id} />
              <Label variant="default" size="lg" htmlFor={combo2Id}>
                Primary Large Label
              </Label>
            </div>
          </div>
        </CodeExample>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Disabled State</h2>
        <CodeExample
          title="Label Disabled State"
          code={`<div className="space-y-4">
  <div className="flex items-center space-x-2">
    <Checkbox id="disabled-checkbox" disabled />
    <Label htmlFor="disabled-checkbox" className="opacity-50">
      Disabled Label
    </Label>
  </div>
</div>`}
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id={disabledCheckboxId} disabled />
              <Label htmlFor={disabledCheckboxId} className="opacity-50">
                Disabled Label
              </Label>
            </div>
          </div>
        </CodeExample>
      </div>
    </div>
  );
}
