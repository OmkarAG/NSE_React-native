
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Heatmap } from '../components/drawer/heatmap/Heatmap';
import Main from './BottomNav';
import { Indices } from '../components/drawer/indices/Indices';
import { Equities } from '../components/drawer/equities/Equities';
import { Derivatives } from '../components/drawer/derivatives/Derivatives';
import { ReferenceRates } from '../components/drawer/referenceRates/ReferenceRates';
import { MarketTurnOver } from '../components/drawer/marketTurnover/MarketTurnover';
import { MarketData } from '../components/drawer/marketData/MarketData';
import { Image } from 'react-native';
import { CallAuctionForLlliquidSecurities } from '../components/drawer/callAuctionForLlliquidSecurities/CallAuctionForLlliquidSecurities';

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          // backgroundColor: '#c6cbef',
          // width: 200,
        },
        drawerLabelStyle: { color: "black" },
        drawerActiveTintColor: "blue",
        // drawerIcon: ({ color }) => (
        //   <Image
        //     source={require('../../assets/stocks.png')}
        //     style={{ width: 24, height: 24, tintColor: color }}
        //   />
        // ),
      }}
    >
      <Drawer.Screen name="Home" component={Main} options={{ headerShown: false }} />
      <Drawer.Screen name="HeatMap" component={Heatmap} options={{ headerShown: false }} />
      <Drawer.Screen name="Indices" component={Indices} options={{ headerShown: false }} />
      <Drawer.Screen name="Equities" component={Equities} options={{ headerShown: false }} />
      <Drawer.Screen name="Derivatives" component={Derivatives} options={{ headerShown: false }} />
      <Drawer.Screen name="Call Auction For Illiquid Securities" component={CallAuctionForLlliquidSecurities} options={{ headerShown: false }} />
      <Drawer.Screen name="Reference Rates" component={ReferenceRates} />
      <Drawer.Screen name="MarketTurnOver" component={MarketTurnOver} />
      <Drawer.Screen name="Market Data" component={MarketData} />
    </Drawer.Navigator>
  );
}