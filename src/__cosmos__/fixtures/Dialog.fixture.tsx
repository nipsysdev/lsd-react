import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { CodeExample } from '../code-example';
import { FontToggle } from '../font-toggle';
import { ThemeToggle } from '../theme-toggle';

export default function DialogFixture() {
  const [showBasicDialog, setShowBasicDialog] = useState(false);
  const [showNoCloseDialog, setShowNoCloseDialog] = useState(false);
  const [showFormDialog, setShowFormDialog] = useState(false);

  return (
    <div className="lsd:p-8 lsd:w-full lsd:space-y-8">
      <div className="lsd:flex lsd:justify-end lsd:gap-4">
        <ThemeToggle />
        <FontToggle />
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-2xl lsd:font-bold">Dialog Component</h2>
        <p className="lsd:text-muted-foreground">
          A dialog component that displays content in a modal overlay with
          optional header, footer, and actions.
        </p>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Using DialogTrigger</h2>
        <CodeExample
          title="Dialog with Trigger"
          code={`<Dialog>
  <DialogTrigger asChild>
    <Button>Show Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        This is a basic dialog with a title and description.
      </DialogDescription>
    </DialogHeader>
    <p>This is the main content of the dialog.</p>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outlined">Cancel</Button>
      </DialogClose>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button>Show Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogDescription>
                  This is a basic dialog with a title and description.
                </DialogDescription>
              </DialogHeader>
              <p>This is the main content of the dialog.</p>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outlined">Cancel</Button>
                </DialogClose>
                <Button>Confirm</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">
          Using Boolean State Control
        </h2>
        <CodeExample
          title="Controlled Dialog Examples"
          code={`<div className="lsd:flex lsd:gap-4">
  <Button onClick={() => setShowBasicDialog(true)}>
    Show Basic Dialog
  </Button>
  <Button
    variant="outlined"
    onClick={() => setShowNoCloseDialog(true)}
  >
    No Close Button
  </Button>
  <Button onClick={() => setShowFormDialog(true)}>
    Edit Profile
  </Button>
</div>

{/* Basic Dialog */}
<Dialog open={showBasicDialog} onOpenChange={setShowBasicDialog}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        This is a basic dialog with a title and description.
      </DialogDescription>
    </DialogHeader>
    <p>This is the main content of the dialog.</p>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outlined">Cancel</Button>
      </DialogClose>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

{/* Dialog without Close Button */}
<Dialog
  open={showNoCloseDialog}
  onOpenChange={setShowNoCloseDialog}
>
  <DialogContent showCloseButton={false}>
    <DialogHeader>
      <DialogTitle>No Close Button</DialogTitle>
      <DialogDescription>
        This dialog doesn't show the close button in the top-right corner.
      </DialogDescription>
    </DialogHeader>
    <p>You must use one of the action buttons to close this dialog.</p>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outlined">Close</Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>

{/* Form Dialog */}
<Dialog open={showFormDialog} onOpenChange={setShowFormDialog}>
  <DialogContent className="sm:lsd:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here. Click save when you're done.
      </DialogDescription>
    </DialogHeader>
    <div className="lsd:grid lsd:gap-4 lsd:py-4">
      <Input title="Name" defaultValue="John Doe" />
      <Input title="Username" defaultValue="@johndoe" />
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outlined">Cancel</Button>
      </DialogClose>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        >
          <div className="lsd:flex lsd:gap-4">
            <Button onClick={() => setShowBasicDialog(true)}>
              Show Basic Dialog
            </Button>
            <Button
              variant="outlined"
              onClick={() => setShowNoCloseDialog(true)}
            >
              No Close Button
            </Button>
            <Button onClick={() => setShowFormDialog(true)}>
              Edit Profile
            </Button>
          </div>

          <Dialog open={showBasicDialog} onOpenChange={setShowBasicDialog}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogDescription>
                  This is a basic dialog with a title and description.
                </DialogDescription>
              </DialogHeader>
              <p>This is the main content of the dialog.</p>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outlined">Cancel</Button>
                </DialogClose>
                <Button>Confirm</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog open={showNoCloseDialog} onOpenChange={setShowNoCloseDialog}>
            <DialogContent showCloseButton={false}>
              <DialogHeader>
                <DialogTitle>No Close Button</DialogTitle>
                <DialogDescription>
                  This dialog doesn't show the close button in the top-right
                  corner.
                </DialogDescription>
              </DialogHeader>
              <p>
                You must use one of the action buttons to close this dialog.
              </p>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outlined">Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog open={showFormDialog} onOpenChange={setShowFormDialog}>
            <DialogContent className="sm:lsd:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="lsd:grid lsd:gap-4 lsd:py-4">
                <Input label="Name" defaultValue="John Doe" />
                <Input label="Username" defaultValue="@johndoe" />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outlined">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CodeExample>
      </div>
    </div>
  );
}
