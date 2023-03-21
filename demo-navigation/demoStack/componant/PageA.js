import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function PageA({navigation}) {
  return (
    <View style={styles.container}>
    
    <View>
      <Text style={styles.info}>On va mettre un lien vers la page B !!!</Text>
      <Button color="#20dbd1" title='Go to PageB' onPress={() => navigation.navigate("PageB", { name : "toto"})} />
      
    </View>

     <View>
     <Text style={styles.info}>Bubule !!!</Text>
     <Button  color="#20dbd1" title='voir Bubule' onPress={() => navigation.navigate("PageC", {name : "Bubule", lastName : "lE POISSON MAGIQUE", phone : "06 26 56 86 46 "})} />
   </View>
   <View>
     <Text  style={styles.info}>Blop !!!</Text>
     <Button color="#20dbd1" title='voir Blop' onPress={() => navigation.navigate("PageC",  {name : "Blop", lastName : "lE POISSON blob", phone : "06 26 30 00 46 "})} />
   </View>
   <View>
     <Text  style={styles.info}>Nemo !!!</Text>
     <Button color="#20dbd1" title='voir Nemo' onPress={() => navigation.navigate("PageC",  {name : "Nemo", lastName : "lE POISSON clown", phone : "06 10 10 20 30 "})} />
   </View>
   </View>
  )
}

const styles = StyleSheet.create({
  info :{
     textAlign : 'center',
     fontSize : 20 ,
     color:'white',
  },
  container: {
    flex : 1 ,
    alignItems : 'center',
    justifyContent : 'space-around',
    
    backgroundColor : '#5e0963'
  },
  
})