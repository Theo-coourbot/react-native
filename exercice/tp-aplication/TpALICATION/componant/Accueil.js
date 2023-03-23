import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BtnLogin from './btn/BtnLogin'
import ModalAuth from './modal/ModalAuth'

export default function Accueil({navigation}) {
    const [modalIsVisible,setModalIsVisible] = useState(false) 
    const [isLogged,setIsLogged] = useState(false)

    const openModal = () =>{
        // console.log('coucou');
        setModalIsVisible(true)
    }
    const closeModal = () =>{
        // console.log('coucou');
        setModalIsVisible(false)
    }
  return (
    <>
    <ModalAuth visible={modalIsVisible} navigation={navigation} closeModal={closeModal} />
    <View style={styles.containerAccueil}>
    <View style={styles.container}>
        <Image style={styles.img} source={require('../img/logoAileron.png')}/>
        <View style={styles.textContainer}>
      <Text style={styles.firstText}>Fitness</Text>
      <Text style={styles.secondeText}>Shark</Text>
      </View>
      <BtnLogin openModal={openModal}/>
    </View>
    <View  style={styles.maincontainer}>
    <Image source={require('../img/logoRequin.png')} style={styles.mainImg}></Image>
    </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    containerAccueil : {
        flex : 1,
        backgroundColor : '#0e3657',
    },
    
    container : {
        flex : 1,
        justifyContent : 'center',
        flexDirection : 'row',
    } ,
    img : {
        flex : 1,
        height : 50,
        width : 50,
        maxWidth :50 ,
        borderRadius : 100,
        marginTop : 5,
        marginLeft : 5,
        // textAlign:'left'
    } ,
    textContainer : {
        
        flex : 2,
        flexDirection : 'row',
        marginLeft : 50,
        marginTop : 5,

    } ,
    firstText : {
        color : '#eaa03a',
        fontSize : 24,
        marginHorizontal : 10,
        
    } ,
    secondeText: {
        color : '#00a2e2',
        fontSize : 24,
     
    } ,
    maincontainer : {
        flex : 2,
     
        alignItems : 'center',
        
    } ,
    mainImg : {
        // flex : 1,
        // padding : 20,
        height : 260,
        width : 260,
        borderRadius : 10,
        alignItems : 'center',
        backgroundColor : '#08c1ff'
        
        
    } ,
})