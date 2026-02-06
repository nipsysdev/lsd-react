import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./index";

describe("Sheet", () => {
  it("renders without crashing when open", () => {
    render(
      <Sheet open>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <SheetDescription>Description</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("passes through additional props to SheetContent", () => {
    render(
      <Sheet open>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent data-testid="test-sheet">
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <SheetDescription>Description</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const sheet = document.querySelector('[data-slot="sheet-content"]');
    expect(sheet).toHaveAttribute("data-testid", "test-sheet");
  });

  it("renders with all subcomponents", () => {
    render(
      <Sheet open>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>Sheet Description</SheetDescription>
          </SheetHeader>
          <p>Sheet Content</p>
          <SheetFooter>
            <button type="button">Cancel</button>
            <button type="button">Confirm</button>
          </SheetFooter>
        </SheetContent>
      </Sheet>,
    );
    // Verify trigger is present (may be hidden when open)
    expect(
      document.querySelector('[data-slot="sheet-trigger"]'),
    ).toBeInTheDocument();
    // Verify dialog is present
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    // Verify title is present
    expect(
      screen.getByRole("heading", { name: "Sheet Title" }),
    ).toBeInTheDocument();
    // Verify description is present
    expect(screen.getByText("Sheet Description")).toBeInTheDocument();
    // Verify content is present
    expect(screen.getByText("Sheet Content")).toBeInTheDocument();
    // Verify footer buttons are present
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Confirm" })).toBeInTheDocument();
  });
});
