import {StackScreenProps} from '@react-navigation/stack';
import {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RootStackParamList} from '../App';
type NavigationProp = StackScreenProps<RootStackParamList, 'ExploreItem'>;

export const ExploreItem = ({navigation}: NavigationProp) => {
  let [yOffset, setYOffset]: any = useState(0);
  const informationIcons = [
    {icon: 'person-outline'},
    {icon: 'time-outline'},
    {icon: 'card-outline'},
    {icon: 'document-text-outline'},
  ];
  return (
    <View className="w-full h-full">
      <View
        className={`flex-row  w-full px-4 h-20 absolute top-0 z-10 pb-2 justify-between items-end ${
          yOffset >= 50 && 'bg-white'
        }`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back"
            size={24}
            color={`${yOffset >= 50 ? '#000' : '#FFF'}`}
          />
        </TouchableOpacity>
        <View className="flex-row flex gap-x-6">
          <Ionicons
            name="share-outline"
            size={24}
            color={`${yOffset >= 50 ? '#000' : '#FFF'}`}
          />
          <Ionicons
            name="person-outline"
            size={24}
            color={`${yOffset >= 50 ? '#000' : '#FFF'}`}
          />
        </View>
      </View>
      <ScrollView
        className=" w-full"
        scrollEventThrottle={16}
        onScroll={event => {
          setYOffset(event.nativeEvent.contentOffset.y);
        }}
        bounces={false}>
        <View className=" w-full h-36">
          <Image
            source={require('../assets/logo.png')}
            className="h-full w-full object-contain"
          />
        </View>
        <View className=" w-24 h-24 z-20 absolute top-20 left-5">
          <Image
            source={require('../assets/pro.jpg')}
            className="h-full w-full object-contain rounded-2xl"
          />
        </View>
        <View className=" h-96 mb-2 bg-white w-full">
          <View className="flex-row justify-between items-center mx-5 mt-10">
            <Text className=" text-2xl font-bold">Munkhbold MB</Text>
            <Ionicons name="ellipsis-vertical" color="#555" size={24} />
          </View>
          <View className="flex-row justify-between items-center mx-5 mt-2">
            <Text className=" text-lg color-[#555]">
              Монгол хэлний хичээл заана
            </Text>
          </View>
          <View className="flex-row items-center mx-5 mt-2">
            <Ionicons name="location-outline" color="#555" size={24} />
            <Text className=" text-lg color-[#555]">Улаанбаатар</Text>
          </View>
          <View className="flex-row items-center mx-5 mt-2">
            <Text className=" text-lg color-[#555] text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              aliquam quod minima pariatur magnam nesciunt molestiae?
            </Text>
          </View>
          <View className=" w-11/12 m-auto h-24 rounded-xl bg-zinc-100 flex-row justify-around items-center mt-2">
            <View className="flex flex-1 justify-between items-center">
              <Text className="color-[#555]">Нийт тоо</Text>
              <Text className=" text-lg  text-justify">101</Text>
            </View>
            <View className="flex flex-1 justify-between items-center">
              <Text className="color-[#555]">Үнэлгээ</Text>
              <Text className=" text-lg  text-justify">5.0</Text>
            </View>
            <View className="flex flex-1 justify-between items-center">
              <Text className="color-[#555]">Тест</Text>
              <Text className=" text-lg  text-justify">Lorem</Text>
            </View>
          </View>
        </View>
        <View className=" h-96 flex  w-full items-center bg-white mb-2">
          <View className="flex-row justify-between items-center h-10 bg-white w-11/12">
            <Text className=" text-base">Байгууллагын мэдээлэл</Text>
            <Text className="text-sm">Дэлгэрэнгүй</Text>
          </View>
          <View className="flex flex-1 bg-white w-11/12  ">
            {informationIcons.map((icon, index) => (
              <View key={index} className="flex-row items-center gap-x-2">
                <Ionicons name={icon.icon} size={18} color="#555" />
                <Text className=" text-base">2 багштай</Text>
              </View>
            ))}
          </View>
          <View className=" flex flex-1 w-11/12 gap-y-3">
            <Text className=" text-base font-bold">Ажиллах хүчний тухай</Text>
            <Text className=" text-base color-[#555]">Ярианы багш тустай</Text>
            <Text className=" text-base color-[#555] text-justify">
              Бид 3 жилийн туршлагатай ба 10-18 насны хүүхдүүдэд яриа болон
              дүрмийн хичээллийн хоцрогдол арилгадаг
            </Text>
          </View>
        </View>
        <View className=" h-96 bg-white w-full items-center">
          <View className="w-11/12 gap-y-4 flex flex-1">
            <View className=" w-full h-10 justify-center">
              <Text className=" text-base font-bold">
                Бичлэг <Text className="color-[#555]">1</Text>
              </Text>
            </View>
            <View className=" flex flex-1 justify-center">
              <FlatList
                contentContainerStyle={{gap: 10}}
                data={[1]}
                horizontal
                renderItem={() => (
                  <View className=" w-32 h-32">
                    <Image
                      source={require('../assets/pro.jpg')}
                      className="h-full w-full object-contain rounded-2xl"
                    />
                  </View>
                )}
              />
            </View>
          </View>
          <View className="w-11/12 gap-y-4 flex flex-1">
            <View className=" w-full h-10 justify-center">
              <Text className=" text-base font-bold">
                Зураг <Text className="color-[#555]">2</Text>
              </Text>
            </View>
            <View className=" flex flex-1 justify-center">
              <FlatList
                contentContainerStyle={{gap: 10}}
                data={[1, 2]}
                horizontal
                renderItem={() => (
                  <View className=" w-32 h-32">
                    <Image
                      source={require('../assets/pro.jpg')}
                      className="h-full w-full object-contain rounded-2xl"
                    />
                  </View>
                )}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <SafeAreaView className=" bg-white" />
    </View>
  );
};
