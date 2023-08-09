// screens/TodoScreen.js
import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import TodoList from "../components/TodoList";
import { useSelector } from "react-redux";

const TodoScreen = () => {
 
  const todos = useSelector((state) => state.todos);  //have used useSelector to get mapStateToProps without using connect keyword
 

  //Created Custom comp. TodoList to show list of todo items
  return (
    <View style={styles.container}>
      <TodoList todos={todos} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TodoScreen;
