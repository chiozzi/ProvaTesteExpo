import React, { useState } from "react";
import { View, Text, Button, ActivityIndicator, StyleSheet } from "react-native";

// Interface que define o formato (tipo) dos dados retornados da API
export interface Fact {
  id: string;
  text: string;
  source: string;
  source_url: string;
  language: string;
  permalink: string;
}

export default function C() {
  const [fato, setFato] = useState<Fact | null>(null);   // guarda o fato trazido da API
  const [carregando, setCarregando] = useState(false);   // controla se está carregando ou não

  // Função executada toda vez que o usuário clica no botão
  async function buscarFato() {
    setCarregando(true);        // ativa o loading
    try {
      // faz a requisição no endpoint informado na atividade
      const r = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
      const info: Fact = await r.json(); // converte o retorno para o formato (interface) Fact
      setFato(info);                     // guarda o dado recebido
    } catch (e) {
      console.log("Erro:", e);
    }
    setCarregando(false);      // desativa o loading ao terminar
  }

  return (
    <View style={s.container}>
      <Text style={s.titulo}>Página C</Text>

      {/* Botão que chama a API quando clicado */}
      <Button title="Novo Fato Curioso" onPress={buscarFato} disabled={carregando} />

      {/* Loading girando enquanto espera a resposta */}
      {carregando && <ActivityIndicator style={{ marginTop: 20 }} />}

      {/* Só mostra o fato se já existir retorno da API */}
      {fato && (
        <View style={s.caixa}>
          <Text style={s.texto}>{fato.text}</Text>
          <Text style={s.fonte}>Fonte: {fato.source || "Sem fonte"}</Text>
        </View>
      )}
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#d88bddff" },
  titulo: { fontSize: 24, marginBottom: 20, fontWeight: "bold", color: "#fff" },
  caixa: { width: "100%", backgroundColor: "#fff", padding: 15, borderRadius: 10, marginTop: 20 },
  texto: { fontSize: 18, fontWeight: "bold", color: "#59035fff" },
  fonte: { color: "#59035fff", marginTop: 5 },
});
