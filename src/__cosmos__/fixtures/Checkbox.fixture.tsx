import { useId, useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { FontToggle } from '../font-toggle';
import { ThemeToggle } from '../theme-toggle';

export default function CheckboxFixture() {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(true);

  const defaultCheckboxId = useId();
  const controlledCheckboxId = useId();
  const disabledUncheckedId = useId();
  const disabledCheckedId = useId();
  const termsId = useId();
  const newsletterId = useId();
  const updatesId = useId();
  const techId = useId();
  const designId = useId();
  const businessId = useId();

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-end gap-4">
        <ThemeToggle />
        <FontToggle />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Checkbox Component</h2>
        <p className="text-muted-foreground">
          A checkbox component that allows users to select one or more options
          from a set.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Default Checkbox</h2>
        <div className="flex items-center space-x-2">
          <Checkbox id={defaultCheckboxId} />
          <label htmlFor={defaultCheckboxId}>Accept terms and conditions</label>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Controlled Checkbox</h2>
        <div className="flex items-center space-x-2">
          <Checkbox
            id={controlledCheckboxId}
            checked={checked}
            onCheckedChange={(value) => setChecked(!!value)}
          />
          <label htmlFor={controlledCheckboxId}>
            Checkbox is {checked ? 'checked' : 'unchecked'}
          </label>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Checked by Default</h2>
        <div className="flex items-center space-x-2">
          <Checkbox id={disabledCheckedId} defaultChecked />
          <label htmlFor={disabledCheckedId}>Pre-checked option</label>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Disabled State</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id={disabledUncheckedId} disabled />
            <label htmlFor={disabledUncheckedId}>Disabled unchecked</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id={disabledCheckedId} disabled checked />
            <label htmlFor={disabledCheckedId}>Disabled checked</label>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Multiple Checkboxes</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id={termsId}
              checked={checked2}
              onCheckedChange={(value) => setChecked2(!!value)}
            />
            <label htmlFor={termsId}>I agree to the terms and conditions</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id={newsletterId} />
            <label htmlFor={newsletterId}>Subscribe to newsletter</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id={updatesId} />
            <label htmlFor={updatesId}>Receive product updates</label>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Checkbox Group</h2>
        <div className="space-y-3">
          <p className="text-sm font-medium">Select your interests:</p>
          <div className="space-y-2 pl-2">
            <div className="flex items-center space-x-2">
              <Checkbox id={techId} />
              <label htmlFor={techId}>Technology</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id={designId} />
              <label htmlFor={designId}>Design</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id={businessId} />
              <label htmlFor={businessId}>Business</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
