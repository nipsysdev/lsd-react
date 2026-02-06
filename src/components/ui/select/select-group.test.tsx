import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./index";

describe("SelectGroup", () => {
  it("renders without crashing", () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Group Label</SelectLabel>
            <SelectItem value="option-1">Option 1</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>,
    );
    expect(
      document.querySelector('[data-slot="select-group"]'),
    ).toBeInTheDocument();
  });

  it("applies data-slot attribute", () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="option-1">Option 1</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>,
    );
    const group = document.querySelector('[data-slot="select-group"]');
    expect(group).toHaveAttribute("data-slot", "select-group");
  });

  it("passes through additional props", () => {
    render(
      <Select open>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup data-testid="test-group" id="group-1">
            <SelectItem value="option-1">Option 1</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>,
    );
    const group = document.querySelector('[data-slot="select-group"]');
    expect(group).toHaveAttribute("data-testid", "test-group");
    expect(group).toHaveAttribute("id", "group-1");
  });
});
