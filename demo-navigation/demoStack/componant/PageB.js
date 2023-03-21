import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PageB({navigation , route}) {
  
  return (
    <View>
      <Text>PageB pour utilisateur : </Text>
      <Button title="Go to Page A" onPress={() => navigation.navigate("PageA")}/>
    </View>
  )
}

const styles = StyleSheet.create({})