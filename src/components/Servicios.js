import React from "react";
import { Text, View, Image, TouchableHighlight , ScrollView, Modal, Button} from "react-native";
import styles from "../styles/Styles";

const Servicios = ({modalServices, setModalServices, modalServices2, setModalServices2, modalServices3, setModalServices3, modalServices4, setModalServices4}) => {
  return (
    <>
      {
        //primer modal
      }
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalServices}
          onRequestClose={() => alert("Modal has been closed.")}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Servicio a Habitacion</Text>
              <Text>Tenemos el mejor servicio a habitacion</Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalServices(!modalServices);
                }}
              ></Button>
            </View>
          </View>
        </Modal>
      {
        //2do modal
      }
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalServices2}
          onRequestClose={() => alert("Modal has been closed.")}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Restaurante</Text>
              <Text>El Restaurante que posee nuestro hotel es de la mejor calidad</Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalServices2(!modalServices2);
                }}
              ></Button>
            </View>
          </View>
        </Modal>
      {
        //3er modal
      }
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalServices3}
          onRequestClose={() => alert("Modal has been closed.")}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Sala de Relajacion</Text>
              <Text>En nuestra sala de relajacion, tenemos masajes relajantes, los mejores</Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalServices3(!modalServices3);
                }}
              ></Button>
            </View>
          </View>
        </Modal>
      {
        //4to modal
      }
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalServices4}
          onRequestClose={() => alert("Modal has been closed.")}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Gimnasio</Text>
              <Text>Contamos con un gimnasio que tiene todo lo necesario para que te ejercites</Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalServices4(!modalServices4);
                }}
              ></Button>
            </View>
          </View>
        </Modal>
        {
          //empieza seccion de servicios
        }

      <Text style={styles.titulo}>Servicios del Hotel</Text>
      <ScrollView horizontal>
        <View>
          <TouchableHighlight
            onPress={() => {
              setModalServices(!modalServices);
            }}
          >
            <Image
              style={styles.services}
              source={require("../img/servicio1.png")}
            />
          </TouchableHighlight>
        </View>
        <View>
        <TouchableHighlight
            onPress={() => {
              setModalServices2(!modalServices2);
            }}
          >
          <Image
            style={styles.services}
            source={require("../img/servicio3.png")}
          />
          </TouchableHighlight>
        </View>
        <View>
        <TouchableHighlight
            onPress={() => {
              setModalServices3(!modalServices3);
            }}
          >
          <Image
            style={styles.services}
            source={require("../img/servicio4.png")}
          />
          </TouchableHighlight>
        </View>
        <View>
        <TouchableHighlight
            onPress={() => {
              setModalServices4(!modalServices4);
            }}
          >
          <Image
            style={styles.services}
            source={require("../img/servicio5.png")}
          />
          </TouchableHighlight>
        </View>
      </ScrollView>
    </>
  );
};

export default Servicios;
