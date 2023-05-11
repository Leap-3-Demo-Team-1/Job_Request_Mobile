import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const CommunityPage = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState(0);

  const tabs = [
    {name:'news'},
    {name:'category'}
  ]
  return (
    <SafeAreaView>
      <View className='w-full h-full'>
        <View className="w-full h-14 flex justify-between items-center flex-row border-b border-gray-300">
          <Text className="text-xl pl-4">Community</Text>
          <View className="h-full w-14 flex-row items-center justify-around">
            <Ionicons name="person-outline" size={26} />
          </View>
        </View>
        <FlatList
            contentContainerStyle={{
              display: 'flex',
              flexDirection: 'row',
            }}
            data={tabs}
            renderItem={({item, index}) => {
              const isActive = value === index;
              return (
                <TouchableOpacity
                  style={[
                    {borderBottomWidth: 2, borderColor: '#d1d5db', padding:10},
                    isActive && {borderColor: '#000'},
                  ]}
                  key={index}
                  onPress={() => setValue(index)}
                  // className="flex flex-1 justify-center items-center"
                >
                  <View style={[{}]}>
                    <Text style={isActive && {color: '#000'}}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        
      </View>
    </SafeAreaView>
  );
};