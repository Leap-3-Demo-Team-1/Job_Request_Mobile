import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import CategoriesScreen from '../screen/CategoriesItems';
import BottomTabNavigator from './Bottom';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CategoryDetails from '../screen/CategoryDetails';

import Login from '../screen/auth/login';
import ProfileLogout from '../screen/profileLogout';
import SignUpSelect from '../screen/auth/signUpSelect';
import SignUpMember from '../screen/auth/signUpMember';
import SignUpUser from '../screen/auth/signUpUser';
import ResetPassword from '../screen/auth/resetPassword';
import Otp from '../screen/auth/otp';
import NewPassword from '../screen/auth/newPassword';
import { RootStackParamList } from '../App';

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
        name={"CategoriesScreen"}
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
        name={"CategoryDetails"}
        component={CategoryDetails}
        
        options={({ navigation, route })=>({
          // headerTitle:route.params.title,
          headerShown: false,
          // headerLeft: ()=>{
          //   return(
          //     <TouchableOpacity
          //       style={{ margin: 10 }}
          //       onPress={() => navigation.goBack()}
          //     >
          //       <Ionicons name="arrow-back" size={24} color="black" />
          //     </TouchableOpacity>
          //   )
          // }
        })}
      />
      <Stack.Screen
        name={"Login"}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={"Profile" as never}
        component={ProfileLogout}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={"SignUpSelect" as never}
        component={SignUpSelect}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={"SignUpMember" as never}
        component={SignUpMember}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={"SignUpUser" as never}
        component={SignUpUser}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={"ResetPassword" as never}
        component={ResetPassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={"Otp" as never}
        component={Otp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={"newPassword" as never}
        component={NewPassword}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
    
  );
};
export default MyStack;
