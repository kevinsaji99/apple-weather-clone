import { StyleSheet, Text } from "react-native";

type Props = {
  label: string;
  icon?: string;
};

const SectionLabel = ({ label, icon }: Props) => {
  return (
    <Text style={styles.label}>
      {icon && `${icon} `}
      {label}
    </Text>
  );
};

export default SectionLabel;

const styles = StyleSheet.create({
  label: {
    color: "#D5DBE5",
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 0.5,
    marginBottom: 10,
  },
});
