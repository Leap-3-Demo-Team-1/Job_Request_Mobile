import {
  Button,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';
export type NavigationProp = StackNavigationProp<
  RootStackParamList,
  'CategoriesScreen'
>;
const HomeScreen = () => {
  const categories = [
    {icon: 'human-male-board', title: 'Хичээл'},
    {icon: 'greenhouse', title: 'Гэр/Сууц'},
    {icon: 'human-male-board', title: 'Бусад'},

    // {icon: 'ios-reorder-four-outline', title: 'Бусад'},
  ];
  const lessonCategories = [{}, {}, {}];
  const quesionsCategories = [{}, {}, {}];
  const navigator = useNavigation<NavigationProp>();

  return (
    <SafeAreaView className="w-full h-full">
      <ScrollView>
        <View className="m-auto w-11/12">
          <View className="flex flex-row">
            <View className="flex justify-center">
              <Image
                className="object-contain h-8 w-16"
                source={require('../assets/logoAjilla.png')}
              />
            </View>
            <View className="pl-5 flex flex-1 justify-end gap-5 items-center flex-row">
              <Ionicons name="search-outline" size={24} />
              <Ionicons name="person-outline" size={24} onPress={() => {navigator.navigate("Profile" as never)}}/>
            </View>
          </View>
          <View className="h-20 items-center justify-center">
            <View className="h-4/6 w-11/12 bg-[#00C2FF] rounded-lg justify-center items-center">
              <Text className="text-white text-lg">Рекламны орон зай</Text>
            </View>
          </View>
          <View className="w-full flex justify-between flex-row">
            {categories.map((item, index) => (
              <TouchableOpacity
                key={index}
                className="w-24 h-20 justify-around items-center"
                onPress={() =>
                  navigator.navigate('CategoriesScreen', {
                    titleHeader: item.title,
                  })
                }>
                <MaterialCommunityIcons
                  name={item.icon}
                  size={32}
                  color="#444"
                />
                <Text>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View className=" flex h-[530px] mt-6">
            <View className="flex-row justify-between mb-4">
              <Text className="font-semibold">ХАНДАЛТ ИХТЭЙ ҮЙЛЧИЛГЭЭ</Text>
              <TouchableOpacity>
                <View className="flex-row justify-center items-center gap-2">
                  <Text className=" text-[#00C2FF]">Бүгдийг харах</Text>
                  <Ionicons name="chevron-forward" size={14} color="#00C2FF" />
                </View>
              </TouchableOpacity>
            </View>
            <View className=" h-[150px]">
              <FlatList
                contentContainerStyle={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: 3,
                }}
                data={lessonCategories}
                horizontal
                // keyExtractor={}
                renderItem={({item, index}) => (
                  <View className="h-full w-40 mr-4 justify-around">
                    <View className='h-24 w-full rounded-xl justify-center items-center bg-slate-200'>
                      <Image
                        className=" h-3/5 w-8/12 object-contain"
                        source={require('../assets/logoAjilla.png')}
                      />
                    </View>
                    <Text>Сургалт</Text>
                    <View className="flex-row gap-1">
                      <Ionicons name="eye-outline" size={16} color="#999" />
                      <Text className=" text-[#999]">2124 хүсэлт</Text>
                    </View>
                  </View>
                )}
              />
            </View>
            <View className="flex flex-1 bg-slate-100 mt-5">
              {quesionsCategories.map((item, key) => (
                <View
                  key={key}
                  className="flex flex-1 gap-2 border-b-2 border-gray-300 mb-1">
                  <Text className=" text-sm text-[#999]">CategoryName</Text>
                  <Text className=" font-bold">Энийг яаж хийдэг вэ?</Text>
                  <Text className=" text-sm text-[#999]">
                    Суултуурын таглааг хэрхэн хийж байна?
                  </Text>
                  <View className="flex flex-row gap-x-1">
                    <Ionicons name="eye-outline" size={16} color="#999" />
                    <Text className=" text-[#999] mr-3">25</Text>
                    <MaterialCommunityIcons
                      name="comment-processing-outline"
                      size={16}
                      color="#999"
                    />
                    <Text className=" text-[#999]">3</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
          <View className="h-36 bg-red-500 items-center justify-center mt-4"></View>
          <View className="h-96 bg-red-600 items-center justify-center">
            <Text className="text-center color-[#fff] m-10">layer6</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
