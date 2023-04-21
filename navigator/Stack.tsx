import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screen/Home';
import BottomTabNavigator from './Bottom';
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
    </Stack.Navigator>
  );
};
export default MyStack;
