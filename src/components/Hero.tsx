import { StyleSheet, Text, View } from "react-native";

type Props = {
  tag?: string;
  city: string;
  temp: number;
  condition: string;
  high: number;
  low: number;
};

const Hero = ({ tag, city, temp, condition, high, low }: Props) => {
  return (
    <View style={styles.hero}>
      {tag && <Text style={styles.heroTag}>➤ {tag}</Text>}
      <Text style={styles.city}>{city}</Text>
      <Text style={styles.bigTemp}>{temp}°</Text>
      <Text style={styles.condition}>{condition}</Text>
      <Text style={styles.condition}>
        H:{high}° L:{low}°
      </Text>
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
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
});
