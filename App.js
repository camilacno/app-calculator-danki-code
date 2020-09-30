import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import MyButton from './MyButton';

export default function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [sign, setSign] = useState('');

  const [stringCalculate, setStringCalculate] = useState('0');

  var numbers = [];

  for (var i = 0; i <= 9; i++) {
    numbers.push(i);
  }

  function calculatorLogic(n) {
    if (sign == '') {
      setFirstNumber(parseInt(firstNumber.toString() + n.toString()));
      setStringCalculate(parseInt(firstNumber.toString() + n.toString()));
    }

    if ((n == '/' || n == '*' || n == '+' || n == '-') && secondNumber == 0) {
      setStringCalculate(firstNumber.toString() + n);
      setSign(n);
    }

    if (sign != '') {
      setSecondNumber(parseInt(secondNumber.toString() + n.toString()));
      setStringCalculate(
        firstNumber + sign + parseInt(secondNumber.toString() + n.toString())
      );
    }

    if (n == '=') {
      let result = 0;
      if (sign == '+') {
        result = firstNumber + secondNumber;
      } else if (sign == '-') {
        result = firstNumber - secondNumber;
      } else if (sign == '/') {
        result = firstNumber / secondNumber;
      } else if (sign == '*') {
        result = firstNumber * secondNumber;
      }
      setStringCalculate(result);
      setSign('');
      setFirstNumber(result);
      setSecondNumber(0);
    }
  }

  function clear() {
    setStringCalculate(0);
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <StatusBar hidden />
      <View style={styles.top}>
        <Text style={{ fontSize: 24, color: 'white' }}>{stringCalculate}</Text>
      </View>

      <View
        style={{ flexDirection: 'row', height: '16.6%', alignItems: 'center' }}
      >
        <TouchableOpacity
          onPress={() => calculatorLogic('+')}
          style={styles.signalButton}
        >
          <Text style={styles.signalText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => calculatorLogic('-')}
          style={styles.signalButton}
        >
          <Text style={{ fontSize: 24, color: 'white' }}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => calculatorLogic('/')}
          style={styles.signalButton}
        >
          <Text style={{ fontSize: 24, color: 'white' }}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => calculatorLogic('*')}
          style={styles.signalButton}
        >
          <Text style={{ fontSize: 24, color: 'white' }}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => calculatorLogic('=')}
          style={styles.signalButton}
        >
          <Text style={{ fontSize: 24, color: 'white' }}>=</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.keyboard}>
        <>
          {numbers.map(function (e) {
            return (
              <MyButton calculatorLogic={calculatorLogic} number={e}></MyButton>
            );
          })}
          <TouchableOpacity
            onPress={() => clear()}
            style={{
              justifyContent: 'center',
              marginLeft: '25%',
            }}
          >
            <Text
              style={{
                color: '#fff',
              }}
            >
              CLEAR
            </Text>
          </TouchableOpacity>
        </>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    backgroundColor: 'rgb(20,20,20)',
    height: '16.6%',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  signalButton: {
    width: '20%',
    backgroundColor: 'rgb(20,20,20)',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  signalText: { fontSize: 24, color: 'white' },
  keyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderTopColor: 'black',
    borderTopWidth: 2,
    height: '66.8%',
  },
});
