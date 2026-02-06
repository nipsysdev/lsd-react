import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SidebarContent } from "./index";

describe("SidebarContent", () => {
  it("renders without crashing", () => {
    const { container } = render(<SidebarContent>Content</SidebarContent>);
    expect(
      container.querySelector('[data-slot="sidebar-content"]'),
    ).toBeInTheDocument();
  });

  it("renders with custom className", () => {
    const { container } = render(
      <SidebarContent className="custom-class">Content</SidebarContent>,
    );
    expect(
      container.querySelector('[data-slot="sidebar-content"]'),
    ).toHaveClass("custom-class");
  });

  it("applies default classes", () => {
    const { container } = render(<SidebarContent>Content</SidebarContent>);
    const content = container.querySelector('[data-slot="sidebar-content"]');
    expect(content).toHaveClass("lsd:flex");
    expect(content).toHaveClass("lsd:min-h-0");
    expect(content).toHaveClass("lsd:flex-1");
    expect(content).toHaveClass("lsd:flex-col");
  });

  it("renders children", () => {
    render(<SidebarContent>Content Area</SidebarContent>);
    expect(screen.getByText("Content Area")).toBeInTheDocument();
  });
});
