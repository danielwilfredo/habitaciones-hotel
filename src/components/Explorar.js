import React from "react";
import { Text, View, Image , TouchableHighlight, Modal, Button} from "react-native";
import styles from "../styles/Styles";

const Explorar = ({modalPlaces, setModalPlaces, modalPlaces2, setModalPlaces2, modalPlaces3, setModalPlaces3, modalPlaces4, setModalPlaces4}) => {
  return (
    <>
      {
        //primer modal
      }
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalPlaces}
          onRequestClose={() => alert("Modal has been closed.")}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Volcan</Text>
              <Text>Un Lugar turistico cerca de nuestro hotel es el Volcan</Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalPlaces(!modalPlaces);
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
          visible={modalPlaces2}
          onRequestClose={() => alert("Modal has been closed.")}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Ruta de las Flores</Text>
              <Text>Un Lugar turistico cerca de nuestro hotel es la ruta de las flores</Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalPlaces2(!modalPlaces2);
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
          visible={modalPlaces3}
          onRequestClose={() => alert("Modal has been closed.")}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Ataco</Text>
              <Text>Ataco es un pueblito magico que queda cerca de nuestro hotel</Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalPlaces3(!modalPlaces3);
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
          visible={modalPlaces4}
          onRequestClose={() => alert("Modal has been closed.")}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Playas</Text>
              <Text>Tenemos las mas hermosas playas del pais a menos de 5 minutos</Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalPlaces4(!modalPlaces4);
                }}
              ></Button>
            </View>
          </View>
        </Modal>
        {
          //empieza seccion de rutas cercanas
        }
      <Text style={styles.titulo}>Rutas Turisticas Cercanas al Hotel</Text>
      <View style={styles.listado}>
        <View style={styles.listaItem}>
          <TouchableHighlight
            onPress={() => {
              setModalPlaces(!modalPlaces);
            }}
          >
            <Image
              style={styles.mejores}
              source={require("../img/ruta1.jpg")}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.listaItem}>
        <TouchableHighlight
            onPress={() => {
              setModalPlaces2(!modalPlaces2);
            }}
          >
          <Image
            style={styles.mejores}
            source={require("../img/ruta2.jpg")}
          />
          </TouchableHighlight>
        </View>
        <View style={styles.listaItem}>
        <TouchableHighlight
            onPress={() => {
              setModalPlaces3(!modalPlaces3);
            }}
          >
          <Image
            style={styles.mejores}
            source={require("../img/ruta3.jpg")}
          />
          </TouchableHighlight>
        </View>
        <View style={styles.listaItem}>
        <TouchableHighlight
            onPress={() => {
              setModalPlaces4(!modalPlaces4);
            }}
          >
          <Image
            style={styles.mejores}
            source={require("../img/ruta4.jpg")}
          />
          </TouchableHighlight>
        </View>
      </View>
    </>
  );
};

export default Explorar;
