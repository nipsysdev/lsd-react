import { Autocomplete } from '@/components/ui/autocomplete';
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
            <h4 className="text-sm font-medium mb-1">Large</h4>
            <Autocomplete
              options={frameworks}
              placeholder="Large size..."
              size="large"
            />
          </div>
          <div>
            <h4 className="text-sm font-medium mb-1">Medium</h4>
            <Autocomplete
              options={frameworks}
              placeholder="Medium size..."
              size="medium"
            />
          </div>
          <div>
            <h4 className="text-sm font-medium mb-1">Small</h4>
            <Autocomplete
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
            <h4 className="text-sm font-medium mb-1">Outlined</h4>
            <Autocomplete
              options={frameworks}
              placeholder="Outlined variant..."
              variant="outlined"
            />
          </div>
          <div>
            <h4 className="text-sm font-medium mb-1">Underlined</h4>
            <Autocomplete
              options={frameworks}
              placeholder="Underlined variant..."
              variant="underlined"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">With Label</h3>
        <Autocomplete
          options={frameworks}
          placeholder="Select a framework..."
          label="Framework"
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">With Icon</h3>
        <div className="flex flex-wrap gap-4">
          <div>
            <h4 className="text-sm font-medium mb-1">With Search Icon</h4>
            <Autocomplete
              options={frameworks}
              placeholder="Search..."
              withIcon={true}
            />
          </div>
          <div>
            <h4 className="text-sm font-medium mb-1">With Clear Icon</h4>
            <Autocomplete
              options={frameworks}
              placeholder="Type to see clear icon..."
              withIcon={true}
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
    </div>
  </div>
);
