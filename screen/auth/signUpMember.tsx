import { useNavigation } from "@react-navigation/native"
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'

const SignUpMember = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View className="w-full h-12 border-b border-gray-300 flex-row items-center pl-4">
                <Ionicons name="arrow-back" size={26} onPress={() => { navigation.goBack() }} />
            </View>
            <View className="w-full h-full">
                <View className="w-full h-1 flex items-center mt-14">
                    <Image source={require("../../assets/ajilla.png")} />
                </View>
                <View className="w-full h-96 items-center justify-evenly mt-28">
                    <TextInput
                        className="w-10/12 h-11 rounded border border-indigo-950 pl-3"
                        placeholder="Овог"
                    />
                    <TextInput
                        className="w-10/12 h-11 rounded border border-indigo-950 pl-3"
                        placeholder="Нэр"
                    />
                    <TextInput
                        className="w-10/12 h-11 rounded border border-indigo-950 pl-3"
                        placeholder="Имэйл хаяг/утасны дугаар"
                    />
                    <TextInput
                        className="w-10/12 h-11 rounded border border-indigo-950 pl-3"
                        placeholder="Регистрийн дугаар"
                    />
                    <TextInput
                        className="w-10/12 h-11 rounded border border-indigo-950 pl-3"
                        placeholder="Нууц үг"
                    />
                    <TouchableOpacity className="w-10/12 h-11 ml-5 mr-5 rounded bg-indigo-950 shadow shadow-sky-700 flex items-center justify-center">
                        <Text className="text-white text-lg text-sky-200 font-bold">Бүртгүүлэх</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default SignUpMember;