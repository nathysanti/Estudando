import React from "react"
import { View, StyleSheet } from "react-native"

const App = () =>{
  const Toogle = true;
  return <View style = {Toogle ? style.conteinerLight :style.conteiner}/>
}

export default App

const style = StyleSheet.create({
  conteiner:{
    flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  conteinerLight:{
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});