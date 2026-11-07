import { useLocalSearchParams, useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { cities } from "../../../cities";
import DayRow from "../../../components/DayRow";
import Hero from "../../../components/Hero";
import HourItem from "../../../components/HourItem";
import SectionLabel from "../../../components/SectionLabel";

const CityScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const matches = cities.filter((city) => city.id === id);

  if (matches.length === 0) {
    return (
      <View style={styles.centre}>
        <Text style={styles.notFound}>City not found.</Text>
      </View>
    );
  }

  const city = matches[0];

  const openDay = (dayId: string) => {
    router.push({
      pathname: "/day/[id]",
      params: { id: dayId, city: city.id },
    });
  };

  return (
    <View style={[styles.screen, { backgroundColor: city.color }]}>
      <FlatList
        data={city.daily}
        renderItem={({ item }) => (
          <View style={[styles.dayBand, { backgroundColor: city.cardColor }]}>
            <DayRow
              day={item.day}
              icon={item.icon}
              chance={item.chance}
              low={item.low}
              high={item.high}
              barLeft={item.barLeft}
              barWidth={item.barWidth}
              isToday={item.isToday}
              isCold={item.isCold}
              onPress={() => openDay(item.id)}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View>
            <Hero
              city={city.name}
              temp={city.temp}
              condition={city.condition}
              high={city.high}
              low={city.low}
            />

            {/* Conditions card with a sideways hourly strip*/}
            <View style={[styles.card, { backgroundColor: city.cardColor }]}>
              <Text style={styles.cardTitle}>Conditions</Text>
              <Text style={styles.cardSubtitle}>Temperature (°C)</Text>
              <FlatList
                data={city.hourly}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <HourItem
                    time={item.time}
                    icon={item.icon}
                    temp={item.temp}
                  />
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.hourList}
              />
            </View>

            {/* Top of the forecast box*/}
            <View style={[styles.dayTop, { backgroundColor: city.cardColor }]}>
              <SectionLabel label="5-DAY FORECAST" />
            </View>
          </View>
        }
        contentContainerStyle={styles.content}
      />
    </View>
  );
};

export default CityScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  centre: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  notFound: {
    fontSize: 18,
  },
  card: {
    borderRadius: 20,
    padding: 16,
    marginBottom: 10,
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "bold",
  },
  cardSubtitle: {
    color: "#FFFFFF",
    fontSize: 15,
  },
  hourList: {
    gap: 26,
    marginTop: 18,
  },
  dayTop: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  dayBand: {
    paddingHorizontal: 16,
  },
});
