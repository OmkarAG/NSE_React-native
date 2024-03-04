import { View } from "react-native"
import { Header } from "../../header/Header";
import { useNavigation } from "@react-navigation/native";

export const Equities = () => {

  const navigation = useNavigation()

  return (
    <View>
      <Header componentName="Equities" navigation={navigation} />
    </View>
  );
}