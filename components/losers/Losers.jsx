import { Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "../bottomScreens/Home/styles";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";


export const Losers = () => {

    const navigation = useNavigation()

    const stocks = useSelector(state => state.stocks);

    const handleStockPress = stock => {
        navigation.navigate('StockDetails', { stock }, navigation);
    };

    return (
        <View>
            <ScrollView>
                <View style={[styles.shadowContainer, {padding:10}]}>
                    {stocks.map((stock, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.stockContainer}
                            onPress={() => handleStockPress(stock)}>
                            <Image source={{ uri: stock.icon }} style={styles.stockIcon} />
                            <View style={styles.stockDetails}>
                                <Text style={{ fontWeight: 'bold', color: 'red' }}>{`${stock.symbol}`}</Text>
                                <Text style={{ color: '#B0B0B0' }}>{stock.name}</Text>
                            </View>
                            <View>
                                <Text style={{ color: 'red', fontWeight: 'bold' }}>{`${stock.price}`}</Text>
                                <Text style={{ color: 'red' }}>{`${stock.change}`}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
                {/* <Text>Hello</Text> */}
            </ScrollView>
        </View>
    );
}