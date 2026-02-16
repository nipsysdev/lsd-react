import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CodeExample } from '../code-example';
import { FontToggle } from '../font-toggle';
import { ThemeAccentToggle, ThemeToggle } from '../theme-toggle';

export default function AccordionFixture() {
  return (
    <div className="lsd:p-8 lsd:w-full lsd:space-y-8">
      <div className="lsd:flex lsd:justify-end lsd:gap-4">
        <ThemeToggle />
        <ThemeAccentToggle />
        <FontToggle />
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-2xl lsd:font-bold">Accordion Component</h2>
        <p className="lsd:text-muted-foreground">
          A vertically stacked set of interactive headings that each reveal a
          section of content.
        </p>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Basic Usage</h2>
        <CodeExample
          title="Single Collapsible Accordion"
          code={`<Accordion type="single" collapsible className="lsd:w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that match the other components.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>
      Yes. It's animated by default, but you can disable it if you prefer.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <Accordion type="single" collapsible className="lsd:w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that match the other
                components.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Multiple Open</h2>
        <CodeExample
          title="Multiple Open Accordion"
          code={`<Accordion type="multiple" className="lsd:w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
    <AccordionContent>
      Yes. You can open multiple items at the same time.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>How does it work?</AccordionTrigger>
    <AccordionContent>
      Set the type prop to "multiple" to allow multiple items to be open.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Is it responsive?</AccordionTrigger>
    <AccordionContent>
      Yes. It works well on all screen sizes.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <Accordion type="multiple" className="lsd:w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
              <AccordionContent>
                Yes. You can open multiple items at the same time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How does it work?</AccordionTrigger>
              <AccordionContent>
                Set the type prop to "multiple" to allow multiple items to be
                open.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it responsive?</AccordionTrigger>
              <AccordionContent>
                Yes. It works well on all screen sizes.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Sizes</h2>
        <CodeExample
          title="Accordion Sizes"
          code={`<div className="lsd:space-y-4">
  <Accordion type="single" collapsible className="lsd:w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger size="sm">Small Size</AccordionTrigger>
      <AccordionContent size="sm">
        This is a small accordion with compact text and padding.
      </AccordionContent>
    </AccordionItem>
  </Accordion>

  <Accordion type="single" collapsible className="lsd:w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger size="md">Medium Size</AccordionTrigger>
      <AccordionContent size="md">
        This is the default medium size accordion.
      </AccordionContent>
    </AccordionItem>
  </Accordion>

  <Accordion type="single" collapsible className="lsd:w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger size="lg">Large Size</AccordionTrigger>
      <AccordionContent size="lg">
        This is a large accordion with bigger text and more padding.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</div>`}
        >
          <div className="lsd:space-y-4">
            <Accordion type="single" collapsible className="lsd:w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger size="sm">Small Size</AccordionTrigger>
                <AccordionContent size="sm">
                  This is a small accordion with compact text and padding.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible className="lsd:w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger size="md">Medium Size</AccordionTrigger>
                <AccordionContent size="md">
                  This is the default medium size accordion.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible className="lsd:w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger size="lg">Large Size</AccordionTrigger>
                <AccordionContent size="lg">
                  This is a large accordion with bigger text and more padding.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Disabled Items</h2>
        <CodeExample
          title="Accordion with Disabled Item"
          code={`<Accordion type="single" collapsible className="lsd:w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Can I disable items?</AccordionTrigger>
    <AccordionContent>
      Yes. You can disable individual accordion items.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2" disabled>
    <AccordionTrigger>This item is disabled</AccordionTrigger>
    <AccordionContent>
      You won't be able to open this item.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>How do I disable an item?</AccordionTrigger>
    <AccordionContent>
      Add the disabled prop to the AccordionItem component.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <Accordion type="single" collapsible className="lsd:w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Can I disable items?</AccordionTrigger>
              <AccordionContent>
                Yes. You can disable individual accordion items.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" disabled>
              <AccordionTrigger>This item is disabled</AccordionTrigger>
              <AccordionContent>
                You won't be able to open this item.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How do I disable an item?</AccordionTrigger>
              <AccordionContent>
                Add the disabled prop to the AccordionItem component.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Size Combinations</h2>
        <CodeExample
          title="Accordion Size Combinations"
          code={`<div className="lsd:space-y-4">
  <Accordion type="multiple" className="lsd:w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger size="sm">Small Trigger</AccordionTrigger>
      <AccordionContent size="sm">
        Small content with compact styling.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger size="md">Medium Trigger</AccordionTrigger>
      <AccordionContent size="md">
        Medium content with default styling.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger size="lg">Large Trigger</AccordionTrigger>
      <AccordionContent size="lg">
        Large content with expanded styling.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</div>`}
        >
          <div className="lsd:space-y-4">
            <Accordion type="multiple" className="lsd:w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger size="sm">Small Trigger</AccordionTrigger>
                <AccordionContent size="sm">
                  Small content with compact styling.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger size="md">Medium Trigger</AccordionTrigger>
                <AccordionContent size="md">
                  Medium content with default styling.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger size="lg">Large Trigger</AccordionTrigger>
                <AccordionContent size="lg">
                  Large content with expanded styling.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Rich Content</h2>
        <CodeExample
          title="Accordion with Rich Content"
          code={`<Accordion type="single" collapsible className="lsd:w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Can I use rich content?</AccordionTrigger>
    <AccordionContent>
      <div className="lsd:space-y-2">
        <p className="lsd:font-semibold">Yes, you can!</p>
        <p>You can include any HTML content inside the accordion.</p>
        <ul className="lsd:list-disc lsd:pl-4 lsd:space-y-1">
          <li>Lists</li>
          <li>Links</li>
          <li>Other components</li>
        </ul>
      </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <Accordion type="single" collapsible className="lsd:w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Can I use rich content?</AccordionTrigger>
              <AccordionContent>
                <div className="lsd:space-y-2">
                  <p className="lsd:font-semibold">Yes, you can!</p>
                  <p>You can include any HTML content inside the accordion.</p>
                  <ul className="lsd:list-disc lsd:pl-4 lsd:space-y-1">
                    <li>Lists</li>
                    <li>Links</li>
                    <li>Other components</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CodeExample>
      </div>
    </div>
  );
}
