import React from 'react'
import { Image, SvgUri } from 'react-native-svg'
import  LogoSvg  from '../../assets/finance.svg'
import  AppleSvg  from '../../assets/apple.svg'
import  GoogleSvg  from '../../assets/google.svg'
import {Container, TitleWrapper, Subtitle, Title, Header, Footer, FooterWrapper} from './styles'
import { RFValue } from 'react-native-responsive-fontsize'
import { SignInButton } from '../../components/SignInButton'
import {useAuth} from '../../hooks/auth'
import { Alert } from 'react-native'
export function Authentication(){
  const {user, signInWithGoogle, signInWithApple} = useAuth();
  console.log(user);

  async function handleSignInGoogle(){
    try{
      await signInWithGoogle()
    }catch (error) {
      console.log(error);
      Alert.alert('Nao foi possivel conectar com a conta Google')
      
    }
  }

  async function handleSignInApple(){
    try{
      await signInWithApple()
    }catch (error) {
      console.log(error);
      Alert.alert('Nao foi possivel conectar com a conta Apple')
      
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
            <SignInButton onPress={handleSignInApple}  title="Entrar com a Apple" svg={AppleSvg} />
          </FooterWrapper>
        </Footer>
      
    </Container>
  )
}