import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CodeExample } from '../code-example';
import { FontToggle } from '../font-toggle';
import { ThemeToggle } from '../theme-toggle';

const frameworks = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
  { value: 'qwik', label: 'Qwik' },
];

const languages = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'ja', label: 'Japanese' },
  { value: 'zh', label: 'Chinese' },
];

export default () => (
  <div className="p-8 w-full space-y-8">
    <div className="flex justify-end gap-4">
      <ThemeToggle />
      <FontToggle />
    </div>

    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Select Component</h2>
      <p className="text-lsd-text-secondary">
        A select component that allows users to select from a list of options.
      </p>
    </div>

    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Basic Usage</h3>
        <CodeExample
          title="Select Basic Usage"
          code={`<div className="flex flex-wrap gap-4">
<div>
  <Select>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select a framework" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Frameworks</SelectLabel>
        {frameworks.map((framework) => (
          <SelectItem key={framework.value} value={framework.value}>
            {framework.label}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
</div>
<div>
  <Select defaultValue="react">
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select a framework" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Frameworks</SelectLabel>
        {frameworks.map((framework) => (
          <SelectItem key={framework.value} value={framework.value}>
            {framework.label}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
</div>
</div>`}
        >
          <div className="flex flex-wrap gap-4">
            <div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a framework" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Frameworks</SelectLabel>
                    {frameworks.map((framework) => (
                      <SelectItem key={framework.value} value={framework.value}>
                        {framework.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select defaultValue="react">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a framework" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Frameworks</SelectLabel>
                    {frameworks.map((framework) => (
                      <SelectItem key={framework.value} value={framework.value}>
                        {framework.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CodeExample>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <CodeExample
          title="Select Sizes"
          code={`<div className="flex flex-wrap gap-4">
  <div>
    <h4 className="text-sm font-medium mb-1">Default Size</h4>
    <Select>
      <SelectTrigger className="w-[180px]" size="default">
        <SelectValue placeholder="Default size" />
      </SelectTrigger>
      <SelectContent>
        {frameworks.map((framework) => (
          <SelectItem key={framework.value} value={framework.value}>
            {framework.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
  <div>
    <h4 className="text-sm font-medium mb-1">Small Size</h4>
    <Select>
      <SelectTrigger className="w-[180px]" size="sm">
        <SelectValue placeholder="Small size" />
      </SelectTrigger>
      <SelectContent>
        {frameworks.map((framework) => (
          <SelectItem key={framework.value} value={framework.value}>
            {framework.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
</div>`}
        >
          <div className="flex flex-wrap gap-4">
            <div>
              <h4 className="text-sm font-medium mb-1">Default Size</h4>
              <Select>
                <SelectTrigger className="w-[180px]" size="default">
                  <SelectValue placeholder="Default size" />
                </SelectTrigger>
                <SelectContent>
                  {frameworks.map((framework) => (
                    <SelectItem key={framework.value} value={framework.value}>
                      {framework.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-1">Small Size</h4>
              <Select>
                <SelectTrigger className="w-[180px]" size="sm">
                  <SelectValue placeholder="Small size" />
                </SelectTrigger>
                <SelectContent>
                  {frameworks.map((framework) => (
                    <SelectItem key={framework.value} value={framework.value}>
                      {framework.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CodeExample>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">With Groups and Separators</h3>
        <CodeExample
          title="Select With Groups and Separators"
          code={`<div className="flex flex-wrap gap-4">
  <div>
    <Select>
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Frameworks</SelectLabel>
          {frameworks.map((framework) => (
            <SelectItem key={framework.value} value={framework.value}>
              {framework.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          {languages.map((language) => (
            <SelectItem key={language.value} value={language.value}>
              {language.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</div>`}
        >
          <div className="flex flex-wrap gap-4">
            <div>
              <Select>
                <SelectTrigger className="w-[250px]">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Frameworks</SelectLabel>
                    {frameworks.map((framework) => (
                      <SelectItem key={framework.value} value={framework.value}>
                        {framework.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                  <SelectSeparator />
                  <SelectGroup>
                    <SelectLabel>Languages</SelectLabel>
                    {languages.map((language) => (
                      <SelectItem key={language.value} value={language.value}>
                        {language.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CodeExample>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Disabled State</h3>
        <CodeExample
          title="Select Disabled State"
          code={`<div className="flex flex-wrap gap-4">
  <div>
    <Select disabled>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Disabled select" />
      </SelectTrigger>
      <SelectContent>
        {frameworks.map((framework) => (
          <SelectItem key={framework.value} value={framework.value}>
            {framework.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
  <div>
    <Select disabled defaultValue="react">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Disabled select" />
      </SelectTrigger>
      <SelectContent>
        {frameworks.map((framework) => (
          <SelectItem key={framework.value} value={framework.value}>
            {framework.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
</div>`}
        >
          <div className="flex flex-wrap gap-4">
            <div>
              <Select disabled>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Disabled select" />
                </SelectTrigger>
                <SelectContent>
                  {frameworks.map((framework) => (
                    <SelectItem key={framework.value} value={framework.value}>
                      {framework.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select disabled defaultValue="react">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Disabled select" />
                </SelectTrigger>
                <SelectContent>
                  {frameworks.map((framework) => (
                    <SelectItem key={framework.value} value={framework.value}>
                      {framework.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CodeExample>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">With Value Change Handler</h3>
        <CodeExample
          title="Select With Value Change Handler"
          code={`<div className="flex flex-wrap gap-4">
  <div>
    <Select onValueChange={(value) => console.log('Selected:', value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a framework" />
      </SelectTrigger>
      <SelectContent>
        {frameworks.map((framework) => (
          <SelectItem key={framework.value} value={framework.value}>
            {framework.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
</div>`}
        >
          <div className="flex flex-wrap gap-4">
            <div>
              <Select
                onValueChange={(value) => console.log('Selected:', value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a framework" />
                </SelectTrigger>
                <SelectContent>
                  {frameworks.map((framework) => (
                    <SelectItem key={framework.value} value={framework.value}>
                      {framework.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CodeExample>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Controlled Component</h3>
        <CodeExample
          title="Select Controlled Component"
          code={`function ControlledSelectExample() {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleClear = () => {
    setSelectedValue('');
  };

  const handleSetValue = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div className="space-y-4">
      <Select value={selectedValue} onValueChange={setSelectedValue}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a framework" />
        </SelectTrigger>
        <SelectContent>
          {frameworks.map((framework) => (
            <SelectItem key={framework.value} value={framework.value}>
              {framework.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => handleSetValue('react')}
          className="px-3 py-1 text-sm bg-lsd-surface-secondary border border-lsd-border"
        >
          Set to React
        </button>
        <button
          type="button"
          onClick={() => handleSetValue('vue')}
          className="px-3 py-1 text-sm bg-lsd-surface-secondary border border-lsd-border"
        >
          Set to Vue
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="px-3 py-1 text-sm bg-lsd-surface-secondary border border-lsd-border"
        >
          Clear
        </button>
      </div>
      <p className="text-sm text-lsd-text-secondary">
        Selected value: {selectedValue || 'None'}
      </p>
    </div>
  );
}`}
        >
          <div className="flex flex-wrap gap-4">
            <div>
              <h4 className="text-sm font-medium mb-1">
                With External State Control
              </h4>
              <ControlledSelectExample />
            </div>
          </div>
        </CodeExample>
      </div>
    </div>
  </div>
);

function ControlledSelectExample() {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleClear = () => {
    setSelectedValue('');
  };

  const handleSetValue = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div className="space-y-4">
      <Select value={selectedValue} onValueChange={setSelectedValue}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a framework" />
        </SelectTrigger>
        <SelectContent>
          {frameworks.map((framework) => (
            <SelectItem key={framework.value} value={framework.value}>
              {framework.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => handleSetValue('react')}
          className="px-3 py-1 text-sm bg-lsd-surface-secondary border border-lsd-border"
        >
          Set to React
        </button>
        <button
          type="button"
          onClick={() => handleSetValue('vue')}
          className="px-3 py-1 text-sm bg-lsd-surface-secondary border border-lsd-border"
        >
          Set to Vue
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="px-3 py-1 text-sm bg-lsd-surface-secondary border border-lsd-border"
        >
          Clear
        </button>
      </div>
      <p className="text-sm text-lsd-text-secondary">
        Selected value: {selectedValue || 'None'}
      </p>
    </div>
  );
}
