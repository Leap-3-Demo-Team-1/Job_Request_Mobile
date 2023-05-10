import React from 'react';
import {Tab, Text, TabView} from '@rneui/themed';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';

export const TabScreens = () => {
  const [index, setIndex] = React.useState(0);

  return (
    <SafeAreaView style={{width: '100%', height: '100%'}}>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        disableIndicator
        variant="primary">
        <Tab.Item
          title="Recent"
          titleStyle={{fontSize: 12}}
          icon={{name: 'timer', type: 'ionicon', color: 'white'}}
        />
      </Tab>

      <TabView value={index} animationType="timing" disableSwipe>
        <TabView.Item style={{backgroundColor: 'red', width: '100%'}}>
          <Text h1>Recent</Text>
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'blue', width: '100%'}}>
          <Text h1>Favorite</Text>
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'green', width: '100%'}}>
          <Text h1>Cart</Text>
        </TabView.Item>
      </TabView>
      <View>
        <TouchableOpacity onPress={() => setIndex(index + 1)}>
          <Text>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIndex(index - 1)}>
          <Text>pre</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
