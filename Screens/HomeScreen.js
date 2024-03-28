import React, { useState } from 'react';
import { StatusBar, TextInput } from 'react-native';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Homescreen({ navigation }) {
  const [inputValue, levelValue] = useState(''); 

  const handlePress = () => {
    let jsonData;
    if (inputValue.trim() === '') {
      jsonData = { inputValue: 10 }; 
    } else {
      jsonData = { inputValue: parseInt(inputValue) };
    }
    navigation.navigate("List", { jsonData });
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={levelValue}
          value={inputValue}
          placeholder="Enter a number"
          keyboardType="numeric"
        />
        <Button
          title="Redirect to ListScreen.js"
          onPress={handlePress}
          style={styles.button}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}   

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20, 
    backgroundColor: 'blue',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
