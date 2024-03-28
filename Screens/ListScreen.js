import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ListScreen({ navigation, route }) {
  const { jsonData } = route.params;
  const inputValue = jsonData.inputValue;

  const lengthofArray = inputValue;
  const defaultTime = '3:00';
  let BlindFirstNumber = 1;
  let BlindSecondNumber = 2;
  const blindValues = [];

  for (let i = 0; i < lengthofArray; i++) {
    blindValues.push(`${BlindFirstNumber} / ${BlindSecondNumber}`);
    BlindFirstNumber *= 2;
    BlindSecondNumber *= 2;
  }

  const levels = Array.from({ length: lengthofArray }, (_, i) => i + 1);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Gray row with titles */}
        <View style={[styles.row, styles.headerRow]}>
          <View style={[styles.column, styles.headerColumn]}>
            <Text style={styles.columnHeader}>Levels</Text>
          </View>
          <View style={[styles.column, styles.headerColumn]}>
            <Text style={styles.columnHeader}>Time</Text>
          </View>
          <View style={[styles.column, styles.headerColumn]}>
            <Text style={styles.columnHeader}>Blinds</Text>
          </View>
        </View>

        {/* Data rows */}
        {levels.map((level, index) => (
          <View key={index} style={styles.row}>
            {/* Levels */}
            <View style={[styles.column, styles.dataColumn]}>
              <Text style={styles.columnItem}>{`Level ${level}`}</Text>
            </View>

            {/* Time */}
            <View style={[styles.column, styles.dataColumn]}>
              <Text style={styles.columnItem}>{`${level * parseInt(defaultTime, 10)}:00`}</Text>
            </View>

            {/* Blinds */}
            <View style={[styles.column, styles.dataColumn]}>
              <Text style={styles.columnItem}>{blindValues[index]}</Text>
            </View>
          </View>
        ))}
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
  headerRow: {
    backgroundColor: 'gray',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  column: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 10,
  },
  headerColumn: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  dataColumn: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  columnHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  columnItem: {
    textAlign: 'center',
    fontSize: 16,
  },
});
