import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  FlatList,
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RootStackParamList} from '../App';
import {Tab, TabView} from '@rneui/themed';
export type NavigationProp = StackNavigationProp<
  RootStackParamList,
  'CategoriesScreen'
>;
export const CategoriesScreen = () => {
  const [value, setValue] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);
  const navigator = useNavigation<NavigationProp>();
  const schoolCategories = [
    {
      title: 'Англи хэлний хичээл',
      img: 'https://www.shutterstock.com/image-photo/happy-female-english-teacher-giving-260nw-1976712080.jpg',
    },
    {
      title: 'Дууны хичээл',
      img: 'https://i0.wp.com/www.mencheymusic.com/wp-content/uploads/2022/04/Lessons-Piano-01-scaled.jpg?fit=1024%2C768&ssl=1',
    },
    {
      title: 'Спорт хичээл',
      img: 'https://www.shutterstock.com/image-photo/happy-female-english-teacher-giving-260nw-1976712080.jpg',
    },
    {
      title: 'Гитарын хичээл',
      img: 'https://www.ensembleschools.com/ricks-music/wp-content/uploads/sites/21/2021/11/instruments-in-store.jpg',
    },
  ];
  const tabs = [
    {name: 'Бүгд', icon: ''},
    {name: 'Гадаад хэл', icon: ''},
    {name: 'Спорт', icon: ''},
    {name: 'Урлаг', icon: ''},
  ];
  const test = ()=>{
    console.log(tabIndex);
    
  }
  test();
  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   style={{display: 'flex', flex: 1}}>

    <TouchableNativeFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View className="flex justify-center items-center w-full h-full gap-y-2 bg-white">
        <View className="flex flex-1 w-full items-center justify-center">
          <View
            className="w-11/12 h-full rounded-xl bg-gray-200 flex-row items-center pl-2 mt-3"
            style={{gap: 5}}>
            <Ionicons name="search" size={24} />
            <TextInput
              placeholder="Search"
              className=" w-11/12 h-full"></TextInput>
          </View>
        </View>
        <Tab
          value={tabIndex}
          onChange={e => setTabIndex(e)}
          indicatorStyle={{
            backgroundColor: '#00C2FF',
            height: 3,
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
                className={`${tabIndex === index ? 'color-[#00C2FF]' : ''}`}>
                {el.name}
              </Text>
            </Tab.Item>
          ))}
        </Tab>
        <TabView
          value={tabIndex}
          onChange={setTabIndex}
          animationType="timing"
          disableSwipe
          containerStyle={{flex: 14, width: '100%'}}>
          <TabView.Item className="flex flex-14 w-full items-center ">
            <View className="flex flex-1 items-center">
              <Text className="text-xl w-11/12 py-4">Жагсаалт</Text>
              <FlatList
                contentContainerStyle={{
                  gap: 40,
                }}
                data={schoolCategories}
                horizontal={false}
                numColumns={2}
                renderItem={({item}) => (
                  <TouchableOpacity
                    className="h-48 w-44 ml-2 -left-1 gap-y-3"
                    onPress={() =>
                      navigator.navigate('CategoryDetails', {title: item.title})
                    }>
                    <Image
                      className="h-40 rounded-lg w-full"
                      source={{uri: item.img}}
                    />
                    <Text>{item.title}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </TabView.Item>
          <TabView.Item className="flex flex-14 w-full ">
            <View className=" w-11/12 m-auto flex flex-1">
              {[1, 4, 9].map((el, index) => (
                <TouchableOpacity key={index} className=" my-2 justify-center">
                  <Text className="color-[#00C2FF]">Англи хичээл</Text>
                </TouchableOpacity>
              ))}
            </View>
          </TabView.Item>
          <TabView.Item className="flex flex-14 w-full ">
            <View className=" w-11/12 m-auto flex flex-1">
              {[1, 4, 9].map((el, index) => (
                <TouchableOpacity key={index} className=" my-2 justify-center">
                  <Text className="color-[#00C2FF]">Анasdгли хичээл</Text>
                </TouchableOpacity>
              ))}
            </View>
          </TabView.Item>
          <TabView.Item className="flex flex-14 w-full ">
            <View className=" w-11/12 m-auto flex flex-1">
              {[1, 4, 9].map((el, index) => (
                <TouchableOpacity key={index} className=" my-2 justify-center">
                  <Text className="color-[#00C2FF]">ssss хичээл</Text>
                </TouchableOpacity>
              ))}
            </View>
          </TabView.Item>
        </TabView>
      </View>
    </TouchableNativeFeedback>
  );
};
