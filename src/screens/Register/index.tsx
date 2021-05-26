import React, {useState} from 'react'
import { Button } from '../../components/Forms/Button'
import { Input } from '../../components/Forms/Input'
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton'
import { Container, Header, Title,Form, Fields, TransactionTypes } from './styles'

export function Register(){
    const [transactionType, setTransactionType] = useState('')
    
    function handleSelectedTransactionType(type:'up' | 'down'){
      setTransactionType(type);
      console.log(type);
      
    }
    
    return (
      <Container>
          <Header>
            <Title>Compras</Title>
          </Header>
          <Form>
            <Fields>
              <Input placeholder="Nome"/>
              <Input placeholder="Valor"/>
              <TransactionTypes>
                <TransactionTypeButton 
                  isActive={transactionType === 'down'}

                  type="down" 
                  title="Outcome" 
                  icon="arrow-down-circle" 
                  onPress={()=> handleSelectedTransactionType('down')} 
                />
                <TransactionTypeButton 
                  isActive={transactionType === 'up'}
                  type="up" 
                  title="Income" 
                  icon="arrow-up-circle"  
                  onPress={()=> handleSelectedTransactionType('up')} 
                />
            </TransactionTypes>
            </Fields>
            <Button title="Enviar"/>
            

          </Form>


      </Container>
    )
}