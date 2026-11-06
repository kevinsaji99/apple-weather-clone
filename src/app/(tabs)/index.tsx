import { ScrollView, StyleSheet, Text, View } from "react-native";
import DayRow from "../../components/DayRow";
import Hero from "../../components/Hero";
import HourItem from "../../components/HourItem";
import InfoRow from "../../components/InfoRow";
import SectionLabel from "../../components/SectionLabel";

const Index = () => {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Top: city and temperature */}
        <Hero
          tag="HOME"
          city="Calgary"
          temp={14}
          condition="Cloudy"
          high={18}
          low={5}
        />

        {/* Special Weather Statement card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>⚠️ Special Weather Statement</Text>
          <Text style={styles.body}>
            Special Weather Statement. These conditions are expected by 15:00,
            Friday, October 9.
          </Text>
          <Text style={styles.smallText}>Environment Canada</Text>
        </View>

        {/* Conditions card */}
        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <View>
              <Text style={styles.cardTitle}>Conditions</Text>
              <Text style={styles.cardSubtitle}>Temperature (°C)</Text>
            </View>
            <View style={styles.segment}>
              <View style={styles.segmentActive}>
                <Text>☁️</Text>
              </View>
              <View style={styles.segmentItem}>
                <Text>💧</Text>
              </View>
              <View style={styles.segmentItem}>
                <Text>💨</Text>
              </View>
            </View>
          </View>

          <View style={styles.hourRow}>
            <HourItem time="Now" icon="☁️" temp={14} />
            <HourItem time="12" icon="☁️" temp={17} />
            <HourItem time="13" icon="☁️" temp={17} />
            <HourItem time="14" icon="💨" temp={18} />
            <HourItem time="15" icon="💨" temp={18} />
            <HourItem time="16" icon="💨" temp={17} />
          </View>
        </View>

        {/* 10-day forecast card */}
        <View style={styles.card}>
          <DayRow
            day="Today"
            icon="🌧️"
            chance="40%"
            low={5}
            high={18}
            barLeft={38}
            barWidth={62}
            isToday
          />
          <DayRow
            day="Sat"
            icon="🌧️"
            chance="70%"
            low={-1}
            high={5}
            barLeft={10}
            barWidth={29}
            isCold
          />
          <DayRow
            day="Sun"
            icon="❄️"
            chance="60%"
            low={-3}
            high={3}
            barLeft={0}
            barWidth={29}
            isCold
          />
          <DayRow
            day="Mon"
            icon="☀️"
            low={-3}
            high={9}
            barLeft={0}
            barWidth={57}
            isCold
          />
          <DayRow
            day="Tue"
            icon="☀️"
            low={0}
            high={14}
            barLeft={14}
            barWidth={67}
          />
          <DayRow
            day="Wed"
            icon="⛅"
            low={4}
            high={16}
            barLeft={33}
            barWidth={57}
          />
          <DayRow
            day="Thu"
            icon="⛅"
            low={3}
            high={13}
            barLeft={29}
            barWidth={48}
          />
          <DayRow
            day="Fri"
            icon="⛅"
            low={-1}
            high={16}
            barLeft={10}
            barWidth={81}
          />
          <DayRow
            day="Sat"
            icon="⛅"
            low={3}
            high={15}
            barLeft={29}
            barWidth={57}
          />
          <DayRow
            day="Sun"
            icon="☀️"
            low={1}
            high={13}
            barLeft={19}
            barWidth={57}
            isLast
          />
        </View>

        {/* Wind map card */}
        <View style={styles.card}>
          <SectionLabel label="WIND MAP" />
          <View style={styles.map}>
            <Text style={styles.mapCity}>• Red Deer</Text>
            <View style={styles.mapCenter}>
              <View style={styles.mapPin}>
                <Text style={styles.mapPinText}>10</Text>
              </View>
              <Text style={styles.mapCity}>My Location</Text>
            </View>
            <View style={styles.rowAround}>
              <Text style={styles.mapCity}>• Lethbridge</Text>
            </View>
          </View>
        </View>

        {/* Air quality card */}
        <View style={styles.card}>
          <SectionLabel label="AIR QUALITY" />
          <Text style={styles.bigNumber}>5</Text>
          <Text style={styles.cardTitle}>Moderate Health Risk</Text>
          <View style={styles.scale}>
            <View style={[styles.scalePart, styles.blue]} />
            <View style={[styles.scalePart, styles.green]} />
            <View style={styles.scaleDot} />
            <View style={[styles.scalePart, styles.yellow]} />
            <View style={[styles.scalePart, styles.orange]} />
            <View style={[styles.scalePart, styles.red]} />
            <View style={[styles.scalePart, styles.maroon]} />
          </View>
          <Text style={styles.body}>
            Air quality index is 5, which is worse than yesterday at about this
            time.
          </Text>
        </View>

        {/* Wind card */}
        <View style={styles.card}>
          <SectionLabel label="WIND" />
          <View style={styles.row}>
            <View style={styles.leftSide}>
              <InfoRow label="Wind" value="10 km/h" />
              <InfoRow label="Gusts" value="27 km/h" />
              <InfoRow label="Direction" value="207° SSW" isLast />
            </View>

            <View style={styles.circle}>
              <Text style={styles.compassLetter}>N</Text>
              <View style={styles.compassMiddle}>
                <Text style={styles.compassLetter}>W</Text>
                <View style={styles.center}>
                  <Text style={styles.compassValue}>↗ 10</Text>
                  <Text style={styles.compassUnit}>km/h</Text>
                </View>
                <Text style={styles.compassLetter}>E</Text>
              </View>
              <Text style={styles.compassLetter}>S</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  // Screen
  screen: {
    flex: 1,
    backgroundColor: "#8E9BB0",
  },
  content: {
    padding: 16,
  },

  // Cards and text
  card: {
    backgroundColor: "#7A879C",
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
  body: {
    color: "#FFFFFF",
    fontSize: 16,
    marginTop: 10,
  },
  smallText: {
    color: "#D5DBE5",
    fontSize: 13,
    marginTop: 8,
  },

  // Rows
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowAround: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  leftSide: {
    flex: 1,
  },
  center: {
    alignItems: "center",
  },

  // Conditions card
  segment: {
    flexDirection: "row",
    backgroundColor: "#66758C",
    borderRadius: 20,
    padding: 4,
  },
  segmentActive: {
    backgroundColor: "#94A1B5",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  segmentItem: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  hourRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
  },

  // Wind map
  map: {
    height: 240,
    borderRadius: 14,
    backgroundColor: "#2F6FB0",
    padding: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  mapCenter: {
    alignItems: "center",
  },
  mapCity: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
  },
  mapPin: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  mapPinText: {
    color: "#2F6FB0",
    fontSize: 17,
    fontWeight: "bold",
  },

  // Air quality colour scale
  bigNumber: {
    color: "#FFFFFF",
    fontSize: 40,
  },
  scale: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  scalePart: {
    flex: 1,
    height: 5,
  },
  scaleDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
  },
  blue: { backgroundColor: "#3D8BFF" },
  green: { backgroundColor: "#4CD964" },
  yellow: { backgroundColor: "#FFD60A" },
  orange: { backgroundColor: "#FF9F0A" },
  red: { backgroundColor: "#FF453A" },
  maroon: { backgroundColor: "#8E1B2B" },

  // Wind card compass
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#A3AEBF",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 4,
  },
  compassMiddle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 4,
  },
  compassLetter: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "bold",
  },
  compassValue: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  compassUnit: {
    color: "#FFFFFF",
    fontSize: 13,
  },
});
