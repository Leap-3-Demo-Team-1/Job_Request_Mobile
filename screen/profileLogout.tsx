import { Button, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native"

const ProfileLogout = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View className="h-full w-full">
                <View className="w-full h-14 flex justify-between items-center flex-row border-b border-gray-300">
                    <Text className="text-xl pl-4">Profile</Text>
                    <View className="h-full w-14 flex-row items-center justify-around">
                        <Ionicons name="person-outline" size={26} />
                    </View>
                </View>
                <View className="w-full h-2/3 flex items-center justify-center mt-10">
                    <View className="w-80 h-3/5 flex-column items-center justify-around">
                        <View className="flex items-center justify-between h-2/3 w-full">
                            <View className="w-24 h-24 bg-indigo-950 rounded-full flex items-center justify-center">
                                <Ionicons name="person-outline" size={50} style={{ color: "white" }} />
                            </View>
                            <Text className="text-base text-center w-52">Нэвтэрсний дараа үүнийг ашиглана уу?</Text>
                            <Text className="text-gray-500">Нэвтрэх шаардлагатай</Text>
                        </View>
                        <TouchableOpacity onPress={() => {navigation.navigate("Login" as never)}} className="w-48 h-12 bg-indigo-950 flex items-center justify-center rounded">
                            <Text className="text-white text-base font-medium">Нэвтрэх/Бүртгүүлэх</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default ProfileLogout;