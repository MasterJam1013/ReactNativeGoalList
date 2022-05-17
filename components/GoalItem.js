import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


const GoalItem = (props) => {
  return (
    //   creates slight opacity when user click, activeOpacity to adjust
    <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.goalListItems}>
        {/* item property ie input data single element */}
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goalListItems: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
