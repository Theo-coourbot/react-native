import { Button, Image, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState }  from 'react'

export default function ModalArticle(props) {
const [mot, setMot] = useState()
const textValue = (text) =>{
        
  setMot(text)
console.log(mot);
}
// coucouc
  return (
    <Modal visible={props.visible}>
      
        <View>
          <Pressable onPress={props.closeModal} style={({pressed}) => pressed && styles.pressedItem }>
          <Image source={require('../assets/img/bubulle.jpg')} resizeMode="contain" style={styles.logo}></Image>
          </Pressable>
            <Text>Nom de l'article</Text>
            <TextInput placeholder='une pomme 'onChangeText={textValue} value={mot}/>
            <Button title='Valider' onPress={() => props.addArticle(mot)}/>
            <Button title='retour' onPress={props.closeModal}/>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  logo : {
    // flex : 1,
    // alignItems : "center",
    width : 400,
    height : 200,
    marginTop : 20,
    marginBottom : 30
    
    
    
    
    
  },
  pressedItem : {
    backgroundColor : "yellow"
  }
})