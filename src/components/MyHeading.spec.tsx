import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { MyHeading } from "./MyHeading";
import "@testing-library/jest-dom/vitest";

describe("MyHeading", () => {
  it("should contain oo in the Headline", () => {
    const { getByRole, debug } = render(<MyHeading></MyHeading>);

    // console.log(getByRole("heading").outerHTML);
    // debug();

    expect(getByRole("heading")).toBeVisible();
  });
});
