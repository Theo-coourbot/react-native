import { Button, FlatList, Modal, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import ModalArticle from './shared/modal';
import Article from './compenant/Article';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import TestModal from './component/TestModal';

export default function Main() {
    // const [value,setValue] = useState({name : '' });
    const [modalVisible,setModalVisible] = useState(false);
    const [article,setArticle] = useState([]);
    



    const addArticle = async (nom) => {   
        try{
            setArticle(motCurrent => [
                ...motCurrent, {
                    text : nom , id : Math.random().toString()
                }
            ])
            const obj = article
           await AsyncStorage.setItem('key',JSON.stringify(obj))
    }catch (error) {
        console.log(error)
    }
}
const getData = async () => {   
    try{
       
        const value =  AsyncStorage.getItem('key')
        if (value != null){
            const tmpArray = []
            
            for (const key in value) {
                tmpArray.push({id: key, ...value[key]})
            }
            setArticle(JSON.parse(value))
        }
    }catch (error) {
        console.log(error)
    }
}
useLayoutEffect   (() =>{
    getData()
    
},[article])
// const removeData = async () => {   
//   try{
//            await AsyncStorage.removeItem('key')
//    setValue({name : '' })
// }catch (error) {
// console.log(error)
// }}


    // const addArticle = (mot) => {
       
    //     setArticle(motCurrent => [
    //         ...motCurrent, {
    //             text : mot , id : Math.random().toString()
    //         }
    //     ])
    //     console.log(article);

    // }

    function setModal() {
        // console.log("Clique sur le bouton");
        // console.log(article);
        setModalVisible(true)
    }
    
    function modalClose(){
        // console.log("close modal")
        console.log(article);
        setModalVisible(false)
    }
    function deleteArticle(idDelete){
        // const found = article.find(article => article.id == idDelete)
        setArticle(article.filter(motFiltrer => motFiltrer.id !== idDelete))
        // console.log(article);


        // setArticle(article.splice(article.indexOf(found),1))
        // console.log(found);
    
    }
   
      
    return (
       <View >
        <ModalArticle visible={modalVisible} addArticle={addArticle} closeModal={modalClose} addOneArticle={setArticle} />
        <Text>Bienvenue</Text>
        <Button title='Ajouter un article' onPress={setModal} modalClose={modalClose}/>
        {article.length == 0 ? <Text>Il n'y a pas d'article</Text> : 
         <FlatList data={article} renderItem={(itemData) => {
             return (
                    <Article text={itemData.item.text} id={itemData.item.id} delete={deleteArticle}></Article>
                   
                )
            }}
                keyExtractor={(item, index) => {
                    return item.id;
                }}
            />
        }
        <Button title='get' onPress={getData}/>
       </View>
    )
}




//Bonne pratique
const styles = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        flex: 1,
        padding: 20,
    },
    monTexte: {
        margin: 8,
        color: "white"
    },
    tailleTexte: {
        fontSize: 32
    }
})