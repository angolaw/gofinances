import React, {useEffect, useState} from 'react'
import { Button } from '../../components/Forms/Button'
import { InputForm } from '../../components/InputForm'
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import {Keyboard, Modal, TouchableWithoutFeedback, Alert} from 'react-native'
import { Container, Header, Title,Form, Fields, TransactionTypes } from './styles'
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import {CategorySelect} from '../CategorySelect'
import { useForm } from 'react-hook-form';
import * as Yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid'
import {useNavigation} from '@react-navigation/native'


interface FormDataProps {
  name: string;
  amount:string;
}
const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  amount: Yup.number().required('O valor é obrigatório').typeError('Informe o valor numérico').positive('O valor deve ser maior que zero')
})
export const dataKey = '@gofinances:transactions'

export function Register(){
    const [transactionType, setTransactionType] = useState('')
    const [categoryModalShow, setCategoryModalShow] = useState(false)
    const [category, setCategory] = useState({
      key:'category',
      name: 'Categoria',

    })
    const {control, handleSubmit, reset, formState: {errors}} = useForm({resolver: yupResolver(schema)})
    const navigation = useNavigation()
    function handleSelectedTransactionType(type:'income' | 'outcome'){
      setTransactionType(type);
      
    }
    function handleShowModal(){
      setCategoryModalShow(!categoryModalShow)
    }
  
    async function handleRegister(form:FormDataProps){
      if(!transactionType){
        return Alert.alert('Escolha o tipo de transação')
      }
      if(category.key === 'category'){
        return Alert.alert('Selecione uma categoria')
      }

      const newTransaction = {
        id: String(uuid.v4()),
        name: form.name,
        amount:form.amount,
        type:transactionType,
        category: category.key,
        date: new Date()
      }
      try {
        const oldData = await AsyncStorage.getItem(dataKey);
        const currentData = oldData ? JSON.parse(oldData) : []
        const newData = [
          ...currentData,
          newTransaction
        ]
        
        await AsyncStorage.setItem(dataKey, JSON.stringify(newData));
        reset()
        setTransactionType('')
        setCategory({
      key:'category',
      name: 'Categoria',})
      navigation.navigate('Listagem')
      } catch (error) {
        console.log(error);
        Alert.alert('Nao foi possivel salvar os dados no Async')
        
      }
    }
    
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        <Container>
          <Header>
            <Title>Compras</Title>
          </Header>
          <Form>
            <Fields>
              <InputForm name="name" 
              error={errors.name && errors.name.message}
                autoCapitalize="sentences" 
                autoCorrect={false} placeholder="Nome"  
                control={control}
            />
              <InputForm 
              error={errors.amount && errors.amount.message}

              name="amount" keyboardType="numeric" placeholder="Valor"  control={control}/>
              <TransactionTypes>
                <TransactionTypeButton 
                  isActive={transactionType === 'outcome'}

                  type="down" 
                  title="Outcome" 
                  icon="arrow-down-circle" 
                  onPress={()=> handleSelectedTransactionType('outcome')} 
                />
                <TransactionTypeButton 
                  isActive={transactionType === 'income'}
                  type="up" 
                  title="Income" 
                  icon="arrow-up-circle"  
                  onPress={()=> handleSelectedTransactionType('income')} 
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