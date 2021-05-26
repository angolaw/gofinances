import React from 'react'
import { TouchableOpacityProps } from 'react-native'

interface TransactionTypeButtonProps extends TouchableOpacityProps{
  type: 'up'|'down';
  icon:string;
  title:string;
}

import {Container, Title, Icon } from './styles'
export function TransactionTypeButton({type, icon, title, ...rest}:TransactionTypeButtonProps){
  return (
    <Container {...rest} >
      <Icon type={type} name={icon} />
      <Title>{title}</Title>
      
    </Container>
  )
}