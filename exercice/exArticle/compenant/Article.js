import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Article(props) {
  return (
    <Pressable onPress={() => props.delete(props.id)} style={({pressed}) => pressed ? styles.supp : styles.noSupp}>
    <View style={styles.container}>
    <View style={styles.articleItem} >
      <Text style={styles.articleText}>{props.text}
      </Text>
    </View>
    </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container : {
    
    alignItems : 'center', 
    justifyContent : 'flex-end',
    
    
  },
  articleItem : {
    margin : 5,
    padding : 2,
    borderRadius : 6,
    
  },
  supp :{
    backgroundColor : 'red',
    marginVertical : 10 ,
    marginHorizontal : 20, 
   
    flex : 1 ,
    
  },
  noSupp : {
    marginVertical : 10 ,
    marginHorizontal : 20, 
   
    flex : 1 ,
    backgroundColor : '#5e0acc',
  },
  articleText : {
      // flex : 1 ,
      // alignItems : 'center', 
      // justifyContent : 'flex-end',
      color : "white"
    }
})