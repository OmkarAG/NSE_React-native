
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Heatmap } from './heatmap/Heatmap';
import Main from '../bottomScreens/CombineHome';
import { Indices } from './indices/Indices';
import { Equities } from './equities/Equities';
import { Derivatives } from './derivatives/Derivatives';
import { ReferenceRates } from './referenceRates/ReferenceRates';
import { MarketTurnOver } from './marketTurnover/MarketTurnover';
import { MarketData } from './marketData/MarketData';

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          // backgroundColor: '#c6cbef',
          width: 200,
        },
        drawerLabelStyle:{color:"black"},
        drawerActiveTintColor:"blue",
      }}
    >
      <Drawer.Screen name="Home" component={Main} options={{ headerShown: false }} />
      <Drawer.Screen name="HeatMap" component={Heatmap} options={{ headerShown: false }} />
      <Drawer.Screen name="Indices" component={Indices} options={{ headerShown: false }} />
      <Drawer.Screen name="Equities" component={Equities} options={{ headerShown: false }} />
      <Drawer.Screen name="Derivatives" component={Derivatives} options={{ headerShown: false }} />
      <Drawer.Screen name="Reference Rates" component={ReferenceRates} />
      <Drawer.Screen name="MarketTurnOver" component={MarketTurnOver} />
      <Drawer.Screen name="Market Data" component={MarketData} />
    </Drawer.Navigator>
  );
}