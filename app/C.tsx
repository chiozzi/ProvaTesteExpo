import React, { useState } from "react";
import { ActivityIndicator, Button, StyleSheet, Text, View } from "react-native";

// Definindo o "tipo" (interface) para os dados que a API retorna
interface Fact {
  id: string;
  text: string;
  source: string;
}

export default function C() {
  // fact guarda o dado retornado pela API
  const [fact, setFact] = useState<Fact | null>(null);
  // loading indica se a API ainda está carregando
  const [loading, setLoading] = useState(false);

  // Função chamada ao clicar no botão
  const buscarFato = async () => {
    try {
      setLoading(true); // mostra o loading
      // Faz a requisição ao endpoint
      const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
      const data = await response.json();

      // Salva os dados recebidos dentro do "tipo" Fact
      const novoFato: Fact = {
        id: data.id,
        text: data.text,
        source: data.source,
      };

      setFact(novoFato); // guarda o resultado no state
    } catch (error) {
      console.error("Erro ao buscar fato:", error);
    } finally {
      setLoading(false); // esconde o loading
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Página C</Text>
      {/* Botão para buscar o fato */}
      <Button title="Buscar Fato Aleatório" onPress={buscarFato} />

      {/* Mostra o loading enquanto espera a API */}
      {loading && <ActivityIndicator size="large" color="blue" style={{ marginTop: 20 }} />}

      {/* Mostra o fato retornado pela API quando existir */}
      {fact && (
        <View style={styles.card}>
          <Text style={styles.texto}>{fact.text}</Text>
          <Text style={styles.fonte}>Fonte: {fact.source}</Text>
        </View>
      )}
    </View>
  );
}

// Estilos básicos da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#d88bddff",
  },

  titulo: { 
    fontSize: 20, 
    marginBottom: 20, 
    fontWeight: "bold" 
  },
  card: {
    marginTop: 20,
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    width: "100%",
    backgroundColor: "#f5f5f5",
  },
  texto: { 
    fontSize: 16, 
    marginBottom: 10 
  },
  fonte: { 
    fontSize: 12, 
    color: "gray" 
  },
});
