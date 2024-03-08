import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useSelector } from "react-redux"
import { styles } from "./styles"

export const EquityDerivatives = () => {

    const equityDerivatives = useSelector(state => state.derivatives)
    console.log(equityDerivatives)

    return (
        <View>


            <View style={styles.table}>
                <ScrollView horizontal contentContainerStyle={{ marginBottom: 215 }}>
                    <View>
                        <View style={[styles.tableRow, { backgroundColor: '#3A2D7D', }]}>
                            <Text style={styles.columnHeader}>INSTRUMENT TYPE</Text>
                            <Text style={styles.columnHeader}>SYMBOL (₹)</Text>
                            <Text style={styles.columnHeader}>EXPIRY DATE (₹)</Text>
                            <Text style={styles.columnHeader}>OPTION TYPE</Text>
                            <Text style={styles.columnHeader}>STRIKE</Text>
                            <Text style={styles.columnHeader}>LTP</Text>
                            <Text style={styles.columnHeader}>CHNG</Text>
                            <Text style={styles.columnHeader}>% CHNG</Text>
                            <Text style={styles.columnHeader}>OPEN</Text>
                            <Text style={styles.columnHeader}>HIGH</Text>
                            <Text style={styles.columnHeader}>LOW</Text>
                            <Text style={styles.columnHeader}>VOLUME</Text>
                            <Text style={styles.columnHeader}>VALUE</Text>
                            <Text style={styles.columnHeader}>OI</Text>
                            <Text style={styles.columnHeader}>UV</Text>

                        </View>
                        <ScrollView>
                            {
                                equityDerivatives.map((derivative, i) => (

                                    <TouchableOpacity key={i}>
                                        {/* <Text>{derivative.instrument}</Text> */}
                                        <View style={styles.tableRow}>
                                            <Text style={styles.cell}>{derivative.instrument}</Text>
                                            <Text style={styles.cell}>{derivative.instrumentType}</Text>
                                            <Text style={styles.cell}>{derivative.expiryDate}</Text>
                                            <Text style={styles.cell}>{derivative.optionType}</Text>
                                            <Text style={styles.cell}>{derivative.strikePrice}</Text>
                                            <Text style={styles.cell}>{derivative.lastPrice}</Text>
                                            <Text style={styles.cell}>{derivative.change}</Text>
                                            <Text style={styles.cell}>{derivative.pChange}</Text>
                                            <Text style={styles.cell}>{derivative.openPrice}</Text>
                                            <Text style={styles.cell}>{derivative.highPrice}</Text>
                                            <Text style={styles.cell}>{derivative.lowPrice}</Text>
                                            <Text style={styles.cell}>{derivative.premiumTurnOver}</Text>
                                            <Text style={styles.cell}>{derivative.underlyingValue}</Text>
                                            <Text style={styles.cell}>{derivative.openInterest}</Text>
                                            <Text style={styles.cell}>{derivative.underlyingValue}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))
                            }
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}