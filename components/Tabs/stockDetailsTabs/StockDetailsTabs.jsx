import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { OrderBook } from '../../orderBook/OrderBook';
import { CorporateDis } from '../../corporateDis/CorporateDis';

const Tab = createMaterialTopTabNavigator();

export const StockDetailsTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Trade Information" component={OrderBook} />
            <Tab.Screen name="Corporate DisClosures" component={CorporateDis} />
            <Tab.Screen name="Historical Data" component={CorporateDis} />
        </Tab.Navigator>
    );
}