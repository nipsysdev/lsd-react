import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./index";

describe("SheetDescription", () => {
  it("renders without crashing", () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <SheetDescription>Description</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    expect(screen.getByText("Description")).toBeInTheDocument();
  });

  it("applies base classes correctly", () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <SheetDescription>Description</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const description = screen.getByText("Description");
    expect(description).toHaveClass("lsd:text-muted-foreground");
    expect(description).toHaveClass("lsd:text-sm");
  });

  it("applies data-slot attribute", () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <SheetDescription>Description</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const description = screen.getByText("Description");
    expect(description).toHaveAttribute("data-slot", "sheet-description");
  });

  it("merges custom className with component classes", () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <SheetDescription className="custom-description-class">
              Description
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    const description = screen.getByText("Description");
    expect(description).toHaveClass("custom-description-class");
  });
});
