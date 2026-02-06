import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CardAction } from "./index";

// Helper function to query by data-slot
const queryByDataSlot = (container: HTMLElement, slot: string) => {
  return container.querySelector(`[data-slot="${slot}"]`);
};

describe("CardAction", () => {
  it("renders without crashing", () => {
    const { container } = render(<CardAction />);
    expect(queryByDataSlot(container, "card-action")).toBeInTheDocument();
  });

  it("renders with custom className", () => {
    const { container } = render(<CardAction className="custom-class" />);
    const action = queryByDataSlot(container, "card-action");
    expect(action).toHaveClass("custom-class");
  });

  it("applies default classes", () => {
    const { container } = render(<CardAction />);
    const action = queryByDataSlot(container, "card-action");
    expect(action).toHaveClass("lsd:col-start-2");
    expect(action).toHaveClass("lsd:row-span-2");
    expect(action).toHaveClass("lsd:row-start-1");
    expect(action).toHaveClass("lsd:self-start");
    expect(action).toHaveClass("lsd:justify-self-end");
  });

  it("renders children", () => {
    render(
      <CardAction>
        <button type="button">Action</button>
      </CardAction>,
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("forwards ref", () => {
    const ref = { current: null };
    render(<CardAction ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
