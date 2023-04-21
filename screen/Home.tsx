import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import * as React from 'react';

const HomeScreen = () => {
  return (
    <SafeAreaView className='w-full h-full'>
      <View className="flex-1 items-center justify-center">
        <Text className='text-center m-10'>
          За манай төсөл эхлэх гэж байна та бүхэндээ амжилт хүсэе
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
