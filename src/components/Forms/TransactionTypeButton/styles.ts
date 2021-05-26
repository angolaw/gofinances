import { RFValue } from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native'
import {Feather} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

interface IconProps {
  type: 'up'|'down'
}
interface ContainerProps {
  isActive:boolean;
  type: 'up'|'down'
}

export const Container = styled.View<ContainerProps>`
  width: 48%;
  height: ${RFValue(56)}px;
  border: 1.5px solid ${({theme})=>theme.colors.text};
  border-radius: 5px;
  

  ${({isActive, type}) => isActive && type === 'down' && css`background-color:${({theme}) => theme.colors.attention_light}` }
  ${({isActive, type}) => isActive && type === 'up' && css`background-color:${({theme}) => theme.colors.success_light}` }
  ${({isActive}) => isActive && css`border:0` }

`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  line-height:${RFValue(21)}px;
  color: ${({theme}) => theme.colors.title};
`
export const Icon = styled(Feather)<IconProps>`
  font-size: 20px;
  color: ${({theme, type}) => type === 'down' ? theme.colors.attention : theme.colors.success};
  margin-right: 12px;
`
export const Button = styled(RectButton)`
  justify-content:center;
  align-items: center;
  flex-direction: row;
  padding:16px;

`;