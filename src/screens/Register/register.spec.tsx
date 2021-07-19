import React from "react";
import { Register } from ".";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "../../global/styles/theme";

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe("Register Screen", () => {
  it("should open category modal when user click category button", async () => {
    const { getByTestId } = render(<Register />, { wrapper: Providers });
    const categoryModal = getByTestId("category-modal");
    const buttonCategory = getByTestId("button-category");
    // click on button using fireEvent
    fireEvent.press(buttonCategory);
    await waitFor(() => expect(categoryModal.props.visible).toBeTruthy());
  });
});
