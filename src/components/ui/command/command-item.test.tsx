import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "./index";

describe("CommandItem", () => {
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
      document.querySelector('[data-slot="command-item"]'),
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
    const item = document.querySelector('[data-slot="command-item"]');
    expect(item).toHaveAttribute("data-slot", "command-item");
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
    const item = document.querySelector('[data-slot="command-item"]');
    expect(item).toHaveClass("lsd:relative");
    expect(item).toHaveClass("lsd:flex");
    expect(item).toHaveClass("lsd:cursor-default");
    expect(item).toHaveClass("lsd:items-center");
    expect(item).toHaveClass("lsd:gap-2");
    expect(item).toHaveClass("lsd:rounded-sm");
    expect(item).toHaveClass("lsd:px-2");
    expect(item).toHaveClass("lsd:py-1.5");
    expect(item).toHaveClass("lsd:text-sm");
  });

  it("applies selected state classes", () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const item = document.querySelector('[data-slot="command-item"]');
    expect(item).toHaveClass(
      "lsd:data-[selected=true]:bg-lsd-surface-secondary",
    );
    expect(item).toHaveClass("lsd:data-[selected=true]:text-lsd-text");
  });

  it("applies disabled state classes", () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem disabled>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const item = document.querySelector('[data-slot="command-item"]');
    expect(item).toHaveClass("lsd:data-[disabled=true]:pointer-events-none");
    expect(item).toHaveClass("lsd:data-[disabled=true]:opacity-50");
  });

  it("merges custom className with component classes", () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem className="custom-item-class">Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const item = document.querySelector('[data-slot="command-item"]');
    expect(item).toHaveClass("custom-item-class");
  });

  it("passes through additional props", () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem data-testid="test-item">Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const item = document.querySelector('[data-slot="command-item"]');
    expect(item).toHaveAttribute("data-testid", "test-item");
  });

  it("renders children correctly", () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>
            <span>Item 1</span>
            <CommandShortcut>⌘K</CommandShortcut>
          </CommandItem>
        </CommandList>
      </Command>,
    );
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("⌘K")).toBeInTheDocument();
  });
});
