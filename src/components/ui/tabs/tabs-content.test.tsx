import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./index";

describe("TabsContent", () => {
  it("renders without crashing", () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">Content 1</TabsContent>
      </Tabs>,
    );
    expect(screen.getByText("Content 1")).toBeInTheDocument();
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
    const content = document.querySelector('[data-slot="tabs-content"]');
    expect(content).toHaveAttribute("data-slot", "tabs-content");
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
    const content = document.querySelector('[data-slot="tabs-content"]');
    expect(content).toHaveClass("lsd:outline-none");
  });

  it("merges custom className with component classes", () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1" className="custom-content-class">
          Content 1
        </TabsContent>
      </Tabs>,
    );
    const content = document.querySelector('[data-slot="tabs-content"]');
    expect(content).toHaveClass("custom-content-class");
  });

  it("passes through additional props", () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1" data-testid="test-content" id="content-1">
          Content 1
        </TabsContent>
      </Tabs>,
    );
    const content = document.querySelector('[data-slot="tabs-content"]');
    expect(content).toHaveAttribute("data-testid", "test-content");
    expect(content).toHaveAttribute("id", "content-1");
  });

  it("renders children correctly", () => {
    render(
      <Tabs defaultValue="tab-1">
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">
          <p>Custom content</p>
          <button type="button">Action</button>
        </TabsContent>
      </Tabs>,
    );
    expect(screen.getByText("Custom content")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Action" })).toBeInTheDocument();
  });
});
