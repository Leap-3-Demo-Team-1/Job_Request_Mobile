import { useNavigation } from "@react-navigation/native"
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'

export const Login = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View className="w-full h-12 border-b border-gray-300 flex-row items-center justify-end pr-4">
                <Text className="text-xl pr-28">Нэвтрэх</Text>
                <Ionicons name="md-close-outline" size={32} onPress={() => { navigation.goBack() }} />
            </View>
            <View className="w-full h-32 flex items-center justify-end">
                <Image source={require("../../assets/ajilla.png")} />
            </View>
            <View className="w-full h-3/6 flex justify-around mt-10">
                <View className="w-full h-20 pl-5 justify-around">
                    <Text className="text-base">Имэйл</Text>
                    <TextInput
                        className="w-11.5/12 h-11 rounded border border-gray-300 pl-3 flex mr-5"
                        placeholder="Имэйл ээ оруулна уу?"
                    />
                </View>
                <View className="w-full h-20 pl-5 justify-around">
                    <Text className="text-base">Нууц үг</Text>
                    <TextInput
                        className="w-11.5/12 h-11 rounded border border-gray-300 pl-3 flex mr-5"
                        placeholder="Нууц үгээ хийнэ үү?"
                    />
                </View>
                <TouchableOpacity className="w-11.5/12 h-11 ml-5 mr-5 rounded bg-[#00C2FF] shadow shadow-sky-700 flex items-center justify-center">
                    <Text className="text-white text-lg  font-bold">Нэвтрэх</Text>
                </TouchableOpacity>
                <View className="flex-row w-full justify-around">
                    <TouchableOpacity onPress={() => {navigation.navigate("ResetPassword" as never)}}>
                        <Text>Нууц үгээ сэргээх</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigation.navigate("SignUpSelect" as never)}}>
                        <Text>Бүртгүүлэх</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}