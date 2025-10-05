import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { FontToggle } from '../font-toggle';
import { ThemeToggle } from '../theme-toggle';

export default function InputFixture() {
  const [value, setValue] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-end gap-4">
        <ThemeToggle />
        <FontToggle />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Input Component</h2>
        <p className="text-muted-foreground">
          An input component that allows users to enter text data with labels
          and supporting text.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Variants</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Underlined (Default)</h3>
            <Input placeholder="Enter your text" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Outlined</h3>
            <Input variant="outlined" placeholder="Enter your text" />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Sizes</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Large (Default)</h3>
            <Input size="large" placeholder="Large input" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Medium</h3>
            <Input size="medium" placeholder="Medium input" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Small</h3>
            <Input size="small" placeholder="Small input" />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">With Labels</h2>
        <div className="space-y-6">
          <Input label="Name" placeholder="Enter your name" />
          <Input label="Email" placeholder="Enter your email" />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">With Supporting Text</h2>
        <div className="space-y-6">
          <Input
            label="Email"
            placeholder="Enter your email"
            supportingText="We'll never share your email with anyone else."
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            supportingText="Use at least 8 characters."
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Controlled Input</h2>
        <div className="space-y-4">
          <Input
            label="Type something"
            placeholder="Start typing..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            supportingText={`You typed: ${value || '(nothing)'}`}
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">States</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Normal</h3>
            <Input label="Normal state" placeholder="This is a normal input" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Disabled</h3>
            <Input
              label="Disabled state"
              placeholder="This is disabled"
              disabled
              supportingText="This field is disabled"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Error</h3>
            <Input
              label="Error state"
              placeholder="This has an error"
              error
              supportingText="This field has an error"
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Input Types</h2>
        <div className="space-y-6">
          <Input label="Email" type="email" placeholder="Enter your email" />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
          <Input label="Number" type="number" placeholder="Enter a number" />
          <Input label="Search" type="search" placeholder="Search..." />
        </div>
      </div>
    </div>
  );
}
