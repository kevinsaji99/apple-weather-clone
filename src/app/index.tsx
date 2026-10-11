import {Button, ScrollView,Text, View,  Alert, StyleSheet} from "react-native";

const Index = () => {
  const handleAlert = () => {
    Alert.alert("Alert Button pressed");
  };

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>

        {/*Top: city and temperature*/}
        
        <View style={styles.hero}>
          <Text style={styles.heroTag}>➤ HOME</Text>
          <Text style={styles.city}>Calgary</Text>
          <Text style={styles.bigTemp}>14°</Text>
          <Text style={styles.condition}>Cloudy</Text>
          <Text style={styles.condition}>H:18°  L:5°</Text>
        </View>

        {/* Special Weather Statement card */}

        <View style={styles.card}>
          <Text style={styles.cardTitle}>⚠️ Special Weather Statement</Text>
          <Text style={styles.body}>
            Special Weather Statement. These conditions are expected by 15:00, Friday, October 9.
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
            <View style={styles.hourColumn}>
              <Text style={styles.hourText}>Now</Text>
              <Text style={styles.hourIcon}>☁️</Text>
              <Text style={styles.hourText}>14°</Text>
            </View>
            <View style={styles.hourColumn}>
              <Text style={styles.hourText}>12</Text>
              <Text style={styles.hourIcon}>☁️</Text>
              <Text style={styles.hourText}>17°</Text>
            </View>
            <View style={styles.hourColumn}>
              <Text style={styles.hourText}>13</Text>
              <Text style={styles.hourIcon}>☁️</Text>
              <Text style={styles.hourText}>17°</Text>
            </View>
            <View style={styles.hourColumn}>
              <Text style={styles.hourText}>14</Text>
              <Text style={styles.hourIcon}>💨</Text>
              <Text style={styles.hourText}>18°</Text>
            </View>
            <View style={styles.hourColumn}>
              <Text style={styles.hourText}>15</Text>
              <Text style={styles.hourIcon}>💨</Text>
              <Text style={styles.hourText}>18°</Text>
            </View>
            <View style={styles.hourColumn}>
              <Text style={styles.hourText}>16</Text>
              <Text style={styles.hourIcon}>💨</Text>
              <Text style={styles.hourText}>17°</Text>
            </View>
          </View>
        </View>

        {/*10-day forecast card */}

        <View style={styles.card}>
          <View style={[styles.dayRow, styles.line]}>
            <Text style={styles.dayName}>Today</Text>
            <View style={styles.dayIconBox}>
              <Text style={styles.dayIcon}>🌧️</Text>
              <Text style={styles.chance}>40%</Text>
            </View>
            <Text style={styles.dayLow}>5°</Text>
            <View style={styles.track}>
              <View style={[styles.barToday, { marginLeft: "38%", width: "62%" }]} />
            </View>
            <Text style={styles.dayHigh}>18°</Text>
          </View>

          <View style={[styles.dayRow, styles.line]}>
            <Text style={styles.dayName}>Sat</Text>
            <View style={styles.dayIconBox}>
              <Text style={styles.dayIcon}>🌧️</Text>
              <Text style={styles.chance}>70%</Text>
            </View>
            <Text style={styles.dayLow}>-1°</Text>
            <View style={styles.track}>
              <View style={[styles.barCold, { marginLeft: "10%", width: "29%" }]} />
            </View>
            <Text style={styles.dayHigh}>5°</Text>
          </View>

          <View style={[styles.dayRow, styles.line]}>
            <Text style={styles.dayName}>Sun</Text>
            <View style={styles.dayIconBox}>
              <Text style={styles.dayIcon}>❄️</Text>
              <Text style={styles.chance}>60%</Text>
            </View>
            <Text style={styles.dayLow}>-3°</Text>
            <View style={styles.track}>
              <View style={[styles.barCold, { marginLeft: "0%", width: "29%" }]} />
            </View>
            <Text style={styles.dayHigh}>3°</Text>
          </View>

          <View style={[styles.dayRow, styles.line]}>
            <Text style={styles.dayName}>Mon</Text>
            <View style={styles.dayIconBox}>
              <Text style={styles.dayIcon}>☀️</Text>
            </View>
            <Text style={styles.dayLow}>-3°</Text>
            <View style={styles.track}>
              <View style={[styles.barCold, { marginLeft: "0%", width: "57%" }]} />
            </View>
            <Text style={styles.dayHigh}>9°</Text>
          </View>

          <View style={[styles.dayRow, styles.line]}>
            <Text style={styles.dayName}>Tue</Text>
            <View style={styles.dayIconBox}>
              <Text style={styles.dayIcon}>☀️</Text>
            </View>
            <Text style={styles.dayLow}>0°</Text>
            <View style={styles.track}>
              <View style={[styles.barWarm, { marginLeft: "14%", width: "67%" }]} />
            </View>
            <Text style={styles.dayHigh}>14°</Text>
          </View>

          <View style={[styles.dayRow, styles.line]}>
            <Text style={styles.dayName}>Wed</Text>
            <View style={styles.dayIconBox}>
              <Text style={styles.dayIcon}>⛅</Text>
            </View>
            <Text style={styles.dayLow}>4°</Text>
            <View style={styles.track}>
              <View style={[styles.barWarm, { marginLeft: "33%", width: "57%" }]} />
            </View>
            <Text style={styles.dayHigh}>16°</Text>
          </View>

          <View style={[styles.dayRow, styles.line]}>
            <Text style={styles.dayName}>Thu</Text>
            <View style={styles.dayIconBox}>
              <Text style={styles.dayIcon}>⛅</Text>
            </View>
            <Text style={styles.dayLow}>3°</Text>
            <View style={styles.track}>
              <View style={[styles.barWarm, { marginLeft: "29%", width: "48%" }]} />
            </View>
            <Text style={styles.dayHigh}>13°</Text>
          </View>

          <View style={[styles.dayRow, styles.line]}>
            <Text style={styles.dayName}>Fri</Text>
            <View style={styles.dayIconBox}>
              <Text style={styles.dayIcon}>⛅</Text>
            </View>
            <Text style={styles.dayLow}>-1°</Text>
            <View style={styles.track}>
              <View style={[styles.barWarm, { marginLeft: "10%", width: "81%" }]} />
            </View>
            <Text style={styles.dayHigh}>16°</Text>
          </View>

          <View style={[styles.dayRow, styles.line]}>
            <Text style={styles.dayName}>Sat</Text>
            <View style={styles.dayIconBox}>
              <Text style={styles.dayIcon}>⛅</Text>
            </View>
            <Text style={styles.dayLow}>3°</Text>
            <View style={styles.track}>
              <View style={[styles.barWarm, { marginLeft: "29%", width: "57%" }]} />
            </View>
            <Text style={styles.dayHigh}>15°</Text>
          </View>

          <View style={styles.dayRow}>
              <Text style={styles.dayName}>Sun</Text>
              <View style={styles.dayIconBox}>
                <Text style={styles.dayIcon}>☀️</Text>
              </View>
              <Text style={styles.dayLow}>1°</Text>
              <View style={styles.track}>
                <View style={[styles.barWarm, { marginLeft: "19%", width: "57%" }]} />
              </View>
              <Text style={styles.dayHigh}>13°</Text>
            </View>
        </View>

        {/* Wind map card */}
        <View style={styles.card}>
          <Text style={styles.label}>WIND MAP</Text>
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

        {/*Air quality card*/}
        <View style={styles.card}>
          <Text style={styles.label}>AIR QUALITY</Text>
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
            Air quality index is 5, which is worse than yesterday at about this time.
          </Text>
        </View>

        {/*Wind card */}
        <View style={styles.card}>
          <Text style={styles.label}>WIND</Text>
          <View style={styles.row}>

            <View style={styles.leftSide}>

              <View style={[styles.infoRow, styles.line]}>
                <Text style={styles.infoLabel}>Wind</Text>
                <Text style={styles.infoValue}>10 km/h</Text>
              </View>

              <View style={[styles.infoRow, styles.line]}>
                <Text style={styles.infoLabel}>Gusts</Text>
                <Text style={styles.infoValue}>27 km/h</Text>
              </View>

              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Direction</Text>
                <Text style={styles.infoValue}>207° SSW</Text>
              </View>
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

        {/*Alert button*/}
        <View style={styles.alertBox}>
          <Button title="Alert" onPress={handleAlert} />
        </View>
      </ScrollView>

      {/* Bottom toolbar is put outside the scroll view to stay at the bottom */}
      <View style={styles.toolbar}>
        <View style={styles.roundButton}>
          <Text style={styles.toolbarIcon}>🗺️</Text>
        </View>
        <View style={styles.pill}>
          <Text style={styles.toolbarArrow}>➤</Text>
          <View style={styles.dot} />

          <View style={styles.dot} />

          <View style={styles.dot} />

          <View style={styles.dot} />
          
          <View style={styles.dot} />

          <View style={styles.dot} />
        </View>
        <View style={styles.roundButton}>
          <Text style={styles.toolbarIcon}>☰</Text>
        </View>
      </View>
    </View>
  );
};

