import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.title};
  text-align: center;
  flex: 1;
`
export const Button = styled(RectButton)`
  background-color: ${({theme}) => theme.colors.shape};
  height: ${RFValue(56)}px;
  margin-left:16px;
  margin-right:16px;
  margin-bottom: 16px;
  border-radius: 5px;
  align-items: center;
  flex-direction: row;

`;

export const ImageContainer = styled.View`
  height:100%;
  justify-content:center;
  align-items:center;
  padding: ${RFValue(16)}px;
  border-color: ${({theme}) => theme.colors.background};
  border-right-width: 1px;
`;
