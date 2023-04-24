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

const HomeScreen = () => {
  const categories = [
    {icon: 'human-male-board', title: 'Хичээл'},
    {icon: 'greenhouse', title: 'Гэр/Сууц'},
    {icon: 'human-male-board', title: 'Бизнес'},
    {icon: 'human-male-board', title: 'Хичээл'},
    {icon: 'human-male-board', title: 'Хичээл'},
    {icon: 'human-male-board', title: 'Хичээл'},
    {icon: 'human-male-board', title: 'Хичээл'},

    // {icon: 'ios-reorder-four-outline', title: 'Бусад'},
  ];
  const lessonCategories = [{}, {}, {}];
  const quesionsCategories = [{}, {}, {}];
  return (
    <SafeAreaView className="w-full h-full">
      <ScrollView>
        <View className="m-auto w-11/12">
          <View className="flex flex-row">
            <View className="flex flex-1 justify-center">
              <Text className="font-semibold italic text-xl color-[#02C7AE]">
                Шийдэе
              </Text>
            </View>
            <View className="pl-5 flex flex-1 justify-end gap-5 items-center flex-row">
              <Ionicons name="search-outline" size={24} />
              <Ionicons name="person-outline" size={24} />
            </View>
          </View>
          <View className="h-20 items-center justify-center">
            <View className="h-4/6 w-11/12 bg-[#393E46] rounded-lg justify-center items-center">
              <Text className="text-white text-lg">Рекламны орон зай</Text>
            </View>
          </View>
          <FlatList
            contentContainerStyle={{
              // display: 'flex',
              width: '100%',
              alignItems: 'center',
            }}
            data={categories}
            horizontal={false}
            numColumns={4}
            renderItem={({item, index, separators}) => (
              <TouchableOpacity className="w-24 h-20 justify-around items-center">
                <MaterialCommunityIcons
                  name={item.icon}
                  size={32}
                  color="#444"
                />
                <Text>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
          <View className=" flex h-[530px] mt-6">
            <View className="flex-row justify-between mb-4">
              <Text className="font-semibold">ХАНДАЛТ ИХТЭЙ ҮЙЛЧИЛГЭЭ</Text>
              <TouchableOpacity>
                <View className="flex-row justify-center items-center gap-2">
                  <Text className=" text-[#02C7AE]">Бүгдийг харах</Text>
                  <Ionicons name="chevron-forward" size={14} color="#02C7AE" />
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
                renderItem={({item, index}) => (
                  <View className="h-full w-40 mr-4 justify-around">
                    <Image
                      className="h-24 w-full rounded-xl"
                      source={require('../assets/logo.png')}
                    />
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
              {quesionsCategories.map(() => (
                <View className="flex flex-1 gap-2 border-b-2 border-gray-300 mb-1">
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
