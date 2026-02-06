import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Sheet, SheetContent, SheetFooter } from "./index";

describe("SheetFooter", () => {
  it("renders without crashing", () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetFooter>
            <button type="button">Cancel</button>
            <button type="button">Confirm</button>
          </SheetFooter>
        </SheetContent>
      </Sheet>,
    );
    expect(
      document.querySelector('[data-slot="sheet-footer"]'),
    ).toBeInTheDocument();
  });

  it("applies base classes correctly", () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetFooter>
            <button type="button">Cancel</button>
          </SheetFooter>
        </SheetContent>
      </Sheet>,
    );
    const footer = document.querySelector('[data-slot="sheet-footer"]');
    expect(footer).toHaveClass("lsd:mt-auto");
    expect(footer).toHaveClass("lsd:flex");
    expect(footer).toHaveClass("lsd:flex-col");
    expect(footer).toHaveClass("lsd:gap-2");
    expect(footer).toHaveClass("lsd:p-4");
  });

  it("applies data-slot attribute", () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetFooter>
            <button type="button">Cancel</button>
          </SheetFooter>
        </SheetContent>
      </Sheet>,
    );
    const footer = document.querySelector('[data-slot="sheet-footer"]');
    expect(footer).toHaveAttribute("data-slot", "sheet-footer");
  });

  it("merges custom className with component classes", () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetFooter className="custom-footer-class">
            <button type="button">Cancel</button>
          </SheetFooter>
        </SheetContent>
      </Sheet>,
    );
    const footer = document.querySelector('[data-slot="sheet-footer"]');
    expect(footer).toHaveClass("custom-footer-class");
  });
});
