import React from "react"
import { View, StyleSheet, Image, TouchableOpacity} from "react-native"


const App = () =>{
  const toogle = true;
  return <View style = {toogle ? style.conteinerLight :style.conteiner}>
    <TouchableOpacity onPress={() => {}}>

    <Image  source={ toogle 
    ? require('./assets/icons/eco-light.png')
    :  require('./assets/icons/eco-light-off.png')}
    
    style={toogle ? style.lightingON : style.lightingOff }/>

    <Image  source={ toogle 
    ? require('./assets/icons/logo-dio.png')
    :  require('./assets/icons/logo-dio-white.png')}
    
    style={toogle ? style.lightingON : style.lightingOff }/>  
    </TouchableOpacity>
  </View>
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
  },
  lightingON:{
    resizeMode: 'contain',
    alignSelf:"center",
    width:150,
    height: 150,
  },
  lightingOff:{
    resizeMode: 'contain',
    alignSelf:"center",
    tintColor: 'white',
    width:150,
    height: 150,
  },
});