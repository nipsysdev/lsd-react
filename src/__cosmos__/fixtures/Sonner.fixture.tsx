import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/sonner';
import { CodeExample } from '../code-example';
import { FontToggle } from '../font-toggle';
import { ThemeToggle } from '../theme-toggle';

export default function SonnerFixture() {
  return (
    <div className="lsd:p-8 lsd:w-full lsd:space-y-8">
      <div className="lsd:flex lsd:justify-end lsd:gap-4">
        <ThemeToggle />
        <FontToggle />
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-2xl lsd:font-bold">Sonner Toast Component</h2>
        <p className="lsd:text-muted-foreground">
          A toast notification component that displays messages to users.
        </p>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Basic Toasts</h2>
        <CodeExample
          title="Basic Toasts"
          code={`<div className="lsd:flex lsd:flex-wrap lsd:gap-4">
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
</div>`}
        >
          <div className="lsd:flex lsd:flex-wrap lsd:gap-4">
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
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Toast with Action</h2>
        <CodeExample
          title="Toast with Action"
          code={`<div className="lsd:flex lsd:flex-wrap lsd:gap-4">
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
</div>`}
        >
          <div className="lsd:flex lsd:flex-wrap lsd:gap-4">
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
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">
          Toast with Rich Content
        </h2>
        <CodeExample
          title="Toast with Rich Content"
          code={`<div className="lsd:flex lsd:flex-wrap lsd:gap-4">
  <Button
    variant="filled"
    onClick={() =>
      toast(
        <div>
          <h4 className="lsd:font-semibold">Event Created</h4>
          <p className="lsd:text-sm">
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
</div>`}
        >
          <div className="lsd:flex lsd:flex-wrap lsd:gap-4">
            <Button
              variant="filled"
              onClick={() =>
                toast(
                  <div>
                    <h4 className="lsd:font-semibold">Event Created</h4>
                    <p className="lsd:text-sm">
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
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Persistent Toast</h2>
        <CodeExample
          title="Persistent Toast"
          code={`<div className="lsd:flex lsd:flex-wrap lsd:gap-4">
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
</div>`}
        >
          <div className="lsd:flex lsd:flex-wrap lsd:gap-4">
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
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Positioned Toasts</h2>
        <CodeExample
          title="Positioned Toasts"
          code={`<div className="lsd:flex lsd:flex-wrap lsd:gap-4">
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
</div>`}
        >
          <div className="lsd:flex lsd:flex-wrap lsd:gap-4">
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
        </CodeExample>
      </div>

      <Toaster />
    </div>
  );
}
