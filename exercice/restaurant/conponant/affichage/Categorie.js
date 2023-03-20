import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Categorie(props) {
  // console.log(props);
  // let color = props.color
  console.log(props.categorie);
  console.log(props.color);
  return (
    <View style={styles.container}>
      <Text style={{backgroundColor:`${props.color}`,fontWeight: 'bold'}}>{props.categorie}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderRadius: 5,
    // justifyContent: 'center',
    // alignItems: 'center',
    margin: 8,
  },
})