import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { OrderBook } from "../../orderBook/OrderBook";
import { CorporateDis } from "../../corporateDis/CorporateDis";
import { Gainers } from "../../gainers/Gainers";
import { Losers } from "../../losers/Losers";
import { ScrollView } from "react-native";

const Tab = createMaterialTopTabNavigator();

export const EquitiesTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Gainers" component={Gainers} />
            <Tab.Screen name="Losers" component={Losers} />
            <Tab.Screen name="Top TurnOver" component={CorporateDis} />
            <Tab.Screen name="52 W High" component={CorporateDis} />
            <Tab.Screen name="52 W Low" component={CorporateDis} />
        </Tab.Navigator>
    )
}