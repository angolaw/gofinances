import React from "react";
import { Text, View, TextInput, Button } from "react-native";
export function Profile() {
  return (
    <View>
      <Text testID="profile-text">Perfil</Text>
      <TextInput placeholder="Nome" value="Willian" autoCorrect={false} />
      <TextInput placeholder="Sobrenome" value="Santana" autoCorrect={false} />
      <Button testID="butao" title="Enviar" onPress={() => {}} />
    </View>
  );
}
