import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/Home';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Explore" component={HomeScreen} />
        <Tab.Screen name="News" component={HomeScreen} />
        <Tab.Screen name="Chat" component={HomeScreen} />
        <Tab.Screen name="Profile" component={HomeScreen} />
      </Tab.Navigator>
  );
};
export default BottomTabNavigator;
