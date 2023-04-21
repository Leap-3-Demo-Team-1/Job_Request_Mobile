/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { SafeAreaView, Text, View } from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  return (
    <SafeAreaView className='w-screen h-screen'>
      <View className="flex-1 items-center justify-center">
        <Text className='text-center m-10'>
          За манай төсөл эхлэх гэж байна та бүхэндээ амжилт хүсэе
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
