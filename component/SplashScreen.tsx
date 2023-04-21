import React from 'react';
import {Image, View} from 'react-native';

const SplashScreen = () => {
  return (
    <View className="w-full h-full bg-[#393E46] justify-center items-center">
      <Image
        className="object-contain h-48 w-96"
        source={require('../assets/logo.png')}
      />
    </View>
  );
};
export default SplashScreen;
