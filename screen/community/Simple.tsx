import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Simple = () => {

    const Categories = [
        { name: "Боловсрол", image: "https://cdn-icons-png.flaticon.com/128/3145/3145765.png", },
        { name: "Урлаг", image: "https://cdn-icons-png.flaticon.com/128/2402/2402478.png", },
        { name: "Спорт", image: "https://cdn-icons-png.flaticon.com/128/3311/3311579.png", },
        { name: "Сургалт", image: "https://cdn-icons-png.flaticon.com/128/10620/10620537.png", },
        { name: "Машин", image: "https://cdn-icons-png.flaticon.com/128/3097/3097180.png", },
    ];
    return (
        <View className='w-full h-56 justify-evenly '>
            <View className="h-10 flex bg-gray-300 relative  rounded-md flex-row items-center justify-evenly  ml-4 mr-4">
                <Ionicons name="search-outline" size={20} />
                <TextInput
                    className="w-4/5 h-full rounded-lg bg-gray-300 flex mr-5"
                    placeholder="type here.."
                />
            </View>
            <View className='w-full h-24 border-b border-gray-300'>
                <ScrollView  horizontal className="h-full w-full" showsHorizontalScrollIndicator={false} >
                    {Categories.map((el, index) => (
                        <View key={index} className="h-full w-24 items-center justify-evenly mr-1">
                            <TouchableOpacity className='w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center'>
                                <Image source={{uri:el.image}} className="w-8 h-8 object-contain" />
                            </TouchableOpacity>
                            <Text>{el.name}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}