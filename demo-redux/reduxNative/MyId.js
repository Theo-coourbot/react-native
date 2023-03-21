import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch } from "react-redux";
import {useSelector} from 'react-redux'
import { removeIds } from './store/redux/data';

export default function MyId() {
    const myId = useSelector((state)=>state.data.ids)
    const dispatch = useDispatch()


    const deleteId = (id) =>{
        
        dispatch(removeIds({id :id}))
    }
  return (
    <View>
      <Text>MyId</Text>
        {myId.map((ids,i) => <Pressable key={i} onPress={()=>deleteId(i)}><Text  style={styles.text}>{ids}</Text></Pressable>)}
    </View>
  )
}

const styles = StyleSheet.create({
    text : {
        fontSize : 24
    }
})