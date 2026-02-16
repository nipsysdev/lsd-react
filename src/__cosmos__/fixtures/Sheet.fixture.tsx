import { useId, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { CodeExample } from '../code-example';
import { FontToggle } from '../font-toggle';
import { ThemeAccentToggle, ThemeToggle } from '../theme-toggle';

export default function SheetFixture() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');

  return (
    <div className="lsd:p-8 lsd:w-full lsd:space-y-8">
      <div className="lsd:flex lsd:justify-end lsd:gap-4">
        <ThemeToggle />
        <ThemeAccentToggle />
        <FontToggle />
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-2xl lsd:font-bold">Sheet Component</h2>
        <p className="lsd:text-muted-foreground">
          A sheet component that slides in from the side of the screen to
          display additional content.
        </p>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Basic Sheet</h2>
        <CodeExample
          title="Basic Sheet"
          code={`<Sheet>
  <SheetTrigger asChild>
    <Button>Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Sheet Title</SheetTitle>
      <SheetDescription>
        This is a description of the sheet content.
      </SheetDescription>
    </SheetHeader>
    <div className="lsd:py-4">
      <p>Sheet content goes here.</p>
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button>Close</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button>Open Sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Sheet Title</SheetTitle>
                <SheetDescription>
                  This is a description of the sheet content.
                </SheetDescription>
              </SheetHeader>
              <div className="lsd:py-4">
                <p>Sheet content goes here.</p>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button>Close</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Sheet Positions</h2>
        <CodeExample
          title="Sheet Positions"
          code={`<div className="lsd:flex lsd:flex-wrap lsd:gap-4">
  <Sheet>
    <SheetTrigger asChild>
      <Button>Top Sheet</Button>
    </SheetTrigger>
    <SheetContent side="top">
      <SheetHeader>
        <SheetTitle>Top Sheet</SheetTitle>
      </SheetHeader>
      <div className="lsd:py-4">
        <p>This sheet slides in from the top.</p>
      </div>
    </SheetContent>
  </Sheet>

  <Sheet>
    <SheetTrigger asChild>
      <Button>Right Sheet</Button>
    </SheetTrigger>
    <SheetContent side="right">
      <SheetHeader>
        <SheetTitle>Right Sheet</SheetTitle>
      </SheetHeader>
      <div className="lsd:py-4">
        <p>This sheet slides in from the right.</p>
      </div>
    </SheetContent>
  </Sheet>

  <Sheet>
    <SheetTrigger asChild>
      <Button>Bottom Sheet</Button>
    </SheetTrigger>
    <SheetContent side="bottom">
      <SheetHeader>
        <SheetTitle>Bottom Sheet</SheetTitle>
      </SheetHeader>
      <div className="lsd:py-4">
        <p>This sheet slides in from the bottom.</p>
      </div>
    </SheetContent>
  </Sheet>

  <Sheet>
    <SheetTrigger asChild>
      <Button>Left Sheet</Button>
    </SheetTrigger>
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle>Left Sheet</SheetTitle>
      </SheetHeader>
      <div className="lsd:py-4">
        <p>This sheet slides in from the left.</p>
      </div>
    </SheetContent>
  </Sheet>
</div>`}
        >
          <div className="lsd:flex lsd:flex-wrap lsd:gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button>Top Sheet</Button>
              </SheetTrigger>
              <SheetContent side="top">
                <SheetHeader>
                  <SheetTitle>Top Sheet</SheetTitle>
                </SheetHeader>
                <div className="lsd:py-4">
                  <p>This sheet slides in from the top.</p>
                </div>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button>Right Sheet</Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Right Sheet</SheetTitle>
                </SheetHeader>
                <div className="lsd:py-4">
                  <p>This sheet slides in from the right.</p>
                </div>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button>Bottom Sheet</Button>
              </SheetTrigger>
              <SheetContent side="bottom">
                <SheetHeader>
                  <SheetTitle>Bottom Sheet</SheetTitle>
                </SheetHeader>
                <div className="lsd:py-4">
                  <p>This sheet slides in from the bottom.</p>
                </div>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button>Left Sheet</Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Left Sheet</SheetTitle>
                </SheetHeader>
                <div className="lsd:py-4">
                  <p>This sheet slides in from the left.</p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Sheet with Form</h2>
        <CodeExample
          title="Sheet with Form"
          code={`<Sheet open={open} onOpenChange={setOpen}>
  <SheetTrigger asChild>
    <Button>Edit Profile</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here. Click save when you're done.
      </SheetDescription>
    </SheetHeader>
    <div className="lsd:grid lsd:gap-4 lsd:py-4">
      <div className="lsd:grid lsd:grid-cols-4 lsd:items-center lsd:gap-4">
        <Label htmlFor="name" className="lsd:text-right">
          Name
        </Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="lsd:col-span-3"
        />
      </div>
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button type="submit">Save changes</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
        >
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button>Edit Profile</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </SheetDescription>
              </SheetHeader>
              <div className="lsd:grid lsd:gap-4 lsd:py-4">
                <div className="lsd:grid lsd:grid-cols-4 lsd:items-center lsd:gap-4">
                  <Label htmlFor="name" className="lsd:text-right">
                    Name
                  </Label>
                  <Input
                    id={`name-${useId()}`}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="lsd:col-span-3"
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">
          Sheet with Complex Content
        </h2>
        <CodeExample
          title="Sheet with Complex Content"
          code={`<Sheet>
  <SheetTrigger asChild>
    <Button>View Details</Button>
  </SheetTrigger>
  <SheetContent className="lsd:w-[400px] sm:w-[540px]">
    <SheetHeader>
      <SheetTitle>Account Settings</SheetTitle>
      <SheetDescription>
        Configure your account settings and preferences.
      </SheetDescription>
    </SheetHeader>
    <div className="lsd:py-4 lsd:space-y-4">
      <div>
        <h4 className="lsd:mb-2 lsd:text-sm lsd:font-medium">Profile Information</h4>
        <Separator className="lsd:mb-4" />
        <p className="lsd:text-sm lsd:text-muted-foreground">
          Manage your personal information and how it appears on your profile.
        </p>
      </div>
      <div>
        <h4 className="lsd:mb-2 lsd:text-sm lsd:font-medium">Notification Settings</h4>
        <Separator className="lsd:mb-4" />
        <p className="lsd:text-sm lsd:text-muted-foreground">
          Configure how and when you receive notifications.
        </p>
      </div>
      <div>
        <h4 className="lsd:mb-2 lsd:text-sm lsd:font-medium">Privacy Settings</h4>
        <Separator className="lsd:mb-4" />
        <p className="lsd:text-sm lsd:text-muted-foreground">
          Control your privacy settings and data sharing preferences.
        </p>
      </div>
    </div>
    <SheetFooter className="lsd:flex lsd:flex-col sm:flex-row sm:justify-between">
      <SheetClose asChild>
        <Button variant="outlined" className="sm:order-1">
          Cancel
        </Button>
      </SheetClose>
      <SheetClose asChild>
        <Button className="sm:order-0">Save Changes</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button>View Details</Button>
            </SheetTrigger>
            <SheetContent className="lsd:w-[400px] sm:w-[540px]">
              <SheetHeader>
                <SheetTitle>Account Settings</SheetTitle>
                <SheetDescription>
                  Configure your account settings and preferences.
                </SheetDescription>
              </SheetHeader>
              <div className="lsd:py-4 lsd:space-y-4">
                <div>
                  <h4 className="lsd:mb-2 lsd:text-sm lsd:font-medium">
                    Profile Information
                  </h4>
                  <Separator className="lsd:mb-4" />
                  <p className="lsd:text-sm lsd:text-muted-foreground">
                    Manage your personal information and how it appears on your
                    profile.
                  </p>
                </div>
                <div>
                  <h4 className="lsd:mb-2 lsd:text-sm lsd:font-medium">
                    Notification Settings
                  </h4>
                  <Separator className="lsd:mb-4" />
                  <p className="lsd:text-sm lsd:text-muted-foreground">
                    Configure how and when you receive notifications.
                  </p>
                </div>
                <div>
                  <h4 className="lsd:mb-2 lsd:text-sm lsd:font-medium">
                    Privacy Settings
                  </h4>
                  <Separator className="lsd:mb-4" />
                  <p className="lsd:text-sm lsd:text-muted-foreground">
                    Control your privacy settings and data sharing preferences.
                  </p>
                </div>
              </div>
              <SheetFooter className="lsd:flex lsd:flex-col sm:flex-row sm:justify-between">
                <SheetClose asChild>
                  <Button variant="outlined" className="sm:order-1">
                    Cancel
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button className="sm:order-0">Save Changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </CodeExample>
      </div>
    </div>
  );
}
