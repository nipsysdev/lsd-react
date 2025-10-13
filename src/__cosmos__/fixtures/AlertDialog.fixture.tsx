import { useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { CodeExample } from '../code-example';
import { FontToggle } from '../font-toggle';
import { ThemeToggle } from '../theme-toggle';

export default function AlertDialogFixture() {
  const [showBasicDialog, setShowBasicDialog] = useState(false);
  const [showDestructiveDialog, setShowDestructiveDialog] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  return (
    <div className="p-8 w-full space-y-8">
      <div className="flex justify-end gap-4">
        <ThemeToggle />
        <FontToggle />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Alert Dialog Component</h2>
        <p className="text-muted-foreground">
          A modal dialog that interrupts the user with important content and
          expects a response.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Using AlertDialogTrigger</h2>
        <CodeExample
          title="AlertDialog with Trigger"
          code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button>Show Dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your
        account and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
        >
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button>Show Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CodeExample>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Using Boolean State Control</h2>
        <CodeExample
          title="Controlled AlertDialog Examples"
          code={`<div className="flex gap-4">
  <Button onClick={() => setShowBasicDialog(true)}>
    Show Basic Dialog
  </Button>
  <Button
    variant="outlined"
    onClick={() => setShowDestructiveDialog(true)}
  >
    Delete Account
  </Button>
  <Button onClick={() => setShowConfirmDialog(true)}>
    Save Changes
  </Button>
</div>

{/* Basic Dialog */}
<AlertDialog open={showBasicDialog} onOpenChange={setShowBasicDialog}>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your
        account and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

{/* Destructive Action Dialog */}
<AlertDialog
  open={showDestructiveDialog}
  onOpenChange={setShowDestructiveDialog}
>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Delete Account</AlertDialogTitle>
      <AlertDialogDescription>
        Are you sure you want to delete your account? This action cannot
        be undone and all your data will be permanently removed.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction className="bg-red-600 hover:bg-red-700">
        Delete
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

{/* Confirmation Dialog */}
<AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Confirm Changes</AlertDialogTitle>
      <AlertDialogDescription>
        Do you want to save the changes you made to your profile? Your
        changes will be lost if you don't save them.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Don't Save</AlertDialogCancel>
      <AlertDialogAction>Save Changes</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
        >
          <div className="flex gap-4">
            <Button onClick={() => setShowBasicDialog(true)}>
              Show Basic Dialog
            </Button>
            <Button
              variant="outlined"
              onClick={() => setShowDestructiveDialog(true)}
            >
              Delete Account
            </Button>
            <Button onClick={() => setShowConfirmDialog(true)}>
              Save Changes
            </Button>
          </div>

          {/* Basic Dialog */}
          <AlertDialog open={showBasicDialog} onOpenChange={setShowBasicDialog}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          {/* Destructive Action Dialog */}
          <AlertDialog
            open={showDestructiveDialog}
            onOpenChange={setShowDestructiveDialog}
          >
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete Account</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to delete your account? This action
                  cannot be undone and all your data will be permanently
                  removed.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-red-600 hover:bg-red-700">
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          {/* Confirmation Dialog */}
          <AlertDialog
            open={showConfirmDialog}
            onOpenChange={setShowConfirmDialog}
          >
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirm Changes</AlertDialogTitle>
                <AlertDialogDescription>
                  Do you want to save the changes you made to your profile? Your
                  changes will be lost if you don't save them.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Don't Save</AlertDialogCancel>
                <AlertDialogAction>Save Changes</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CodeExample>
      </div>
    </div>
  );
}
