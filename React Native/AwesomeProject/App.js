import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
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
    backgroundColor: '#010409',
    alignItems: 'center',
    justifyContent: 'center',
    fontStyle: '#fff',
  },
  text: {
    fontSize: 30,
    color: '#fff'
  },
});
