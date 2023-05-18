import { useState } from "react";
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Simple = () => {
    const [click, setClick] = useState(false);
    const Categories = [
        { name: "Бүгд", image: "https://cdn-icons-png.flaticon.com/128/7666/7666179.png", },
        { name: "Боловсрол", image: "https://cdn-icons-png.flaticon.com/128/3145/3145765.png", },
        { name: "Урлаг", image: "https://cdn-icons-png.flaticon.com/128/2402/2402478.png", },
        { name: "Спорт", image: "https://cdn-icons-png.flaticon.com/128/3311/3311579.png", },
        { name: "Сургалт", image: "https://cdn-icons-png.flaticon.com/128/10620/10620537.png", },
        { name: "Машин", image: "https://cdn-icons-png.flaticon.com/128/3097/3097180.png", },
    ];
    const hotCategories = [
        { title: "Буйдан", adverts: "Бид танд ажил олж өгнө" },
        { title: "Буйдан", adverts: "Бид танд ажил олж өгнө" },
        { title: "Буйдан", adverts: "Бид танд ажил олж өгнө" },
        { title: "Буйдан", adverts: "Бид танд ажил олж өгнө" },
        { title: "Буйдан", adverts: "Бид танд ажил олж өгнө" },
    ]
    return (
        <ScrollView>
            <View className='w-full h-48 justify-evenly '>
                <View className="h-10 flex bg-gray-300 relative  rounded-md flex-row items-center justify-evenly  ml-4 mr-4">
                    <Ionicons name="search-outline" size={20} />
                    <TextInput
                        className="w-4/5 h-full rounded-lg bg-gray-300 flex mr-5"
                        placeholder="type here.."
                    />
                </View>
                <View className='w-full h-24 border-b border-gray-300'>
                    <ScrollView horizontal className="h-full w-full" showsHorizontalScrollIndicator={false} >
                        {Categories.map((el, index) => (
                            <View key={index} className="h-full w-24 items-center justify-evenly mr-1">
                                <TouchableOpacity onPress={() => setClick(true)} className={`w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center  ${click === true ? 'border border-black' : ''}`}>
                                    <Image source={{ uri: el.image }} className="w-8 h-8 object-contain" />
                                </TouchableOpacity>
                                <Text>{el.name}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>
            <View className="h-[200px] w-full">
                <Text className="text-lg ml-4">Халуухан зар ууд</Text>
                <ScrollView horizontal className="h-full w-full mt-3" showsHorizontalScrollIndicator={false} >
                    {hotCategories.map((el, index) => (
                        <TouchableOpacity key={index} className="h-36 w-40 ml-4 bg-gray-200 rounded-2xl pl-3 pt-3">
                            <Text className="text-gray-500">{el.title}</Text>
                            <Text className="text-base tracking-tighter">{el.adverts}</Text>
                            <Text className="pt-10 text-gray-500">Ajilla</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <View className="w-full h-[50px] flex-row items-end ml-4">
                <TouchableOpacity className="w-20 h-8 border rounded-3xl flex items-center justify-evenly flex-row border-gray-400">
                    <Text>Төрөл</Text>
                    <Ionicons name="ios-chevron-down" size={14} />
                </TouchableOpacity>
                <TouchableOpacity className="w-20 h-8 border rounded-3xl flex items-center justify-evenly flex-row border-gray-400 ml-4">
                    <Text>Төрөл</Text>
                    <Ionicons name="ios-chevron-down" size={14} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}