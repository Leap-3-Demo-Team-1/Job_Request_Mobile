import { useNavigation } from "@react-navigation/native"
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'

const Login = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View className="w-full h-12 border-b border-gray-300 flex-row items-center justify-end pr-4">
                <Text className="text-xl pr-28">Нэвтрэх</Text>
                <Ionicons name="md-close-outline" size={32} onPress={() => { navigation.goBack() }} />
            </View>
            <View className="w-full h-32 flex items-center bg-gray-700">
                <Image source={require("../assets/logo.png")} className="h-full w-52" />
            </View>
            <View className="w-full h-2/6 flex justify-around">
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
                <TouchableOpacity className="w-11.5/12 h-11 ml-5 mr-5 rounded bg-gray-400 flex items-center justify-center">
                    <Text className="text-white text-base font-medium">Нэвтрэх</Text>
                </TouchableOpacity>
                <View className="flex-row w-full justify-around">
                    <TouchableOpacity>
                        <Text>Нууц үгээ сэргээх</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Бүртгүүлэх</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View className="h-[330px] w-full justify-around pt-20">
                <TouchableOpacity className="w-11.5/12 h-11 ml-5 mr-5 rounded bg-blue-600 flex-row items-center justify-center">
                    <Ionicons name="logo-facebook" size={22} style={{color:"white"}}/>
                    <Text className="text-white text-xl font-medium ml-2">Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-11.5/12 h-11 ml-5 mr-5 rounded bg-blue-700 flex-row items-center justify-center">
                    <Ionicons name="logo-google" size={22} style={{color:"white"}}/>
                    <Text className="text-white text-xl font-medium ml-2">Google</Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-11.5/12 h-11 ml-5 mr-5 rounded bg-black flex-row items-center justify-center">
                    <Ionicons name="logo-apple" size={22} style={{color:"white"}}/>
                    <Text className="text-white text-xl font-medium ml-2">Apple</Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-11.5/12 h-11 ml-5 mr-5 rounded bg-black flex-row items-center justify-center">
                    <Ionicons name="logo-instagram" size={22} style={{color:"#fc8181"}}/>
                    <Text className="text-red-300 text-xl font-medium ml-2">Instagram</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default Login;