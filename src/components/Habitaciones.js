import React from 'react';
import { Text, View, Image , TouchableHighlight, Modal, ScrollView, Button} from 'react-native'
import styles from '../styles/Styles'


const Habitaciones = ({modalRoom, setModalRoom}) => {
    return (  
        <>
         <Modal transparent={true}
        animationType="slide"
        visible={modalRoom}
        onRequestClose={()=>(
          alert("Modal has been closed.")
        )}>

          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Ir a la playa 
              </Text>
              <Text>El salvador cuenta con hermosas playas a nivel centroamericano</Text>
              <Button title="Cerrar" onPress={()=>{setModalRoom(!modalRoom)}}>
              </Button>
              </View> 
          </View>

        </Modal>
        <Text style={styles.titulo}>Tipos de Habitación</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight
              onPress={()=>{setModalRoom(!modalRoom)}}>
              <Image
                style={styles.ciudad}
                source={require("../img/habitacion1.jpg")}
              />
              </TouchableHighlight>
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require("../img/habitacion2.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require("../img/habitacion3.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require("../img/habitacion4.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require("../img/habitacion5.jpg")}
              />
            </View>
          </ScrollView>
        </>


    );
}
 
export default Habitaciones;