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
    <div className="lsd:p-8 lsd:w-full lsd:space-y-8">
      <div className="lsd:flex lsd:justify-end lsd:gap-4">
        <ThemeToggle />
        <FontToggle />
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-2xl lsd:font-bold">Button Group Component</h2>
        <p className="lsd:text-muted-foreground">
          A button group component that groups related buttons together with
          proper visual separation.
        </p>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Primary Actions</h2>
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

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Secondary Actions</h2>
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

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Navigation</h2>
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

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Vertical Menu</h2>
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

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Export Options</h2>
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

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Button Sizes</h2>
        <CodeExample
          title="Button Group Button Sizes"
          code={`<div className="lsd:space-y-4">
  <div>
    <h3 className="lsd:text-lg lsd:font-medium lsd:mb-2">Small Buttons</h3>
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
    <h3 className="lsd:text-lg lsd:font-medium lsd:mb-2">Default Buttons</h3>
    <ButtonGroup>
      <Button variant="outlined">Bold</Button>
      <Button variant="outlined">Italic</Button>
      <Button variant="outlined">Underline</Button>
    </ButtonGroup>
  </div>

  <div>
    <h3 className="lsd:text-lg lsd:font-medium lsd:mb-2">Large Buttons</h3>
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
          <div className="lsd:space-y-4">
            <div>
              <h3 className="lsd:text-lg lsd:font-medium lsd:mb-2">
                Small Buttons
              </h3>
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
              <h3 className="lsd:text-lg lsd:font-medium lsd:mb-2">
                Default Buttons
              </h3>
              <ButtonGroup>
                <Button variant="outlined">Bold</Button>
                <Button variant="outlined">Italic</Button>
                <Button variant="outlined">Underline</Button>
              </ButtonGroup>
            </div>

            <div>
              <h3 className="lsd:text-lg lsd:font-medium lsd:mb-2">
                Large Buttons
              </h3>
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

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">With Disabled State</h2>
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

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Text Editor Actions</h2>
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
