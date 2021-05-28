import { BorderlessButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import {Feather} from '@expo/vector-icons'
export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background}
`;
export const Header = styled.View`

  background-color: ${({theme}) => theme.colors.primary};
  width:100%;
  height: ${RFValue(113)}px;
  justify-content: flex-end;
  align-items:center;
  padding-bottom: ${RFValue(19)}px;

`;
export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(27)}px;
  color: ${({theme})=> theme.colors.shape}
`;
export const ChartContainer = styled.View`
  width: 100%;
  align-items:center;
`;
export const Content = styled.ScrollView``

export const MonthSelect = styled.View`
  width:100%;
  flex-direction: row;
  align-items:center;
  justify-content:center;
`;

export const MonthSelectButton = styled(BorderlessButton)`

`;

export const MonthSelectIcon = styled(Feather)`
  font-size: ${RFValue(24)}px;
`;

export const Month = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.title};

`;
export const LoadContainer = styled.View`
  flex: 1;
  justify-content:center;
  align-items:center;
`;