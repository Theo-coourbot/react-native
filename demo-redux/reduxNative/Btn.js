import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch } from "react-redux";
import { addIds } from './store/redux/data'

export default function Btn() {
    // console.log(Math.floor(Math.random()* 10));
    const dispatch = useDispatch()

    const ajout = () =>{
        dispatch(addIds(Math.floor(Math.random()* 100)))
    }
    

    
  return (
    <Pressable onPress={ajout}>
    <View>
      <Text>Ajouter</Text>
    </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({})