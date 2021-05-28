import { createContext, ReactNode, useContext } from "react";

export const AuthContext = createContext([])
interface AuthProviderProps{
  children: ReactNode;
}
function AuthProvider({children}){
  return (
    <AuthContext.Provider value={}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)
  return context;
}

export {AuthProvider, useAuth}