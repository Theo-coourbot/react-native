import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Categorie(props) {
  // console.log(props);
  // let color = props.color
  console.log(props.categorie);
  console.log(props.color);
  return (
    <View>
      <Text style={styles.recette}>{props.categorie}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  // recette :{
  //   backgroundColor : 
  // }
})