import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Article(props) {
  return (
    <Pressable onPress={() => props.delete(props.id)} style={({pressed}) => pressed ? styles.supp : styles.noSupp}>
    <View style={styles.articleItem} >
      <Text style={styles.articleText}>{props.text}
      </Text>
    </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    articleItem : {
            margin : 2,
            padding : 2,
            borderRadius : 6,
           
    },
    supp :{
        backgroundColor : 'red',

    },
    noSupp : {
        backgroundColor : '#5e0acc',
    }
})