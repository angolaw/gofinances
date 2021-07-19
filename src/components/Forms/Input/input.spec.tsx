import React from "react";
import { render } from "@testing-library/react-native";

describe("input component", () => {
  it("renders correctly", () => {
    const { container } = render(<input />);
    expect(container).toMatchSnapshot();
  });
});
