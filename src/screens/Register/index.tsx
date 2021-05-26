import React from 'react'
import { Button } from '../../components/Forms/Button'
import { Input } from '../../components/Forms/Input'
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton'
import { Container, Header, Title,Form, Fields, TransactionTypeButtonContainer } from './styles'

export function Register(){
    return (
      <Container>
          <Header>
            <Title>Compras</Title>
          </Header>
          <Form>
            <Fields>
              <Input placeholder="Nome"/>
              <Input placeholder="Valor"/>
              <TransactionTypeButtonContainer>
                <TransactionTypeButton type="down" title="Outcome" icon="arrow-down-circle" />
                <TransactionTypeButton type="up" title="Income" icon="arrow-up-circle" />
            </TransactionTypeButtonContainer>
            </Fields>
            <Button title="Enviar"/>
            

          </Form>


      </Container>
    )
}