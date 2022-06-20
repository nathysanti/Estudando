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
      <Text style = {styles.text}>Nathália Santiago</Text>
      <Text style = {styles.text}>nathysanti</Text>
      <Text style = {styles.text}>Estudante de Engenharia de Software  | Hiring Coders#3 | HTML | CSS | JavaScript | #ElasnaTech | Front-End Developer </Text> 
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
});