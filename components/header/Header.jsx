import { Image, View, Text, TouchableOpacity, Modal, TouchableWithoutFeedback, Switch } from "react-native"
import { styles } from "./styles"
import { useState } from "react";
// import { useNavigation } from "@react-navigation/native";

export const Header = ({ navigation, componentName }) => {
    const [showModal, setShowModal] = useState(false);
    const [isEnabled, setIsEnabled] = useState(true);

    // const navigation = useNavigation()

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
                            <Text style={[styles.stream, { top: 20 }]} onPress={() => { navigation.navigate('AboutUs') }}>Stream</Text>
                                <Switch
                                    style={styles.switch}
                                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                                <Text style={[styles.customizeHome, { top: 20 }]} onPress={() => { navigation.navigate('AboutUs') }}>Customize Home</Text>
                                <Text style={[styles.modalText, { top: 20 }]} onPress={() => { navigation.navigate('AboutUs') }}>About Us</Text>
                                <Text style={styles.modalText} onPress={() => { navigation.navigate('HelpCenter') }}>Help Center</Text>

                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>
        </View>
    )
}