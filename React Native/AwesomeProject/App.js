import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const colorGitHub = '#010409';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor = {colorGitHub} barStyle = "light-content" ></StatusBar>
    <View >
      <Text style={styles.text}>Hello World!</Text>
      <StatusBar style="auto" />
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
  text: {
    fontSize: 30,
    color: '#fff'
  },
});
