import { Button } from '@/components/ui/button';
import { ButtonGroup, ButtonGroupText } from '@/components/ui/button-group';
import { CodeExample } from '../code-example';
import { FontToggle } from '../font-toggle';
import { ThemeAccentToggle, ThemeToggle } from '../theme-toggle';

export default function ButtonGroupFixture() {
  return (
    <div className="lsd:p-8 lsd:w-full lsd:space-y-8">
      <div className="lsd:flex lsd:justify-end lsd:gap-4">
        <ThemeToggle />
        <ThemeAccentToggle />
        <FontToggle />
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-2xl lsd:font-bold">Button Group Component</h2>
        <p className="lsd:text-muted-foreground">
          A button group component that groups related buttons together with
          proper visual separation.
        </p>
      </div>

      <div>
        <h2 className="lsd:text-xl lsd:font-semibold lsd:mb-4">
          Basic Button Group
        </h2>
        <CodeExample
          title="Basic Button Group"
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

      <div>
        <h2 className="lsd:text-xl lsd:font-semibold lsd:mb-4">
          With Text Label
        </h2>
        <CodeExample
          title="Button Group with Text Label"
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

      <div>
        <h2 className="lsd:text-xl lsd:font-semibold lsd:mb-4">
          Vertical Orientation
        </h2>
        <CodeExample
          title="Vertical Button Group"
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
    </div>
  );
}
