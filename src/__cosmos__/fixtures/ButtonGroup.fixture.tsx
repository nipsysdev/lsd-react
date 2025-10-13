import { Button } from '@/components/ui/button';
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from '@/components/ui/button-group';
import { CodeExample } from '../code-example';
import { FontToggle } from '../font-toggle';
import { ThemeToggle } from '../theme-toggle';

export default function ButtonGroupFixture() {
  return (
    <div className="p-8 w-full space-y-8">
      <div className="flex justify-end gap-4">
        <ThemeToggle />
        <FontToggle />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Button Group Component</h2>
        <p className="text-muted-foreground">
          A button group component that groups related buttons together with
          proper visual separation.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Primary Actions</h2>
        <CodeExample
          title="Button Group Primary Actions"
          code={`<ButtonGroup>
  <Button variant="filled">Save</Button>
  <Button variant="filled">Save As</Button>
</ButtonGroup>`}
        >
          <ButtonGroup>
            <Button variant="filled">Save</Button>
            <Button variant="filled">Save As</Button>
          </ButtonGroup>
        </CodeExample>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Secondary Actions</h2>
        <CodeExample
          title="Button Group Secondary Actions"
          code={`<ButtonGroup>
  <Button variant="outlined">Edit</Button>
  <Button variant="outlined">Duplicate</Button>
  <Button variant="outlined">Delete</Button>
</ButtonGroup>`}
        >
          <ButtonGroup>
            <Button variant="outlined">Edit</Button>
            <Button variant="outlined">Duplicate</Button>
            <Button variant="outlined">Delete</Button>
          </ButtonGroup>
        </CodeExample>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Navigation</h2>
        <CodeExample
          title="Button Group Navigation"
          code={`<ButtonGroup>
  <Button variant="outlined">Previous</Button>
  <ButtonGroupText>Page 1 of 5</ButtonGroupText>
  <Button variant="outlined">Next</Button>
</ButtonGroup>`}
        >
          <ButtonGroup>
            <Button variant="outlined">Previous</Button>
            <ButtonGroupText>Page 1 of 5</ButtonGroupText>
            <Button variant="outlined">Next</Button>
          </ButtonGroup>
        </CodeExample>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Vertical Menu</h2>
        <CodeExample
          title="Button Group Vertical Menu"
          code={`<ButtonGroup orientation="vertical">
  <Button variant="outlined">Profile</Button>
  <Button variant="outlined">Settings</Button>
  <Button variant="outlined">Logout</Button>
</ButtonGroup>`}
        >
          <ButtonGroup orientation="vertical">
            <Button variant="outlined">Profile</Button>
            <Button variant="outlined">Settings</Button>
            <Button variant="outlined">Logout</Button>
          </ButtonGroup>
        </CodeExample>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Export Options</h2>
        <CodeExample
          title="Button Group Export Options"
          code={`<ButtonGroup>
  <Button variant="filled">Export</Button>
  <ButtonGroupSeparator />
  <Button variant="outlined">PDF</Button>
  <Button variant="outlined">CSV</Button>
  <Button variant="outlined">JSON</Button>
</ButtonGroup>`}
        >
          <ButtonGroup>
            <Button variant="filled">Export</Button>
            <ButtonGroupSeparator />
            <Button variant="outlined">PDF</Button>
            <Button variant="outlined">CSV</Button>
            <Button variant="outlined">JSON</Button>
          </ButtonGroup>
        </CodeExample>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Button Sizes</h2>
        <CodeExample
          title="Button Group Button Sizes"
          code={`<div className="space-y-4">
  <div>
    <h3 className="text-lg font-medium mb-2">Small Buttons</h3>
    <ButtonGroup>
      <Button size="sm" variant="outlined">
        Copy
      </Button>
      <Button size="sm" variant="outlined">
        Cut
      </Button>
      <Button size="sm" variant="outlined">
        Paste
      </Button>
    </ButtonGroup>
  </div>

  <div>
    <h3 className="text-lg font-medium mb-2">Default Buttons</h3>
    <ButtonGroup>
      <Button variant="outlined">Bold</Button>
      <Button variant="outlined">Italic</Button>
      <Button variant="outlined">Underline</Button>
    </ButtonGroup>
  </div>

  <div>
    <h3 className="text-lg font-medium mb-2">Large Buttons</h3>
    <ButtonGroup>
      <Button size="lg" variant="filled">
        Submit
      </Button>
      <Button size="lg" variant="filled">
        Continue
      </Button>
    </ButtonGroup>
  </div>
</div>`}
        >
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Small Buttons</h3>
              <ButtonGroup>
                <Button size="sm" variant="outlined">
                  Copy
                </Button>
                <Button size="sm" variant="outlined">
                  Cut
                </Button>
                <Button size="sm" variant="outlined">
                  Paste
                </Button>
              </ButtonGroup>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Default Buttons</h3>
              <ButtonGroup>
                <Button variant="outlined">Bold</Button>
                <Button variant="outlined">Italic</Button>
                <Button variant="outlined">Underline</Button>
              </ButtonGroup>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Large Buttons</h3>
              <ButtonGroup>
                <Button size="lg" variant="filled">
                  Submit
                </Button>
                <Button size="lg" variant="filled">
                  Continue
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </CodeExample>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">With Disabled State</h2>
        <CodeExample
          title="Button Group With Disabled State"
          code={`<ButtonGroup>
  <Button variant="outlined">Undo</Button>
  <Button variant="outlined" disabled>
    Redo
  </Button>
</ButtonGroup>`}
        >
          <ButtonGroup>
            <Button variant="outlined">Undo</Button>
            <Button variant="outlined" disabled>
              Redo
            </Button>
          </ButtonGroup>
        </CodeExample>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Text Editor Actions</h2>
        <CodeExample
          title="Button Group Text Editor Actions"
          code={`<ButtonGroup>
  <Button variant="outlined">Undo</Button>
  <Button variant="outlined">Redo</Button>
  <ButtonGroupSeparator />
  <ButtonGroupText>Format</ButtonGroupText>
  <ButtonGroupSeparator />
  <Button variant="filled">Save</Button>
</ButtonGroup>`}
        >
          <ButtonGroup>
            <Button variant="outlined">Undo</Button>
            <Button variant="outlined">Redo</Button>
            <ButtonGroupSeparator />
            <ButtonGroupText>Format</ButtonGroupText>
            <ButtonGroupSeparator />
            <Button variant="filled">Save</Button>
          </ButtonGroup>
        </CodeExample>
      </div>
    </div>
  );
}
