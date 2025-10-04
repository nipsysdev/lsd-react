import { Button } from '@/components/ui/button';
import { FontToggle } from '../font-toggle';
import { ThemeToggle } from '../theme-toggle';

export default function ButtonFixture() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Button Component</h1>
        <div className="flex gap-4">
          <ThemeToggle />
          <FontToggle />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Variants</h2>
        <div className="flex gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Sizes</h2>
        <div className="flex gap-4 items-center">
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">States</h2>
        <div className="flex gap-4">
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">All Combinations</h2>
        <div className="grid grid-cols-3 gap-4">
          <Button size="sm">Small Default</Button>
          <Button size="sm" variant="secondary">
            Small Secondary
          </Button>
          <Button size="sm" disabled>
            Small Disabled
          </Button>

          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button disabled>Disabled</Button>

          <Button size="lg">Large Default</Button>
          <Button size="lg" variant="secondary">
            Large Secondary
          </Button>
          <Button size="lg" disabled>
            Large Disabled
          </Button>
        </div>
      </div>
    </div>
  );
}
