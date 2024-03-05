import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View } from "react-native"
import { Gainers } from "../../gainers/Gainers";
import { Losers } from "../../losers/Losers";
import { CorporateDis } from "../../corporateDis/CorporateDis";

const Tab = createMaterialTopTabNavigator();

export const DerivativesTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Equity Derivatives" component={Gainers} />
            <Tab.Screen name="Currency Derivatives" component={Losers} />
            <Tab.Screen name="Commodity Derivatives" component={CorporateDis} />
            <Tab.Screen name="Interest Rate Derivatives" component={CorporateDis} />
        </Tab.Navigator>
    )
}