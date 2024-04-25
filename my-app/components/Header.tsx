import { View, Image } from "react-native"
import { StyleSheet,Text } from "react-native"

function Header(){
    return(
        <View style={style.conteiner}>
            <Image 
            source={require("../assets/Senai perto.png")} />
            <Text style={style.titulo}>Login</Text>
        </View>

    )
}

export default Header
const style = StyleSheet.create({
conteiner:{
    width: "100%",
    height: 200,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center"

},
titulo:{
    color:"#ffffff"
})