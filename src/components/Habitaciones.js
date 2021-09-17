import React from 'react';
import { Text, View, Image , TouchableHighlight, Modal, ScrollView, Button} from 'react-native'
import styles from '../styles/Styles'


const Habitaciones = ({modalRoom, setModalRoom,modalRoom2, setModalRoom2,modalRoom3, setModalRoom3,modalRoom4, setModalRoom4
,modalRoom5, setModalRoom5}) => {
    return (
      <>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalRoom}
          onRequestClose={() => alert("Modal has been closed.")}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Habitacion 1</Text>
              <Text>La Habitación #1 es nuestra habitación premium</Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalRoom(!modalRoom);
                }}
              ></Button>
            </View>
          </View>
        </Modal>
        {
          //empieza segundo modal
        }
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalRoom2}
          onRequestClose={() => alert("Modal has been closed.")}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Habitación 2</Text>
              <Text>La habitacion #2 es la habitacion economica</Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalRoom2(!modalRoom2);
                }}
              ></Button>
            </View>
          </View>
        </Modal>
        {
          //empieza tercer modal
        }
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalRoom3}
          onRequestClose={() => alert("Modal has been closed.")}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Habitación 3</Text>
              <Text>La habitacion #3 es nuestra habitacion Familiar</Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalRoom3(!modalRoom3);
                }}
              ></Button>
            </View>
          </View>
        </Modal>
        {
          //empieza cuarto modal
        }
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalRoom4}
          onRequestClose={() => alert("Modal has been closed.")}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Habitación 4</Text>
              <Text>La habitacion #4 es nuestra habitacion matrimonial</Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalRoom4(!modalRoom4);
                }}
              ></Button>
            </View>
          </View>
        </Modal>
        {
          //empieza quinto modal
        }
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalRoom5}
          onRequestClose={() => alert("Modal has been closed.")}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Habitación 5</Text>
              <Text>
                La habitacion #5 es nuestra habitacion familiar mas grande,
                alcanza hasta 6 personas
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalRoom5(!modalRoom5);
                }}
              ></Button>
            </View>
          </View>
        </Modal>
        {
          // aqui empieza el desarrollo de la guia
        }
        <Text style={styles.titulo}>Tipos de Habitación</Text>
        <ScrollView horizontal>
          <View>
            <TouchableHighlight
              onPress={() => {
                setModalRoom(!modalRoom);
              }}
            >
              <Image
                style={styles.ciudad}
                source={require("../img/habitacion1.jpg")}
              />
            </TouchableHighlight>
          </View>
          <View>
          <TouchableHighlight
              onPress={() => {
                setModalRoom2(!modalRoom2);
              }}
            >
            <Image
              style={styles.ciudad}
              source={require("../img/habitacion2.jpg")}
            />
            </TouchableHighlight>
          </View>
          <View>
          <TouchableHighlight
              onPress={() => {
                setModalRoom3(!modalRoom3);
              }}
            >
            <Image
              style={styles.ciudad}
              source={require("../img/habitacion3.jpg")}
            />
            </TouchableHighlight>
          </View>
          <View>
          <TouchableHighlight
              onPress={() => {
                setModalRoom4(!modalRoom4);
              }}
            >
            <Image
              style={styles.ciudad}
              source={require("../img/habitacion4.jpg")}
            />
            </TouchableHighlight>
          </View>
          <View>
          <TouchableHighlight
              onPress={() => {
                setModalRoom5(!modalRoom5);
              }}
            >
            <Image
              style={styles.ciudad}
              source={require("../img/habitacion5.jpg")}
            />
            </TouchableHighlight>
          </View>
        </ScrollView>
      </>
    );
}
 
export default Habitaciones;