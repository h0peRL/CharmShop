import { Text, View, TouchableWithoutFeedback, Linking, Image} from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import { AntDesign } from "@expo/vector-icons";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  const handleInstagramClick = () => {
    Linking.openURL("https://www.instagram.com/");
  };

  return (
    <View className="flex-1 bg-gray-700 w-screen h-screen ">
      <View className="flex-1 items-center">
        <Text className="text-3xl text-white mt-20">
          Welcome to Charm Shop!
        </Text>
        <Text className="text-xl text-slate-50 italic ">Made with Love</Text>
        <Text className="text-3xl text-white mt-10">
          Here are our Products!
        </Text>
        
        <View className="bg-gray-800 w-96 h-96 absolute mt-64 rounded-xl ">
          <Image
           source={require('./IMG_5769.jpg')}
           className="h-96 w-96 rounded-xl"
          >

          </Image>
          <View className="bg-gray-900 p-5 mt-auto opacity-80 rounded-xl">
            <Text className="text-white text-lg italic">Lorem ipsum dolor sit amet, </Text>
          </View>
        </View>
        
     <View  className="align-bottom mt-auto mb-20 flex flex-row items-center">
        <TouchableWithoutFeedback onPress={handleInstagramClick} className=" flex ">
          <AntDesign name="instagram" size={70} color="white" />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleInstagramClick} className=" flex ">
           <Text className="text-3xl text-white italic">charmshop</Text>
        </TouchableWithoutFeedback>
      </View>
  </View>
      
</View>
  );
}
