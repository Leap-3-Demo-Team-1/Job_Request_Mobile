import React from "react";
import ExplorePageHeader from "../component/ExplorePageHeader";
import { SafeAreaView, ScrollView,View } from "react-native"
import AdvertisingCard from "../component/AdvertisingCard";

export const ExplorePage = () => {

    return (
        <SafeAreaView className="w-full h-full">
                <View className="w-full h-40 flex">
                    <ExplorePageHeader/>
                </View>
                <ScrollView>
                    <AdvertisingCard/>
                    <AdvertisingCard/>
                    <AdvertisingCard/>
                    <AdvertisingCard/>
                    <AdvertisingCard/>
                    <AdvertisingCard/>
                </ScrollView>
        </SafeAreaView>
    )
}