import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { ScrollView, Text, View } from "react-native"

export const OptionChain = () => {

    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            headerTintColor: '#daa520',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        });
    }, [navigation]);

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#3A2D7D', padding: 10 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>CALL PRICE</Text>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>STRIKE</Text>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>PUT PRICE</Text>
            </View>
            <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderBottomColor: "#E3E3E3", borderBottomWidth: 1, alignItems:'center' }}>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                    <Text>7687</Text>
                    <View>
                        <Text>55</Text>
                        <Text>(4%)</Text>
                    </View>
                </View>
                
            </ScrollView>
        </View>
    )
}