import Home from "./Screens/HomeScreen.js";
import SecondScreen from "./Screens/SecondScreen.js";
import ThirdScreen from "./Screens/ThirdScreen.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



import ScreenA from "./ScreenA.js"
import ScreenB from "./ScreenB.js"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       
        <Stack.Screen 
          name="Home"
          component={Home}
          options={{headerShown:false}}
        /> 
        <Stack.Screen 
          name="Second"
          component={SecondScreen}
          options={{headerShown:false}}
        /> 
        
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
