import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    banner: {
      height: 250,
      flex: 1,
    },
    titulo: {
      fontWeight: "bold",
      fontSize: 24,
      marginVertical: 10,
      textAlign:'center',
      backgroundColor:'#fff',
      borderColor:'#000',
      borderStyle:'solid',
      borderWidth:1,
      borderRadius:5,
      margin:5,
      opacity:0.85,
      color:'#000'
    },
    ciudad: { 
         width:250,
         height:200, 
         marginRight: 10,
         borderRadius:5
     },
    contenedor: {
      marginHorizontal: 100,
      backgroundColor:'red'
    },
    mejores: {
      width: "100%",
      height: 200,
      marginVertical: 5,
      borderRadius:5,
    },
    listaItem: {
      flexBasis: "49%",
    },
    listado: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    subtitulo:{
      fontWeight:'bold',
      fontSize:14,
      justifyContent:'center'
    },
    Modal:{
      backgroundColor:'#fff',
      margin:50,
      padding:40,
      borderRadius:10,
      flex:1
    },
    vistaModal:{
      backgroundColor:"#000000aa",
      flex:1
    },
    services: {
        width: 100,
        height: 100,
        margin:10
      },
  });

  export default styles;