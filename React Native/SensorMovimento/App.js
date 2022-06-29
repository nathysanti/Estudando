import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(() => {
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle);
    });
    
    return () => subscription.remove();
  }, []);

  return <View style = {toggle ? style.conteinerLight :style.conteiner}>
    <TouchableOpacity onPress={handleChangeToggle}>

    <Image  source={ toggle 
    ? require('./assets/icons/eco-light.png')
    :  require('./assets/icons/eco-light-off.png')}
    
    style={toggle ? style.lightingON : style.lightingOff }/>

    <Image  source={ toggle 
    ? require('./assets/icons/logo-dio.png')
    :  require('./assets/icons/logo-dio-white.png')}
    
    style={toggle ? style.lightingON : style.lightingOff }/>  
    </TouchableOpacity>
  </View>
}

export default App;

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
