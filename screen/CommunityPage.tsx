import {SafeAreaView, Text, TextInput, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const CommunityPage = () => {
  return (
    <SafeAreaView>
      <View className=" m-auto w-11/12 h-full">
        <View className="flex-row justify-between items-center">
          <Text className=" font-bold">Community</Text>
          <Ionicons name="person-outline" size={24} />
        </View>
        <View className="flex-1 bg-slate-200">
          <View className='w-full rounded-xl bg-gray-300 flex-row items-center p-3 mt-8' style={{gap:5}}>
            <Ionicons name="search" size={24}/>
            <TextInput placeholder='Search' className='w-full h-full'></TextInput>
          </View>
          <View className='flex-row'>
            <View className=' h-10 w-10'>

            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};