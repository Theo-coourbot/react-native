import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Main() {
  let aff = ""
  
  
const [ecran,setEcran] = useState([])
const [affiche,setAffiche] = useState('')
const [nbOne,setNbOne] = useState()
const [operator,setOperator] = useState('')

function click (i)  {
    if(parseInt(i) >= 0 || i =="." ){
      aff = `${aff}${i.toString()}`
      setAffiche(aff)
    }
    
    setEcran([...ecran,aff])
    if( i == "+" ||  i == "/" ||  i == "*" ||  i == "-"){

      setNbOne(ecran.join(''))
      setEcran([])
      console.log(nbOne);
      setOperator(i)
      console.log(operator);
      setAffiche('')
    }
    if(i=="="){
      console.log(nbOne);

      
      result(nbOne,ecran,operator)
      setEcran([])

    }
    // console.log(nbOne);
   
  }
  function result(nb1,nb2,operator){
    nb1 = parseFloat(nb1);
  nb2 = parseFloat(nb2);
  // console.log(operator);
  // console.log(nb1);
  // console.log(nb2);
  if (operator === "+") {aff = nb1 + nb2;}
  if (operator === "-") {aff = nb1 - nb2;}
  if (operator === "*") {aff = nb1 * nb2;}
  if (operator === "/") {aff = nb1 / nb2;}
  console.log(aff);
  setAffiche(aff)
  
  }
  function reset(){
    setAffiche('')
    setEcran([])
  }
  return (
    <View style={styles.container}>
      <View style={styles.ecranContainer}>
      <Text style={styles.ecran}>{affiche}</Text>
      </View>




      <View style={styles.groupeTouches}>
        <Pressable onPress={reset} >
      <Text style={[styles.touche, styles.bgSupp]}>C</Text>
      </Pressable>
      <Pressable onPress={() =>click('(')}>
      <Text style={[styles.touche, styles.bgAutre]}>(</Text>
        </Pressable>
        <Pressable onPress={() =>click(')')} >
      <Text style={[styles.touche, styles.bgAutre]}>)</Text>
        </Pressable>
        <Pressable onPress={() =>click('/')} >
      <Text style={[styles.touche, styles.bgOperation]}>/</Text>
        </Pressable>
      </View>
      <View style={styles.groupeTouches}>
      <Pressable onPress={() =>click(7)} >
      <Text style={[styles.touche, styles.bgNumber]}>7</Text>
        </Pressable>
        <Pressable onPress={() =>click(8)} >
      <Text style={[styles.touche, styles.bgNumber]}>8</Text>
        </Pressable>
        <Pressable onPress={() =>click(9)} >
      <Text style={[styles.touche, styles.bgNumber]}>9</Text>
        </Pressable>
        <Pressable onPress={() =>click('*')} >
      <Text style={[styles.touche, styles.bgOperation]}>*</Text>
        </Pressable>
      </View>
      <View style={styles.groupeTouches}>
      <Pressable onPress={() =>click(4)} >

      <Text style={[styles.touche, styles.bgNumber]}>4</Text>
        </Pressable>
        <Pressable onPress={() =>click(5)} >
      <Text style={[styles.touche, styles.bgNumber]}>5</Text>
        </Pressable>
        <Pressable onPress={() =>click(6)} >
      <Text style={[styles.touche, styles.bgNumber]}>6</Text>
        </Pressable>
        <Pressable onPress={() =>click('-')} >
      <Text style={[styles.touche, styles.bgOperation]}>-</Text>
        </Pressable>
      </View>
      <View style={styles.groupeTouches}>
        <Pressable onPress={() =>click(1)} >
      <Text style={[styles.touche, styles.bgNumber]}>1</Text>
        </Pressable>
        <Pressable onPress={() =>click(2)} >
      <Text style={[styles.touche, styles.bgNumber]}>2</Text>
        </Pressable>
      <Pressable onPress={() =>click(3)} >
      <Text style={[styles.touche, styles.bgNumber]}>3</Text>
        </Pressable>
        <Pressable onPress={() =>click('+')} >
      <Text style={[styles.touche, styles.bgOperation]}>+</Text>
        </Pressable>
      </View>
      <View style={styles.groupeTouches}>
      <Pressable onPress={() =>click(0)} >
      <Text style={[styles.touche, styles.bgNumber]}>0</Text>
        </Pressable>
        <Pressable onPress={() =>click('.')} >
      <Text style={[styles.touche, styles.bgAutre]}>.</Text>
        </Pressable>
        <Pressable onPress={() =>click('=')} >
      <Text style={[styles.touche, styles.bgOperation]}>=</Text>
        </Pressable>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    //  alignItems : 'center',
    flexDirection : 'column',
    backgroundColor : '#120907',
    marginVertical : 200, 
    marginHorizontal : 30
  },

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
    flex : 1 ,
    justifyContent : 'center',
    alignItems : 'center',
    flexDirection : 'row',
    justifyContent : 'space-around'
  },
  ecranContainer : {
    flex : 1 ,
    marginBottom : 10,
    backgroundColor : '#00dbff',
    alignItems : 'center',
  },
  ecran : {
    color: 'white',
    flex : 1 ,
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
    fontSize : 55,
  },
  pressedItem :{
    backgroundColor : 'white'
  }
})


