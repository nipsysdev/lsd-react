import { useId, useState } from 'react';
import { Switch } from '@/components/ui/switch';
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
    <div className="p-8 space-y-8">
      <div className="flex justify-end gap-4">
        <ThemeToggle />
        <FontToggle />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Switch Component</h2>
        <p className="text-muted-foreground">
          A switch component that allows users to toggle between two states.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Default Switch</h2>
        <div className="flex items-center space-x-2">
          <Switch id={airplaneModeId} />
          <label htmlFor={airplaneModeId}>Airplane Mode</label>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Controlled Switch</h2>
        <div className="flex items-center space-x-2">
          <Switch
            id={controlledSwitchId}
            checked={checked}
            onCheckedChange={setChecked}
          />
          <label htmlFor={controlledSwitchId}>
            Switch is {checked ? 'on' : 'off'}
          </label>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Checked by Default</h2>
        <div className="flex items-center space-x-2">
          <Switch id={defaultCheckedId} defaultChecked />
          <label htmlFor={defaultCheckedId}>Enabled by default</label>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Disabled State</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch id={disabledUncheckedId} disabled />
            <label htmlFor={disabledUncheckedId}>Disabled unchecked</label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id={disabledCheckedId} disabled checked />
            <label htmlFor={disabledCheckedId}>Disabled checked</label>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Multiple Switches</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch
              id={wifiId}
              checked={checked2}
              onCheckedChange={setChecked2}
            />
            <label htmlFor={wifiId}>Wi-Fi</label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id={bluetoothId} />
            <label htmlFor={bluetoothId}>Bluetooth</label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id={locationId} />
            <label htmlFor={locationId}>Location Services</label>
          </div>
        </div>
      </div>
    </div>
  );
}
