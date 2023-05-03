import Ionicons from 'react-native-vector-icons/Ionicons'
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { useNavigation } from '@react-navigation/native'
const ExplorePageHeader = () => {
const navigation = useNavigation();
    return (
        <View className="w-full h-36 flex flex-column pl-4  pr-4 justify-around border-b-2 border-gray-300">
            <View className="flex flex-row justify-between">
                <Text className="text-xl">Explore</Text>
                <Ionicons name="person-outline" size={26} onPress={() => {navigation.navigate("Profile" as never)}}/>
            </View>
            <View className="h-10 flex bg-gray-300 relative  rounded-md flex-row items-center justify-evenly">
                <Ionicons name="search-outline" size={20}/>
                <TextInput
                    className="w-4/5 h-full rounded-lg bg-gray-300 flex mr-5"
                    placeholder="type here.."
                />
            </View>
            <View className="flex flex-row justify-between">
                <TouchableOpacity className="w-20 h-8 border rounded-3xl flex items-center justify-evenly flex-row border-gray-400">
                    <Text>Төрөл</Text>
                    <Ionicons name="ios-chevron-down" size={14} />
                </TouchableOpacity>
                <TouchableOpacity className="w-24 h-8 bg-slate-900 rounded-3xl flex items-center justify-evenly flex-row mr-16">
                    <Text className="text-white">Төрөл</Text>
                    <Ionicons name="ios-chevron-down" size={14} style={{ color: "white" }} />
                </TouchableOpacity>
                <TouchableOpacity className="w-24 h-8 border rounded-3xl flex items-center justify-evenly flex-row">
                    <Text>Төрөл</Text>
                    <Ionicons name="ios-chevron-down" size={14} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default ExplorePageHeader;