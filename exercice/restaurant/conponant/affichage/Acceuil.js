import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../restaurant/data/data'
import Categorie from './Categorie'


export default function Acceuil() {
  return (
    <View style={styles.container}>
      {/* <Text> */}
       {CATEGORIES.map(categorie => <Categorie key={categorie.id} categorie={categorie.title} color={categorie.color}  />)}
       {/* coucou */}
       {/* </Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    padding: 10,
  }
})
