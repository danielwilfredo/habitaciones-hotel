import React from "react";
import { Text, View, Image, TouchableHighlight , ScrollView} from "react-native";
import styles from "../styles/Styles";

const Servicios = ({modalServices, setmodalServices}) => {
  return (
    <>
      <Text style={styles.titulo}>Servicios del Hotel</Text>
      <ScrollView horizontal>
        <View>
          <TouchableHighlight
            onPress={() => {
                setmodalServices(!modalServices);
            }}
          >
            <Image
              style={styles.services}
              source={require("../img/servicio1.png")}
            />
          </TouchableHighlight>
        </View>
        <View>
          <Image
            style={styles.services}
            source={require("../img/servicio3.png")}
          />
        </View>
        <View>
          <Image
            style={styles.services}
            source={require("../img/servicio4.png")}
          />
        </View>
        <View>
          <Image
            style={styles.services}
            source={require("../img/servicio5.png")}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Servicios;
