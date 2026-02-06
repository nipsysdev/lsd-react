import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./index";

describe("TabsList", () => {
  it("renders without crashing", () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    expect(
      document.querySelector('[data-slot="tabs-list"]'),
    ).toBeInTheDocument();
  });

  it("applies data-slot attribute", () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const list = document.querySelector('[data-slot="tabs-list"]');
    expect(list).toHaveAttribute("data-slot", "tabs-list");
  });

  it("applies base classes correctly", () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const list = document.querySelector('[data-slot="tabs-list"]');
    expect(list).toHaveClass("lsd:bg-lsd-surface-primary");
    expect(list).toHaveClass("lsd:border-b");
    expect(list).toHaveClass("lsd:border-lsd-border");
    expect(list).toHaveClass("lsd:flex");
    expect(list).toHaveClass("lsd:flex-row");
  });

  it("applies default size classes (lg)", () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const list = document.querySelector('[data-slot="tabs-list"]');
    expect(list).toHaveClass("lsd:h-12");
  });

  it('applies small size classes when size="sm"', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList size="sm">
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const list = document.querySelector('[data-slot="tabs-list"]');
    expect(list).toHaveClass("lsd:h-8");
  });

  it('applies medium size classes when size="md"', () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList size="md">
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const list = document.querySelector('[data-slot="tabs-list"]');
    expect(list).toHaveClass("lsd:h-10");
  });

  it("applies default fullWidth classes (false)", () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const list = document.querySelector('[data-slot="tabs-list"]');
    expect(list).toHaveClass("lsd:w-fit");
  });

  it("applies fullWidth classes when fullWidth={true}", () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList fullWidth>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const list = document.querySelector('[data-slot="tabs-list"]');
    expect(list).toHaveClass("lsd:w-full");
  });

  it("merges custom className with component classes", () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList className="custom-list-class">
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const list = document.querySelector('[data-slot="tabs-list"]');
    expect(list).toHaveClass("custom-list-class");
  });

  it("passes through additional props", () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList data-testid="test-list" id="list-1">
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    const list = document.querySelector('[data-slot="tabs-list"]');
    expect(list).toHaveAttribute("data-testid", "test-list");
    expect(list).toHaveAttribute("id", "list-1");
  });
});
