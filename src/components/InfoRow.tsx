import { StyleSheet, Text, View } from "react-native";

type Props = {
  label: string;
  value: string;
  isLast?: boolean;
};

const InfoRow = ({ label, value, isLast }: Props) => {
  return (
    <View style={[styles.infoRow, !isLast && styles.line]}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
};

export default InfoRow;

const styles = StyleSheet.create({
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#8D9AAE",
  },
  infoLabel: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  infoValue: {
    color: "#C9D1DD",
    fontSize: 16,
  },
});
