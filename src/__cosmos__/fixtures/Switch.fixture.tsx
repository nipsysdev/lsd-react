import { useId, useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { CodeExample } from '../code-example';
import { FontToggle } from '../font-toggle';
import { ThemeToggle } from '../theme-toggle';

export default function SwitchFixture() {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(true);

  const airplaneModeId = useId();
  const controlledSwitchId = useId();
  const defaultCheckedId = useId();
  const disabledUncheckedId = useId();
  const disabledCheckedId = useId();
  const wifiId = useId();
  const bluetoothId = useId();
  const locationId = useId();

  return (
    <div className="lsd:p-8 lsd:w-full lsd:space-y-8">
      <div className="lsd:flex lsd:justify-end lsd:gap-4">
        <ThemeToggle />
        <FontToggle />
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-2xl lsd:font-bold">Switch Component</h2>
        <p className="lsd:text-muted-foreground">
          A switch component that allows users to toggle between two states.
        </p>
      </div>

      <div>
        <h2 className="lsd:text-xl lsd:font-semibold lsd:mb-4">
          Default Switch
        </h2>
        <CodeExample
          title="Default Switch"
          code={`<div className="lsd:flex lsd:items-center lsd:space-x-2">
  <Switch id="airplane-mode" />
  <label htmlFor="airplane-mode">Airplane Mode</label>
</div>`}
        >
          <div className="lsd:flex lsd:items-center lsd:space-x-2">
            <Switch id={airplaneModeId} />
            <label htmlFor={airplaneModeId}>Airplane Mode</label>
          </div>
        </CodeExample>
      </div>

      <div>
        <h2 className="lsd:text-xl lsd:font-semibold lsd:mb-4">
          Controlled Switch
        </h2>
        <CodeExample
          title="Controlled Switch"
          code={`const [checked, setChecked] = useState(false);

<div className="lsd:flex lsd:items-center lsd:space-x-2">
  <Switch
    id="controlled-switch"
    checked={checked}
    onCheckedChange={setChecked}
  />
  <label htmlFor="controlled-switch">
    Switch is {checked ? 'on' : 'off'}
  </label>
</div>`}
        >
          <div className="lsd:flex lsd:items-center lsd:space-x-2">
            <Switch
              id={controlledSwitchId}
              checked={checked}
              onCheckedChange={setChecked}
            />
            <label htmlFor={controlledSwitchId}>
              Switch is {checked ? 'on' : 'off'}
            </label>
          </div>
        </CodeExample>
      </div>

      <div>
        <h2 className="lsd:text-xl lsd:font-semibold lsd:mb-4">
          Checked by Default
        </h2>
        <CodeExample
          title="Checked by Default"
          code={`<div className="lsd:flex lsd:items-center lsd:space-x-2">
  <Switch id="default-checked" defaultChecked />
  <label htmlFor="default-checked">Enabled by default</label>
</div>`}
        >
          <div className="lsd:flex lsd:items-center lsd:space-x-2">
            <Switch id={defaultCheckedId} defaultChecked />
            <label htmlFor={defaultCheckedId}>Enabled by default</label>
          </div>
        </CodeExample>
      </div>

      <div>
        <h2 className="lsd:text-xl lsd:font-semibold lsd:mb-4">
          Disabled State
        </h2>
        <CodeExample
          title="Disabled State"
          code={`<div className="lsd:space-y-4">
  <div className="lsd:flex lsd:items-center lsd:space-x-2">
    <Switch id="disabled-unchecked" disabled />
    <label htmlFor="disabled-unchecked">Disabled unchecked</label>
  </div>
  <div className="lsd:flex lsd:items-center lsd:space-x-2">
    <Switch id="disabled-checked" disabled checked />
    <label htmlFor="disabled-checked">Disabled checked</label>
  </div>
</div>`}
        >
          <div className="lsd:space-y-4">
            <div className="lsd:flex lsd:items-center lsd:space-x-2">
              <Switch id={disabledUncheckedId} disabled />
              <label htmlFor={disabledUncheckedId}>Disabled unchecked</label>
            </div>
            <div className="lsd:flex lsd:items-center lsd:space-x-2">
              <Switch id={disabledCheckedId} disabled checked />
              <label htmlFor={disabledCheckedId}>Disabled checked</label>
            </div>
          </div>
        </CodeExample>
      </div>

      <div>
        <h2 className="lsd:text-xl lsd:font-semibold lsd:mb-4">
          Multiple Switches
        </h2>
        <CodeExample
          title="Multiple Switches"
          code={`const [checked2, setChecked2] = useState(true);

<div className="lsd:space-y-4">
  <div className="lsd:flex lsd:items-center lsd:space-x-2">
    <Switch
      id="wifi"
      checked={checked2}
      onCheckedChange={setChecked2}
    />
    <label htmlFor="wifi">Wi-Fi</label>
  </div>
  <div className="lsd:flex lsd:items-center lsd:space-x-2">
    <Switch id="bluetooth" />
    <label htmlFor="bluetooth">Bluetooth</label>
  </div>
  <div className="lsd:flex lsd:items-center lsd:space-x-2">
    <Switch id="location" />
    <label htmlFor="location">Location Services</label>
  </div>
</div>`}
        >
          <div className="lsd:space-y-4">
            <div className="lsd:flex lsd:items-center lsd:space-x-2">
              <Switch
                id={wifiId}
                checked={checked2}
                onCheckedChange={setChecked2}
              />
              <label htmlFor={wifiId}>Wi-Fi</label>
            </div>
            <div className="lsd:flex lsd:items-center lsd:space-x-2">
              <Switch id={bluetoothId} />
              <label htmlFor={bluetoothId}>Bluetooth</label>
            </div>
            <div className="lsd:flex lsd:items-center lsd:space-x-2">
              <Switch id={locationId} />
              <label htmlFor={locationId}>Location Services</label>
            </div>
          </div>
        </CodeExample>
      </div>
    </div>
  );
}
