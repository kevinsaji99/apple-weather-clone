import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { cities } from "../../cities";
import LocationCard from "../../components/LocationCard";

const Locations = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const openCity = (id: string) => {
    if (id === "calgary") {
      router.push("/");
    } else {
      router.push(`/city/${id}`);
    }
  };

  return (
    <View
      style={[
        styles.screen,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <FlatList
        data={cities}
        renderItem={({ item }) => (
          <LocationCard
            name={item.name}
            subtitle={item.subtitle}
            condition={item.condition}
            temp={item.temp}
            high={item.high}
            low={item.low}
            color={item.color}
            onPress={() => openCity(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View style={styles.headerRow}>
            <Text style={styles.title}>Weather</Text>
            <View style={styles.moreButton}>
              <Ionicons name="ellipsis-horizontal" size={22} color="#FFFFFF" />
            </View>
          </View>
        }
        contentContainerStyle={styles.list}
      />

      {/* Search bar (looks like Apple's, does not search) */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#D5DBE5" />
        <Text style={styles.searchText}>Search for a city or airport</Text>
        <Ionicons name="mic" size={20} color="#D5DBE5" />
      </View>
    </View>
  );
};

export default Locations;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#5F6B7D",
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 16,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "bold",
  },
  moreButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#A3AEBF",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginHorizontal: 16,
    marginBottom: 10,
    paddingHorizontal: 16,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#76839A",
  },
  searchText: {
    flex: 1,
    color: "#D5DBE5",
    fontSize: 16,
  },
});
