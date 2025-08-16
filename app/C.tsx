import React, { useState } from "react";
import { View, Text, Button, ActivityIndicator, StyleSheet } from "react-native";

export interface Fact {
  id: string;
  text: string;
  source: string;
  source_url: string;
  language: string;
  permalink: string;
}

export default function C() {
  const [fato, setFato] = useState<Fact | null>(null);  // guarda os dados da API
  const [carregando, setCarregando] = useState(false);  // controle do loading

  async function buscarFato() {
    setCarregando(true);              // começa o loading
    try {
      const r = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
      const info: Fact = await r.json(); // converte pra interface Fact
      setFato(info);
    } catch (e) {
      console.log("Erro:", e);
    }
    setCarregando(false);             // encerra o loading
  }

  return (
    <View style={s.container}>
      <Text style={s.titulo}>Página C</Text>
      <Button title="Novo Fato Curioso" onPress={buscarFato} disabled={carregando} />

      {carregando && <ActivityIndicator style={{ marginTop: 20 }} />}

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
