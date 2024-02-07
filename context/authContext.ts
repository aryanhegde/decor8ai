import { createContext } from "react";

interface AuthContextProps {
  authStatus: boolean;
  setAuthStatus: (status: boolean) => void;
}

const defaultAuthContext: AuthContextProps = {
  authStatus: false,
  setAuthStatus: () => {},
};

const AuthContext = createContext<AuthContextProps>(defaultAuthContext);

export default AuthContext;
