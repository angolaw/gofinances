import React from 'react'
import { Image, SvgUri } from 'react-native-svg'
import  LogoSvg  from '../../assets/finance.svg'
import  AppleSvg  from '../../assets/apple.svg'
import  GoogleSvg  from '../../assets/google.svg'
import {Container, TitleWrapper, Subtitle, Title, Header, Footer, FooterWrapper} from './styles'
import { RFValue } from 'react-native-responsive-fontsize'
import { SignInButton } from '../../components/SignInButton'
export function Authentication(){
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
            <SignInButton  title="Entrar com o Google" svg={GoogleSvg} />
            <SignInButton  title="Entrar com a Apple" svg={AppleSvg} />
          </FooterWrapper>
        </Footer>
      
    </Container>
  )
}