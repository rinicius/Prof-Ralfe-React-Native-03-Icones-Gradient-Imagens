import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import estiloColecao from "./estiloColecao";
import Lista from "../../components/Lista/Lista";
import { MaterialIcons } from "@expo/vector-icons";

function Colecao({ navigation, route }) {
  const [colecao, setColecao] = useState([
    {
      id: "1",
      titulo: "Admirável Mundo Novo",
      descricao:
        "Um clássico modernom o romance dsitópico de Aldous Huxley é...",
      autor: "Aldous Huxley",
      anoPublicado: "1932",
      foto: require("../../../assets/itens/1.jpg"),
    },
    {
      id: "2",
      titulo: "1984",
      descricao:
        "Uma das obras mais contundentes e influentes do século XX ganha nova...",
      autor: "Geroge Orwell",
      anoPublicado: "1949",
      foto: require("../../../assets/itens/2.jpg"),
    },
    {
      id: "3",
      titulo: "Laranja Mecânica",
      descricao:
        "Publicado pela primeira vez em 1962, e imortalizado 9 anos depois pelo filme de Stanley Kubrick...",
      autor: "Anthony Burgess",
      anoPublicado: "1962",
      foto: require("../../../assets/itens/3.jpg"),
    },
    {
      id: "4",
      titulo: "Neuromancer",
      descricao:
        "O céu sobre o porto tinha cor de televisão num canal fora do ar. Considerada a obra percursora...",
      autor: "William Gibson",
      anoPublicado: "1984",
      foto: require("../../../assets/itens/4.jpg"),
    },
  ]);

  const voltar = () => {
    navigation.navigate("Inicial");
  };

  return (
    <View style={estiloColecao.container}>
      <View style={estiloColecao.header}>
        <TouchableOpacity onPress={voltar}>
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={estiloColecao.texto}>Coleção</Text>
        <MaterialIcons name="add" size={24} color="white" />
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={colecao}
        renderItem={({ item }) => <Lista data={item} />}
      />
    </View>
  );
}

export default Colecao;
