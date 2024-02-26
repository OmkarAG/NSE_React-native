
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../home/Home/Home';
import { Heatmap } from './heatmap/Heatmap';
import Main from '../home/CombineHome';
import { Indices } from './indices/Indices';
import { Equities } from './equities/Equities';
import { Derivatives } from './derivatives/Derivatives';
import { ReferenceRates } from './referenceRates/ReferenceRates';
import { MarketTurnOver } from './marketTurnover/MarketTurnover';
import { MarketData } from './marketData/MarketData';

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Main} options={{ headerShown: false }} />
      <Drawer.Screen name="HeatMap" component={Heatmap} />
      <Drawer.Screen name="Indices" component={Indices} />
      <Drawer.Screen name="Equities" component={Equities} />
      <Drawer.Screen name="Derivatives" component={Derivatives} />
      <Drawer.Screen name="Reference Rates" component={ReferenceRates} />
      <Drawer.Screen name="MarketTurnOver" component={MarketTurnOver} />
      <Drawer.Screen name="Market Data" component={MarketData} />
    </Drawer.Navigator>
  );
}