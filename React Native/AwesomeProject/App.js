import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, SafeAreaView, Pressable, Linking} from 'react-native';

const colorGitHub = '#010409';
const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/65567041?v=4';
const ulrtoGitHub = 'https://github.com/nathysanti';

export default function App() {
  const handlePressGotoGitHUb = async () =>{
    console.log('Verificando Link')
    const res = await Linking.canOpenURL(ulrtoGitHub);
    if(res){
      console.log('Link Aprovado');
      await Linking.openURL(ulrtoGitHub);
    }else{
      console.log('Link não foi aprovado');
    }
    
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor = {colorGitHub} barStyle = "light-content" />
    <View style = {styles.content}>
      <Image style = {styles.avatar} source = {{uri: imageProfileGitHub}}/>
      <Text 
        style = {[styles.text,styles.name]}
        accessibilityLabel = "Nome: Nathalia Santiago">
        Nathália Santiago</Text>
      <Text accessibilityLabel = "Nome de usuario: nathysanti" style = {[styles.text,styles.nickname]}>nathysanti</Text>
      <Text accessibilityLabel = "Descrição: Estudante de Engenharia de Software  | HTML | CSS | JavaScript | #ElasnaTech | Fullstack Developer" style = {[styles.text,styles.description]}>Estudante de Engenharia de Software  | HTML | CSS | JavaScript | #ElasnaTech | Fullstack Developer </Text> 
      <View>
        <Pressable onPress={handlePressGotoGitHUb}>
        <Text style = {styles.button}> Open in GitHub</Text>
        </Pressable>
      </View>
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
  button:{
    backgroundColor: '#787F87',
    padding:20,
    marginTop:20,
    borderRadius:100,
  },
});