import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";

import * as Google from "expo-google-app-auth";
import * as Apple from "expo-apple-authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthProviderProps {
  children: ReactNode;
}
interface AuthContextData {
  user: User;
  signInWithGoogle(): Promise<void>;
  signInWithApple(): Promise<void>;
  signOut(): Promise<void>;
  userStorageLoading: boolean;
}
interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}
const userStorageKey = "@gofinances:user";
export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [userLoading, setUserLoading] = useState(true);

  async function signInWithGoogle() {
    try {
      const result = await Google.logInAsync({
        iosClientId:
          "527003303977-rnf5f537f3o1ue867p3ud4j7ais1mslu.apps.googleusercontent.com",
        androidClientId:
          "527003303977-l82s0q55ge67rejoqai6ml965f4kmqs3.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });
      if (result.type === "success") {
        const userLogged = {
          id: String(result.user.id),
          email: result.user.email!,
          name: result.user.name!,
          photo: result.user.photoUrl!,
        };

        await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged));
        setUser(userLogged);
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  async function signInWithApple() {
    try {
      const credentials = await Apple.signInAsync({
        requestedScopes: [
          Apple.AppleAuthenticationScope.FULL_NAME,
          Apple.AppleAuthenticationScope.EMAIL,
        ],
      });
      if (credentials) {
        const userLogged = {
          id: String(credentials.user),
          email: credentials.email!,
          name: credentials.fullName!.givenName!,
          photo: `https://ui-avatars/com/api/?name=${credentials.fullName?.givenName}&length=1`,
        };
        await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged));
        setUser(userLogged);
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    async function loadUserStorageData() {
      const userStored = await AsyncStorage.getItem(userStorageKey);
      if (userStored) {
        const userLogged = JSON.parse(userStored);
        setUser(userLogged);
      }
      setUserLoading(false);
    }
    loadUserStorageData();
  }, []);

  async function signOut() {
    setUser({} as User);
    await AsyncStorage.removeItem(userStorageKey);
  }

  return (
    <AuthContext.Provider
      value={{
        user: user,
        signInWithGoogle,
        signInWithApple,
        signOut,
        userStorageLoading: userLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
