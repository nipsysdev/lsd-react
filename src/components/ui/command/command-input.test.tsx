import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Command, CommandInput, CommandItem, CommandList } from "./index";

describe("CommandInput", () => {
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
      document.querySelector('[data-slot="command-input-wrapper"]'),
    ).toBeInTheDocument();
  });

  it("applies data-slot attribute to wrapper", () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const wrapper = document.querySelector(
      '[data-slot="command-input-wrapper"]',
    );
    expect(wrapper).toHaveAttribute("data-slot", "command-input-wrapper");
  });

  it("applies data-slot attribute to input", () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const input = document.querySelector('[data-slot="command-input"]');
    expect(input).toHaveAttribute("data-slot", "command-input");
  });

  it("renders search icon", () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const wrapper = document.querySelector(
      '[data-slot="command-input-wrapper"]',
    );
    expect(wrapper?.querySelector("svg")).toBeInTheDocument();
  });

  it("applies base classes to wrapper", () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const wrapper = document.querySelector(
      '[data-slot="command-input-wrapper"]',
    );
    expect(wrapper).toHaveClass("lsd:flex");
    expect(wrapper).toHaveClass("lsd:h-9");
    expect(wrapper).toHaveClass("lsd:items-center");
    expect(wrapper).toHaveClass("lsd:gap-2");
    expect(wrapper).toHaveClass("lsd:border-b");
    expect(wrapper).toHaveClass("lsd:border-lsd-border");
    expect(wrapper).toHaveClass("lsd:px-3");
  });

  it("applies base classes to input", () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const input = document.querySelector('[data-slot="command-input"]');
    expect(input).toHaveClass("lsd:flex");
    expect(input).toHaveClass("lsd:h-10");
    expect(input).toHaveClass("lsd:w-full");
    expect(input).toHaveClass("lsd:rounded-md");
    expect(input).toHaveClass("lsd:bg-transparent");
    expect(input).toHaveClass("lsd:py-3");
    expect(input).toHaveClass("lsd:text-sm");
  });

  it("merges custom className with component classes", () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." className="custom-input-class" />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const input = document.querySelector('[data-slot="command-input"]');
    expect(input).toHaveClass("custom-input-class");
  });

  it("passes through additional props", () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." data-testid="test-input" />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </Command>,
    );
    const input = document.querySelector('[data-slot="command-input"]');
    expect(input).toHaveAttribute("data-testid", "test-input");
  });
});
