import React, {useState} from 'react'
import { Button } from '../../components/Forms/Button'
import { InputForm } from '../../components/InputForm'
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import {Keyboard, Modal, TouchableWithoutFeedback} from 'react-native'
import { Container, Header, Title,Form, Fields, TransactionTypes } from './styles'
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import {CategorySelect} from '../CategorySelect'
import { useForm } from 'react-hook-form';

interface FormDataProps {
  name: string;
  amount:string;
}
export function Register(){
    const [transactionType, setTransactionType] = useState('')
    const [categoryModalShow, setCategoryModalShow] = useState(false)
    const [category, setCategory] = useState({
      key:'category',
      name: 'Categoria',

    })
    function handleSelectedTransactionType(type:'up' | 'down'){
      setTransactionType(type);
      
    }
    function handleShowModal(){
      setCategoryModalShow(!categoryModalShow)
     
      
    }
    function handleRegister(form:FormDataProps){
      const data = {
        name: form.name,
        amount:form.amount,
        transactionType,
        category: category.key
      }
      console.log(data);
      

    }
    const {control, handleSubmit} = useForm()
    
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        <Container>
          <Header>
            <Title>Compras</Title>
          </Header>
          <Form>
            <Fields>
              <InputForm name="name" 
                autoCapitalize="sentences" 
                autoCorrect={false} placeholder="Nome"  
                control={control}
            />
              <InputForm name="amount" keyboardType="numeric" placeholder="Valor"  control={control}/>
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
            <CategorySelectButton onPress={handleShowModal} title={category.name} />

            </Fields>
            <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
            

          </Form>
          <Modal visible={categoryModalShow} >
            <CategorySelect 
              category={category}
              setCategory={setCategory}
              closeSelectCategory={handleShowModal}
            ></CategorySelect>
          </Modal>


      </Container>
      </TouchableWithoutFeedback>
    )
}