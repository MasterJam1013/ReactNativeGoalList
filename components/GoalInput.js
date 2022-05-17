import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = (props) => {
  // handle state change
  const [enteredGoal, setEnteredGoal] = useState("");

  // function to get user entered text
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  //   function to clear entry after adding goal
  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };
  return (
    //   Modal, basic way to present content above an enclosing view. AnimationType controls how the modal animates, set to a string
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        {/* placeholder is a prop that will render before text input has been entered */}
        <TextInput
          placeholder="2022 Goals"
          style={styles.textInputStyle}
          onChangeText={goalInputHandler}
          // bind value property to state
          value={enteredGoal}
        />
        <View style={styles.inputButtonStyle}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add new Goal" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    width: "90%",
    borderColor: "black",
    borderWidth: 1,
    marginRight: 5,
    padding: 5,
    marginBottom: 10,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  inputButtonStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  button: {
    width: "45%",
  },
});

export default GoalInput;
