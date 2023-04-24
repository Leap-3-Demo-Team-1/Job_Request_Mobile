import React from "react";
import ExplorePageHeader from "../component/ExplorePageHeader";
import { SafeAreaView, ScrollView,View } from "react-native"

const ExplorePage = () => {

    return (
        <SafeAreaView className="w-full h-full">
            <ScrollView>
                <View className="w-full h-full flex">
                    <ExplorePageHeader/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default ExplorePage;