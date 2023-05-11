import {Button, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export const ProfileLogout = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="h-full w-full">
        <View className="w-full h-10 flex justify-between items-center flex-row border-b border-gray-300">
          <Text className="text-xl pl-4">Profile</Text>
          <View className="h-full w-14 flex-row items-center justify-around">
            <Ionicons name="person-outline" size={24} />
          </View>
        </View>
        <View className="w-full h-2/3 flex items-center justify-center mt-10">
          <View className="w-80 h-3/5 flex-column items-center justify-around">
            <View className="flex items-center justify-between h-2/3 w-full">
              <View className="w-24 h-24 bg-[#00C2FF] rounded-full flex items-center justify-center">
                <Ionicons
                  name="person-outline"
                  size={50}
                  style={{color: 'white'}}
                />
              </View>
              <Text className="text-base text-center w-52">
                Нэвтэрсний дараа үүнийг ашиглана уу?
              </Text>
              <Text className="text-gray-500">Нэвтрэх шаардлагатай</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login' as never);
              }}
              className="w-48 h-11 bg-[#00C2FF] flex items-center justify-center rounded shadow shadow-sky-700">
              <Text className="text-white text-base font-medium">
                Нэвтрэх/Бүртгүүлэх
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
