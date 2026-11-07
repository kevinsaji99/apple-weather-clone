import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#2B2F4A" },
        headerTintColor: "#FFFFFF",
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="day/[id]" options={{ title: "Forecast" }} />
    </Stack>
  );
};

export default RootLayout;
