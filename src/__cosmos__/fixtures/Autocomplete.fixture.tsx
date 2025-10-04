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
        <h3 className="text-lg font-semibold">Default Autocomplete</h3>
        <Autocomplete
          options={frameworks}
          placeholder="Select a framework..."
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">With Custom Empty Text</h3>
        <Autocomplete
          options={frameworks}
          placeholder="Search frameworks..."
          emptyText="No frameworks found."
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Disabled State</h3>
        <Autocomplete
          options={frameworks}
          placeholder="Disabled autocomplete"
          disabled
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
