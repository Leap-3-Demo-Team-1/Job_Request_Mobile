import React from 'react';
import {Image, View} from 'react-native';

const SplashScreen = () => {
  return (
    <View className="w-full h-full bg-[#ffffff] justify-center items-center">
      <Image
        className="object-contain h-30 w-68"
        source={require('../assets/logoAjilla.png')}
      />
    </View>
  );
};
export default SplashScreen;
