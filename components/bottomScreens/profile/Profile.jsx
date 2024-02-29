import { View } from "react-native"
import { Text } from "react-native-paper";
import { Header } from "../../header/Header";
import { useNavigation } from "@react-navigation/native";

export const Profile = ()=>{
  const navigation = useNavigation()
    return (
            <View>
              <Header componentName={"Profile"} navigation={navigation}></Header>
            </View>
          );
}