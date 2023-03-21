import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PageA from './componant/PageA'
import PageB from './componant/PageB'
import PageC from './componant/PageC'






const Stack = createNativeStackNavigator()

export default function App() {
  return (

   <NavigationContainer >
    <Stack.Navigator initialRouteName='PageA'>
        <Stack.Screen name="PageA" component={PageA} options={{headerShown : false}}/>
        <Stack.Screen name="PageB" component={PageB} options={{title : "ma Page B"}}/>
        <Stack.Screen name="PageC" component={PageC} options={{title : "la Pagique magique de Bubule"}}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({})