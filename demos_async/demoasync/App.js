import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
    const [value,setValue] = useState({firstName : '' , lastName: ''});

    // const addData = async () => {
  //       try{
  //           await AsyncStorage.setItem('key','toto')
  //       }catch (error) {
  //           console.log(error)
  //       }
    // }

  //   const getData = async () => {
  //       try {
  //         const value =  await AsyncStorage.getItem('key')
  //         if(value != null) {
  //           setValue(value)
  //         }
  //       }catch (error) {
  //           console.log(error)
  //       }
  //   }

  //   const removeData = async () => {
  //       try {
  //           await AsyncStorage.removeItem('key')
  //           setValue('')
  //       }catch (error) {
  //           console.log(error)
  //       }
  //   }


  // avec objet
  
    const addData = async () => {   
            try{
                const obj = {
                  firstName : 'tutu',
                  lastName : 'toto'
                }
               await AsyncStorage.setItem('key',JSON.stringify(obj))
        }catch (error) {
            console.log(error)
        }
    }
    const getData = async () => {   
            try{
               
                const value = await AsyncStorage.getItem('key')
              if (value != null){

                setValue(JSON.parse(value))
              }
        }catch (error) {
            console.log(error)
        }
    }
    const removeData = async () => {   
      try{
               await AsyncStorage.removeItem('key')
       setValue({firstName : '' , lastName: ''})
}catch (error) {
    console.log(error)
}
      }



  return (
    <View>
      
      
      <Text style={{fontSize : 32}}>Nom : {value.lastName}</Text>
      <Text style={{fontSize : 32}}>Prenom : {value.firstName}</Text>
     
      
      
      <Text></Text>
    
    
     
      <Button title='Add Data' onPress={addData}/>
      <Button title='Get Data' onPress={getData}/>
      <Button title='Delete Data' onPress={removeData}/>
    </View>
  )





}

const styles = StyleSheet.create({})