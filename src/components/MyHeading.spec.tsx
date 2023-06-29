import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { MyHeading } from "./MyHeading";
import "@testing-library/jest-dom/extend-expect";

describe("MyHeading", () => {
  it("should contain oo in the Headline", () => {
    const { getByTestId, debug } = render(<MyHeading></MyHeading>);

    debug();

    expect(getByTestId("foo")).toHaveTextContent("oo");
  });
});
