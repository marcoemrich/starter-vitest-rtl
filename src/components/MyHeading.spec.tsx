import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { MyHeading } from "./MyHeading";
import "@testing-library/jest-dom/extend-expect";

describe("foo", () => {
  it("should bar", () => {
    const { getByTestId, debug } = render(<MyHeading></MyHeading>);

    debug();

    expect(getByTestId("foo")).toHaveTextContent("oo");
  });
});
