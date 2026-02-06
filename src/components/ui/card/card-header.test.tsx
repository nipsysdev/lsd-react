import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CardHeader } from "./index";

// Helper function to query by data-slot
const queryByDataSlot = (container: HTMLElement, slot: string) => {
  return container.querySelector(`[data-slot="${slot}"]`);
};

describe("CardHeader", () => {
  it("renders without crashing", () => {
    const { container } = render(<CardHeader />);
    expect(queryByDataSlot(container, "card-header")).toBeInTheDocument();
  });

  it("renders with custom className", () => {
    const { container } = render(<CardHeader className="custom-class" />);
    const header = queryByDataSlot(container, "card-header");
    expect(header).toHaveClass("custom-class");
  });

  it("applies default classes", () => {
    const { container } = render(<CardHeader />);
    const header = queryByDataSlot(container, "card-header");
    expect(header).toHaveClass("@container/card-header");
    expect(header).toHaveClass("lsd:grid");
    expect(header).toHaveClass("lsd:auto-rows-min");
    expect(header).toHaveClass("lsd:grid-rows-[auto_auto]");
    expect(header).toHaveClass("lsd:items-start");
    expect(header).toHaveClass("lsd:gap-2");
    expect(header).toHaveClass("lsd:px-6");
    expect(header).toHaveClass("lsd:py-6");
    expect(header).toHaveClass("lsd:border-b");
    expect(header).toHaveClass("lsd:border-lsd-border-primary");
    expect(header).toHaveClass("lsd:pb-6");
  });

  it("renders children", () => {
    render(
      <CardHeader>
        <span>Header content</span>
      </CardHeader>,
    );
    expect(screen.getByText("Header content")).toBeInTheDocument();
  });

  it("forwards ref", () => {
    const ref = { current: null };
    render(<CardHeader ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
