import React from "react";
import { render } from "@testing-library/react-native";
import { Input } from ".";
//jest styled components
import { ThemeProvider } from "styled-components/native";
import theme from "../../../global/styles/theme";

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

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
      />,
      {
        wrapper: Providers,
      }
    );
    const inputComponent = getByTestId("input-email");
    //style is a vector
    expect(inputComponent.props.style[0].borderColor).toEqual("#e83f5b");
    // expect border width to be 2
    expect(inputComponent.props.style[0].borderWidth).toEqual(2);
  });
});
