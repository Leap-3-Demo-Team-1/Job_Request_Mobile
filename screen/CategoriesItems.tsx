import { useNavigation } from '@react-navigation/native';
import {useState} from 'react';
import {
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CategoriesScreen = () => {
  const [value, setValue] = useState(0);
  const navigator = useNavigation();

  const scoolCategories = [
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
    {name: 'Дууны хичээл', icon: ''},
    {name: 'Спорт', icon: ''},
    {name: 'Спорт', icon: ''},
    {name: 'Спорт', icon: ''},
    {name: 'Спорт', icon: ''},
    {name: 'Спорт', icon: ''},
  ];
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
            <TextInput placeholder="Search" className=" w-11/12 h-full"></TextInput>
          </View>
        </View>
        <View className="flex-1 justify-between items-center flex-row w-11/12 ">
          <FlatList
            contentContainerStyle={{
              display: 'flex',
              flexDirection: 'row',
            }}
            data={tabs}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              const isActive = value === index;
              return (
                <TouchableOpacity
                  style={[
                    {borderBottomWidth: 2, borderColor: '#3333', padding: 10},
                    isActive && {borderColor: '#02C7AE'},
                  ]}
                  key={index}
                  onPress={() => setValue(index)}
                  // className="flex flex-1 justify-center items-center"
                >
                  <View style={[{}]}>
                    <Text style={isActive && {color: '#02C7AE'}}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View className="flex flex-14 w-full items-center">
          <Text className=" text-xl w-11/12">Жагсаалт</Text>
          <FlatList
            contentContainerStyle={{
              gap: 40,
            }}
            data={scoolCategories}
            horizontal={false}
            numColumns={2}
            renderItem={({item}) => (
              <TouchableOpacity className="h-48 w-44 ml-2 -left-1 gap-y-3" 
                onPress={()=> navigator.navigate("CategoryDetails", {title : item.title as never} )}
              >
                <Image
                  className="h-40 rounded-lg w-full"
                  source={{uri: item.img}}
                />
                <Text>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};
export default CategoriesScreen;
