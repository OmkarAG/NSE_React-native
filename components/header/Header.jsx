import { Image, View, Text, TouchableOpacity, Modal, TouchableWithoutFeedback } from "react-native"
import { styles } from "./styles"
import { useState } from "react";
// import { useNavigation } from "@react-navigation/native";

export const Header = ({ navigation, componentName }) => {
    const [showModal, setShowModal] = useState(false);

    // const navigation = useNavigation()

    const handleSettingClick = () => {
        // console.warn("handling")
        setShowModal(!showModal)
    }

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
                    <TouchableOpacity onPress={() => handleSettingClick()}>
                        <Image
                            source={require('../../assets/settings.png')}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Modal
                    animationType={'fade'}
                    transparent={true}
                    visible={showModal}
                >
                    <TouchableWithoutFeedback onPress={() => { setShowModal(false) }}>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Text style={[styles.modalText,{top:20}]} onPress={() => { navigation.navigate('AboutUs') }}>About Us</Text>
                                <Text style={styles.modalText} onPress={() => { navigation.navigate('HelpCenter')}}>Help Center</Text>


                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>
        </View>
    )
}