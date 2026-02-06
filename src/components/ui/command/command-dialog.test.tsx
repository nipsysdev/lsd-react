import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CommandDialog, CommandInput, CommandItem, CommandList } from "./index";

describe("CommandDialog", () => {
  it("renders without crashing", () => {
    render(
      <CommandDialog open>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </CommandDialog>,
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("renders with default title and description", () => {
    render(
      <CommandDialog open>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </CommandDialog>,
    );
    expect(screen.getByText("Command Palette")).toBeInTheDocument();
    expect(
      screen.getByText("Search for a command to run..."),
    ).toBeInTheDocument();
  });

  it("renders with custom title and description", () => {
    render(
      <CommandDialog open title="Custom Title" description="Custom Description">
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </CommandDialog>,
    );
    expect(screen.getByText("Custom Title")).toBeInTheDocument();
    expect(screen.getByText("Custom Description")).toBeInTheDocument();
  });

  it("merges custom className with component classes", () => {
    render(
      <CommandDialog open className="custom-dialog-class">
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </CommandDialog>,
    );
    const dialogContent = screen.getByRole("dialog");
    expect(dialogContent).toHaveClass("custom-dialog-class");
  });

  it("passes through additional props", () => {
    render(
      <CommandDialog open data-testid="test-dialog">
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item 1</CommandItem>
        </CommandList>
      </CommandDialog>,
    );
    const dialogContent = screen.getByRole("dialog");
    expect(dialogContent).toBeInTheDocument();
  });
});
