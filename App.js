import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  function soma() {
    const resultado = parseFloat(num1) + parseFloat(num2);
    alert('O rsultado é ' + resultado);
  }

  function sub() {
    const resultado = parseFloat(num1) - parseFloat(num2);
    alert('O rsultado é ' + resultado);
  }

  function div() {
    const resultado = parseFloat(num1) / parseFloat(num2);
    alert('O rsultado é ' + resultado);
  }

  function mult() {
    const resultado = parseFloat(num1) * parseFloat(num2);
    alert('O rsultado é ' + resultado);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Soma de Valores </Text>
      <TextInput
        style={styles.input0}
        keyboardType="numeric"
        placeholder="Digite um número."
        onChangeText={(num1) => setNum1(num1)}
      />
      <TextInput
        style={styles.input1}
        keyboardType="numeric"
        placeholder="Digite um número"
        onChangeText={(num2) => setNum2(num2)}
      />
      <Text style={styles.res}> </Text>
      <TouchableOpacity style={styles.btn} onPress={soma}>
        <Text style={styles.titulobtn}> + </Text>
      </TouchableOpacity>

      <Text style={styles.res}> </Text>
      <TouchableOpacity style={styles.btn} onPress={sub}>
        <Text style={styles.titulobtn}> - </Text>
      </TouchableOpacity>

      <Text style={styles.res}> </Text>
      <TouchableOpacity style={styles.btn} onPress={div}>
        <Text style={styles.titulobtn}> / </Text>
      </TouchableOpacity>

      <Text style={styles.res}> </Text>
      <TouchableOpacity style={styles.btn} onPress={mult}>
        <Text style={styles.titulobtn}> * </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  titulo: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input0: {
    backgroundColor: '#ffaa33',
    borderRadius: 15,
    margin: 15,
    padding: 10,
    fontSize: 30,
  },
  input1: {
    backgroundColor: '#a3b567',
    margin: 15,
    borderRadius: 15,
    fontSize: 30,
    padding: 10,
  },

  btn:{
    backgroundColor: '#9D5ABC',
    margin: 15,
    width:50,
    borderRadius: 15,
    fontSize: 30,
    padding: 10,
    textAlign: 'center',

  }
});

