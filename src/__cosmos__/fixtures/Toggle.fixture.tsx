import { Bold, Italic, Underline } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { FontToggle } from '../font-toggle';
import { ThemeToggle } from '../theme-toggle';

export default function ToggleFixture() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-end gap-4">
        <ThemeToggle />
        <FontToggle />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Toggle Component</h2>
        <p className="text-muted-foreground">
          A toggle component that allows users to switch between two states.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Default Toggle</h2>
        <div className="flex gap-4">
          <Toggle aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </Toggle>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Outlined Toggle</h2>
        <div className="flex gap-4">
          <Toggle aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </Toggle>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Toggle Sizes</h2>
        <div className="flex gap-4 items-center">
          <Toggle size="sm" aria-label="Small toggle">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle size="default" aria-label="Default toggle">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle size="lg" aria-label="Large toggle">
            <Bold className="h-4 w-4" />
          </Toggle>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Pressed State</h2>
        <div className="flex gap-4">
          <Toggle defaultPressed aria-label="Pressed bold">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle defaultPressed aria-label="Pressed italic">
            <Italic className="h-4 w-4" />
          </Toggle>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Disabled State</h2>
        <div className="flex gap-4">
          <Toggle disabled aria-label="Disabled bold">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle disabled aria-label="Disabled italic">
            <Italic className="h-4 w-4" />
          </Toggle>
        </div>
      </div>
    </div>
  );
}
