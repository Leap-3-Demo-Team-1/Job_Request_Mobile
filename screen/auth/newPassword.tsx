import { useNavigation } from "@react-navigation/native";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'

export const NewPassword = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView className="items-center">
            <View className="w-full h-10 border-b border-gray-300 flex-row items-center pl-4">
                <Ionicons name="arrow-back" size={24} onPress={() => { navigation.goBack() }} />
            </View>
            <View className="w-full h-32 flex items-center mt-14">
                <Image source={require("../../assets/ajilla.png")} />
            </View>
            <View className="w-full h-40 ml-8 justify-between">
                <Text className="text-base">Шинэ нууц үг</Text>
                <TextInput
                    className="w-11/12 h-11 rounded border border-gray-300 pl-3"
                    placeholder="Шинэ нууц үгээ оруулна уу?"
                />
                <Text className="text-base">Нууц үг</Text>
                <TextInput
                    className="w-11/12 h-11 rounded border border-gray-300 pl-3"
                    placeholder="Нууц үгээ давтаж оруулна уу?"
                />
            </View>
            <TouchableOpacity onPress={() => {navigation.navigate('Bottom' as never)}} className="w-11/12 h-11 rounded bg-[#00C2FF] shadow shadow-sky-700 flex items-center justify-center mt-6">
                <Text className="text-white text-lg font-bold">Илгээх</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}