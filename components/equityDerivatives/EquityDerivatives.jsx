import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useSelector } from "react-redux"

export const EquityDerivatives = () => {

    const equityDerivatives = useSelector(state => state.derivatives)
    // console.warn(equityDerivatives)

    return (
        <View>
            <ScrollView>
                {
                    equityDerivatives.map((derivative, i) => (

                        <TouchableOpacity key={i}>
                            <Text>{derivative.instrumentType}</Text>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>
    )
}