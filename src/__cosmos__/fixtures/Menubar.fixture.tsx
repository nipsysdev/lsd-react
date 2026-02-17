import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { CodeExample } from '../code-example';
import { FontToggle } from '../font-toggle';
import { ThemeAccentToggle, ThemeToggle } from '../theme-toggle';

export default () => (
  <div className="lsd:p-8 lsd:w-full lsd:space-y-8">
    <div className="lsd:flex lsd:justify-end lsd:gap-4">
      <ThemeToggle />
      <ThemeAccentToggle />
      <FontToggle />
    </div>

    <div className="lsd:space-y-4">
      <h2 className="lsd:text-2xl lsd:font-bold">Menubar Component</h2>
      <p className="lsd:text-lsd-text-secondary">
        A horizontally stacked set of menus that provides access to a consistent
        set of commands or actions.
      </p>
    </div>

    <div className="lsd:space-y-6">
      <div className="lsd:space-y-2">
        <h3 className="lsd:text-lg lsd:font-semibold">Basic Usage</h3>
        <CodeExample
          title="Menubar Basic Usage"
          code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem shortcut="⌘T">New Tab</MenubarItem>
      <MenubarItem shortcut="⌘N">New Window</MenubarItem>
      <MenubarItem disabled>New Incognito Window</MenubarItem>
      <MenubarSeparator />
      <MenubarSub>
        <MenubarSubTrigger>Share</MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarItem>Email link</MenubarItem>
          <MenubarItem>Messages</MenubarItem>
          <MenubarItem>Notes</MenubarItem>
        </MenubarSubContent>
      </MenubarSub>
      <MenubarSeparator />
      <MenubarItem shortcut="⌘P">Print...</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem shortcut="⌘Z">Undo</MenubarItem>
      <MenubarItem shortcut="⇧⌘Z">Redo</MenubarItem>
      <MenubarSeparator />
      <MenubarItem shortcut="⌘X">Cut</MenubarItem>
      <MenubarItem shortcut="⌘C">Copy</MenubarItem>
      <MenubarItem shortcut="⌘V">Paste</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
        >
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem shortcut="⌘T">New Tab</MenubarItem>
                <MenubarItem shortcut="⌘N">New Window</MenubarItem>
                <MenubarItem disabled>New Incognito Window</MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Share</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Email link</MenubarItem>
                    <MenubarItem>Messages</MenubarItem>
                    <MenubarItem>Notes</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem shortcut="⌘P">Print...</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem shortcut="⌘Z">Undo</MenubarItem>
                <MenubarItem shortcut="⇧⌘Z">Redo</MenubarItem>
                <MenubarSeparator />
                <MenubarItem shortcut="⌘X">Cut</MenubarItem>
                <MenubarItem shortcut="⌘C">Copy</MenubarItem>
                <MenubarItem shortcut="⌘V">Paste</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarCheckboxItem checked>
                  Always Show Bookmarks Bar
                </MenubarCheckboxItem>
                <MenubarCheckboxItem>Always Show Full URLs</MenubarCheckboxItem>
                <MenubarSeparator />
                <MenubarItem inset shortcut="⌘R">
                  Reload
                </MenubarItem>
                <MenubarItem disabled inset shortcut="⇧⌘R">
                  Force Reload
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Toggle Full Screen</MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Hide Sidebar</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Profiles</MenubarTrigger>
              <MenubarContent>
                <MenubarRadioGroup value="ben">
                  <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                  <MenubarRadioItem value="ben">Ben</MenubarRadioItem>
                  <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
                </MenubarRadioGroup>
                <MenubarSeparator />
                <MenubarItem>Edit...</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Add Profile...</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </CodeExample>
      </div>

      <div className="lsd:space-y-2">
        <h3 className="lsd:text-lg lsd:font-semibold">
          With Groups and Labels
        </h3>
        <CodeExample
          title="Menubar With Groups and Labels"
          code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>Actions</MenubarTrigger>
    <MenubarContent>
      <MenubarGroup>
        <MenubarLabel>File Actions</MenubarLabel>
        <MenubarItem>New File</MenubarItem>
        <MenubarItem>Open File</MenubarItem>
        <MenubarItem>Save File</MenubarItem>
      </MenubarGroup>
      <MenubarSeparator />
      <MenubarGroup>
        <MenubarLabel>Edit Actions</MenubarLabel>
        <MenubarItem>Cut</MenubarItem>
        <MenubarItem>Copy</MenubarItem>
        <MenubarItem>Paste</MenubarItem>
      </MenubarGroup>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
        >
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Actions</MenubarTrigger>
              <MenubarContent>
                <MenubarGroup>
                  <MenubarLabel>File Actions</MenubarLabel>
                  <MenubarItem>New File</MenubarItem>
                  <MenubarItem>Open File</MenubarItem>
                  <MenubarItem>Save File</MenubarItem>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarGroup>
                  <MenubarLabel>Edit Actions</MenubarLabel>
                  <MenubarItem>Cut</MenubarItem>
                  <MenubarItem>Copy</MenubarItem>
                  <MenubarItem>Paste</MenubarItem>
                </MenubarGroup>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </CodeExample>
      </div>

      <div className="lsd:space-y-2">
        <h3 className="lsd:text-lg lsd:font-semibold">Destructive Variant</h3>
        <CodeExample
          title="Menubar Destructive Item"
          code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New File</MenubarItem>
      <MenubarItem>Save</MenubarItem>
      <MenubarSeparator />
      <MenubarItem variant="destructive">
        Delete File
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
        >
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>New File</MenubarItem>
                <MenubarItem>Save</MenubarItem>
                <MenubarSeparator />
                <MenubarItem variant="destructive">Delete File</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </CodeExample>
      </div>

      <div className="lsd:space-y-2">
        <h3 className="lsd:text-lg lsd:font-semibold">Nested Submenus</h3>
        <CodeExample
          title="Menubar Nested Submenus"
          code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>Preferences</MenubarTrigger>
    <MenubarContent>
      <MenubarSub>
        <MenubarSubTrigger>Appearance</MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarItem>Theme</MenubarItem>
          <MenubarItem>Font Size</MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>Color Scheme</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Light</MenubarItem>
              <MenubarItem>Dark</MenubarItem>
              <MenubarItem>System</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarSubContent>
      </MenubarSub>
      <MenubarSub>
        <MenubarSubTrigger>Settings</MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarItem>General</MenubarItem>
          <MenubarItem>Keyboard</MenubarItem>
          <MenubarItem>Language</MenubarItem>
        </MenubarSubContent>
      </MenubarSub>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
        >
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Preferences</MenubarTrigger>
              <MenubarContent>
                <MenubarSub>
                  <MenubarSubTrigger>Appearance</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Theme</MenubarItem>
                    <MenubarItem>Font Size</MenubarItem>
                    <MenubarSub>
                      <MenubarSubTrigger>Color Scheme</MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarItem>Light</MenubarItem>
                        <MenubarItem>Dark</MenubarItem>
                        <MenubarItem>System</MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSub>
                  <MenubarSubTrigger>Settings</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>General</MenubarItem>
                    <MenubarItem>Keyboard</MenubarItem>
                    <MenubarItem>Language</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </CodeExample>
      </div>

      <div className="lsd:space-y-2">
        <h3 className="lsd:text-lg lsd:font-semibold">
          Checkbox and Radio Items
        </h3>
        <CodeExample
          title="Menubar Checkbox and Radio Items"
          code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>Options</MenubarTrigger>
    <MenubarContent>
      <MenubarCheckboxItem checked>Show Toolbar</MenubarCheckboxItem>
      <MenubarCheckboxItem>Show Status Bar</MenubarCheckboxItem>
      <MenubarCheckboxItem>Show Ruler</MenubarCheckboxItem>
      <MenubarSeparator />
      <MenubarLabel inset>Zoom Level</MenubarLabel>
      <MenubarRadioGroup value="100">
        <MenubarRadioItem value="50">50%</MenubarRadioItem>
        <MenubarRadioItem value="100">100%</MenubarRadioItem>
        <MenubarRadioItem value="150">150%</MenubarRadioItem>
        <MenubarRadioItem value="200">200%</MenubarRadioItem>
      </MenubarRadioGroup>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
        >
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Options</MenubarTrigger>
              <MenubarContent>
                <MenubarCheckboxItem checked>Show Toolbar</MenubarCheckboxItem>
                <MenubarCheckboxItem>Show Status Bar</MenubarCheckboxItem>
                <MenubarCheckboxItem>Show Ruler</MenubarCheckboxItem>
                <MenubarSeparator />
                <MenubarLabel inset>Zoom Level</MenubarLabel>
                <MenubarRadioGroup value="100">
                  <MenubarRadioItem value="50">50%</MenubarRadioItem>
                  <MenubarRadioItem value="100">100%</MenubarRadioItem>
                  <MenubarRadioItem value="150">150%</MenubarRadioItem>
                  <MenubarRadioItem value="200">200%</MenubarRadioItem>
                </MenubarRadioGroup>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </CodeExample>
      </div>
    </div>
  </div>
);