export default Index;


// Styles for the app

const styles = StyleSheet.create({

  //Screen 
  screen: {
    flex: 1,
    backgroundColor: "#8E9BB0",
  },
  content: {
    padding: 16,
  },


  //Top section
  hero: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 40,
  },
  heroTag: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
  },
  city: {
    color: "#FFFFFF",
    fontSize: 36,
  },
  bigTemp: {
    color: "#FFFFFF",
    fontSize: 110,
    fontWeight: "100",
    marginLeft: 30,
  },
  condition: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "500",
  },


  //Cards and text
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
  label: {
    color: "#D5DBE5",
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#8D9AAE",
  },

  //Rows 
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
  hourColumn: {
    alignItems: "center",
    gap: 20,
  },
  hourText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
  },
  hourIcon: {
    fontSize: 26,
  },

  //10-day forecast 
  dayRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  dayName: {
    color: "#FFFFFF",
    fontSize: 19,
    width: 64,
  },
  dayIconBox: {
    width: 44,
    alignItems: "center",
  },
  dayIcon: {
    fontSize: 22,
  },
  chance: {
    color: "#7CC6FF",
    fontSize: 12,
    fontWeight: "600",
  },
  dayLow: {
    color: "#C9D1DD",
    fontSize: 19,
    width: 40,
    textAlign: "right",
  },
  dayHigh: {
    color: "#FFFFFF",
    fontSize: 19,
    width: 40,
    textAlign: "right",
  },
  track: {
    flex: 1,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#66758C",
    marginHorizontal: 10,
  },
  barToday: {
    height: 5,
    borderRadius: 3,
    backgroundColor: "#B5D67A",
  },
  barCold: {
    height: 5,
    borderRadius: 3,
    backgroundColor: "#5AB8F0",
  },
  barWarm: {
    height: 5,
    borderRadius: 3,
    backgroundColor: "#7DD3C4",
  },

  //Wind map
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

  //Air quality color scale 
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
  
  // Wind card 
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  infoLabel: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  infoValue: {
    color: "#C9D1DD",
    fontSize: 16,
  },
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

  // Alert button
  alertBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 4,
    marginTop: 24,
  },

  //Bottom toolbar
  toolbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 30,
  },
  roundButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#A0ACBE",
    alignItems: "center",
    justifyContent: "center",
  },
  toolbarIcon: {
    color: "#FFFFFF",
    fontSize: 24,
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    height: 52,
    paddingHorizontal: 22,
    borderRadius: 26,
    backgroundColor: "#A0ACBE",
  },
  toolbarArrow: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
  },
});
