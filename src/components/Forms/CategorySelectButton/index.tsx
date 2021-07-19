import React from "react";
import { Container, Category, Icon } from "./styles";
import { RectButtonProps } from "react-native-gesture-handler";
interface CategorySelectProps extends RectButtonProps {
  title: string;
  onPress: () => void;
}

export function CategorySelectButton({
  title,
  onPress,
  testID,
  ...rest
}: CategorySelectProps) {
  return (
    <Container onPress={onPress} {...rest} testID={testID}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}
