import React from 'react';
import { View, Button, StyleSheet, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function GymBuddy({ navigation })  {
  return (
  <ImageBackground source={require('../PastaImagem/logo.png')}
  style = {styles.imageb}>
    
    <SafeAreaView style={styles.container}>
    
 
      <TouchableOpacity style ={styles.botao} onPress={()=> 
        navigation.navigate('Tela2')
        }>
        <Text style ={styles.textoBotao}>INICIAR</Text>
      
      </TouchableOpacity>
       
    </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  imageb:{
    flex : 1,
    alignItems : 'center',
    },
  botao:{
    flex: 1,
    position : 'absolute',
    top : 450,
    left: -30,

  },

  textoBotao:{
    color : '#fff',
    padding : 5,
    paddingVertical : 5,
    borderColor : '#fff',
    borderWidth : 1,
    borderRadius : 20,
  }
});


