import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { CodeExample } from '../code-example';
import { FontToggle } from '../font-toggle';
import { ThemeToggle } from '../theme-toggle';

export default function PopoverFixture() {
  return (
    <div className="p-8 w-full space-y-8">
      <div className="flex justify-end gap-4">
        <ThemeToggle />
        <FontToggle />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Popover Component</h2>
        <p className="text-lsd-text-secondary">
          A popover component that displays content in a floating overlay
          positioned relative to a trigger element.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Basic Popover</h2>
        <CodeExample
          title="Basic Popover"
          code={`<Popover>
  <PopoverTrigger asChild>
    <Button>Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="space-y-2">
      <h4 className="font-medium leading-none">Dimensions</h4>
      <p className="text-sm text-lsd-text-secondary">
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
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-lsd-text-secondary">
                  Set the dimensions for the layer.
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </CodeExample>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Popover with Form</h2>
        <CodeExample
          title="Popover with Form"
          code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outlined">Adjust Settings</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Settings</h4>
        <p className="text-sm text-lsd-text-secondary">
          Make changes to your settings here.
        </p>
      </div>
      <div className="grid gap-2">
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="width">Width</Label>
          <Input
            defaultValue="100%"
            className="col-span-2 h-8"
          />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="maxWidth">Max. width</Label>
          <Input
            defaultValue="300px"
            className="col-span-2 h-8"
          />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="height">Height</Label>
          <Input
            defaultValue="25px"
            className="col-span-2 h-8"
          />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="maxHeight">Max. height</Label>
          <Input
            defaultValue="none"
            className="col-span-2 h-8"
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
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Settings</h4>
                  <p className="text-sm text-lsd-text-secondary">
                    Make changes to your settings here.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="width">Width</Label>
                    <Input defaultValue="100%" className="col-span-2 h-8" />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxWidth">Max. width</Label>
                    <Input defaultValue="300px" className="col-span-2 h-8" />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="height">Height</Label>
                    <Input defaultValue="25px" className="col-span-2 h-8" />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxHeight">Max. height</Label>
                    <Input defaultValue="none" className="col-span-2 h-8" />
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </CodeExample>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Popover Examples</h2>
        <CodeExample
          title="Popover Examples"
          code={`<div className="flex flex-wrap gap-4">
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
          <div className="flex flex-wrap gap-4">
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
