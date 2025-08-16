import React, { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";

export default function B() {

  const [nome, setNome] = useState("");   // Armazena o nome digitado
  const [email, setEmail] = useState(""); // Armazena o email digitado

  // Declara o tipo da lista (evita erro de 'never')
  const [lista, setLista] = useState<{ nome: string; email: string }[]>([]);

  // Adiciona o novo item à lista
  function adicionarNaLista() {
    if (nome.trim() !== "" && email.trim() !== "") {
      setLista([...lista, { nome, email }]); // Adiciona no array
      setNome("");   // Limpa campos
      setEmail("");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Página B</Text>

      {/* Campo de texto para Nome */}
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      {/* Campo de texto para Email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      {/* Botão para adicionar na lista */}
      <Button title="Adicionar" onPress={adicionarNaLista} />

      {/* Lista dos nomes e emails cadastrados */}
      <FlatList
        data={lista}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.texto}>Nome: {item.nome}</Text>
            <Text style={styles.texto}>Email: {item.email}</Text>
          </View>
        )}
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
  texto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#59035fff",
  },
  input: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  item: {
    marginTop: 15,
    alignItems: "center",
  },
});
