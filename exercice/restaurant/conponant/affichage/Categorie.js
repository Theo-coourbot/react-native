import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Categorie(props) {
  console.log(props);
  return (
    <View>
      <Text>{props}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})