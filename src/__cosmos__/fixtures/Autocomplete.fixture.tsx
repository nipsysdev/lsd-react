import { SearchIcon } from 'lucide-react';
import { Autocomplete } from '@/components/ui/autocomplete';
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
  <div className="p-8 space-y-8">
    <div className="flex justify-end gap-4">
      <ThemeToggle />
      <FontToggle />
    </div>

    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Autocomplete Component</h2>
      <p className="text-muted-foreground">
        An autocomplete component that allows users to select from a list of
        options.
      </p>
    </div>

    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <div className="flex flex-wrap gap-4">
          <div>
            <Autocomplete
              label="Large"
              options={frameworks}
              placeholder="Large size..."
              size="large"
            />
          </div>
          <div>
            <Autocomplete
              label="Medium"
              options={frameworks}
              placeholder="Medium size..."
              size="medium"
            />
          </div>
          <div>
            <Autocomplete
              label="Small"
              options={frameworks}
              placeholder="Small size..."
              size="small"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Variants</h3>
        <div className="flex flex-wrap gap-4">
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
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">With Icon</h3>
        <div className="flex flex-wrap gap-4">
          <div>
            <h4 className="text-sm font-medium mb-1">With Search Icon</h4>
            <Autocomplete
              options={frameworks}
              placeholder="Search..."
              icon={<SearchIcon className="h-4 w-4 text-lsd-icon-primary" />}
            />
          </div>
          <div>
            <h4 className="text-sm font-medium mb-1">With Clear Icon</h4>
            <Autocomplete
              options={frameworks}
              placeholder="Type to see clear icon..."
              icon={<SearchIcon className="h-4 w-4 text-lsd-icon-primary" />}
              defaultValue="react"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Error State</h3>
        <Autocomplete
          options={frameworks}
          placeholder="Error state..."
          error={true}
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Disabled State</h3>
        <Autocomplete
          label="Disabled state"
          options={frameworks}
          placeholder="Disabled autocomplete"
          disabled={true}
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">With Value Change Handler</h3>
        <Autocomplete
          options={frameworks}
          placeholder="Select a framework..."
          onValueChange={(value) => console.log('Selected:', value)}
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Clearable Prop</h3>
        <div className="flex flex-wrap gap-4">
          <div>
            <h4 className="text-sm font-medium mb-1">
              Not Clearable (default)
            </h4>
            <Autocomplete
              options={frameworks}
              placeholder="Select a framework..."
              defaultValue="1"
            />
          </div>
          <div>
            <h4 className="text-sm font-medium mb-1">Clearable</h4>
            <Autocomplete
              options={frameworks}
              placeholder="Select a framework..."
              defaultValue="1"
              clearable={true}
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Async Options</h3>
        <div className="flex flex-wrap gap-4">
          <div>
            <h4 className="text-sm font-medium mb-1">With Async Loading</h4>
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
      </div>
    </div>
  </div>
);
