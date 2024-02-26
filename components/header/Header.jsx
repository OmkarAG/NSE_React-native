import { Image, View, Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"

export const Header = ({ navigation, componentName }) => {

    return (
        <View>
            <View style={styles.contaianer}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={navigation.openDrawer}>
                        <Image
                            source={require('../../assets/menu.png')}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                    <Text style={styles.homeText}>{componentName}</Text>
                    <Image
                        source={require('../../assets/settings.png')}
                        style={styles.image}
                    />
                </View>
            </View>
        </View>
    )
}