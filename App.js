import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Title from './components/Title';
import ListCards from './components/ListCards';
export default function App() {
  return (
    <View style={{flex:1, flexDirection: 'column', backgroundColor: 'lightgray'}}>
      <Header/>
      <Title/>
      <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
        <ListCards/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
