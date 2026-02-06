import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CardContent } from "./index";

// Helper function to query by data-slot
const queryByDataSlot = (container: HTMLElement, slot: string) => {
  return container.querySelector(`[data-slot="${slot}"]`);
};

describe("CardContent", () => {
  it("renders without crashing", () => {
    const { container } = render(<CardContent />);
    expect(queryByDataSlot(container, "card-content")).toBeInTheDocument();
  });

  it("renders with custom className", () => {
    const { container } = render(<CardContent className="custom-class" />);
    const content = queryByDataSlot(container, "card-content");
    expect(content).toHaveClass("custom-class");
  });

  it("applies default classes", () => {
    const { container } = render(<CardContent />);
    const content = queryByDataSlot(container, "card-content");
    expect(content).toHaveClass("lsd:px-6");
    expect(content).toHaveClass("lsd:py-6");
  });

  it("renders children", () => {
    render(
      <CardContent>
        <span>Content</span>
      </CardContent>,
    );
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("forwards ref", () => {
    const ref = { current: null };
    render(<CardContent ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
