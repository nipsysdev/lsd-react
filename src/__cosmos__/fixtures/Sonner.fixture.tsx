import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/sonner';
import { FontToggle } from '../font-toggle';
import { ThemeToggle } from '../theme-toggle';

export default function SonnerFixture() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-end gap-4">
        <ThemeToggle />
        <FontToggle />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Sonner Toast Component</h2>
        <p className="text-muted-foreground">
          A toast notification component that displays messages to users.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Basic Toasts</h2>
        <div className="flex flex-wrap gap-4">
          <Button
            variant="filled"
            onClick={() => toast('Event has been created')}
          >
            Show Simple Toast
          </Button>
          <Button
            variant="filled"
            onClick={() => toast.success('Event has been created')}
          >
            Show Success Toast
          </Button>
          <Button
            variant="filled"
            onClick={() => toast.error('Event has not been created')}
          >
            Show Error Toast
          </Button>
          <Button
            variant="filled"
            onClick={() => toast.info('This is an informational message')}
          >
            Show Info Toast
          </Button>
          <Button
            variant="filled"
            onClick={() => toast.warning('This is a warning message')}
          >
            Show Warning Toast
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Toast with Action</h2>
        <div className="flex flex-wrap gap-4">
          <Button
            variant="filled"
            onClick={() =>
              toast('Event has been created', {
                action: {
                  label: 'Undo',
                  onClick: () => console.log('Undo'),
                },
              })
            }
          >
            Show Toast with Action
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Toast with Rich Content</h2>
        <div className="flex flex-wrap gap-4">
          <Button
            variant="filled"
            onClick={() =>
              toast(
                <div>
                  <h4 className="font-semibold">Event Created</h4>
                  <p className="text-sm">
                    Your event has been created successfully.
                  </p>
                </div>,
                {
                  duration: 5000,
                },
              )
            }
          >
            Show Rich Toast
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Persistent Toast</h2>
        <div className="flex flex-wrap gap-4">
          <Button
            variant="filled"
            onClick={() =>
              toast('This toast will not close automatically', {
                duration: Infinity,
              })
            }
          >
            Show Persistent Toast
          </Button>
          <Button variant="outlined" onClick={() => toast.dismiss()}>
            Dismiss All Toasts
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Positioned Toasts</h2>
        <div className="flex flex-wrap gap-4">
          <Button
            variant="filled"
            onClick={() =>
              toast('Top-left toast', {
                position: 'top-left',
              })
            }
          >
            Top-Left
          </Button>
          <Button
            variant="filled"
            onClick={() =>
              toast('Top-right toast', {
                position: 'top-right',
              })
            }
          >
            Top-Right
          </Button>
          <Button
            variant="filled"
            onClick={() =>
              toast('Bottom-left toast', {
                position: 'bottom-left',
              })
            }
          >
            Bottom-Left
          </Button>
          <Button
            variant="filled"
            onClick={() =>
              toast('Bottom-right toast', {
                position: 'bottom-right',
              })
            }
          >
            Bottom-Right
          </Button>
        </div>
      </div>

      <Toaster />
    </div>
  );
}
