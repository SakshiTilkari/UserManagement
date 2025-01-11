import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ManageUser from "./screens/ManageUser";
import EditUser from "./screens/EditUser";
import { DatasetProvider } from "./context/DatasetContext";

const Stack = createStackNavigator();

const App = () => {
  return (
    <DatasetProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Manage User"
            component={ManageUser}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditUser"
            component={EditUser}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DatasetProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
