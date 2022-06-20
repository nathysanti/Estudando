import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, SafeAreaView } from 'react-native';

const colorGitHub = '#010409';
const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/65567041?v=4';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor = {colorGitHub} barStyle = "light-content" />
    <View >
      <Image style = {styles.avatar} source = {{uri: imageProfileGitHub}}/>
    
      
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorGitHub,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar:{
    height: 200,
    width: 200,
    borderRadius: 100,
  }
});
;