import { Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "../bottomScreens/Home/styles";
import { Image } from "react-native";


export const Losers = () => {

    const stocks = useSelector(state => state.stocks);

    return (
        <View>
            <ScrollView>
                <View style={styles.shadowContainer}>
                    {stocks.map((stock, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.stockContainer}
                            onPress={() => handleStockPress(stock)}>
                            <Image source={{ uri: stock.icon }} style={styles.stockIcon} />
                            <View style={styles.stockDetails}>
                                <Text style={{ fontWeight: 'bold', color:'red' }}>{`${stock.symbol}`}</Text>
                                <Text style={{ color: '#B0B0B0' }}>{stock.name}</Text>
                            </View>
                            <View>
                            <Text style={{color:'red', fontWeight:'bold'}}>{`${stock.price}`}</Text>
                                <Text style={{color:'red'}}>{`${stock.change}`}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
                {/* <Text>Hello</Text> */}
            </ScrollView>
        </View>
    );
}