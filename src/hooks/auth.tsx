import React, { createContext, ReactNode, useContext } from "react";
interface AuthProviderProps{
  children: ReactNode;
}
interface AuthContextData{
  user:User
}
interface User{
  id: string;
  name: string;
  email: string;
  photo?: string;
}
export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({children}:AuthProviderProps){
  const user:User  = {
    id: 'abcasas',
    email:"wsa@gmail.com",
    name:"Willian S.",
  }
  return (
    <AuthContext.Provider value={{
      user: user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)
  return context;
}

export {AuthProvider, useAuth}