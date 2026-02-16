import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { CodeExample } from '../code-example';
import { FontToggle } from '../font-toggle';
import { ThemeAccentToggle, ThemeToggle } from '../theme-toggle';

export default function PopoverFixture() {
  return (
    <div className="lsd:p-8 lsd:w-full lsd:space-y-8">
      <div className="lsd:flex lsd:justify-end lsd:gap-4">
        <ThemeToggle />
        <ThemeAccentToggle />
        <FontToggle />
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-2xl lsd:font-bold">Popover Component</h2>
        <p className="lsd:text-lsd-text-secondary">
          A popover component that displays content in a floating overlay
          positioned relative to a trigger element.
        </p>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Basic Popover</h2>
        <CodeExample
          title="Basic Popover"
          code={`<Popover>
  <PopoverTrigger asChild>
    <Button>Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="lsd:space-y-2">
      <h4 className="lsd:font-medium lsd:leading-none">Dimensions</h4>
      <p className="lsd:text-sm lsd:text-lsd-text-secondary">
        Set the dimensions for the layer.
      </p>
    </div>
  </PopoverContent>
</Popover>`}
        >
          <Popover>
            <PopoverTrigger asChild>
              <Button>Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="lsd:space-y-2">
                <h4 className="lsd:font-medium lsd:leading-none">Dimensions</h4>
                <p className="lsd:text-sm lsd:text-lsd-text-secondary">
                  Set the dimensions for the layer.
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Popover with Form</h2>
        <CodeExample
          title="Popover with Form"
          code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outlined">Adjust Settings</Button>
  </PopoverTrigger>
  <PopoverContent className="lsd:w-80">
    <div className="lsd:grid lsd:gap-4">
      <div className="lsd:space-y-2">
        <h4 className="lsd:font-medium lsd:leading-none">Settings</h4>
        <p className="lsd:text-sm lsd:text-lsd-text-secondary">
          Make changes to your settings here.
        </p>
      </div>
      <div className="lsd:grid lsd:gap-2">
        <div className="lsd:grid lsd:grid-cols-3 lsd:items-center lsd:gap-4">
          <Label htmlFor="width">Width</Label>
          <Input
            defaultValue="100%"
            className="lsd:col-span-2 lsd:h-8"
          />
        </div>
        <div className="lsd:grid lsd:grid-cols-3 lsd:items-center lsd:gap-4">
          <Label htmlFor="maxWidth">Max. width</Label>
          <Input
            defaultValue="300px"
            className="lsd:col-span-2 lsd:h-8"
          />
        </div>
        <div className="lsd:grid lsd:grid-cols-3 lsd:items-center lsd:gap-4">
          <Label htmlFor="height">Height</Label>
          <Input
            defaultValue="25px"
            className="lsd:col-span-2 lsd:h-8"
          />
        </div>
        <div className="lsd:grid lsd:grid-cols-3 lsd:items-center lsd:gap-4">
          <Label htmlFor="maxHeight">Max. height</Label>
          <Input
            defaultValue="none"
            className="lsd:col-span-2 lsd:h-8"
          />
        </div>
      </div>
    </div>
  </PopoverContent>
</Popover>`}
        >
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outlined">Adjust Settings</Button>
            </PopoverTrigger>
            <PopoverContent className="lsd:w-80">
              <div className="lsd:grid lsd:gap-4">
                <div className="lsd:space-y-2">
                  <h4 className="lsd:font-medium lsd:leading-none">Settings</h4>
                  <p className="lsd:text-sm lsd:text-lsd-text-secondary">
                    Make changes to your settings here.
                  </p>
                </div>
                <div className="lsd:grid lsd:gap-2">
                  <div className="lsd:grid lsd:grid-cols-3 lsd:items-center lsd:gap-4">
                    <Label htmlFor="width">Width</Label>
                    <Input
                      defaultValue="100%"
                      className="lsd:col-span-2 lsd:h-8"
                    />
                  </div>
                  <div className="lsd:grid lsd:grid-cols-3 lsd:items-center lsd:gap-4">
                    <Label htmlFor="maxWidth">Max. width</Label>
                    <Input
                      defaultValue="300px"
                      className="lsd:col-span-2 lsd:h-8"
                    />
                  </div>
                  <div className="lsd:grid lsd:grid-cols-3 lsd:items-center lsd:gap-4">
                    <Label htmlFor="height">Height</Label>
                    <Input
                      defaultValue="25px"
                      className="lsd:col-span-2 lsd:h-8"
                    />
                  </div>
                  <div className="lsd:grid lsd:grid-cols-3 lsd:items-center lsd:gap-4">
                    <Label htmlFor="maxHeight">Max. height</Label>
                    <Input
                      defaultValue="none"
                      className="lsd:col-span-2 lsd:h-8"
                    />
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Popover Examples</h2>
        <CodeExample
          title="Popover Examples"
          code={`<div className="lsd:flex lsd:flex-wrap lsd:gap-4">
  <Popover>
    <PopoverTrigger asChild>
      <Button size="sm">Top</Button>
    </PopoverTrigger>
    <PopoverContent side="top">
      This popover appears on top of the trigger.
    </PopoverContent>
  </Popover>

  <Popover>
    <PopoverTrigger asChild>
      <Button size="sm">Right</Button>
    </PopoverTrigger>
    <PopoverContent side="right">
      This popover appears to the right of the trigger.
    </PopoverContent>
  </Popover>

  <Popover>
    <PopoverTrigger asChild>
      <Button size="sm">Bottom</Button>
    </PopoverTrigger>
    <PopoverContent side="bottom">
      This popover appears below the trigger.
    </PopoverContent>
  </Popover>

  <Popover>
    <PopoverTrigger asChild>
      <Button size="sm">Left</Button>
    </PopoverTrigger>
    <PopoverContent side="left">
      This popover appears to the left of the trigger.
    </PopoverContent>
  </Popover>
</div>`}
        >
          <div className="lsd:flex lsd:flex-wrap lsd:gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button size="sm">Top</Button>
              </PopoverTrigger>
              <PopoverContent side="top">
                This popover appears on top of the trigger.
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button size="sm">Right</Button>
              </PopoverTrigger>
              <PopoverContent side="right">
                This popover appears to the right of the trigger.
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button size="sm">Bottom</Button>
              </PopoverTrigger>
              <PopoverContent side="bottom">
                This popover appears below the trigger.
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button size="sm">Left</Button>
              </PopoverTrigger>
              <PopoverContent side="left">
                This popover appears to the left of the trigger.
              </PopoverContent>
            </Popover>
          </div>
        </CodeExample>
      </div>
    </div>
  );
}
