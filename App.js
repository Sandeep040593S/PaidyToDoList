import React, { useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AuthenticationButton from "./src/components/AuthenticationButton";
import TodoScreen from "./src/screens/TodoScreen";
import { store, persistor } from "./src/redux/store/store";
import { View } from "react-native";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  //Call Function to show ToDoList once autheticated
  const handleAuthentication = () => {
    setAuthenticated(true);
  };

  // 1. Added store to acess state through the application
  // 2. Added a persitor so the the state persist even after the applcation is killed
  // 3. render the Authentication / ToDoScreen based on the useState variable
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {!authenticated ? (
            <AuthenticationButton onPress={handleAuthentication} />
          ) : (
            <TodoScreen></TodoScreen>
          )}
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
