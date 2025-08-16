import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";


export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Prova expo teste!</Text>

      <View style={styles.containerbotoes}>
        <Link style={styles.botao} href="/A">Ir para a Página A</Link>
        <Link style={styles.botao} href="/B">Ir para a Página B</Link>
        <Link style={styles.botao} href="/C">Ir para a Página C</Link>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d88bddff"
  },
  titulo: {
    fontSize: 28,
    marginBottom: 10,
    fontWeight: "bold",
    paddingBottom: 15,
    color: '#421046ff',
  },
  containerbotoes: {
    gap: 20,
  },
  botao: {
    backgroundColor: "#59035fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    color: "#fff",
  },
});
