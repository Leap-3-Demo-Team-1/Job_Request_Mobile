import { useNavigation } from "@react-navigation/native"
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'

export const ResetPassword = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View className="w-full h-10 border-b border-gray-300 flex-row items-center pl-4">
                <Ionicons name="arrow-back" size={24} onPress={() => { navigation.goBack() }} />
            </View>
            <View className="w-full h-32 flex items-center mt-14">
                <Image source={require("../../assets/ajilla.png")} />
            </View>
            <View className="w-full h-36 ml-4 justify-between">
                <Text className="text-base">Имэйл</Text>
                <TextInput
                    className="w-11/12 h-11 rounded border border-gray-300 pl-3"
                    placeholder="Имэйл хаяг эсвэл утасны дугаараа оруулна уу?"
                />
                <TouchableOpacity onPress={() => {navigation.navigate('Otp' as never)}} className="w-11/12 h-11 rounded bg-[#00C2FF] shadow shadow-sky-700 flex items-center justify-center">
                    <Text className="text-white text-lg font-bold">Илгээх</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}