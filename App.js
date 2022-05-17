import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  // handle state change
  const [yearlyGoals, setYearlyGoals] = useState([]);
  const [isAddMode, setIsAddMode]= useState(false)

  // function to add goal using spread operator(...) to create new array providing lateste state snapshot
  const addGoalHandler = (goalTitle) => {
    setYearlyGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };
  // function to remove list items, filter returns new array with desired params
  const removeGoalHandler = (goalId) => {
    setYearlyGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };
// function to cancel goal return to Modal screen
const cancelGoalHandler = () => {
  setIsAddMode(false);
};
  return (
    // similar to divs, views for layout design. Style accepted prop name in core components, similar values as CSS
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalHandler} />
      {/* output list of goals, flatlist used to manage list when unsure length, keyExctractor used to tell flatList how to extract key w/ function */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={yearlyGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}
// creates JS object which contains all style config
const styles = StyleSheet.create({
  // property can be any name
  screen: {
    padding: 70,
  },
});
