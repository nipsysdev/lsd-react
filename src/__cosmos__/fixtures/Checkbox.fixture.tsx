import { useId, useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { CodeExample } from '../code-example';
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
    <div className="lsd:p-8 lsd:w-full lsd:space-y-8">
      <div className="lsd:flex lsd:justify-end lsd:gap-4">
        <ThemeToggle />
        <FontToggle />
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-2xl lsd:font-bold">Checkbox Component</h2>
        <p className="lsd:text-muted-foreground">
          A checkbox component that allows users to select one or more options
          from a set.
        </p>
      </div>

      <div>
        <h2 className="lsd:text-xl lsd:font-semibold lsd:mb-4">
          Default Checkbox
        </h2>
        <CodeExample
          title="Checkbox Default"
          code={`<div className="lsd:flex lsd:items-center lsd:space-x-2">
  <Checkbox id="default-checkbox" />
  <label htmlFor="default-checkbox">Accept terms and conditions</label>
</div>`}
        >
          <div className="lsd:flex lsd:items-center lsd:space-x-2">
            <Checkbox id={defaultCheckboxId} />
            <label htmlFor={defaultCheckboxId}>
              Accept terms and conditions
            </label>
          </div>
        </CodeExample>
      </div>

      <div>
        <h2 className="lsd:text-xl lsd:font-semibold lsd:mb-4">
          Controlled Checkbox
        </h2>
        <CodeExample
          title="Checkbox Controlled"
          code={`function CheckboxExample() {
  const [checked, setChecked] = useState(false);
  
  return (
    <div className="lsd:flex lsd:items-center lsd:space-x-2">
      <Checkbox
        id="controlled-checkbox"
        checked={checked}
        onCheckedChange={(value) => setChecked(!!value)}
      />
      <label htmlFor="controlled-checkbox">
        Checkbox is {checked ? 'checked' : 'unchecked'}
      </label>
    </div>
  );
}`}
        >
          <div className="lsd:flex lsd:items-center lsd:space-x-2">
            <Checkbox
              id={controlledCheckboxId}
              checked={checked}
              onCheckedChange={(value) => setChecked(!!value)}
            />
            <label htmlFor={controlledCheckboxId}>
              Checkbox is {checked ? 'checked' : 'unchecked'}
            </label>
          </div>
        </CodeExample>
      </div>

      <div>
        <h2 className="lsd:text-xl lsd:font-semibold lsd:mb-4">
          Checked by Default
        </h2>
        <CodeExample
          title="Checkbox Checked by Default"
          code={`<div className="lsd:flex lsd:items-center lsd:space-x-2">
  <Checkbox id="default-checked" defaultChecked />
  <label htmlFor="default-checked">Pre-checked option</label>
</div>`}
        >
          <div className="lsd:flex lsd:items-center lsd:space-x-2">
            <Checkbox id={disabledCheckedId} defaultChecked />
            <label htmlFor={disabledCheckedId}>Pre-checked option</label>
          </div>
        </CodeExample>
      </div>

      <div>
        <h2 className="lsd:text-xl lsd:font-semibold lsd:mb-4">
          Disabled State
        </h2>
        <CodeExample
          title="Checkbox Disabled State"
          code={`<div className="lsd:space-y-4">
  <div className="lsd:flex lsd:items-center lsd:space-x-2">
    <Checkbox id="disabled-unchecked" disabled />
    <label htmlFor="disabled-unchecked">Disabled unchecked</label>
  </div>
  <div className="lsd:flex lsd:items-center lsd:space-x-2">
    <Checkbox id="disabled-checked" disabled checked />
    <label htmlFor="disabled-checked">Disabled checked</label>
  </div>
</div>`}
        >
          <div className="lsd:space-y-4">
            <div className="lsd:flex lsd:items-center lsd:space-x-2">
              <Checkbox id={disabledUncheckedId} disabled />
              <label htmlFor={disabledUncheckedId}>Disabled unchecked</label>
            </div>
            <div className="lsd:flex lsd:items-center lsd:space-x-2">
              <Checkbox id={disabledCheckedId} disabled checked />
              <label htmlFor={disabledCheckedId}>Disabled checked</label>
            </div>
          </div>
        </CodeExample>
      </div>

      <div>
        <h2 className="lsd:text-xl lsd:font-semibold lsd:mb-4">
          Multiple Checkboxes
        </h2>
        <CodeExample
          title="Checkbox Multiple Checkboxes"
          code={`function MultipleCheckboxesExample() {
  const [checked, setChecked] = useState(true);
  
  return (
    <div className="lsd:space-y-4">
      <div className="lsd:flex lsd:items-center lsd:space-x-2">
        <Checkbox
          id="terms"
          checked={checked}
          onCheckedChange={(value) => setChecked(!!value)}
        />
        <label htmlFor="terms">I agree to the terms and conditions</label>
      </div>
      <div className="lsd:flex lsd:items-center lsd:space-x-2">
        <Checkbox id="newsletter" />
        <label htmlFor="newsletter">Subscribe to newsletter</label>
      </div>
      <div className="lsd:flex lsd:items-center lsd:space-x-2">
        <Checkbox id="updates" />
        <label htmlFor="updates">Receive product updates</label>
      </div>
    </div>
  );
}`}
        >
          <div className="lsd:space-y-4">
            <div className="lsd:flex lsd:items-center lsd:space-x-2">
              <Checkbox
                id={termsId}
                checked={checked2}
                onCheckedChange={(value) => setChecked2(!!value)}
              />
              <label htmlFor={termsId}>
                I agree to the terms and conditions
              </label>
            </div>
            <div className="lsd:flex lsd:items-center lsd:space-x-2">
              <Checkbox id={newsletterId} />
              <label htmlFor={newsletterId}>Subscribe to newsletter</label>
            </div>
            <div className="lsd:flex lsd:items-center lsd:space-x-2">
              <Checkbox id={updatesId} />
              <label htmlFor={updatesId}>Receive product updates</label>
            </div>
          </div>
        </CodeExample>
      </div>

      <div>
        <h2 className="lsd:text-xl lsd:font-semibold lsd:mb-4">
          Checkbox Group
        </h2>
        <CodeExample
          title="Checkbox Group"
          code={`<div className="lsd:space-y-3">
  <p className="lsd:text-sm lsd:font-medium">Select your interests:</p>
  <div className="lsd:space-y-2 lsd:pl-2">
    <div className="lsd:flex lsd:items-center lsd:space-x-2">
      <Checkbox id="tech" />
      <label htmlFor="tech">Technology</label>
    </div>
    <div className="lsd:flex lsd:items-center lsd:space-x-2">
      <Checkbox id="design" />
      <label htmlFor="design">Design</label>
    </div>
    <div className="lsd:flex lsd:items-center lsd:space-x-2">
      <Checkbox id="business" />
      <label htmlFor="business">Business</label>
    </div>
  </div>
</div>`}
        >
          <div className="lsd:space-y-3">
            <p className="lsd:text-sm lsd:font-medium">
              Select your interests:
            </p>
            <div className="lsd:space-y-2 lsd:pl-2">
              <div className="lsd:flex lsd:items-center lsd:space-x-2">
                <Checkbox id={techId} />
                <label htmlFor={techId}>Technology</label>
              </div>
              <div className="lsd:flex lsd:items-center lsd:space-x-2">
                <Checkbox id={designId} />
                <label htmlFor={designId}>Design</label>
              </div>
              <div className="lsd:flex lsd:items-center lsd:space-x-2">
                <Checkbox id={businessId} />
                <label htmlFor={businessId}>Business</label>
              </div>
            </div>
          </div>
        </CodeExample>
      </div>
    </div>
  );
}
