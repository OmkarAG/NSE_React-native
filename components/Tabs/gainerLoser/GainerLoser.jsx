import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { OrderBook } from '../../orderBook/OrderBook';
import { CorporateDis } from '../../corporateDis/CorporateDis';
import { Gainers } from '../../gainers/Gainers';
import { Losers } from '../../losers/Losers';

const Tab = createMaterialTopTabNavigator();

export const GainerLosers = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Gainers" component={Gainers} />
            <Tab.Screen name="Losers" component={Losers} />
        </Tab.Navigator>
    );
}