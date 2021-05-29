import React, { useState } from 'react'
import { Image, SvgUri } from 'react-native-svg'
import  LogoSvg  from '../../assets/finance.svg'
import  AppleSvg  from '../../assets/apple.svg'
import  GoogleSvg  from '../../assets/google.svg'
import {Container, TitleWrapper, Subtitle, Title, Header, Footer, FooterWrapper} from './styles'
import { RFValue } from 'react-native-responsive-fontsize'
import { SignInButton } from '../../components/SignInButton'
import {useAuth} from '../../hooks/auth'
import { ActivityIndicator, Alert, Platform } from 'react-native'
import { useTheme } from 'styled-components'

export function Authentication(){
  const {user, signInWithGoogle, signInWithApple} = useAuth();
  const [isLoading, setIsLoading] = useState(false)
  const theme = useTheme()

  async function handleSignInGoogle(){
    try{
      setIsLoading(true)
      return await signInWithGoogle()
    }catch (error) {
      console.log(error);
      Alert.alert('Nao foi possivel conectar com a conta Google')
      
      setIsLoading(false)
    }
    
  }

  async function handleSignInApple(){
    try{
      setIsLoading(true)
      return await signInWithApple()
    }catch (error) {
      console.log(error);
      Alert.alert('Nao foi possivel conectar com a conta Apple')
      
      setIsLoading(false)
    }
    
  }
  
  return (
    <Container>
        <Header>
          <TitleWrapper>
              <LogoSvg width={RFValue(50)} height={RFValue(50)}   />
              <Title>Controle suas finanças de forma muito simples</Title>
          </TitleWrapper>
          <Subtitle>Faça seu login com uma das contas abaixo</Subtitle>

        </Header>

        <Footer>
          <FooterWrapper>
            <SignInButton onPress={handleSignInGoogle}  title="Entrar com o Google" svg={GoogleSvg} />
            {Platform.OS === 'ios' && <SignInButton onPress={handleSignInApple}  title="Entrar com a Apple" svg={AppleSvg} />}
            
          </FooterWrapper> 
        {isLoading && <ActivityIndicator color={theme.colors.shape} size="small"  style={{marginTop:18}}/>}
        </Footer>
      
    </Container>
  )
}