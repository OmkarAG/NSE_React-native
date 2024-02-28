import React from 'react';
import Login from './components/auth/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './components/home/CombineHome';
import SplashScreen from './components/splash screen/SplashScreen';
import { StockDetails } from './components/stockDetails/StockDetail';
import { Heatmap } from './components/drawer/heatmap/Heatmap';
import { MyDrawer } from './components/drawer/MyDrawer';
import Home from './components/home/CombineHome';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="StockDetails" component={StockDetails} />
        <Stack.Screen name="HeatMap" component={Heatmap} />
        <Stack.Screen name="Drawer" component={MyDrawer} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;