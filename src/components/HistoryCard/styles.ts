import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

interface ContainerProps{
  color: string;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: ${RFValue(48)}px;
 
  flex-direction: row;
  justify-content:space-between;
  align-items:center;
  background-color: ${({theme}) => theme.colors.shape};
  padding: 13px 24px;
  border-left-width: 5px;
  border-left-color: ${({color}) => color};
  margin-bottom: 10px;
`;
export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.title}
`;
export const Amount = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.title};
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle:{padding: 24, flex:1}
})`
  
`;
