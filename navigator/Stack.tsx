import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screen/Home';
import BottomTabNavigator from './Bottom';
import Login from '../screen/login';
type RootStackParamList = {};
const Stack = createStackNavigator<RootStackParamList>();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Bottom" as never}
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={"Login" as never}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default MyStack;
