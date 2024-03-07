import { Image, View, Text, TouchableOpacity, Modal, TouchableWithoutFeedback, Switch } from "react-native"
import { styles } from "./styles"
import { useEffect, useState } from "react";
// import { useNavigation } from "@react-navigation/native";
import io from 'socket.io-client';

export const Header = ({ navigation, componentName }) => {
    const [showModal, setShowModal] = useState(false);
    const [isEnabled, setIsEnabled] = useState(true);

    // const navigation = useNavigation()

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const handleSettingClick = () => {
        // console.warn("handling")
        setShowModal(!showModal)
    }

    useEffect(() => {
        console.warn("data clear")

        const socket = io.connect('http://192.168.29.5:3000');

        // Emit an event to the server
        socket.emit('clearData', {both:"ok"});

        // Cleanup: disconnect from the socket when the component unmounts or when the dependencies change
        return () => {
            console.warn("Disconnecting from socket...");
            socket.disconnect();
        };
    }, [isEnabled])

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={navigation.openDrawer}>
                        <Image
                            source={require('../../assets/menu.png')}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                    {/* {
                        componentName == 'Home' ?
                            <Image source={require('../../assets/NSE_logo2022.png')} style={styles.logo}></Image>
                            : */}
                    <Text style={styles.homeText}>{componentName}</Text>
                    {/* } */}
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