import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
export const Container = styled.View`
  flex:1;

  
`;
export const Header = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.colors.primary};
  height: 70%;
  justify-content: space-between;
  
`;
export const TitleWrapper = styled.View`
  justify-content:center;
  align-items:center;
  margin-top: ${getStatusBarHeight()}

`;
export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(30)}px;
  color: ${({theme}) => theme.colors.shape};
  text-align: center;
  margin-top: 45px;

`;
export const Subtitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(16)}px;
    color: ${({theme}) => theme.colors.shape};
    text-align: center;
    margin-top:80px;
    margin-bottom: 67px;
`
export const Footer = styled.View`
   width: 100%;
  background-color: ${({theme}) => theme.colors.secondary};
  height: 30%;
`;


export const FooterWrapper = styled.View`
   margin-top: ${RFPercentage(-4)}px;
   padding-top: 0 32px;
   justify-content:space-between;
`;