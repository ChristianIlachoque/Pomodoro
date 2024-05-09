import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const options = ["Pomodoro", "Short Break", "Long Break"];
export const Header = ({ currentTime, setCurrentTime, setTime, setIsActive }) => {
  const handlePress = (index) => {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
    setIsActive(false);
  };
  return (
    <View style={{ flexDirection: "row" }}>
      {options.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.itemStyle,
            currentTime !== index && { borderColor: "transparent" },
          ]}
          onPress={() => handlePress(index)}
        >
          <Text style={{ fontWeight: "bold" }}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    width: "33%",
    borderWidth: 3,
    padding: 5,
    borderColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 20,
  },
});
