import CheckBox from '@react-native-community/checkbox';
import {useState} from 'react';
import {
  Alert,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Slider, Tab, TabView} from '@rneui/themed';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../App';
import Ionicons from 'react-native-vector-icons/Ionicons';

type NavigationProp = StackScreenProps<RootStackParamList, 'CategoryDetails'>;
const CategoryDetails = ({route, navigation}: NavigationProp) => {
  const [stage, setStage] = useState([
    {title: 'Анхан шат', id: 0, selected: false},
    {title: 'Дунд шат', id: 1, selected: false},
    {title: 'Гүнзгий шат', id: 2, selected: false},
    {title: 'Бусад', id: 3, selected: false},
  ]);
  const [time, setTime] = useState([
    {title: 'Өглөө (9-12 цаг)', id: 0, selected: false},
    {title: 'Үдээс хойш (12-15 цаг)', id: 1, selected: false},
    {title: 'Орой (18-21 цаг)', id: 2, selected: false},
    {title: 'Бусад цагаар', id: 3, selected: false},
  ]);
  const [location, setLocation] = useState([
    {title: 'Өөрийн байранд', id: 0, selected: false},
    {title: 'Онлайнаар', id: 1, selected: false},
    {title: 'Очиж заана', id: 2, selected: false},
    {title: 'Бусад', id: 3, selected: false},
  ]);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

  const backHandler = () => {
    if (index > 0) {
      setIndex(index - 1);
      setSliderValue(sliderValue - 1);
    } else {
      navigation.goBack();
    }
  };
  const goBackStack = () => {
    setVisible(!visible);
    navigation.goBack();
  };
  const nextButtonHandler = () => {
    if (index >= 2) {
      navigation.navigate('Login');
    } else {
      setIndex(index + 1);
      setSliderValue(sliderValue + 1);
    }
  };
  return (
    <View className=" w-full h-full flex bg-white">
      <SafeAreaView />
      <View className=" w-11/12 m-auto h-10 justify-between items-center flex-row">
        <TouchableOpacity onPress={() => backHandler()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text>{route.params.title}</Text>
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setVisible(!visible);
        }}>
        <View className=" justify-center items-center flex flex-1 bg-stone-200">
          <View className=" bg-white w-10/12 h-1/4 items-center flex">
            <View className=" flex-1 justify-center items-center">
              <Text className=" font-semibold text-lg">
                Та үйлдэл ээ цуцлах гэж байна!
              </Text>
            </View>
            <Pressable
              className="w-11/12 py-4 justify-center items-center rounded-lg bg-[#00C2FF]"
              onPress={() => setVisible(!visible)}>
              <Text className=" color-[#ffff] text-sm">Үгүй</Text>
            </Pressable>
            <Pressable
              className=" w-11/12 py-4 justify-center items-center"
              onPress={() => goBackStack()}>
              <Text className=" color-[#999]">Тийм</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Tab
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        disableIndicator>
        <View className="w-9/12 justify-center pl-5">
          <Slider
            value={sliderValue}
            onValueChange={setSliderValue}
            maximumValue={3}
            minimumValue={0}
            minimumTrackTintColor="#00C2FF"
            maximumTrackTintColor="transparent"
            animationType="timing"
            trackStyle={{
              height: 7,
              borderRadius: 4,
              backgroundColor: 'transparent',
            }}
            thumbStyle={{width:15, height:10, backgroundColor: 'transparent'}}
          />
        </View>
        <Tab.Item
          title={`${
            index === 0
              ? '0%'
              : index === 1
              ? '30%'
              : index === 2
              ? '60%'
              : '100%'
          }`}
          titleStyle={{fontSize: 14, color: '#00C2FF'}}
        />
      </Tab>
      <TabView value={index} animationType="timing" disableSwipe>
        <TabView.Item className="flex flex-1 w-full m-auto ">
          <ScrollView className=" flex flex-1 w-11/12 m-auto ">
            <View className=" w-full h-20 justify-center items-center mt-1">
              <Text className=" text-ml font-semibold">
                Хичээл заах сонголтоо сонгоно уу
              </Text>
            </View>
            <View className="w-full h-full">
              {stage.map((el, index) => (
                <View
                  key={index}
                  className={`flex flex-row w-full h-14 border-x border-b border-neutral-400 p-2 items-center ${
                    index === 0 ? 'border-t' : ''
                  }`}>
                  <CheckBox
                    disabled={false}
                    boxType="square"
                    tintColor="#3333"
                    onCheckColor="#FFF"
                    onFillColor="#00C2FF"
                    onTintColor="#fff"
                    onAnimationType="bounce"
                    offAnimationType="bounce"
                    value={el.selected}
                    // onChange={(el)=>{ console.log("onchange-", el)}}
                    onValueChange={() =>
                      setStage(
                        stage.map(value =>
                          value.id === el.id
                            ? {...value, selected: !value.selected}
                            : {
                                ...value,
                                selected: false,
                              },
                        ),
                      )
                    }
                    className=""
                  />
                  <Text className="ml-4">{el.title}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </TabView.Item>
        <TabView.Item className="flex flex-1 w-11/12 m-auto h-full">
          <ScrollView className=" flex flex-1 w-11/12 m-auto ">
            <View className=" w-full h-20 justify-center items-center mt-1">
              <Text className=" text-ml font-semibold">
                Хичээл заах цагаа сонгоно уу
              </Text>
            </View>
            <View className="w-full h-full">
              {time.map((el, index) => (
                <View
                  key={index}
                  className={`flex flex-row w-full h-14 border-x border-b border-neutral-400 p-2 items-center ${
                    index === 0 ? 'border-t' : ''
                  }`}>
                  <CheckBox
                    disabled={false}
                    boxType="square"
                    tintColor="#3333"
                    onCheckColor="#FFF"
                    onFillColor="#00C2FF"
                    onTintColor="#fff"
                    onAnimationType="bounce"
                    offAnimationType="bounce"
                    value={el.selected}
                    // onChange={(el)=>{ console.log("onchange-", el)}}
                    onValueChange={() =>
                      setTime(
                        time.map(value =>
                          value.id === el.id
                            ? {...value, selected: !value.selected}
                            : {
                                ...value,
                                selected: false,
                              },
                        ),
                      )
                    }
                    className=""
                  />
                  <Text className="ml-4">{el.title}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </TabView.Item>
        <TabView.Item className="flex flex-1 w-11/12 m-auto h-full">
          <ScrollView className=" flex flex-1 w-11/12 m-auto ">
            <View className=" w-full h-20 justify-center items-center mt-1">
              <Text className=" text-ml font-semibold">
                Хичээл заах байршилаа сонгоно уу
              </Text>
            </View>
            <View className="w-full h-full">
              {location.map((el, index) => (
                <View
                  key={index}
                  className={`flex flex-row w-full h-14 border-x border-b border-neutral-400 p-2 items-center ${
                    index === 0 ? 'border-t' : ''
                  }`}>
                  <CheckBox
                    disabled={false}
                    boxType="square"
                    tintColor="#3333"
                    onCheckColor="#FFF"
                    onFillColor="#00C2FF"
                    onTintColor="#fff"
                    onAnimationType="bounce"
                    offAnimationType="bounce"
                    value={el.selected}
                    // onChange={(el)=>{ console.log("onchange-", el)}}
                    onValueChange={() =>
                      setLocation(
                        location.map(value =>
                          value.id === el.id
                            ? {...value, selected: !value.selected}
                            : {
                                ...value,
                                selected: false,
                              },
                        ),
                      )
                    }
                    className=""
                  />
                  <Text className="ml-4">{el.title}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </TabView.Item>
      </TabView>
      <TouchableOpacity
        disabled={
          (index === 0 && !stage.some(el => el.selected)) ||
          (index === 1 && !time.some(el => el.selected)) ||
          (index === 2 && !location.some(el => el.selected))
        }
        className={`h-20 w-full  items-center 
          ${
            (index === 0 && !stage.some(el => el.selected)) ||
            (index === 1 && !time.some(el => el.selected)) ||
            (index === 2 && !location.some(el => el.selected))
              ? 'bg-[#999]'
              : 'bg-[#00C2FF]'
          }
        `}
        onPress={() => nextButtonHandler()}>
        <Text className=" color-[#ffff] text-lg mt-2 font-semibold">
          Үргэлжлүүлэх
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default CategoryDetails;
