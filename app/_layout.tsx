import LogoutButton from "@/components/LogoutButton";
import { AuthProvider } from "@/contexts/AuthContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#ff8c00" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
          },
          headerRight: () => <LogoutButton />,
          contentStyle: {
            paddingHorizontal: 10,
            paddingTop: 10,
            backgroundColor: "#fff",
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />
        <Stack.Screen
          name="notes"
          options={{
            headerTitle: "Notes",
          }}
        />
        <Stack.Screen
          name="auth"
          options={{
            headerTitle: "Login",
          }}
        />
      </Stack>
    </AuthProvider>
  );
}
