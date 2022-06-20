import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, SafeAreaView } from 'react-native';

const colorGitHub = '#010409';
const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/65567041?v=4';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor = {colorGitHub} barStyle = "light-content" />
    <View style = {styles.content}>
      <Image style = {styles.avatar} source = {{uri: imageProfileGitHub}}/>
      <Text style = {[styles.text,styles.name]}>Nathália Santiago</Text>
      <Text style = {[styles.text,styles.nickname]}>nathysanti</Text>
      <Text style = {[styles.text,styles.description]}>Estudante de Engenharia de Software  | HTML | CSS | JavaScript | #ElasnaTech | Fullstack Developer </Text> 
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
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar:{
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  text: {
    fontSize: 15,
    color: '#ffffff',
  },
  name:{
    fontWeight: 'bold',
    fontSize: 20,
    marginTop:20,
  },
  nickname:{
    fontSize:14,
    color:'#787F87',
  },
  description:{
    fontWeight: 'bold',
    fontSize:12,
    marginTop:10,
    color:'#878A8D',
  },
});