import { useNavigation } from "@react-navigation/native"
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'

export const SignUpSelect = () => {
    const navigation = useNavigation();
    return(
        <SafeAreaView>
            <View className="w-full h-10 border-b border-gray-300 flex-row items-center justify-between pr-4 pl-4">
                <Ionicons name="arrow-back" size={24} onPress={() => { navigation.goBack()}} />
                <Ionicons name="md-close-outline" size={30} onPress={() => { navigation.navigate("Bottom" as never) }} />
            </View>
            <View className="flex items-center justify-center w-full h-5/6">
                <Image source={require("../../assets/ajilla.png")}/>
                <View className="w-full h-2/6 flex justify-evenly items-center">
                    <TouchableOpacity onPress={() => {navigation.navigate('SignUpMember' as never)}} className="w-11/12 h-14 flex items-center justify-center rounded-lg bg-[#00C2FF] shadow shadow-sky-700">
                        <Text className="text-lg text-white font-semibold">Гишүүн ээр бүртгүүлэх</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigation.navigate("SignUpUser" as never)}} className="w-11/12 h-14 flex items-center justify-center rounded-lg bg-[#00C2FF] shadow shadow-sky-700">
                        <Text className="text-lg text-white font-semibold">Хэрэглэгч ээр бүртгүүлэх</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>            
    )
}