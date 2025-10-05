import { useId } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
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
    <div className="p-8 space-y-8">
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
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id={defaultCheckboxId} />
            <Label htmlFor={defaultCheckboxId}>Default Label</Label>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Label Variants</h2>
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
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Label Sizes</h2>
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
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Label with Checkbox</h2>
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
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Label Combinations</h2>
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
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Disabled State</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id={disabledCheckboxId} disabled />
            <Label htmlFor={disabledCheckboxId} className="opacity-50">
              Disabled Label
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
}
