import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Command, CommandEmpty, CommandInput, CommandList } from "./index";

describe("CommandEmpty", () => {
  it("renders without crashing", () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found</CommandEmpty>
        </CommandList>
      </Command>,
    );
    expect(
      document.querySelector('[data-slot="command-empty"]'),
    ).toBeInTheDocument();
  });

  it("applies data-slot attribute", () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found</CommandEmpty>
        </CommandList>
      </Command>,
    );
    const empty = document.querySelector('[data-slot="command-empty"]');
    expect(empty).toHaveAttribute("data-slot", "command-empty");
  });

  it("applies base classes correctly", () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found</CommandEmpty>
        </CommandList>
      </Command>,
    );
    const empty = document.querySelector('[data-slot="command-empty"]');
    expect(empty).toHaveClass("lsd:py-6");
    expect(empty).toHaveClass("lsd:text-center");
    expect(empty).toHaveClass("lsd:text-sm");
  });

  it("renders children correctly", () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found</CommandEmpty>
        </CommandList>
      </Command>,
    );
    expect(screen.getByText("No results found")).toBeInTheDocument();
  });
});
