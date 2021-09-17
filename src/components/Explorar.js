import React from "react";
import { Text, View, Image , TouchableHighlight} from "react-native";
import styles from "../styles/Styles";

const Explorar = ({modalPlaces, setmodalPlaces}) => {
  return (
    <>
      <Text style={styles.titulo}>Rutas Turisticas Cercanas al Hotel</Text>
      <View style={styles.listado}>
        <View style={styles.listaItem}>
          <TouchableHighlight
            onPress={() => {
                setmodalPlaces(!modalPlaces);
            }}
          >
            <Image
              style={styles.mejores}
              source={require("../img/ruta1.jpg")}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.listaItem}>
          <Image
            style={styles.mejores}
            source={require("../img/ruta2.jpg")}
          />
        </View>
        <View style={styles.listaItem}>
          <Image
            style={styles.mejores}
            source={require("../img/ruta3.jpg")}
          />
        </View>
        <View style={styles.listaItem}>
          <Image
            style={styles.mejores}
            source={require("../img/ruta4.jpg")}
          />
        </View>
      </View>
    </>
  );
};

export default Explorar;
