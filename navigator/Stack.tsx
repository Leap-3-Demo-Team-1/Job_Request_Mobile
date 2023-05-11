import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native';
import BottomTabNavigator from './Bottom';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RootStackParamList} from '../App';
import {
  Login,
  SignUpSelect,
  SignUpMember,
  SignUpUser,
  ResetPassword,
  Otp,
  NewPassword,
} from '../screen/auth';
import {CategoriesScreen, CategoryDetails, ExploreItem, ProfileLogout} from '../screen';

const Stack = createStackNavigator<RootStackParamList>();
const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Bottom'}
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'CategoriesScreen'}
        component={CategoriesScreen}
        options={({navigation, route}) => ({
          headerTitle: route.params.titleHeader,
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{margin: 10}}
                onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            );
          },
        })}
      />
      <Stack.Screen
        name={'CategoryDetails'}
        component={CategoryDetails}
        options={({navigation, route}) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name={'Login'}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'Profile'}
        component={ProfileLogout}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'SignUpSelect'}
        component={SignUpSelect}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'SignUpMember'}
        component={SignUpMember}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'SignUpUser'}
        component={SignUpUser}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'ResetPassword'}
        component={ResetPassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'Otp'}
        component={Otp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'newPassword'}
        component={NewPassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'ExploreItem'}
        component={ExploreItem}
        options={{
          headerShown:false
        }}
      />
    </Stack.Navigator>
  );
};
export default MyStack;
