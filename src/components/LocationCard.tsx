import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  name: string;
  subtitle: string;
  condition: string;
  temp: number;
  high: number;
  low: number;
  color: string;
  onPress: () => void;
};

const LocationCard = ({
  name,
  subtitle,
  condition,
  temp,
  high,
  low,
  color,
  onPress,
}: Props) => {
  return (
    <Pressable
      style={[styles.card, { backgroundColor: color }]}
      onPress={onPress}
    >
      <View style={styles.row}>
        <View style={styles.nameBox}>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.condition}>{condition}</Text>
        <Text style={styles.highLow}>
          H:{high}° L:{low}°
        </Text>
      </View>
    </Pressable>
  );
};

export default LocationCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    minHeight: 120,
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameBox: {
    flex: 1,
    marginRight: 10,
  },
  name: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
  },
  temp: {
    color: "#FFFFFF",
    fontSize: 52,
    fontWeight: "200",
  },
  condition: {
    color: "#FFFFFF",
    fontSize: 15,
  },
  highLow: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "500",
  },
});
