import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, ScrollView, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Tela2({navigation})  {
  const [exerciseName, setExerciseName] = useState('');
  const [series, setSeries] = useState('');
  const [reps, setReps] = useState('');
  const [restMinutes , setRestMinutes] = useState('0');//isso me permite usar so segundos ou so minutos
  const [restSeconds , setRestSeconds] = useState('0');
  
  const verificacao = () => {
    if(!exerciseName && !series && !reps && (restMinutes + restSeconds ==0))
      Alert.alert("Favor preencher os campos restantes");
    else if(series == 0 )
      Alert.alert("Favor preencher o número de séries");
    else if(!exerciseName)
      Alert.alert("Favor preencher o nome do exercício");
    else if(!reps)
      Alert.alert("Favor preencher o número de repetições");
    else if(isNaN(restMinutes))
      setRestMinutes(0);
    else{
       navigation.navigate('Tela3', {
         
        series: parseInt(series, 10),
        reps: parseInt(reps, 10),
        TempoDescanso: parseInt(restMinutes, 10) * 60  + parseInt(restSeconds,10) ,
        name : exerciseName,
        })
}
};

return (
  
    <ScrollView style={styles.container}>
      
      <TextInput
        style={styles.input}
        placeholder="Nome do exercício"
        placeholderTextColor={'black'}
        onChangeText={setExerciseName}
        keyboardAppearance='dark'
      />
      <TextInput
        style={styles.input}
        placeholder="Séries"
        placeholderTextColor={'black'}
        onChangeText={setSeries}
        keyboardType="numeric"
        keyboardAppearance='dark'
      />
      <TextInput
        style={styles.input}
        placeholder="Repetições"
        placeholderTextColor={'black'}
        onChangeText={setReps}
        keyboardType="numeric"
        keyboardAppearance='dark'
      />
      <TextInput
        style={styles.input}
        placeholder="Descanso (minutos)"
        placeholderTextColor={'black'}
        onChangeText={setRestMinutes}
        keyboardType="numeric"
        keyboardAppearance='dark'
      />
      <TextInput
        style={styles.input}
        placeholder="Descanso (segundos)"
        placeholderTextColor={'black'}
        onChangeText={setRestSeconds}
        keyboardType="numeric"
        keyboardAppearance='dark'
      />
    

      <TouchableOpacity style = {styles.botao} onPress={verificacao}>
           <Text style ={styles.textoBotao}>PROSSEGUIR</Text>
      </TouchableOpacity>
    </ScrollView>
    
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderRadius: 2,
    backgroundColor : '#483D8B',
    
   
  },
  input: {
    height: 40,
    borderColor: 'white',
    backgroundColor : "white",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius : 20,
    fontSize: 18,
    
  },

  botao:{
    flex: 1,
    alignItems : 'center',
    justifyContent: 'center',
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
  }

});


