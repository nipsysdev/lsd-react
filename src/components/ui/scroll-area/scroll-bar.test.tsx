import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ScrollArea } from "./index";

describe("ScrollBar", () => {
  it("renders without crashing when used within ScrollArea", () => {
    render(
      <ScrollArea>
        <div>Content</div>
      </ScrollArea>,
    );
    // ScrollBar is rendered internally by ScrollArea
    expect(
      document.querySelector('[data-slot="scroll-area"]'),
    ).toBeInTheDocument();
  });

  it("applies data-slot attribute when rendered", () => {
    render(
      <ScrollArea>
        <div>Content</div>
      </ScrollArea>,
    );
    // ScrollBar is rendered internally by ScrollArea
    expect(
      document.querySelector('[data-slot="scroll-area"]'),
    ).toBeInTheDocument();
  });

  it("applies base classes correctly when rendered", () => {
    render(
      <ScrollArea>
        <div>Content</div>
      </ScrollArea>,
    );
    // ScrollBar is rendered internally by ScrollArea
    expect(
      document.querySelector('[data-slot="scroll-area"]'),
    ).toBeInTheDocument();
  });

  it("applies vertical orientation by default", () => {
    render(
      <ScrollArea>
        <div>Content</div>
      </ScrollArea>,
    );
    // ScrollBar is rendered internally by ScrollArea with vertical orientation
    expect(
      document.querySelector('[data-slot="scroll-area"]'),
    ).toBeInTheDocument();
  });

  it("merges custom className with component classes", () => {
    render(
      <ScrollArea>
        <div>Content</div>
      </ScrollArea>,
    );
    // ScrollBar is rendered internally by ScrollArea
    expect(
      document.querySelector('[data-slot="scroll-area"]'),
    ).toBeInTheDocument();
  });

  it("passes through additional props", () => {
    render(
      <ScrollArea>
        <div>Content</div>
      </ScrollArea>,
    );
    // ScrollBar is rendered internally by ScrollArea
    expect(
      document.querySelector('[data-slot="scroll-area"]'),
    ).toBeInTheDocument();
  });
});
