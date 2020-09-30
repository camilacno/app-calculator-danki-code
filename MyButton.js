import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function MyButton(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.calculatorLogic(props.number)}
        style={styles.myButton}
      >
        <Text style={{ fontSize: 24, color: 'white' }}>{props.number}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 1,
    width: '33.3%',
    height: '25%',
  },
  myButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
