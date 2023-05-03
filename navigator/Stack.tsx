import {createStackNavigator} from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import CategoriesScreen from '../screen/CategoriesItems';
import BottomTabNavigator from './Bottom';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CategoryDetails from '../screen/CategoryDetails';

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
        name={"CategoriesScreen" as never}
        component={CategoriesScreen}
        options={({ navigation, route }) => ({
          headerTitle: route.params.titleHeader,
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{ margin: 10 }}
                onPress={() => navigation.goBack()}
              >
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            );
          },
          // headerShown: false,
        })}
      />
      <Stack.Screen
        name={"CategoryDetails" as never}
        component={CategoryDetails}
        options={({ navigation, route })=>({
          headerTitle:route.params.title,
          headerLeft: ()=>{
            return(
              <TouchableOpacity
                style={{ margin: 10 }}
                onPress={() => navigation.goBack()}
              >
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            )
          }
        })}
      />
    </Stack.Navigator>
  );
};
export default MyStack;
