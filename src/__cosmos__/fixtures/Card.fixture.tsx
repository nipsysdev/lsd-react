import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CodeExample } from '../code-example';
import { FontToggle } from '../font-toggle';
import { ThemeToggle } from '../theme-toggle';

export default function CardFixture() {
  return (
    <div className="p-8 w-full space-y-8">
      <div className="flex justify-end gap-4">
        <ThemeToggle />
        <FontToggle />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Card Component</h2>
        <p className="text-lsd-text-secondary">
          A card component that displays content in a contained box with
          optional header, footer, and actions.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Basic Card</h2>
        <CodeExample
          title="Card Basic"
          code={`<Card>
  <CardContent className="pt-6">
    <p>This is a basic card with only content.</p>
  </CardContent>
</Card>`}
        >
          <Card>
            <CardContent className="pt-6">
              <p>This is a basic card with only content.</p>
            </CardContent>
          </Card>
        </CodeExample>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Card with Header and Title</h2>
        <CodeExample
          title="Card with Header and Title"
          code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is the card content area.</p>
  </CardContent>
</Card>`}
        >
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the card content area.</p>
            </CardContent>
          </Card>
        </CodeExample>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">
          Card with Header, Content, and Footer
        </h2>
        <CodeExample
          title="Card with Header, Content, and Footer"
          code={`<Card>
  <CardHeader>
    <CardTitle>Complete Card</CardTitle>
    <CardDescription>This card has all sections</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is the main content of the card.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}
        >
          <Card>
            <CardHeader>
              <CardTitle>Complete Card</CardTitle>
              <CardDescription>This card has all sections</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the main content of the card.</p>
            </CardContent>
            <CardFooter>
              <Button>Action</Button>
            </CardFooter>
          </Card>
        </CodeExample>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Card with Action</h2>
        <CodeExample
          title="Card with Action"
          code={`<Card>
  <CardHeader>
    <CardTitle>Card with Action</CardTitle>
    <CardDescription>
      This card has an action button in the header
    </CardDescription>
    <CardAction>
      <Button variant="outlined" size="sm">
        Edit
      </Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <p>The action button is aligned to the right in the header.</p>
  </CardContent>
</Card>`}
        >
          <Card>
            <CardHeader>
              <CardTitle>Card with Action</CardTitle>
              <CardDescription>
                This card has an action button in the header
              </CardDescription>
              <CardAction>
                <Button variant="outlined" size="sm">
                  Edit
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p>The action button is aligned to the right in the header.</p>
            </CardContent>
          </Card>
        </CodeExample>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Card Examples</h2>
        <CodeExample
          title="Card Examples"
          code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <Card>
    <CardHeader>
      <CardTitle>User Profile</CardTitle>
      <CardDescription>
        Personal information and settings
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        <p>
          <strong>Name:</strong> John Doe
        </p>
        <p>
          <strong>Email:</strong> john@example.com
        </p>
        <p>
          <strong>Role:</strong> Administrator
        </p>
      </div>
    </CardContent>
    <CardFooter>
      <Button>Save Changes</Button>
    </CardFooter>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>Project Status</CardTitle>
      <CardDescription>Current project metrics</CardDescription>
      <CardAction>
        <Button variant="outlined" size="sm">
          Refresh
        </Button>
      </CardAction>
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        <p>
          <strong>Progress:</strong> 75%
        </p>
        <p>
          <strong>Tasks:</strong> 12/16 completed
        </p>
        <p>
          <strong>Due Date:</strong> June 30, 2023
        </p>
      </div>
    </CardContent>
  </Card>
</div>`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>User Profile</CardTitle>
                <CardDescription>
                  Personal information and settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>
                    <strong>Name:</strong> John Doe
                  </p>
                  <p>
                    <strong>Email:</strong> john@example.com
                  </p>
                  <p>
                    <strong>Role:</strong> Administrator
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Project Status</CardTitle>
                <CardDescription>Current project metrics</CardDescription>
                <CardAction>
                  <Button variant="outlined" size="sm">
                    Refresh
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>
                    <strong>Progress:</strong> 75%
                  </p>
                  <p>
                    <strong>Tasks:</strong> 12/16 completed
                  </p>
                  <p>
                    <strong>Due Date:</strong> June 30, 2023
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CodeExample>
      </div>
    </div>
  );
}
