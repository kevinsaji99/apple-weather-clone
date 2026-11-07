import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Map = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.screen, { paddingTop: insets.top + 8 }]}>
      {/* Top: close button + legend on the left, map buttons on the right */}
      <View style={styles.topRow}>
        <View style={styles.leftColumn}>
          <View style={styles.roundButton}>
            <Ionicons name="close" size={28} color="#FFFFFF" />
          </View>

          <View style={styles.legend}>
            <Text style={styles.legendTitle}>Precipitation</Text>
            <View style={styles.legendBody}>
              <View style={styles.legendBar}>
                <View style={[styles.legendPart, styles.extreme]} />
                <View style={[styles.legendPart, styles.heavy]} />
                <View style={[styles.legendPart, styles.moderate]} />
                <View style={[styles.legendPart, styles.light]} />
              </View>
              <View style={styles.legendLabels}>
                <Text style={styles.legendText}>Extreme</Text>
                <Text style={styles.legendText}>Heavy</Text>
                <Text style={styles.legendText}>Moderate</Text>
                <Text style={styles.legendText}>Light</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.rightColumn}>
          <View style={styles.buttonStack}>
            <Ionicons name="layers-outline" size={26} color="#FFFFFF" />
            <Ionicons name="navigate-outline" size={26} color="#FFFFFF" />
          </View>
          <View style={[styles.roundButton, styles.blueButton]}>
            <Ionicons name="list" size={26} color="#FFFFFF" />
          </View>
        </View>
      </View>

      {/* Middle: the map itself, drawn with text labels and pins */}
      <View style={styles.mapArea}>
        <View style={styles.labelRow}>
          <Text style={styles.region}>Jasper</Text>
          <Text style={styles.region}>Edmonton</Text>
        </View>

        <View style={styles.pinArea}>
          <View style={styles.pin}>
            <Text style={styles.pinTemp}>3°</Text>
            <Ionicons name="cloud" size={22} color="#FFFFFF" />
          </View>
          <Text style={styles.place}>My Location</Text>
        </View>

        <View style={styles.labelRow}>
          <View style={styles.center}>
            <View style={styles.smallPin}>
              <Text style={styles.smallPinText}>8</Text>
            </View>
            <Text style={styles.place}>Okotoks</Text>
          </View>
        </View>
      </View>

      {/* Bottom: forecast timeline card */}
      <View style={styles.forecastCard}>
        <View style={styles.forecastTop}>
          <View style={styles.pauseButton}>
            <Ionicons name="pause" size={22} color="#FFFFFF" />
          </View>
          <View style={styles.forecastText}>
            <Text style={styles.forecastTitle}>Forecast</Text>
            <Text style={styles.forecastDate}>Thursday, November 5, 2026</Text>
          </View>
          <View style={styles.segment}>
            <Text style={styles.segmentText}>1h</Text>
            <View style={styles.segmentActive}>
              <Text style={styles.segmentText}>12h</Text>
            </View>
          </View>
        </View>

        <View style={styles.track}>
          <View style={styles.trackFill} />
        </View>

        <View style={styles.timeRow}>
          <Text style={styles.timeText}>08</Text>
          <Text style={styles.timeText}>Now</Text>
          <Text style={styles.timeText}>12</Text>
          <Text style={styles.timeText}>14</Text>
          <Text style={styles.timeText}>16</Text>
          <Text style={styles.timeText}>18</Text>
          <Text style={styles.timeText}>20</Text>
        </View>
      </View>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#4B4F56",
    paddingHorizontal: 16,
  },

  // Top row
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftColumn: {
    gap: 14,
  },
  rightColumn: {
    alignItems: "center",
    gap: 12,
  },
  roundButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#5C6168",
    alignItems: "center",
    justifyContent: "center",
  },
  blueButton: {
    backgroundColor: "#4A6FA5",
  },
  buttonStack: {
    width: 52,
    paddingVertical: 14,
    borderRadius: 26,
    backgroundColor: "#5C6168",
    alignItems: "center",
    gap: 22,
  },

  // Legend
  legend: {
    backgroundColor: "#3F434A",
    borderRadius: 16,
    padding: 12,
    width: 150,
  },
  legendTitle: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 10,
  },
  legendBody: {
    flexDirection: "row",
    gap: 10,
  },
  legendBar: {
    width: 4,
    borderRadius: 2,
  },
  legendPart: {
    flex: 1,
  },
  extreme: { backgroundColor: "#FFF4B0" },
  heavy: { backgroundColor: "#F5C542" },
  moderate: { backgroundColor: "#A855F7" },
  light: { backgroundColor: "#3B5BFF" },
  legendLabels: {
    gap: 10,
  },
  legendText: {
    color: "#D5DBE5",
    fontSize: 14,
  },

  // Map area
  mapArea: {
    flex: 1,
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  labelRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  region: {
    color: "#C9CDD3",
    fontSize: 13,
    fontWeight: "600",
  },
  country: {
    color: "#C9CDD3",
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  place: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  center: {
    alignItems: "center",
  },
  pinArea: {
    alignItems: "center",
  },
  pin: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#9AA6B5",
    borderWidth: 3,
    borderColor: "#2E3238",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },
  pinTemp: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  smallPin: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#3F434A",
    borderWidth: 2,
    borderColor: "#9AA6B5",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  smallPinText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },

  // Forecast card
  forecastCard: {
    backgroundColor: "#5C6168",
    borderRadius: 24,
    padding: 16,
    marginBottom: 12,
  },
  forecastTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  pauseButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#6E737B",
    alignItems: "center",
    justifyContent: "center",
  },
  forecastText: {
    flex: 1,
  },
  forecastTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
  },
  forecastDate: {
    color: "#C9CDD3",
    fontSize: 13,
  },
  segment: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#6E737B",
    borderRadius: 18,
    paddingLeft: 12,
    padding: 4,
  },
  segmentActive: {
    backgroundColor: "#8A8F97",
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  segmentText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },
  track: {
    height: 6,
    borderRadius: 3,
    backgroundColor: "#7A7F87",
    marginTop: 16,
  },
  trackFill: {
    width: "45%",
    height: 6,
    borderRadius: 3,
    backgroundColor: "#FFFFFF",
  },
  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  timeText: {
    color: "#C9CDD3",
    fontSize: 13,
    fontWeight: "600",
  },
});
