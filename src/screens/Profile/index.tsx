import React from "react";
import { Text, View, TextInput, Button } from "react-native";
export function Profile() {
  return (
    <View>
      <Text>Perfil</Text>
      <TextInput placeholder="Nome" autoCorrect={false} />
      <TextInput placeholder="Sobrenome" autoCorrect={false} />
      <Button title="Enviar" onPress={() => {}} />
    </View>
  );
}
