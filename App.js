import React,{useState} from 'react';
import { StyleSheet, Text, View, Dimensions,Button } from 'react-native';
import Map from './components/Map';
import Modal from './components/Modal';
import Panel from './components/Panel';
import Input from './components/input';
import List from './components/List';

export default function App() {
  const [puntos, setPuntos] = useState([])
  const [puntosTem, setPuntoTemp] = useState([])
  const [nombre, setNombre] = useState('')
  const [visibilityFilter, setVisibilityFilter] = useState('new_puntos')
  const [visibility, setVisibility] = useState(false)
  const [pointsFilter,setpointsFilter]=useState(true)

  const togglePointsFilter=()=>setpointsFilter(pointsFilter)

  const handleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter('new_puntos')
    setPuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
  }

  const handleChangeText = text => {
    setNombre(text)
  }

  const handleSubmit = () => {
    const newPuntos = { coordinate: puntosTem, name: nombre };
    setPuntos(puntos.concat(newPuntos))
    setVisibility(false)
    setNombre('')
  }

  const handleLista = () => {
    setVisibilityFilter('all_puntos')
    setVisibility(true)
  }

  console.log(puntos)
console.log(puntosTem)

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} puntos={puntos} pointsFilter={pointsFilter}/>
      <Panel onPressLeft={handleLista} textLeft='Lista' togglePointsFilter={togglePointsFilter}/>
      <Modal visibility={visibility}>
        {visibilityFilter === 'new_puntos'
          ?
          <View style={styles.form}> 
            <Input
              title='nombre'
              placeholder='Nombre del punto'
              onChangeText={handleChangeText}
            />
            <Button title='Aceptar' onPress={handleSubmit}/>
          </View>
          : <List puntos={puntos} closeModal={()=>setVisibility(false)}/>
        }
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  form:{
    padding:15,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
