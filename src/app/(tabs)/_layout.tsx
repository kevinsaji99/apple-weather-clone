import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";

// Opens on the Weather tab
export const unstable_settings = {
  initialRouteName: "index",
};

const TabLayout = () => {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#D5DBE5",
        tabBarStyle: {
          backgroundColor: "#6B7789",
          borderTopWidth: 0,
          height: 90,
          paddingTop: 12,
        },
        tabBarIconStyle: {
          width: 130,
          height: 56,
        },
      }}
    >
      {/* Left: round Map button */}
      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.round, focused && styles.roundActive]}>
              <Ionicons name="map-outline" size={26} color={color} />
            </View>
          ),
        }}
      />

      {/* Middle: pill with the location arrow and page dots */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Weather",
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.pill, focused && styles.roundActive]}>
              <Ionicons name="navigate" size={16} color={color} />
              <View style={[styles.dot, { backgroundColor: color }]} />
              <View style={[styles.dot, { backgroundColor: color }]} />
              <View style={[styles.dot, { backgroundColor: color }]} />
              <View style={[styles.dot, { backgroundColor: color }]} />
              <View
                style={[
                  styles.dot,
                  styles.dotSmall,
                  { backgroundColor: color },
                ]}
              />
            </View>
          ),
        }}
      />

      {/* Right: round Locations button */}
      <Tabs.Screen
        name="locations"
        options={{
          title: "Locations",
          // Hides the taskbar on this screen and the search bar takes its place
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.round, focused && styles.roundActive]}>
              <Ionicons name="list" size={26} color={color} />
            </View>
          ),
        }}
      />

      {/* City screen lives in the group */}
      <Tabs.Screen name="city/[id]" options={{ href: null }} />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  round: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#8592A6",
    borderWidth: 1,
    borderColor: "#A3AEBF",
    alignItems: "center",
    justifyContent: "center",
  },
  roundActive: {
    backgroundColor: "#9AA6B8",
    borderColor: "#FFFFFF",
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    height: 52,
    paddingHorizontal: 16,
    borderRadius: 26,
    backgroundColor: "#8592A6",
    borderWidth: 1,
    borderColor: "#A3AEBF",
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
  },
  dotSmall: {
    width: 5,
    height: 5,
  },
});
