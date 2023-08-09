import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/reducers/todoSlice";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(index));
  };
  return (
    <View style={styles.container}>
      <View style={styles.roundedView}>
        <View style={styles.leftText}>
          <View style={[styles.dot, { backgroundColor: '#0046a6' }]} />
          <Text style={{color:'#a0a0a0',fontSize:14}} >{todo.title}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleDelete}>
          <Text style={styles.rightText}>REMOVE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  roundedView: {
    flexDirection: "row",
    width: "100%",
    margin: 5,
    backgroundColor: "white", // Customize background color
    borderRadius: 20, // Adjust the value for rounding
    padding: 15,
    alignItems: "center",
  },
  leftText: {
    flexDirection: "row",
    marginRight: "auto", 
   
  },
  rightText: {
    color: "#a0a0a0", // Customize text color
    marginLeft: "auto", // Push text to extreme right
    fontSize: 14,
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
    alignSelf:'center',
  },
});

export default TodoItem;
