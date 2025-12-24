import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CodeExample } from '../code-example';
import { FontToggle } from '../font-toggle';
import { ThemeToggle } from '../theme-toggle';

export default function TabsFixture() {
  return (
    <div className="lsd:p-8 lsd:w-full lsd:space-y-8">
      <div className="lsd:flex lsd:justify-end lsd:gap-4">
        <ThemeToggle />
        <FontToggle />
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-2xl lsd:font-bold">Tabs Component</h2>
        <p className="lsd:text-muted-foreground">
          A tabs component that allows users to navigate between different
          content sections.
        </p>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Default Tabs</h2>
        <CodeExample
          title="Default Tabs"
          code={`<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <p>Content for Tab 1</p>
  </TabsContent>
  <TabsContent value="tab2">
    <p>Content for Tab 2</p>
  </TabsContent>
  <TabsContent value="tab3">
    <p>Content for Tab 3</p>
  </TabsContent>
</Tabs>`}
        >
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              <TabsTrigger value="tab3">Tab 3</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <p>Content for Tab 1</p>
            </TabsContent>
            <TabsContent value="tab2">
              <p>Content for Tab 2</p>
            </TabsContent>
            <TabsContent value="tab3">
              <p>Content for Tab 3</p>
            </TabsContent>
          </Tabs>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Sizes</h2>
        <CodeExample
          title="Tabs Sizes"
          code={`<div className="lsd:space-y-8">
  <div>
    <h3 className="lsd:text-lg lsd:font-medium lsd:mb-2">Small Tabs</h3>
    <Tabs defaultValue="tab1" size="sm">
      <TabsList size="sm">
        <TabsTrigger value="tab1" size="sm">
          Tab 1
        </TabsTrigger>
        <TabsTrigger value="tab2" size="sm">
          Tab 2
        </TabsTrigger>
        <TabsTrigger value="tab3" size="sm">
          Tab 3
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>Content for Small Tab 1</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>Content for Small Tab 2</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p>Content for Small Tab 3</p>
      </TabsContent>
    </Tabs>
  </div>

  <div>
    <h3 className="lsd:text-lg lsd:font-medium lsd:mb-2">Medium Tabs</h3>
    <Tabs defaultValue="tab1" size="md">
      <TabsList size="md">
        <TabsTrigger value="tab1" size="md">
          Tab 1
        </TabsTrigger>
        <TabsTrigger value="tab2" size="md">
          Tab 2
        </TabsTrigger>
        <TabsTrigger value="tab3" size="md">
          Tab 3
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>Content for Medium Tab 1</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>Content for Medium Tab 2</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p>Content for Medium Tab 3</p>
      </TabsContent>
    </Tabs>
  </div>

  <div>
    <h3 className="lsd:text-lg lsd:font-medium lsd:mb-2">Large Tabs</h3>
    <Tabs defaultValue="tab1" size="lg">
      <TabsList size="lg">
        <TabsTrigger value="tab1" size="lg">
          Tab 1
        </TabsTrigger>
        <TabsTrigger value="tab2" size="lg">
          Tab 2
        </TabsTrigger>
        <TabsTrigger value="tab3" size="lg">
          Tab 3
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>Content for Large Tab 1</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>Content for Large Tab 2</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p>Content for Large Tab 3</p>
      </TabsContent>
    </Tabs>
  </div>
</div>`}
        >
          <div className="lsd:space-y-8">
            <div>
              <h3 className="lsd:text-lg lsd:font-medium lsd:mb-2">
                Small Tabs
              </h3>
              <Tabs defaultValue="tab1" size="sm">
                <TabsList size="sm">
                  <TabsTrigger value="tab1" size="sm">
                    Tab 1
                  </TabsTrigger>
                  <TabsTrigger value="tab2" size="sm">
                    Tab 2
                  </TabsTrigger>
                  <TabsTrigger value="tab3" size="sm">
                    Tab 3
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">
                  <p>Content for Small Tab 1</p>
                </TabsContent>
                <TabsContent value="tab2">
                  <p>Content for Small Tab 2</p>
                </TabsContent>
                <TabsContent value="tab3">
                  <p>Content for Small Tab 3</p>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <h3 className="lsd:text-lg lsd:font-medium lsd:mb-2">
                Medium Tabs
              </h3>
              <Tabs defaultValue="tab1" size="md">
                <TabsList size="md">
                  <TabsTrigger value="tab1" size="md">
                    Tab 1
                  </TabsTrigger>
                  <TabsTrigger value="tab2" size="md">
                    Tab 2
                  </TabsTrigger>
                  <TabsTrigger value="tab3" size="md">
                    Tab 3
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">
                  <p>Content for Medium Tab 1</p>
                </TabsContent>
                <TabsContent value="tab2">
                  <p>Content for Medium Tab 2</p>
                </TabsContent>
                <TabsContent value="tab3">
                  <p>Content for Medium Tab 3</p>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <h3 className="lsd:text-lg lsd:font-medium lsd:mb-2">
                Large Tabs
              </h3>
              <Tabs defaultValue="tab1" size="lg">
                <TabsList size="lg">
                  <TabsTrigger value="tab1" size="lg">
                    Tab 1
                  </TabsTrigger>
                  <TabsTrigger value="tab2" size="lg">
                    Tab 2
                  </TabsTrigger>
                  <TabsTrigger value="tab3" size="lg">
                    Tab 3
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">
                  <p>Content for Large Tab 1</p>
                </TabsContent>
                <TabsContent value="tab2">
                  <p>Content for Large Tab 2</p>
                </TabsContent>
                <TabsContent value="tab3">
                  <p>Content for Large Tab 3</p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Full Width Tabs</h2>
        <CodeExample
          title="Full Width Tabs"
          code={`<Tabs defaultValue="tab1" fullWidth>
  <TabsList fullWidth>
    <TabsTrigger value="tab1" fullWidth>
      Tab 1
    </TabsTrigger>
    <TabsTrigger value="tab2" fullWidth>
      Tab 2
    </TabsTrigger>
    <TabsTrigger value="tab3" fullWidth>
      Tab 3
    </TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <p>Content for Full Width Tab 1</p>
  </TabsContent>
  <TabsContent value="tab2">
    <p>Content for Full Width Tab 2</p>
  </TabsContent>
  <TabsContent value="tab3">
    <p>Content for Full Width Tab 3</p>
  </TabsContent>
</Tabs>`}
        >
          <Tabs defaultValue="tab1" fullWidth>
            <TabsList fullWidth>
              <TabsTrigger value="tab1" fullWidth>
                Tab 1
              </TabsTrigger>
              <TabsTrigger value="tab2" fullWidth>
                Tab 2
              </TabsTrigger>
              <TabsTrigger value="tab3" fullWidth>
                Tab 3
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <p>Content for Full Width Tab 1</p>
            </TabsContent>
            <TabsContent value="tab2">
              <p>Content for Full Width Tab 2</p>
            </TabsContent>
            <TabsContent value="tab3">
              <p>Content for Full Width Tab 3</p>
            </TabsContent>
          </Tabs>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Tabs with Icons</h2>
        <CodeExample
          title="Tabs with Icons"
          code={`<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">
      Tab 1
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <title>Lightning Bolt Icon</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    </TabsTrigger>
    <TabsTrigger value="tab2">
      Tab 2
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <title>Envelope Icon</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    </TabsTrigger>
    <TabsTrigger value="tab3">
      Tab 3
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <title>User Icon</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    </TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <p>Content for Tab 1 with Icon</p>
  </TabsContent>
  <TabsContent value="tab2">
    <p>Content for Tab 2 with Icon</p>
  </TabsContent>
  <TabsContent value="tab3">
    <p>Content for Tab 3 with Icon</p>
  </TabsContent>
</Tabs>`}
        >
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">
                Tab 1
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <title>Lightning Bolt Icon</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </TabsTrigger>
              <TabsTrigger value="tab2">
                Tab 2
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <title>Envelope Icon</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </TabsTrigger>
              <TabsTrigger value="tab3">
                Tab 3
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <title>User Icon</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <p>Content for Tab 1 with Icon</p>
            </TabsContent>
            <TabsContent value="tab2">
              <p>Content for Tab 2 with Icon</p>
            </TabsContent>
            <TabsContent value="tab3">
              <p>Content for Tab 3 with Icon</p>
            </TabsContent>
          </Tabs>
        </CodeExample>
      </div>

      <div className="lsd:space-y-4">
        <h2 className="lsd:text-xl lsd:font-semibold">Disabled Tabs</h2>
        <CodeExample
          title="Disabled Tabs"
          code={`<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Active Tab</TabsTrigger>
    <TabsTrigger value="tab2">Normal Tab</TabsTrigger>
    <TabsTrigger value="tab3" disabled>
      Disabled Tab
    </TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <p>Content for Active Tab</p>
  </TabsContent>
  <TabsContent value="tab2">
    <p>Content for Normal Tab</p>
  </TabsContent>
  <TabsContent value="tab3">
    <p>Content for Disabled Tab (not accessible)</p>
  </TabsContent>
</Tabs>`}
        >
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">Active Tab</TabsTrigger>
              <TabsTrigger value="tab2">Normal Tab</TabsTrigger>
              <TabsTrigger value="tab3" disabled>
                Disabled Tab
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <p>Content for Active Tab</p>
            </TabsContent>
            <TabsContent value="tab2">
              <p>Content for Normal Tab</p>
            </TabsContent>
            <TabsContent value="tab3">
              <p>Content for Disabled Tab (not accessible)</p>
            </TabsContent>
          </Tabs>
        </CodeExample>
      </div>
    </div>
  );
}
