import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ExplorePage from '../screen/explore';
import CommunityPage from '../screen/CommunityPage';
import ProfileLogout from '../screen/profileLogout';
import TabScreens from '../screen/TabScreen';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor:'#020617'
    }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-home" size={size} />
          ),
          title: 'Нүүр',
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExplorePage}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="compass-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={TabScreens}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-newspaper-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileLogout}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="move-to-inbox" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;
