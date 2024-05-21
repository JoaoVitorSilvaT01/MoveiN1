import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function Tela3 ({ route, navigation })  {
  const { TempoDescanso, series, reps, name } = route.params;
  const [minutosRestantes, setMinutosRestantes] = useState(TempoDescanso);
  const [SerieAtual, setSerieAtual] = useState(0);
  const [rodando, setRodando] = useState(false);

  useEffect(() => {
    let timer;
    if (rodando && minutosRestantes > 0  ) {
      timer = setTimeout(() => setMinutosRestantes(minutosRestantes - 1), 1000);
    } else if (rodando && minutosRestantes === 0 && SerieAtual < series) {
      setSerieAtual(SerieAtual + 1);
      setMinutosRestantes(TempoDescanso);
      setRodando(false);
    } else if (SerieAtual == series) {
      navigation.navigate('Tela4', route.params);
    }
    return () => clearTimeout(timer);
  }, [rodando, minutosRestantes]);

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{Math.floor(minutosRestantes / 60)}:{minutosRestantes % 60}</Text>
      <Text style={styles.textoSerie}>Série {SerieAtual} de {series}</Text>
      
      <TouchableOpacity style = {styles.botao} onPress={() => {setRodando(true)}}>
        <Text style = {styles.textoBotao}> Descanso</Text>
      </TouchableOpacity>
      

      <TouchableOpacity style = {styles.botao2} onPress={()=>navigation.navigate('Tela5',{reps : SerieAtual*reps,
        series : SerieAtual,
        name1 : name,
        reps1 : reps,
        
      })}>
        <Text style = {styles.textoBotao}> Finalizar </Text>
      </TouchableOpacity>
      
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#483D8B'
    
  },
  timer: {
    fontSize: 100,
    marginBottom: 20,
    fontWeight: 'bold',
    
  },

  botao:{
    flex: 1,
    alignItems : 'center',
    justifyContent: 'center',
    paddingBottom : 1,
    position : 'absolute',
    left : 90,
    top: 350,
    
    

  },

  botao2:{
    flex: 1,
    alignItems : 'center',
    justifyContent: 'center',
    paddingBottom : 1,
    position : 'absolute',
    left : 200,
    top: 350,
    
    

  },

  textoBotao:{
    color : '#fff',
    padding : 5,
    paddingVertical : 5,
    borderColor : '#fff',
    borderWidth : 1,
    alignItems: 'center',
    justifyContent : 'space-evenly',
    borderRadius : 20,
  },

  textoSerie:{
    position: 'absolute',
    top: 310,
    fontSize :20,
  }
});


