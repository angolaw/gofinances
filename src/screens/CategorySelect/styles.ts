import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import {Feather} from '@expo/vector-icons'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import theme from '../../global/styles/theme';
interface CategorySelectProps{
  isActive: boolean;
}
export const Container = styled(GestureHandlerRootView)`
  flex:1;
  background-color: ${({theme}) => theme.colors.background}
`;
export const Header = styled.View`
  justify-content:flex-end;
  align-items: center;
  width:100%;
  height: ${RFValue(113)}px;
  background-color: ${({theme}) => theme.colors.primary};
  padding-bottom: 19px;
`;
export const HeaderTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({theme})=>theme.colors.shape}
`;
export const Category = styled.TouchableOpacity<CategorySelectProps>`
  width: 100%;
  padding: ${RFValue(15)}px;
  flex-direction: row;
  align-items: center;

  background-color: ${({isActive}) => isActive ? theme.colors.secondary_light : theme.colors.background}


`;
export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`;
export const Name = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.title}
`;
export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({theme}) => theme.colors.text}
`;
export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;