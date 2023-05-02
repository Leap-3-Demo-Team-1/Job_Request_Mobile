import { Image, Text, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'

const AdvertisingCard = () => {
    return (
        <TouchableOpacity className="w-full h-32 border-b-2 border-gray-400 flex flex-row pr-2">
            <View className="w-4/5 h-full pl-4 pr-3 flex justify-evenly">
                <Text className="text-lg" numberOfLines={1}>Таний сурталчилгааны орон зай</Text>
                <Text className="text-base text-gray-500" numberOfLines={1}>Дэлгэрэнгүй мэдээлэл авахыг хүсвэл энд дарна уу?</Text>
                <View className="flex flex-row items-center">
                    <Ionicons name="star" size={14} style={{ color: "#FFD700" }} />
                    <Text className="text-sm">4.9(2,123)</Text>
                    <View className="h-5 w-[88px] bg-gray-300 flex items-center justify-center rounded-sm ml-1">
                        <Text className="text-gray-600">1,669 Үзэлт</Text>
                    </View>
                    <View className="h-5 w-20 bg-teal-200 flex items-center justify-evenly rounded-sm flex-row ml-1.5">
                        <Image source={require("../assets/logo.png")} className="h-2.5 w-2.5" />
                        <Text className="text-teal-700">Шийдэе</Text>
                    </View>
                </View>
                <Text className="text-sm text-gray-500" numberOfLines={1}>Yu gedgiig n sain medehgui ym bn</Text>
            </View>
            <View className="w-1/5 h-full flex mt-3">
                <Image source={require("../assets/logo.png")} className="h-3/5 w-full rounded-xl" />
            </View>

        </TouchableOpacity>
    )
}
export default AdvertisingCard;