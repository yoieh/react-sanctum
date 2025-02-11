import * as React from "react";

export interface ContextProps {
  user: null | any;
  authenticated: null | boolean;
  signIn: (
    email: string,
    password: string,
    remember?: boolean
  ) => Promise<{ twoFactor: boolean; signedIn: boolean }>;
  signOut: () => void;
  twoFactorChallenge: (code: string, recovery?: boolean) => Promise<{}>;
  setUser: (user: object, authenticated?: boolean) => void;
  checkAuthentication: () => Promise<boolean>;
}

const SanctumContext = React.createContext<ContextProps | undefined>(undefined);

export default SanctumContext;
