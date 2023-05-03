import CheckBox from '@react-native-community/checkbox';
import {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

const CategoryDetails = () => {
  const [isSelected, setSelection] = useState(false);
  const choose = [
    {title: 'Анхан шат'},
    {title: 'Дунд шат'},
    {title: 'Гүнзгий шат'},
    {title: 'Бусад'},
  ];
  return (
    <View className=" w-full h-full flex bg-white">
      <View className=" w-11/12 h-14 m-auto justify-center items-center">
        <Text className="color-[#02C7AE]">0%</Text>
      </View>
      <ScrollView className=" flex flex-1 w-11/12 m-auto ">
        <View className=" w-full h-20 justify-center items-center mt-1">
          <Text className=" text-ml font-semibold">
            Хичээл заах сонголтоо сонгоно уу
          </Text>
        </View>
        <View className="w-full h-full">
          {choose.map((el, index) => (
            <View className="flex flex-row w-full h-14 border-x border-t border-neutral-400 p-2 items-center">
              <CheckBox
                key={index}
                boxType="square"
                tintColor="#3333"
                onCheckColor="#FFF"
                onFillColor="#02C7AE"
                onTintColor="#fff"
                onAnimationType="bounce"
                offAnimationType="bounce"
                // value={isSelected}
                onChange={(el)=>{ console.log("onchange-", el)}}
                onValueChange={(el)=> {console.log(el);
                }}
                className=""
              />
              <Text className="ml-4">{el.title}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity className="h-20 w-full bg-[#02C7AE] items-center">
        <Text className=" color-[#ffff] text-lg mt-2 font-semibold">
          Үргэлжлүүлэх
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default CategoryDetails;
