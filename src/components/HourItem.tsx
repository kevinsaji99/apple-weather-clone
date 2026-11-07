import { StyleSheet, Text, View } from "react-native";

type Props = {
  time: string;
  icon: string;
  temp: number;
};

const HourItem = ({ time, icon, temp }: Props) => {
  return (
    <View style={styles.hourColumn}>
      <Text style={styles.hourText}>{time}</Text>
      <Text style={styles.hourIcon}>{icon}</Text>
      <Text style={styles.hourText}>{temp}°</Text>
    </View>
  );
};

export default HourItem;

const styles = StyleSheet.create({
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
});
