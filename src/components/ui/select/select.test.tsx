import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./index";

describe("Select", () => {
  it("renders without crashing", () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
          <SelectItem value="option-2">Option 2</SelectItem>
        </SelectContent>
      </Select>,
    );
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("passes through additional props to SelectContent", () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent data-testid="test-select">
          <SelectItem value="option-1">Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );
    const select = document.querySelector('[data-slot="select-content"]');
    expect(select).toHaveAttribute("data-testid", "test-select");
  });

  it("renders with all subcomponents", () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Group 1</SelectLabel>
            <SelectItem value="option-1">Option 1</SelectItem>
            <SelectItem value="option-2">Option 2</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Group 2</SelectLabel>
            <SelectItem value="option-3">Option 3</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>,
    );
    // Verify trigger is present (may be hidden when open)
    expect(
      document.querySelector('[data-slot="select-trigger"]'),
    ).toBeInTheDocument();
    // Verify content is present
    expect(
      document.querySelector('[data-slot="select-content"]'),
    ).toBeInTheDocument();
    // Verify groups are present
    expect(document.querySelectorAll('[data-slot="select-group"]').length).toBe(
      2,
    );
    // Verify labels are present
    expect(screen.getByText("Group 1")).toBeInTheDocument();
    expect(screen.getByText("Group 2")).toBeInTheDocument();
    // Verify items are present
    expect(
      screen.getByRole("option", { name: "Option 1" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: "Option 2" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: "Option 3" }),
    ).toBeInTheDocument();
    // Verify separator is present
    expect(
      document.querySelector('[data-slot="select-separator"]'),
    ).toBeInTheDocument();
  });
});
