import styled, {css} from 'styled-components/native'
import {TextInput} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  active: boolean;
}

export const Container = styled(TextInput)<Props>`
  width: 100%;
  padding: 18px;
  height: ${RFValue(56)}px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.shape};
  margin-bottom: 8px;
  font-size:${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text};
  ${({active})=> active && css`
    border-width: 2px;
    border-color: ${({theme}) => theme.colors.attention};
  `};
  
`;
