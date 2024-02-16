import React, { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';

function App(): React.JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // Add your authentication logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#95a5a6"
        onChangeText={(text) => setUsername(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#95a5a6"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      <Button
        title="Login"
        onPress={handleLogin}
        color="#3498db"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  title: {
    fontSize: 36,
    marginBottom: 20,
    color: '#2c3e50',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#bdc3c7',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 8,
    backgroundColor: '#ecf0f1',
    color: '#333',
    fontSize: 16,
  },
});

export default App;
