import React from "react";
import { render } from "@testing-library/react-native";
import { Input } from ".";
describe("input component", () => {
  // must have specific border color when
  it("should have specific border color", () => {
    const { getByTestId } = render(
      <Input
        testID="input-email"
        active={true}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCorrect={false}
      />
    );
    const inputComponent = getByTestId("input-email");
    expect(inputComponent.props.style[0].borderColor).toEqual("#e83f5b");
  });
});
