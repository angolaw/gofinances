import React from "react";
import { render } from "@testing-library/react-native";
import { Profile } from "../../../screens/Profile";

describe("Profile tests", () => {
  it("should render TextInput with correct placeholder - NAME ", () => {
    const { getByPlaceholderText } = render(<Profile />);

    const inputName = getByPlaceholderText("Nome");
    // toBeTruthy - existir
    expect(inputName.props.placeholder).toBeTruthy();
  });
  it("should render TextInput with correct placeholder - SURNAME ", () => {
    const { getByPlaceholderText } = render(<Profile />);
    const inputName = getByPlaceholderText("Sobrenome");
    expect(inputName.props.placeholder).toBeTruthy();
  });
  it("should render username and surname correctly", () => {
    const { getByPlaceholderText } = render(<Profile />);
    const username = getByPlaceholderText("Nome");
    const surname = getByPlaceholderText("Sobrenome");

    expect(username.props.value).toEqual("Willian");
    expect(surname.props.value).toEqual("Santana");
  });
  it("should render button with correct testID", () => {
    const { getByTestId } = render(<Profile />);

    const butao = getByTestId("butao");
    expect(butao).toBeTruthy();
  });

  it("should render title correctly", () => {
    const { getByTestId } = render(<Profile />);

    const profileTitle = getByTestId("profile-text");
    expect(profileTitle.props.children).toContain("Perfil");
  });
  //test if the email placeholder is displayed correctly
});
