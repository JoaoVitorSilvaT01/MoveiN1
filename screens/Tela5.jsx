import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Tela5({route})  {
  
  const {name1, reps1, series} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resumo do Treino:</Text>
      <Text style={styles.texto}>Exercício : { name1}</Text>
      <Text style={styles.texto}>Séries Realizadas: {series}</Text>
      <Text style={styles.texto}>Repetições por Série: { reps1}</Text>
      <Text style={styles.texto}>Total de Repetições: {series *reps1}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#483D8B',
  },
  texto: {
    fontSize: 24,
    marginBottom: 20,
  },
  titulo:{
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',

  }
});


