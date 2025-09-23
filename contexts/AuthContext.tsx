import { auth } from "@/firebaseConfig";
import authService from "@/services/authService";
import { onAuthStateChanged, User } from "firebase/auth";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean } | { error: string }>;
  register: (
    email: string,
    password: string
  ) => Promise<{ success: boolean } | { error: string }>;
  logout: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (
    email: string,
    password: string
  ): Promise<{ success: boolean } | { error: string }> => {
    const response = await authService.login(email, password);

    if ("error" in response) {
      return { error: response.error };
    }

    return { success: true };
  };

  const register = async (
    email: string,
    password: string
  ): Promise<{ success: boolean } | { error: string }> => {
    const response = await authService.register(email, password);

    if ("error" in response) {
      return { error: response.error };
    }

    return login(email, password); // auto-login
  };

  const logout = async (): Promise<void> => {
    await authService.logout();
  };

  const contextValue: AuthContextType = {
    user,
    loading,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
