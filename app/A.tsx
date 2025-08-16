import { Text, View, StyleSheet, Image } from "react-native";

export default function A() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Página A</Text>
      <Image
        style={styles.imagem}
        source={require("../assets/images/iconprova.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#d88bddff",
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",

  },
  imagem: {
    width: 150,
    height: 170,
    borderRadius: 10,
  },
});
