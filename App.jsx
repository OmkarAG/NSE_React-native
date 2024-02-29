import React from 'react';
import Login from './components/auth/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './components/splash screen/SplashScreen';
import { StockDetails } from './components/stockDetails/StockDetail';
import { Heatmap } from './components/drawer/heatmap/Heatmap';
import { MyDrawer } from './components/drawer/MyDrawer';
import Home from './components/bottomScreens/CombineHome';

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

// import { useEffect } from 'react';
// import { Text, View } from 'react-native';
// import {
//   getHash,
//   startOtpListener,
//   useOtpVerify,
// } from 'react-native-otp-verify';

// function App() {
//   // using methods
//   useEffect(() => {
//     getHash().then(hash => {
//       // use this hash in the message.
//       console.warn("hash", hash)
//     }).catch(console.log);

//     startOtpListener(message => {
//       // extract the otp using regex e.g. the below regex extracts 4 digit otp from message
//       const otp = /(\d{4})/g.exec(message)[1];
//       console.log(otp)
//       console.warn("otp is", message)
//       console.log("otp is", message)
//       // setOtp(otp);
//     });
//     // return () => removeListener();
//   }, []);
//   return (
//     <View>
//       <Text>Hii</Text>
//     </View>
//   );
// }

// export default App;
