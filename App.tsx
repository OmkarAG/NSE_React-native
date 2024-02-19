// App.tsx
import React from 'react';
import Login from './components/auth/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './components/main/Main';
import SplashScreen from './components/splash screen/SplashScreen';
import {StockDetails} from './components/main/home/stockDetails/StockDetail';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen name="StockDetails" component={StockDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
