import { auth } from "@/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";

const authService = {
  async register(
    email: string,
    password: string
  ): Promise<User | { error: string }> {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      return response.user;
    } catch (error) {
      console.error(`Error while creating user:`, error);

      if (error instanceof Error) {
        return { error: error.message };
      }

      return { error: String(error) };
    }
  },
  async login(
    email: string,
    password: string
  ): Promise<User | { error: string }> {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      return response.user;
    } catch (error) {
      console.error(`Error while login user:`, error);

      if (error instanceof Error) {
        return { error: error.message };
      }

      return { error: String(error) };
    }
  },
  async logout(): Promise<{ success: boolean } | { error: string }> {
    try {
      signOut(auth);
      return { success: true };
    } catch (error) {
      console.error(`Error while logout user:`, error);

      if (error instanceof Error) {
        return { error: error.message };
      }

      return { error: String(error) };
    }
  },
  getUser(): User | null {
    return auth.currentUser;
  },
};

export default authService;
