import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Typography } from '@/components/ui/typography';
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
    <div className="p-8 space-y-8">
      <div className="flex justify-end gap-4">
        <ThemeToggle />
        <FontToggle />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Scroll Area Component</h2>
        <p className="text-muted-foreground">
          A scroll area component that allows users to scroll through content
          that exceeds the container size.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Vertical Scroll</h2>
        <ScrollArea className="h-48 w-72 border">
          <div className="p-4">
            <Typography variant="h4">Scrollable Content</Typography>
            <div className="space-y-2 mt-2">
              {verticalItems.map((item) => (
                <div key={item.id} className="p-2 border-b">
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Horizontal Scroll</h2>
        <ScrollArea className="h-48 w-72 border">
          <div className="p-4">
            <Typography variant="h4">Horizontal Content</Typography>
            <div className="flex gap-4 mt-2">
              {horizontalItems.map((item) => (
                <div key={item.id} className="p-2 border-b min-w-[100px]">
                  {item.label}
                </div>
              ))}
            </div>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Both Scrollbars</h2>
        <ScrollArea className="h-48 w-72 border">
          <div className="p-4">
            <Typography variant="h4">Grid Content</Typography>
            <div className="grid grid-cols-5 gap-2 mt-2">
              {gridItems.map((item) => (
                <div key={item.id} className="p-2 border-b min-w-[80px]">
                  {item.label}
                </div>
              ))}
            </div>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Nested Scroll Areas</h2>
        <ScrollArea className="h-64 w-80 border">
          <div className="p-4">
            <Typography variant="h4">Outer Container</Typography>
            <div className="space-y-4 mt-2">
              {sections.map((section) => (
                <div key={section.id} className="p-2 border">
                  <Typography variant="body1">{section.label}</Typography>
                  <ScrollArea className="h-24 w-full mt-2 border">
                    <div className="p-2">
                      <div className="space-y-1">
                        {section.nestedItems.map((nestedItem) => (
                          <div
                            key={nestedItem.id}
                            className="p-1 text-sm border-b"
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
      </div>
    </div>
  );
}
