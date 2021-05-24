import React from 'react'
import { Container, Header, Photo, UserInfo, User, UserName, UserGreeting, UserWrapper, Icon } from './styles'
import { RFValue } from 'react-native-responsive-fontsize'
import { HighlightCard } from '../../components/HighlightCard'
export function Dashboard(){
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{uri: 'https://avatars.githubusercontent.com/u/46244572?v=4'}}  />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Willian</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCard/>
    </Container>
  )
}
