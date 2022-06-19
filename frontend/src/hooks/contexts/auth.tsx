import { createContext } from "react";

interface IAuthProps {
  children: React.ReactNode;
}

export function AuthProvider (props: IAuthProps) {
  const AuthContext = createContext({});

  return (
    <AuthContext.Provider value={{ signed: true }}>
      {props.children}
    </AuthContext.Provider>
  )
}
