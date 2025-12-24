import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Typography } from '@/components/ui/typography';
import { CodeExample } from '../code-example';
import { FontToggle } from '../font-toggle';
import { ThemeToggle } from '../theme-toggle';

const verticalItems = Array.from({ length: 20 }, (_, i) => ({
  id: `vertical-item-${i + 1}`,
  label: `Item ${i + 1}`,
}));

const horizontalItems = Array.from({ length: 20 }, (_, i) => ({
  id: `horizontal-item-${i + 1}`,
  label: `Item ${i + 1}`,
}));

const gridItems = Array.from({ length: 50 }, (_, i) => ({
  id: `grid-item-${i + 1}`,
  label: `${i + 1}`,
}));

const sections = Array.from({ length: 5 }, (_, i) => ({
  id: `section-${i + 1}`,
  label: `Section ${i + 1}`,
  nestedItems: Array.from({ length: 10 }, (_, j) => ({
    id: `nested-item-${i + 1}-${j + 1}`,
    label: `Nested Item ${j + 1}`,
  })),
}));

export default function ScrollAreaFixture() {
  return (
    <div className="lsd:p-8 lsd:w-full lsd:space-y-8">
      <div className="lsd:flex lsd:justify-end lsd:gap-4">
        <ThemeToggle />
        <FontToggle />
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-2xl lsd:font-bold">Scroll Area Component</h2>
        <p className="lsd:text-muted-foreground">
          A scroll area component that allows users to scroll through content
          that exceeds the container size.
        </p>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Vertical Scroll</h2>
        <CodeExample
          title="Vertical Scroll Area"
          code={`<ScrollArea className="lsd:h-48 lsd:w-72 lsd:border">
  <div className="lsd:p-4">
    <Typography variant="h4">Scrollable Content</Typography>
    <div className="lsd:space-y-2 lsd:mt-2">
      {verticalItems.map((item) => (
        <div key={item.id} className="lsd:p-2 lsd:border-b">
          {item.label}
        </div>
      ))}
    </div>
  </div>
</ScrollArea>`}
        >
          <ScrollArea className="lsd:h-48 lsd:w-72 lsd:border">
            <div className="lsd:p-4">
              <Typography variant="h4">Scrollable Content</Typography>
              <div className="lsd:space-y-2 lsd:mt-2">
                {verticalItems.map((item) => (
                  <div key={item.id} className="lsd:p-2 lsd:border-b">
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Horizontal Scroll</h2>
        <CodeExample
          title="Horizontal Scroll Area"
          code={`<ScrollArea className="lsd:h-48 lsd:w-72 lsd:border">
  <div className="lsd:p-4">
    <Typography variant="h4">Horizontal Content</Typography>
    <div className="lsd:flex lsd:gap-4 lsd:mt-2">
      {horizontalItems.map((item) => (
        <div key={item.id} className="lsd:p-2 lsd:border-b min-w-[100px]">
          {item.label}
        </div>
      ))}
    </div>
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`}
        >
          <ScrollArea className="lsd:h-48 lsd:w-72 lsd:border">
            <div className="lsd:p-4">
              <Typography variant="h4">Horizontal Content</Typography>
              <div className="lsd:flex lsd:gap-4 lsd:mt-2">
                {horizontalItems.map((item) => (
                  <div
                    key={item.id}
                    className="lsd:p-2 lsd:border-b lsd:min-w-[100px]"
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Both Scrollbars</h2>
        <CodeExample
          title="Both Scrollbars"
          code={`<ScrollArea className="lsd:h-48 lsd:w-72 lsd:border">
  <div className="lsd:p-4">
    <Typography variant="h4">Grid Content</Typography>
    <div className="lsd:grid lsd:grid-cols-5 lsd:gap-2 lsd:mt-2">
      {gridItems.map((item) => (
        <div key={item.id} className="lsd:p-2 lsd:border-b min-w-[80px]">
          {item.label}
        </div>
      ))}
    </div>
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`}
        >
          <ScrollArea className="lsd:h-48 lsd:w-72 lsd:border">
            <div className="lsd:p-4">
              <Typography variant="h4">Grid Content</Typography>
              <div className="lsd:grid lsd:grid-cols-5 lsd:gap-2 lsd:mt-2">
                {gridItems.map((item) => (
                  <div
                    key={item.id}
                    className="lsd:p-2 lsd:border-b lsd:min-w-[80px]"
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Nested Scroll Areas</h2>
        <CodeExample
          title="Nested Scroll Areas"
          code={`<ScrollArea className="lsd:h-64 lsd:w-80 lsd:border">
  <div className="lsd:p-4">
    <Typography variant="h4">Outer Container</Typography>
    <div className="lsd:space-y-4 lsd:mt-2">
      {sections.map((section) => (
        <div key={section.id} className="lsd:p-2 lsd:border">
          <Typography variant="body1">{section.label}</Typography>
          <ScrollArea className="lsd:h-24 lsd:w-full lsd:mt-2 lsd:border">
            <div className="lsd:p-2">
              <div className="lsd:space-y-1">
                {section.nestedItems.map((nestedItem) => (
                  <div
                    key={nestedItem.id}
                    className="lsd:p-1 lsd:text-sm lsd:border-b"
                  >
                    {nestedItem.label}
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>
      ))}
    </div>
  </div>
</ScrollArea>`}
        >
          <ScrollArea className="lsd:h-64 lsd:w-80 lsd:border">
            <div className="lsd:p-4">
              <Typography variant="h4">Outer Container</Typography>
              <div className="lsd:space-y-4 lsd:mt-2">
                {sections.map((section) => (
                  <div key={section.id} className="lsd:p-2 lsd:border">
                    <Typography variant="body1">{section.label}</Typography>
                    <ScrollArea className="lsd:h-24 lsd:w-full lsd:mt-2 lsd:border">
                      <div className="lsd:p-2">
                        <div className="lsd:space-y-1">
                          {section.nestedItems.map((nestedItem) => (
                            <div
                              key={nestedItem.id}
                              className="lsd:p-1 lsd:text-sm lsd:border-b"
                            >
                              {nestedItem.label}
                            </div>
                          ))}
                        </div>
                      </div>
                    </ScrollArea>
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
        </CodeExample>
      </div>
    </div>
  );
}
