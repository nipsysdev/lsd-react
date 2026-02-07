import { SearchIcon } from 'lucide-react';
import { useState } from 'react';
import { Autocomplete } from '@/components/ui/autocomplete';
import { Button } from '@/components/ui/button';
import { CodeExample } from '../code-example';
import { FontToggle } from '../font-toggle';
import { ThemeToggle } from '../theme-toggle';

const frameworks = [
  { value: '1', label: 'React' },
  { value: '2', label: 'Vue' },
  { value: '4', label: 'Angular' },
  { value: '5', label: 'Svelte' },
  { value: '6', label: 'Solid' },
  { value: '7', label: 'Qwik' },
];

export default () => (
  <div className="lsd:p-8 lsd:w-full lsd:space-y-8">
    <div className="lsd:flex lsd:justify-end lsd:gap-4">
      <ThemeToggle />
      <FontToggle />
    </div>

    <div className="lsd:space-y-4">
      <h2 className="lsd:text-2xl lsd:font-bold">Autocomplete Component</h2>
      <p className="lsd:text-muted-foreground">
        An autocomplete component that allows users to select from a list of
        options.
      </p>
    </div>

    <div className="lsd:space-y-6">
      <div className="lsd:space-y-2">
        <h3 className="lsd:text-lg lsd:font-semibold">Sizes</h3>
        <CodeExample
          title="Autocomplete Sizes"
          code={`<div className="lsd:flex lsd:flex-wrap lsd:gap-4">
  <div>
    <Autocomplete
      label="Large"
      options={frameworks}
      placeholder="Large size..."
      size="lg"
    />
  </div>
  <div>
    <Autocomplete
      label="Medium"
      options={frameworks}
      placeholder="Medium size..."
      size="md"
    />
  </div>
  <div>
    <Autocomplete
      label="Small"
      options={frameworks}
      placeholder="Small size..."
      size="sm"
    />
  </div>
</div>`}
        >
          <div className="lsd:flex lsd:flex-wrap lsd:gap-4">
            <div>
              <Autocomplete
                label="Large"
                options={frameworks}
                placeholder="Large size..."
                size="lg"
              />
            </div>
            <div>
              <Autocomplete
                label="Medium"
                options={frameworks}
                placeholder="Medium size..."
                size="md"
              />
            </div>
            <div>
              <Autocomplete
                label="Small"
                options={frameworks}
                placeholder="Small size..."
                size="sm"
              />
            </div>
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-2">
        <h3 className="lsd:text-lg lsd:font-semibold">Variants</h3>
        <CodeExample
          title="Autocomplete Variants"
          code={`<div className="lsd:flex lsd:flex-wrap lsd:gap-4">
  <div>
    <Autocomplete
      label="Outlined"
      options={frameworks}
      placeholder="Outlined variant..."
      variant="outlined"
    />
  </div>
  <div>
    <Autocomplete
      label="Underlined"
      options={frameworks}
      placeholder="Underlined variant..."
      variant="underlined"
    />
  </div>
</div>`}
        >
          <div className="lsd:flex lsd:flex-wrap lsd:gap-4">
            <div>
              <Autocomplete
                label="Outlined"
                options={frameworks}
                placeholder="Outlined variant..."
                variant="outlined"
              />
            </div>
            <div>
              <Autocomplete
                label="Underlined"
                options={frameworks}
                placeholder="Underlined variant..."
                variant="underlined"
              />
            </div>
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-2">
        <h3 className="lsd:text-lg lsd:font-semibold">With Icon</h3>
        <CodeExample
          title="Autocomplete with Icons"
          code={`<div className="lsd:flex lsd:flex-wrap lsd:gap-4">
  <div>
    <h4 className="lsd:text-sm lsd:font-medium lsd:mb-1">With Search Icon</h4>
    <Autocomplete
      options={frameworks}
      placeholder="Search..."
      icon={<SearchIcon className="lsd:h-4 lsd:w-4 lsd:text-lsd-icon-primary" />}
    />
  </div>
  <div>
    <h4 className="lsd:text-sm lsd:font-medium lsd:mb-1">With Clear Icon</h4>
    <Autocomplete
      options={frameworks}
      placeholder="Type to see clear icon..."
      icon={<SearchIcon className="lsd:h-4 lsd:w-4 lsd:text-lsd-icon-primary" />}
      defaultValue="react"
    />
  </div>
</div>`}
        >
          <div className="lsd:flex lsd:flex-wrap lsd:gap-4">
            <div>
              <h4 className="lsd:text-sm lsd:font-medium lsd:mb-1">
                With Search Icon
              </h4>
              <Autocomplete
                options={frameworks}
                placeholder="Search..."
                icon={
                  <SearchIcon className="lsd:h-4 lsd:w-4 lsd:text-lsd-icon-primary" />
                }
              />
            </div>
            <div>
              <h4 className="lsd:text-sm lsd:font-medium lsd:mb-1">
                With Clear Icon
              </h4>
              <Autocomplete
                options={frameworks}
                placeholder="Type to see clear icon..."
                icon={
                  <SearchIcon className="lsd:h-4 lsd:w-4 lsd:text-lsd-icon-primary" />
                }
                defaultValue="react"
              />
            </div>
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-2">
        <h3 className="lsd:text-lg lsd:font-semibold">Error State</h3>
        <CodeExample
          title="Autocomplete Error State"
          code={`<Autocomplete
  options={frameworks}
  placeholder="Error state..."
  error={true}
/>`}
        >
          <Autocomplete
            options={frameworks}
            placeholder="Error state..."
            error={true}
          />
        </CodeExample>
      </div>

      <div className="lsd:space-y-2">
        <h3 className="lsd:text-lg lsd:font-semibold">Disabled State</h3>
        <CodeExample
          title="Autocomplete Disabled State"
          code={`<Autocomplete
  label="Disabled state"
  options={frameworks}
  placeholder="Disabled autocomplete"
  disabled={true}
/>`}
        >
          <Autocomplete
            label="Disabled state"
            options={frameworks}
            placeholder="Disabled autocomplete"
            disabled={true}
          />
        </CodeExample>
      </div>

      <div className="lsd:space-y-2">
        <h3 className="lsd:text-lg lsd:font-semibold">
          With Value Change Handler
        </h3>
        <CodeExample
          title="Autocomplete With Value Change Handler"
          code={`<Autocomplete
  options={frameworks}
  placeholder="Select a framework..."
  onValueChange={(value) => console.log('Selected:', value)}
/>`}
        >
          <Autocomplete
            options={frameworks}
            placeholder="Select a framework..."
            onValueChange={(value) => console.log('Selected:', value)}
          />
        </CodeExample>
      </div>

      <div className="lsd:space-y-2">
        <h3 className="lsd:text-lg lsd:font-semibold">Clearable Prop</h3>
        <CodeExample
          title="Autocomplete Clearable Prop"
          code={`<div className="lsd:flex lsd:flex-wrap lsd:gap-4">
  <div>
    <h4 className="lsd:text-sm lsd:font-medium lsd:mb-1">
      Not Clearable (default)
    </h4>
    <Autocomplete
      options={frameworks}
      placeholder="Select a framework..."
      defaultValue="1"
    />
  </div>
  <div>
    <h4 className="lsd:text-sm lsd:font-medium lsd:mb-1">Clearable</h4>
    <Autocomplete
      options={frameworks}
      placeholder="Select a framework..."
      defaultValue="1"
      clearable={true}
    />
  </div>
</div>`}
        >
          <div className="lsd:flex lsd:flex-wrap lsd:gap-4">
            <div>
              <h4 className="lsd:text-sm lsd:font-medium lsd:mb-1">
                Not Clearable (default)
              </h4>
              <Autocomplete
                options={frameworks}
                placeholder="Select a framework..."
                defaultValue="1"
              />
            </div>
            <div>
              <h4 className="lsd:text-sm lsd:font-medium lsd:mb-1">
                Clearable
              </h4>
              <Autocomplete
                options={frameworks}
                placeholder="Select a framework..."
                defaultValue="1"
                clearable={true}
              />
            </div>
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-2">
        <h3 className="lsd:text-lg lsd:font-semibold">Async Options</h3>
        <CodeExample
          title="Autocomplete Async Options"
          code={`<Autocomplete
  placeholder="Search for a country..."
  loadingText="Loading countries..."
  onOptionsFetch={async (searchText) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const countries = [
      { value: 'us', label: 'United States' },
      { value: 'ca', label: 'Canada' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'fr', label: 'France' },
      { value: 'de', label: 'Germany' },
      { value: 'jp', label: 'Japan' },
      { value: 'au', label: 'Australia' },
      { value: 'br', label: 'Brazil' },
      { value: 'in', label: 'India' },
      { value: 'cn', label: 'China' },
    ];

    if (!searchText) return countries;

    return countries.filter((country) =>
      country.label
        .toLowerCase()
        .includes(searchText.toLowerCase()),
    );
  }}
/>`}
        >
          <div className="lsd:flex lsd:flex-wrap lsd:gap-4">
            <div>
              <h4 className="lsd:text-sm lsd:font-medium lsd:mb-1">
                With Async Loading
              </h4>
              <Autocomplete
                placeholder="Search for a country..."
                loadingText="Loading countries..."
                onOptionsFetch={async (searchText) => {
                  // Simulate API call delay
                  await new Promise((resolve) => setTimeout(resolve, 500));

                  const countries = [
                    { value: 'us', label: 'United States' },
                    { value: 'ca', label: 'Canada' },
                    { value: 'uk', label: 'United Kingdom' },
                    { value: 'fr', label: 'France' },
                    { value: 'de', label: 'Germany' },
                    { value: 'jp', label: 'Japan' },
                    { value: 'au', label: 'Australia' },
                    { value: 'br', label: 'Brazil' },
                    { value: 'in', label: 'India' },
                    { value: 'cn', label: 'China' },
                  ];

                  if (!searchText) return countries;

                  return countries.filter((country) =>
                    country.label
                      .toLowerCase()
                      .includes(searchText.toLowerCase()),
                  );
                }}
              />
            </div>
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-2">
        <h3 className="lsd:text-lg lsd:font-semibold">
          External Loading State
        </h3>
        <CodeExample
          title="Autocomplete External Loading State"
          code={`function ExternalLoadingExample() {
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <div className="lsd:space-y-4">
      <Autocomplete
        label="Select a framework"
        options={frameworks}
        placeholder="Select a framework..."
        isLoading={isLoading}
        loadingText="Please wait..."
      />
      <Button
        variant="outlined"
        size="sm"
        onClick={handleToggleLoading}
      >
        {isLoading ? 'Stop Loading' : 'Start Loading'}
      </Button>
      <p className="lsd:text-sm lsd:text-lsd-text-secondary">
        Loading state: {isLoading ? 'Loading' : 'Not loading'}
      </p>
    </div>
  );
}`}
        >
          <div className="lsd:flex lsd:flex-wrap lsd:gap-4">
            <div>
              <h4 className="lsd:text-sm lsd:font-medium lsd:mb-1">
                With Controlled Loading State
              </h4>
              <ExternalLoadingExample />
            </div>
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-2">
        <h3 className="lsd:text-lg lsd:font-semibold">Controlled Component</h3>
        <CodeExample
          title="Autocomplete Controlled Component"
          code={`function ControlledAutocompleteExample() {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleClear = () => {
    setSelectedValue('');
  };

  const handleSetValue = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div className="lsd:space-y-4">
      <Autocomplete
        label="Select a framework"
        options={frameworks}
        placeholder="Select a framework..."
        value={selectedValue}
        onValueChange={setSelectedValue}
        clearable
      />
      <div className="lsd:flex lsd:gap-2">
        <Button
          variant="outlined"
          size="sm"
          onClick={() => handleSetValue('1')}
        >
          Set to React
        </Button>
        <Button
          variant="outlined"
          size="sm"
          onClick={() => handleSetValue('2')}
        >
          Set to Vue
        </Button>
        <Button
          variant="outlined"
          size="sm"
          onClick={handleClear}
        >
          Clear
        </Button>
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
              <ControlledAutocompleteExample />
            </div>
          </div>
        </CodeExample>
      </div>
    </div>
  </div>
);

function ControlledAutocompleteExample() {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleClear = () => {
    setSelectedValue('');
  };

  const handleSetValue = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div className="lsd:space-y-4">
      <Autocomplete
        label="Select a framework"
        options={frameworks}
        placeholder="Select a framework..."
        value={selectedValue}
        onValueChange={setSelectedValue}
        clearable
      />
      <div className="lsd:flex lsd:gap-2">
        <Button
          variant="outlined"
          size="sm"
          onClick={() => handleSetValue('1')}
        >
          Set to React
        </Button>
        <Button
          variant="outlined"
          size="sm"
          onClick={() => handleSetValue('2')}
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

function ExternalLoadingExample() {
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <div className="lsd:space-y-4">
      <Autocomplete
        label="Select a framework"
        options={frameworks}
        placeholder="Select a framework..."
        isLoading={isLoading}
        loadingText="Please wait..."
      />
      <Button variant="outlined" size="sm" onClick={handleToggleLoading}>
        {isLoading ? 'Stop Loading' : 'Start Loading'}
      </Button>
      <p className="lsd:text-sm lsd:text-lsd-text-secondary">
        Loading state: {isLoading ? 'Loading' : 'Not loading'}
      </p>
    </div>
  );
}
