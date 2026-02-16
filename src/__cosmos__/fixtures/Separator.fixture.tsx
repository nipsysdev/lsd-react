import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CodeExample } from '../code-example';
import { FontToggle } from '../font-toggle';
import { ThemeAccentToggle, ThemeToggle } from '../theme-toggle';

export default function SeparatorFixture() {
  return (
    <div className="lsd:p-8 lsd:w-full lsd:space-y-8">
      <div className="lsd:flex lsd:justify-end lsd:gap-4">
        <ThemeToggle />
        <ThemeAccentToggle />
        <FontToggle />
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-2xl lsd:font-bold">Separator Component</h2>
        <p className="lsd:text-muted-foreground">
          A separator component that visually divides content with a horizontal
          or vertical line.
        </p>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Horizontal Separator</h2>
        <CodeExample
          title="Horizontal Separator"
          code={`<div className="lsd:space-y-4">
  <div>
    <h3 className="lsd:text-lg lsd:font-medium">Section 1</h3>
    <p className="lsd:text-sm lsd:text-muted-foreground">
      Content for the first section goes here.
    </p>
  </div>
  <Separator />
  <div>
    <h3 className="lsd:text-lg lsd:font-medium">Section 2</h3>
    <p className="lsd:text-sm lsd:text-muted-foreground">
      Content for the second section goes here.
    </p>
  </div>
</div>`}
        >
          <div className="lsd:space-y-4">
            <div>
              <h3 className="lsd:text-lg lsd:font-medium">Section 1</h3>
              <p className="lsd:text-sm lsd:text-muted-foreground">
                Content for the first section goes here.
              </p>
            </div>
            <Separator />
            <div>
              <h3 className="lsd:text-lg lsd:font-medium">Section 2</h3>
              <p className="lsd:text-sm lsd:text-muted-foreground">
                Content for the second section goes here.
              </p>
            </div>
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Separator in Cards</h2>
        <CodeExample
          title="Separator in Cards"
          code={`<Card>
  <CardHeader>
    <CardTitle>Account Settings</CardTitle>
  </CardHeader>
  <CardContent className="lsd:space-y-4">
    <div className="lsd:space-y-2">
      <h4 className="lsd:text-sm lsd:font-medium">Profile Information</h4>
      <p className="lsd:text-xs lsd:text-muted-foreground">
        Update your profile information and email address.
      </p>
    </div>
    <Separator />
    <div className="lsd:space-y-2">
      <h4 className="lsd:text-sm lsd:font-medium">Password</h4>
      <p className="lsd:text-xs lsd:text-muted-foreground">
        Change your password to keep your account secure.
      </p>
    </div>
    <Separator />
    <div className="lsd:space-y-2">
      <h4 className="lsd:text-sm lsd:font-medium">Notifications</h4>
      <p className="lsd:text-xs lsd:text-muted-foreground">
        Manage your notification preferences.
      </p>
    </div>
  </CardContent>
</Card>`}
        >
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent className="lsd:space-y-4">
              <div className="lsd:space-y-2">
                <h4 className="lsd:text-sm lsd:font-medium">
                  Profile Information
                </h4>
                <p className="lsd:text-xs lsd:text-muted-foreground">
                  Update your profile information and email address.
                </p>
              </div>
              <Separator />
              <div className="lsd:space-y-2">
                <h4 className="lsd:text-sm lsd:font-medium">Password</h4>
                <p className="lsd:text-xs lsd:text-muted-foreground">
                  Change your password to keep your account secure.
                </p>
              </div>
              <Separator />
              <div className="lsd:space-y-2">
                <h4 className="lsd:text-sm lsd:font-medium">Notifications</h4>
                <p className="lsd:text-xs lsd:text-muted-foreground">
                  Manage your notification preferences.
                </p>
              </div>
            </CardContent>
          </Card>
        </CodeExample>
      </div>
    </div>
  );
}
