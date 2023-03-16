import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Touche() {
  return (
    <>
    <View style={styles.groupeTouches}>
       
    <Text style={[styles.touche, styles.bgSupp]}>C</Text>
    <Text style={[styles.touche, styles.bgAutre]}>(</Text>
    <Text style={[styles.touche, styles.bgAutre]}>)</Text>
    <Text style={[styles.touche, styles.bgOperation]}>/</Text>
    </View>
    <View style={styles.groupeTouches}>
    <Text style={[styles.touche, styles.bgNumber]}>7</Text>
    <Text style={[styles.touche, styles.bgNumber]}>8</Text>
    <Text style={[styles.touche, styles.bgNumber]}>9</Text>
    <Text style={[styles.touche, styles.bgOperation]}>*</Text>
    </View>
    <View style={styles.groupeTouches}>
    <Text style={[styles.touche, styles.bgNumber]}>4</Text>
    <Text style={[styles.touche, styles.bgNumber]}>5</Text>
    <Text style={[styles.touche, styles.bgNumber]}>6</Text>
    <Text style={[styles.touche, styles.bgOperation]}>-</Text>
    </View>
    <View style={styles.groupeTouches}>
    <Text style={[styles.touche, styles.bgNumber]}>1</Text>
    <Text style={[styles.touche, styles.bgNumber]}>2</Text>
    <Text style={[styles.touche, styles.bgNumber]}>3</Text>
    <Text style={[styles.touche, styles.bgOperation]}>+</Text>
    </View>
    <View style={styles.groupeTouches}>
    <Text style={[styles.touche, styles.bgNumber]}>0</Text>
    <Text style={[styles.touche, styles.bgAutre]}>.</Text>
    <Text style={[styles.touche, styles.bgOperation]}>=</Text>
    </View>
    </>
  )
}

const styles = StyleSheet.create({ 
    touche : {
   
    color : 'white',
    padding : 20
  },
  bgSupp : {
    backgroundColor : '#7a005c'
  },
  bgOperation : {
    backgroundColor : '#ffe742'
  },
  bgNumber : {
    backgroundColor : '#209cd8'
  },
  bgAutre : {
    backgroundColor : '#006c56'
  },
  groupeTouches : {
    flex : 1 ,
   
    justifyContent : 'center',
    alignItems : 'center',
    flexDirection : 'row',
    justifyContent : 'space-around'
  },
})