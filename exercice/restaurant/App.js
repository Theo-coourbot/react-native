import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Acceuil from './conponant/affichage/Acceuil'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Acceuil} options={{headerShown : false}}/>
        {/* <Stack.Screen name="PageB" component={PageB} options={{title : "Ma page B"}}/>
        <Stack.Screen name="PageC" component={PageC} options={{title : "Toto's Page"}} /> */}
    </Stack.Navigator>
</NavigationContainer>
  )
}

const styles = StyleSheet.create({})