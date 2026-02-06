import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Command, CommandInput, CommandItem, CommandList } from "./index";

describe("CommandList", () => {
  it("renders without crashing", () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    expect(
      document.querySelector('[data-slot="command-list"]'),
    ).toBeInTheDocument();
  });

  it("applies data-slot attribute", () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const list = document.querySelector('[data-slot="command-list"]');
    expect(list).toHaveAttribute("data-slot", "command-list");
  });

  it("applies base classes correctly", () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const list = document.querySelector('[data-slot="command-list"]');
    expect(list).toHaveClass("lsd:max-h-[300px]");
    expect(list).toHaveClass("lsd:scroll-py-1");
    expect(list).toHaveClass("lsd:overflow-x-hidden");
    expect(list).toHaveClass("lsd:overflow-y-auto");
  });

  it("merges custom className with component classes", () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList className="custom-list-class">
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const list = document.querySelector('[data-slot="command-list"]');
    expect(list).toHaveClass("custom-list-class");
  });

  it("passes through additional props", () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList data-testid="test-list">
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const list = document.querySelector('[data-slot="command-list"]');
    expect(list).toHaveAttribute("data-testid", "test-list");
  });
});
