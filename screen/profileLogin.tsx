import { SafeAreaView, Text, View } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';

export const ProfileLogin = () => {
    return (
        <SafeAreaView>
            <View className="w-full h-10 flex justify-between items-center flex-row border-b border-gray-300">
                <Text className="text-xl pl-4">Profile</Text>
                <View className="h-full w-14 flex-row items-center justify-around">
                    <Ionicons name="person-outline" size={24} />
                </View>
            </View>
        </SafeAreaView>
    )
}