import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  day: string;
  icon: string;
  low: number;
  high: number;
  barLeft: number;
  barWidth: number;
  chance?: string;
  isToday?: boolean;
  isCold?: boolean;
  isLast?: boolean;
  onPress?: () => void; // optional: only rows that open a detail screen get one
};

const DayRow = ({
  day,
  icon,
  low,
  high,
  barLeft,
  barWidth,
  chance,
  isToday,
  isCold,
  isLast,
  onPress,
}: Props) => {
  return (
    <Pressable
      style={[styles.dayRow, !isLast && styles.line]}
      onPress={onPress}
    >
      <Text style={styles.dayName}>{day}</Text>
      <View style={styles.dayIconBox}>
        <Text style={styles.dayIcon}>{icon}</Text>
        {chance && <Text style={styles.chance}>{chance}</Text>}
      </View>
      <Text style={styles.dayLow}>{low}°</Text>
      <View style={styles.track}>
        <View
          style={[
            styles.bar,
            isCold && styles.barCold,
            isToday && styles.barToday,
            { marginLeft: `${barLeft}%`, width: `${barWidth}%` },
          ]}
        />
      </View>
      <Text style={styles.dayHigh}>{high}°</Text>
    </Pressable>
  );
};

export default DayRow;

const styles = StyleSheet.create({
  dayRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#8D9AAE",
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
  bar: {
    height: 5,
    borderRadius: 3,
    backgroundColor: "#7DD3C4",
  },
  barCold: {
    backgroundColor: "#5AB8F0",
  },
  barToday: {
    backgroundColor: "#B5D67A",
  },
});
