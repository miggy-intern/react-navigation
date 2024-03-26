import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ListScreen({ navigation, route}) {
  const { jsonData } = route.params; 
  const inputValue = jsonData.inputValue; 

  const lengthofArray = inputValue; 
  const defaultTime = '3:00';
  let BlindFirstNumber = 1;
  let BlindSecondNumber = 2;
  const blindValues = [];

  for(let i = 0; i < lengthofArray; i++ ){
      blindValues.push(`${BlindFirstNumber} / ${BlindSecondNumber}`);
      BlindFirstNumber *= 2;
      BlindSecondNumber *= 2;
  }

  const levels = Array.from({ length: lengthofArray }, (_, i) => i + 1);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>

        <View style={styles.row}>
          {/* Levels */}
          <View style={styles.column}>
            <Text style={[styles.columnHeader, styles.fontColor]}>Levels</Text>
            {levels.map(level => (
              <Text key={level} style={[styles.columnItem, styles.fontColor]}>{`Level ${level}`}</Text>
            ))}
            <Text style={[styles.columnHeader, styles.fontColor]}>.....</Text>
          </View>

          {/* Time  */}
          <View style={styles.column}>
            <Text style={styles.columnHeader}>Time</Text>
            {levels.map(level => (
              <Text key={level} style={styles.columnItem}>{`${level * parseInt(defaultTime, 10)}:00`}</Text>
            ))}
            <Text style={styles.columnHeader}>+ 3:00</Text>
          </View>

          {/* Blinds */}
          <View style={styles.column}>
            <Text style={styles.columnHeader}>Blinds</Text>
            {blindValues.map((blind, index) => (
              <Text key={index} style={styles.columnItem}>{blind}</Text>
            ))}
            <Text style={styles.columnHeader}>*2</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
  },
  column: {
    alignItems: 'center',
  },
  columnHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    borderColor: 'black',
    paddingVertical: 10,
  },
  columnItem: {
    paddingTop: 20,
    textAlign: 'left',
    fontSize: 16,
  },

  fontColor: {
    color: 'skyblue'
  }
});
