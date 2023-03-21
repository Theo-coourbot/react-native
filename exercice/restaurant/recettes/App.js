import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import CategoriesScreen from   './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import MealsDetailScreen from './screens/MealsDetailScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Fav from './components/Fav'



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyButton(){
    return(
      <Pressable onPress={() => {console.log("clique header")}}>
        <Text>Clique ICI</Text>
      </Pressable>
    )
  }
  function MyStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Drawer" component={MyDrawer} options={{headerShown: false}} />
        <Stack.Screen name="Categories" component={CategoriesScreen} options={{title : 'All Categories'}}/>
        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}/>
        <Stack.Screen name='MealDetail' component={MealsDetailScreen} options={{title : 'About the meal'}} />
    </Stack.Navigator>
    )
  }
  function MyDrawer() {
    return (
      <Drawer.Navigator >
         <Drawer.Screen name="Categories" component={CategoriesScreen} options={{title : 'All Categories'}}/> 
      
        
        <Drawer.Screen  name='fav' component={Fav} options={{title : 'favorie',  headerShown: true, headerRight : MyButton}} />
      </Drawer.Navigator>
    );
  }
  

export default function App() {
    return (
        <NavigationContainer>
            {/* <MyDrawer /> */}
           <MyStack />
           
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})