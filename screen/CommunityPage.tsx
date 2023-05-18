import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Tab, TabView } from '@rneui/base';
import { Simple } from './community/Simple';

export const CommunityPage = () => {
  const navigator = useNavigation();
  const [tabIndex, setTabIndex] = useState(0);
  const tabs = [
    { name: 'Энгийн' },
    { name: 'Мэргэжлийн' },
  ];
  return (
    <SafeAreaView>
      <View className='w-full h-full'>

        <View className='h-auto w-full border-b border-gray-300'>
          <View className="w-full h-10 flex justify-between items-center flex-row">
            <Text className="text-xl pl-4">Community</Text>
            <View className="h-full w-14 flex-row items-center justify-around">
              <Ionicons name="person-outline" size={24} />
            </View>
          </View>

          <Tab
            value={tabIndex}
            onChange={e => setTabIndex(e)}
            indicatorStyle={{
              backgroundColor: '#000',
              height: 2,
              // width:90,
              // marginLeft:14
            }}>
            {tabs.map((el, index) => (
              <Tab.Item
                key={index}
                style={{
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                }}>
                <Text
                  className={`${tabIndex === index ? 'color-[#000]' : 'color-gray-500'}`}>
                  {el.name}
                </Text>
              </Tab.Item>
            ))}
          </Tab>
        </View>
        <TabView
          value={tabIndex}
          onChange={setTabIndex}
          animationType="timing"
          disableSwipe
          containerStyle={{ flex: 14, width: '100%' }}>

          <TabView.Item className="flex flex-14 w-full">
            <Simple />
          </TabView.Item>

          <TabView.Item className="flex flex-14 w-full items-center ">
            <Text className="text-xl w-11/12 py-4">Жагсаалт</Text>
          </TabView.Item>

        </TabView>

      </View>
    </SafeAreaView>
  );
};