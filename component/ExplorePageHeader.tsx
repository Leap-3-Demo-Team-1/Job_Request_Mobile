import Ionicons from 'react-native-vector-icons/Ionicons'
import {Text, TextInput, TouchableOpacity, View } from "react-native"

const ExplorePageHeader = () => {
    return(
        <View className="w-full h-36 flex flex-column pl-4  pr-4 justify-around">
                        <View className="flex flex-row justify-between">
                            <Text className="text-xl">Explore</Text>
                            <Ionicons name="ios-nutrition-sharp" size={26} />
                        </View>
                        <View className="h-10 flex bg-gray-300 flex-grow-1 relative  rounded-md flex-row items-center justify-center relative">
                            <Ionicons style={{flexGrow: 0.2, backgroundColor: 'red'}} name="search-outline" size={20}/>
                            <TextInput
                            style={{
                                flexGrow: 0.8,
                                backgroundColor:'red'
                            }}
                                // className="w-full h-full rounded-lg bg-gray-300 flex"
                                placeholder="type here.."
                            />
                        </View>
                        <View className="flex flex-row justify-between">
                            <TouchableOpacity className="w-20 h-8 border rounded-3xl flex items-center justify-evenly flex-row border-gray-400">
                                <Text>Төрөл</Text>
                                <Ionicons name="chevron-forward" size={14} />
                            </TouchableOpacity>
                            <TouchableOpacity className="w-24 h-8 bg-slate-900 rounded-3xl flex items-center justify-evenly flex-row mr-16">
                                <Text className="text-white">Төрөл</Text>
                                <Ionicons name="chevron-forward" size={14} style={{ color: "white" }} />
                            </TouchableOpacity>
                            <TouchableOpacity className="w-24 h-8 border rounded-3xl flex items-center justify-evenly flex-row">
                                <Text>Төрөл</Text>
                                <Ionicons name="chevron-forward" size={14} />
                            </TouchableOpacity>
                        </View>
                    </View>
    )
}
export default ExplorePageHeader;