import { Stack, useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { cities } from "../../cities";
import DayRow from "../../components/DayRow";
import InfoRow from "../../components/InfoRow";
import SectionLabel from "../../components/SectionLabel";

const DayScreen = () => {
  // The day's id comes from the address (/day/d2); the city comes after the ? (city=tokyo)
  const { id, city: cityId } = useLocalSearchParams<{
    id: string;
    city: string;
  }>();

  // Find the city, then the day inside it — .filter from Week 5 Day 1, twice
  const cityMatches = cities.filter((city) => city.id === cityId);
  if (cityMatches.length === 0) {
    return (
      <View style={styles.centre}>
        <Text>City not found.</Text>
      </View>
    );
  }
  const city = cityMatches[0];

  const dayMatches = city.daily.filter((day) => day.id === id);
  if (dayMatches.length === 0) {
    return (
      <View style={styles.centre}>
        <Text>Day not found.</Text>
      </View>
    );
  }
  const day = dayMatches[0];

  return (
    <ScrollView
      style={[styles.screen, { backgroundColor: city.color }]}
      contentContainerStyle={styles.content}
    >
      {/* Header title and colour from the data (Week 6 Day 1, Part 7) */}
      <Stack.Screen
        options={{
          title: `${city.name} · ${day.day}`,
          headerStyle: { backgroundColor: city.color },
        }}
      />

      <View style={styles.top}>
        <Text style={styles.bigIcon}>{day.icon}</Text>
        <Text style={styles.dayName}>{day.day}</Text>
        <Text style={styles.cityName}>{city.name}</Text>
      </View>

      <View style={[styles.card, { backgroundColor: city.cardColor }]}>
        <SectionLabel label="TEMPERATURE RANGE" />
        <DayRow
          day={day.day}
          icon={day.icon}
          chance={day.chance}
          low={day.low}
          high={day.high}
          barLeft={day.barLeft}
          barWidth={day.barWidth}
          isToday={day.isToday}
          isCold={day.isCold}
          isLast
        />
      </View>

      <View style={[styles.card, { backgroundColor: city.cardColor }]}>
        <SectionLabel label="DETAILS" />
        <InfoRow label="High" value={`${day.high}°`} />
        <InfoRow label="Low" value={`${day.low}°`} />
        <InfoRow
          label="Chance of precipitation"
          value={day.chance ? day.chance : "0%"}
          isLast
        />
      </View>
    </ScrollView>
  );
};

export default DayScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  centre: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  bigIcon: {
    fontSize: 80,
  },
  dayName: {
    color: "#FFFFFF",
    fontSize: 36,
    fontWeight: "300",
    marginTop: 8,
  },
  cityName: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  card: {
    borderRadius: 20,
    padding: 16,
    marginBottom: 10,
  },
});
