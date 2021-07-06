import React from "react";
import { render } from "@testing-library/react-native";
import { Profile } from "../../../screens/Profile";

test("should render TextInput with correct placeholder - NAME ", () => {
  const { getByPlaceholderText } = render(<Profile />);

  const inputName = getByPlaceholderText("Nome");
  // toBeTruthy - existir
  expect(inputName.props.placeholder).toBeTruthy();
});
test("should render TextInput with correct placeholder - SURNAME ", () => {
  const { getByPlaceholderText } = render(<Profile />);
  const inputName = getByPlaceholderText("Sobrenome");
  expect(inputName.props.placeholder).toBeTruthy();
});
