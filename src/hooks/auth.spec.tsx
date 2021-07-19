import { renderHook, act } from "@testing-library/react-hooks";
import { AuthProvider, useAuth } from "./auth";

//mock auth by google with jest
jest.mock("expo-google-app-auth", () => {
  return {
    logInAsync: () => {
      return {
        type: "success",
        user: {
          id: "any",
          email: "w0ken0ne@gmail.com",
          name: "Willian S.",
          photoURL: "any_photo",
        },
      };
    },
  };
});

describe("Auth Hook", () => {
  it("should be able to sign in with existing google account", async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });
    //calling hook functions should use a ACT method
    await act(() => result.current.signInWithGoogle());
    expect(result.current.user).toBeTruthy();
    // expect email to be equal to w0ken0ne@gmail.com
    expect(result.current.user.email).toEqual("w0ken0ne@gmail.com");
  });
  // user should not be authenticate if he cancels dialog
  it("should not be able to sign in with google account", async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });
    await act(() => result.current.signInWithGoogle());
    expect(result.current.user).not.toHaveProperty("id");
  });
});
