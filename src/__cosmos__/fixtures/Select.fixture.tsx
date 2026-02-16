import { useState } from 'react';
import { Button } from '@/components/ui/button';
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
import { ThemeAccentToggle, ThemeToggle } from '../theme-toggle';

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
  <div className="lsd:p-8 lsd:w-full lsd:space-y-8">
    <div className="lsd:flex lsd:justify-end lsd:gap-4">
      <ThemeToggle />
      <ThemeAccentToggle />
      <FontToggle />
    </div>

    <div className="lsd:space-y-4">
      <h2 className="lsd:text-2xl lsd:font-bold">Select Component</h2>
      <p className="lsd:text-lsd-text-secondary">
        A select component that allows users to select from a list of options.
      </p>
    </div>

    <div className="lsd:space-y-6">
      <div className="lsd:space-y-2">
        <h3 className="lsd:text-lg lsd:font-semibold">Basic Usage</h3>
        <CodeExample
          title="Select Basic Usage"
          code={`<div className="lsd:flex lsd:flex-wrap lsd:gap-4">
<div>
  <Select>
    <SelectTrigger className="lsd:w-[180px]">
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
    <SelectTrigger className="lsd:w-[180px]">
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
          <div className="lsd:flex lsd:flex-wrap lsd:gap-4">
            <div>
              <Select>
                <SelectTrigger className="lsd:w-[180px]">
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
                <SelectTrigger className="lsd:w-[180px]">
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

      <div className="lsd:space-y-2">
        <h3 className="lsd:text-lg lsd:font-semibold">Sizes</h3>
        <CodeExample
          title="Select Sizes"
          code={`<div className="lsd:flex lsd:flex-wrap lsd:gap-4">
  <div>
    <h4 className="lsd:text-sm lsd:font-medium lsd:mb-1">Default Size</h4>
    <Select>
      <SelectTrigger className="lsd:w-[180px]" size="default">
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
    <h4 className="lsd:text-sm lsd:font-medium lsd:mb-1">Small Size</h4>
    <Select>
      <SelectTrigger className="lsd:w-[180px]" size="sm">
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
          <div className="lsd:flex lsd:flex-wrap lsd:gap-4">
            <div>
              <h4 className="lsd:text-sm lsd:font-medium lsd:mb-1">
                Default Size
              </h4>
              <Select>
                <SelectTrigger className="lsd:w-[180px]" size="default">
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
              <h4 className="lsd:text-sm lsd:font-medium lsd:mb-1">
                Small Size
              </h4>
              <Select>
                <SelectTrigger className="lsd:w-[180px]" size="sm">
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

      <div className="lsd:space-y-2">
        <h3 className="lsd:text-lg lsd:font-semibold">
          With Groups and Separators
        </h3>
        <CodeExample
          title="Select With Groups and Separators"
          code={`<div className="lsd:flex lsd:flex-wrap lsd:gap-4">
  <div>
    <Select>
      <SelectTrigger className="lsd:w-[250px]">
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
          <div className="lsd:flex lsd:flex-wrap lsd:gap-4">
            <div>
              <Select>
                <SelectTrigger className="lsd:w-[250px]">
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

      <div className="lsd:space-y-2">
        <h3 className="lsd:text-lg lsd:font-semibold">Disabled State</h3>
        <CodeExample
          title="Select Disabled State"
          code={`<div className="lsd:flex lsd:flex-wrap lsd:gap-4">
  <div>
    <Select disabled>
      <SelectTrigger className="lsd:w-[180px]">
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
      <SelectTrigger className="lsd:w-[180px]">
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
          <div className="lsd:flex lsd:flex-wrap lsd:gap-4">
            <div>
              <Select disabled>
                <SelectTrigger className="lsd:w-[180px]">
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
                <SelectTrigger className="lsd:w-[180px]">
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

      <div className="lsd:space-y-2">
        <h3 className="lsd:text-lg lsd:font-semibold">
          With Value Change Handler
        </h3>
        <CodeExample
          title="Select With Value Change Handler"
          code={`<div className="lsd:flex lsd:flex-wrap lsd:gap-4">
  <div>
    <Select onValueChange={(value) => console.log('Selected:', value)}>
      <SelectTrigger className="lsd:w-[180px]">
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
          <div className="lsd:flex lsd:flex-wrap lsd:gap-4">
            <div>
              <Select
                onValueChange={(value) => console.log('Selected:', value)}
              >
                <SelectTrigger className="lsd:w-[180px]">
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

      <div className="lsd:space-y-2">
        <h3 className="lsd:text-lg lsd:font-semibold">Controlled Component</h3>
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
    <div className="lsd:space-y-4">
      <Select value={selectedValue} onValueChange={setSelectedValue}>
        <SelectTrigger className="lsd:w-[180px]">
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
      <div className="lsd:flex lsd:gap-2">
        <Button
          variant="outlined"
          size="sm"
          onClick={() => handleSetValue('react')}
        >
          Set to React
        </Button>
        <Button
          variant="outlined"
          size="sm"
          onClick={() => handleSetValue('vue')}
        >
          Set to Vue
        </Button>
        <Buttton
          variant="outlined"
          size="sm"
          onClick={handleClear}
        >
          Clear
        </Buttton>
      </div>
      <p className="lsd:text-sm lsd:text-lsd-text-secondary">
        Selected value: {selectedValue || 'None'}
      </p>
    </div>
  );
}`}
        >
          <div className="lsd:flex lsd:flex-wrap lsd:gap-4">
            <div>
              <h4 className="lsd:text-sm lsd:font-medium lsd:mb-1">
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
    <div className="lsd:space-y-4">
      <Select value={selectedValue} onValueChange={setSelectedValue}>
        <SelectTrigger className="lsd:w-[180px]">
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
      <div className="lsd:flex lsd:gap-2">
        <Button
          variant="outlined"
          size="sm"
          onClick={() => handleSetValue('react')}
        >
          Set to React
        </Button>
        <Button
          variant="outlined"
          size="sm"
          onClick={() => handleSetValue('vue')}
        >
          Set to Vue
        </Button>
        <Button variant="outlined" size="sm" onClick={handleClear}>
          Clear
        </Button>
      </div>
      <p className="lsd:text-sm lsd:text-lsd-text-secondary">
        Selected value: {selectedValue || 'None'}
      </p>
    </div>
  );
}
