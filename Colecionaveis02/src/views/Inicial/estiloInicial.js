import { StyleSheet } from "react-native";

const estiloInicial = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    height: 40,
    width: "100%",
    backgroundColor: "#081a31",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  fundo: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  botaoBackground: {
    width: 140,
    height: 100,
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#14417b",
  },
  borda: {
    backgroundColor: "#081a31",
    width: "80%",
    height: 230,
    borderRadius: 10,
  },
  texto: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  botaoContainer: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 5,
    height: 40,
    borderWidth: 2,
    borderColor: "#e8f2e9",
    backgroundColor: "#14417b",
    justifyContent: "center",
    alignItems: "center",
  },
  botaoTexto: {
    fontSize: 18,
    borderWidth: "1px",
    backgroundColor: "#FFFFFF",
    borderColor: "#e8f2e9",
    color: "#000000",
    fontWeight: "bold",
  },
});

export default estiloInicial;
