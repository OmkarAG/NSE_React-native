import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import * as Progress from 'react-native-progress';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [progressbar, setProgressBar] = useState(false);

  const navigation = useNavigation()
  const handleLogin = () => {
    if (!username || !password) {
      console.warn('Enter Username and Password');
    } else {
      setProgressBar(true)
      console.warn('Login Successful');
      navigation.navigate("Drawer")
      navigation.reset({
        index: 0,
        routes: [{ name: 'Drawer' }],
      });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/NSE_logo2022.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#95a5a6"
        onChangeText={text => setUsername(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#95a5a6"
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />

      <TouchableOpacity
        style={styles.forgotPasswordContainer}
        onPress={() => console.log('Forgot Password?')}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      {
        progressbar ? (
          <Progress.Circle size={30} indeterminate={true} />
        ) : (
          <TouchableOpacity style={styles.login} onPress={handleLogin}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  title: {
    fontSize: 45,
    marginBottom: 30,
    color: '#E76E27',
    fontWeight: 'bold',
  },
  input: {
    padding:15,
    width:"80%",
    borderColor: '#bdc3c7',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 18,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginRight: '10%',
    marginBottom: 10,
  },
  forgotPasswordText: {
    color: '#3498db',
  },
  login: {
    backgroundColor: 'rgba(231, 110, 39, 0.5)',
    borderColor: 'black',
    borderWidth: 0.5,
    paddingVertical: 9,
    width: '55%',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 20,
  },
  loginText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Login;
