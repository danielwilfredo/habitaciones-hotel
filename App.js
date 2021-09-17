import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View, ScrollView , SafeAreaView} from 'react-native';
import Habitaciones from './src/components/Habitaciones'
import Explorar from './src/components/Explorar'
import Servicios from './src/components/Servicios'

export default function App() {

  //creando state para manejar los modales
  const [modalRoom, setModalRoom]=useState(false);
  const [modalServices, setModalServices]=useState(false);
  const [modalPlaces, setModalPlaces]=useState(false);
  const [modalRoom2, setModalRoom2]=useState(false);
  const [modalServices2, setModalServices2]=useState(false);
  const [modalPlaces2, setModalPlaces2]=useState(false);
  const [modalRoom3, setModalRoom3]=useState(false);
  const [modalServices3, setModalServices3]=useState(false);
  const [modalPlaces3, setModalPlaces3]=useState(false);
  const [modalRoom4, setModalRoom4]=useState(false);
  const [modalServices4, setModalServices4]=useState(false);
  const [modalPlaces4, setModalPlaces4]=useState(false);
  const [modalRoom5, setModalRoom5]=useState(false);



  return (
    
      <View style={styles.container}>
        
        <ScrollView>
          <Habitaciones
          modalRoom={modalRoom}
          setModalRoom={setModalRoom}/>
          <Servicios
          modalServices={modalServices}
          setModalServices={setModalServices}/>
          <Explorar
          modalPlaces={modalPlaces}
          setModalPlaces={setModalPlaces}/>
        </ScrollView>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d8386',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:35,
    
  },
});
