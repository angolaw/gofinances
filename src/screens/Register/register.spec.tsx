import React from "react";
import { Register } from ".";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "../../global/styles/theme";

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe("Register Screen", () => {
  it("should open category modal when user click category button", () => {
    const { getByTestId } = render(<Register />, { wrapper: Providers });
    const categoryModal = getByTestId("category-modal");
    const buttonCategory = getByTestId("button-category");
    expect(categoryModal.props.visible).toBeTruthy();
  });
});
