import { SafeAreaView, KeyboardAvoidingView, View, TouchableOpacity, Text, StyleSheet, Image } from "react-native"
import OTPInputView from "@twotalltotems/react-native-otp-input";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native";

export const Otp = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View className="w-full h-full items-center">
                <View className="w-full h-10 border-b border-gray-300 flex-row items-center pl-4">
                    <Ionicons name="arrow-back" size={24} onPress={() => { navigation.goBack() }} />
                </View>
                <View className="w-full h-32 flex items-center mt-14">
                    <Image source={require("../../assets/ajilla.png")} />
                </View>
                <View className=" w-full items-center justify-between">
                    <Text className="text-xl font-medium w-72 text-center">Баталгаажуулах код оо оруулна уу?</Text>
                    <Text className="text text-gray-400 text-center w-72 mt-5">Бид таний утас руу Баталгаажуулах код илгээсэн.</Text>
                </View>
                <OTPInputView
                    style={{ width: '75%', height: 100 }}
                    pinCount={4}
                    autoFocusOnLoad
                    codeInputFieldStyle={styles.underlineStyleBase}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    keyboardType={"phone-pad"}
                    onCodeFilled={(code => {
                        console.log(`Code is ${code}, you are good to go!`)
                    })}

                placeholderCharacter={'0'}
                placeholderTextColor={'white'}
                selectionColor={"white"}
                />
                <TouchableOpacity className="w-64 h-10 items-end">
                    <Text className="">Дахин код авах</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('newPassword' as never)}} className="w-10/12 h-11 ml-5 mr-5 rounded bg-[#00C2FF] shadow shadow-sky-700 flex items-center justify-center">
                    <Text className="text-white text-lg font-bold">Илгээх</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    underlineStyleBase: {
        width: 60,
        height: 60,
        // borderWidth:2,
        // borderColor:"#1e1b4b",
        borderRadius: 50,
        backgroundColor: "#00C2FF",
        color: "white",
    },

    underlineStyleHighLighted: {
        borderColor: "blue",
    },
});