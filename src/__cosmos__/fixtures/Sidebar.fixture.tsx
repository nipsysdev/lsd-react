import { Calendar, HelpCircle, Home, Inbox, Settings } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { CodeExample } from '../code-example';
import { FontToggle } from '../font-toggle';
import { ThemeAccentToggle, ThemeToggle } from '../theme-toggle';

// Menu items.
const items = [
  {
    title: 'Home',
    url: '#',
    icon: Home,
  },
  {
    title: 'Inbox',
    url: '#',
    icon: Inbox,
  },
  {
    title: 'Calendar',
    url: '#',
    icon: Calendar,
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings,
  },
];

export default function SidebarFixture() {
  return (
    <div className="lsd:w-full">
      <div className="lsd:w-full lsd:space-y-8">
        <div className="lsd:flex lsd:justify-end lsd:gap-4">
          <ThemeToggle />
          <ThemeAccentToggle />
          <FontToggle />
        </div>

        <SidebarProvider>
          <Sidebar>
            <SidebarHeader>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton size="lg">
                    <div className="lsd:flex lsd:aspect-square lsd:size-8 lsd:items-center lsd:justify-center lsd:rounded-lg lsd:bg-sidebar-primary lsd:text-sidebar-primary-foreground">
                      <Home className="lsd:size-4" />
                    </div>
                    <div className="lsd:flex lsd:flex-col lsd:gap-0.5 lsd:leading-none">
                      <span className="lsd:font-semibold">LSD React</span>
                      <span className="">v1.0.0</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
              <SidebarInput placeholder="Search..." />
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Application</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup>
                <SidebarGroupLabel>Settings</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Settings />
                        <span>Settings</span>
                      </SidebarMenuButton>
                      <SidebarMenuSub>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton asChild>
                            <a href="#profile">Profile</a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton asChild>
                            <a href="#account">Account</a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton asChild>
                            <a href="#appearance">Appearance</a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <HelpCircle />
                    <span>Help & Support</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </Sidebar>
          <SidebarInset>
            <main className="lsd:flex lsd:items-center lsd:gap-2">
              <SidebarTrigger />
              <h1 className="lsd:text-2xl lsd:font-bold">Main Content</h1>
            </main>
            <p className="lsd:mt-4 lsd:px-6 lsd:text-muted-foreground">
              This sidebar includes a search input, submenu items, and a footer
              section.
            </p>
            <CodeExample
              title="Sidebar with Search and Submenu"
              code={`<SidebarProvider>
          <Sidebar>
            <SidebarHeader>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton size="lg">
                    <div className="lsd:flex lsd:aspect-square lsd:size-8 lsd:items-center lsd:justify-center lsd:rounded-lg lsd:bg-sidebar-primary lsd:text-sidebar-primary-foreground">
                      <Home className="lsd:size-4" />
                    </div>
                    <div className="lsd:flex lsd:flex-col lsd:gap-0.5 lsd:leading-none">
                      <span className="lsd:font-semibold">LSD React</span>
                      <span className="">v1.0.0</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
              <SidebarInput placeholder="Search..." />
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Application</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup>
                <SidebarGroupLabel>Settings</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Settings />
                        <span>Settings</span>
                      </SidebarMenuButton>
                      <SidebarMenuSub>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton asChild>
                            <a href="#profile">Profile</a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton asChild>
                            <a href="#account">Account</a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton asChild>
                            <a href="#appearance">Appearance</a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <HelpCircle />
                    <span>Help & Support</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
          </Sidebar>
          <SidebarInset>
            <main className="lsd:flex lsd:items-center lsd:gap-2">
              <SidebarTrigger />
              <h1 className="lsd:text-2xl lsd:font-bold">Main Content</h1>
            </main>
            <p className="lsd:mt-4 lsd:px-6 lsd:text-muted-foreground">
              This sidebar includes a search input, submenu items, and a footer
              section.
            </p>
          </SidebarInset>
        </SidebarProvider>`}
            />
          </SidebarInset>
        </SidebarProvider>
      </div>
    </div>
  );
}
