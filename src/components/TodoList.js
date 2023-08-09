import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  FlatList,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import TodoItem from "./TodoItem";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../redux/reducers/todoSlice";

const TodoList = ({ todos }) => {
  const dispatch = useDispatch(); //have used useSelector to get mapDispatchToProps without using connect keyword
  const [newTodoTitle, setNewTodoTitle] = useState(""); //state for inputing new ToDO
  const [isAddButtonEnable, setAddButtonEnable] = useState(false);  // state to switch between Add/Update button
  const [index, setIndex] = useState(0);  // state for index in which array of todoList would be present

  //1.Checking if input is not empty, if not then dispatching the new input in an obj using redux-toolkit 
  //2. at the end again making the input state to empty string
  const handleAddTodo = () => {
    if (newTodoTitle.trim() !== "") {
      dispatch(addTodo({ title: newTodoTitle }));
    }
    setNewTodoTitle("");
  };

  //1.getting the todo item selected from the list
  //2.dispatching the updateReduxer for update functionality  in the reducer to update
  //3. at the end again making the input state to empty string
  const handleUpdateTodo = () => {
    if(todos.length!=0){
      const updatedTodos = { ...todos[index], title: newTodoTitle };
      dispatch(updateTodo({ index, updatedTodos }));
      setNewTodoTitle("");
      setAddButtonEnable(false);
    }else{
      setAddButtonEnable(false);
      if (newTodoTitle.trim() !== "") {
        dispatch(addTodo({ title: newTodoTitle }));
      }
      setNewTodoTitle("");
    }
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>TODO:</Text>
      <FlatList
        style={{ margin: "px" }}
        data={todos}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              setNewTodoTitle(item?.title);
              setAddButtonEnable(true);
              setIndex(index);
            }}
          >
            <TodoItem todo={item} index={index} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index}
      />

      <View style={styles.roundedView}>
        <TextInput
          style={styles.input}
          placeholder="Enter here"
          placeholderTextColor="gray"
          value={newTodoTitle}
          onChangeText={setNewTodoTitle}
        />
        <TouchableOpacity
          style={styles.addbutton}
          onPress={!isAddButtonEnable ? handleAddTodo : handleUpdateTodo}
        >
          <Text style={styles.addbuttonText}>
            {!isAddButtonEnable ? "Add" : "Update"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end", 
    padding: 10,
  },
  text: {
    marginBottom: 10,
    fontSize: 24,
    textAlign: "left",
    color: "#0046a6",
    fontWeight: "bold",
    paddingHorizontal: 0,
  },
  button: {
    backgroundColor: "#0046a6",
    borderRadius: 20,
    paddingVertical: 10,
    marginHorizontal: 50,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  roundedView: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
    borderBottomWidth: 1, 
    borderColor: "#a0a0a0", 
  },
  addbutton: {
    backgroundColor: "#0046a6",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  addbuttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default TodoList;
