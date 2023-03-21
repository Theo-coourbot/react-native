import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/redux/store'
import MyId from './MyId'
import Btn from './Btn'

// npm i @reduxjs/toolkit react-redux

export default function App() {
  return (
    <Provider store={store}>
    <View>
      <Text>App</Text>
      <MyId></MyId>
      <Btn></Btn>
    </View>
    </Provider>
  )
}

const styles = StyleSheet.create({})