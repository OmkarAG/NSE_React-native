import { Image, View, Text } from "react-native"
import { styles } from "./styles"

export const Header = (props) => {
    return (
        <View>
            <View style={styles.contaianer}>
                <View style={styles.header}>
                    <Image
                        source={require('../../assets/menu.png')}
                        style={styles.image}
                    />
                    <Text style={styles.homeText}>{props.componentName}</Text>
                    <Image
                        source={require('../../assets/settings.png')}
                        style={styles.image}
                    />
                </View>
            </View>
        </View>
    )
}