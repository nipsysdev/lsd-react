import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CodeExample } from '../code-example';
import { FontToggle } from '../font-toggle';
import { ThemeToggle } from '../theme-toggle';

export default function SeparatorFixture() {
  return (
    <div className="p-8 w-full space-y-8">
      <div className="flex justify-end gap-4">
        <ThemeToggle />
        <FontToggle />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Separator Component</h2>
        <p className="text-muted-foreground">
          A separator component that visually divides content with a horizontal
          or vertical line.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Horizontal Separator</h2>
        <CodeExample
          title="Horizontal Separator"
          code={`<div className="space-y-4">
  <div>
    <h3 className="text-lg font-medium">Section 1</h3>
    <p className="text-sm text-muted-foreground">
      Content for the first section goes here.
    </p>
  </div>
  <Separator />
  <div>
    <h3 className="text-lg font-medium">Section 2</h3>
    <p className="text-sm text-muted-foreground">
      Content for the second section goes here.
    </p>
  </div>
</div>`}
        >
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Section 1</h3>
              <p className="text-sm text-muted-foreground">
                Content for the first section goes here.
              </p>
            </div>
            <Separator />
            <div>
              <h3 className="text-lg font-medium">Section 2</h3>
              <p className="text-sm text-muted-foreground">
                Content for the second section goes here.
              </p>
            </div>
          </div>
        </CodeExample>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Separator in Cards</h2>
        <CodeExample
          title="Separator in Cards"
          code={`<Card>
  <CardHeader>
    <CardTitle>Account Settings</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <h4 className="text-sm font-medium">Profile Information</h4>
      <p className="text-xs text-muted-foreground">
        Update your profile information and email address.
      </p>
    </div>
    <Separator />
    <div className="space-y-2">
      <h4 className="text-sm font-medium">Password</h4>
      <p className="text-xs text-muted-foreground">
        Change your password to keep your account secure.
      </p>
    </div>
    <Separator />
    <div className="space-y-2">
      <h4 className="text-sm font-medium">Notifications</h4>
      <p className="text-xs text-muted-foreground">
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
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Profile Information</h4>
                <p className="text-xs text-muted-foreground">
                  Update your profile information and email address.
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Password</h4>
                <p className="text-xs text-muted-foreground">
                  Change your password to keep your account secure.
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Notifications</h4>
                <p className="text-xs text-muted-foreground">
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
