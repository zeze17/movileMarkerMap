import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Modal } from 'react-native';
import Map from './components/Map';
import Modal from './components/Modal';
import Panel from './components/Panel';
import Input from './components/input';
import { useState } from 'react';

export default function App() {
  const [puntos, setPuntos] = useState([])
  const [puntosTem, setPuntoTemp] = useState({})
  const [nombre, setNombre] = useState('')
  const [visibility, setVisibility] = useState(false)

  const handleLongPress = ({ nativeEvent }) => {
    setPuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
  }

  const handleChangeText = text => {
    setNombre(text)
  }

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} />
      <Modal visibility={true}>
        <Input
          title='nombre'
          placeholder='Nombre del punto'
          onChangeText={handleChangeText}
        />
      </Modal>
      <Panel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
