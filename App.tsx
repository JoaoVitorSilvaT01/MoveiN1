import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tela1 from './screens/Tela1';
import Tela2 from './screens/Tela2';
import Tela3 from './screens/Tela3';
import Tela4 from './screens/Tela4';
import Tela5 from './screens/Tela5';
import { ScreenStackHeaderSearchBarView } from 'react-native-screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GymBuddy">
        
        <Stack.Screen name="GymBuddy" component={Tela1} options={({navigation}) => ({title : " ", headerTransparent:true})}  />
        <Stack.Screen name="Tela2" component={Tela2} options={({navigation}) => ({title : "GymBuddy", headerStyle: { backgroundColor: '#7B68EE' }})} />
        <Stack.Screen name="Tela3" component={Tela3} options={({navigation}) => ({title : "GymBuddy",headerStyle: { backgroundColor: '#7B68EE' }})}/>
        <Stack.Screen name="Tela4" component={Tela4} options={({navigation}) => ({title : "GymBuddy",headerStyle: { backgroundColor: '#7B68EE' }})}/>
        <Stack.Screen name="Tela5" component={Tela5} options={({navigation}) => ({title : "GymBuddy",headerStyle: { backgroundColor: '#7B68EE' }})}/>      
      </Stack.Navigator>
    </NavigationContainer>
  );
}


