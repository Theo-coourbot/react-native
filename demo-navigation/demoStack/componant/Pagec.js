import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PageC({navigation,route}) {
  const userName = route.params.name
  const lastname = route.params.lastName
  const phone = route.params.phone

  return (
    <View>
      <Text>{userName}//|\\{lastname}</Text>
      
      <Text>{phone}</Text>
      <Button title='Go to PageB' onPress={() => navigation.navigate("PageB")} />
      <Button title='Go to PageA' onPress={() => navigation.navigate("PageA")} />
    </View>
  )
}

const styles = StyleSheet.create({})