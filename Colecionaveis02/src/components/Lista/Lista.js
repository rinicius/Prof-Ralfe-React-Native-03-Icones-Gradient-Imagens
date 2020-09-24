import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import estiloLista from "./estiloLista";
import { LinearGradient } from "expo-linear-gradient";

const Lista = ({ data }) => {
  const [item, setItem] = useState(data);

  return (
    <View style={estiloLista.areaItens}>
      <LinearGradient colors={["#14417b", "#92afd7", "#92afd7"]}>
        <Text style={estiloLista.itemTitulo}> {item.titulo} </Text>
      </LinearGradient>

      <Text style={estiloLista.itemSubTitulo}>
        {" "}
        {item.autor} ({item.anoPublicado}){" "}
      </Text>

      <LinearGradient colors={["#14417b", "#92afd7", "#92afd7"]}>
        <Image
          source={item.foto}
          style={estiloLista.itemFoto}
          resizeMode="contain"
        />
      </LinearGradient>
    </View>
  );
};

export default Lista;
