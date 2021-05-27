import React from 'react'
import { Container, Title, Amount, Footer,Icon, Category, CategoryName,Date } from './styles'
import { Text } from 'react-native'
import {format, parse} from 'date-fns'
export interface TransactionCardProps {

    name: string;
    amount:string;
    type: 'income' | 'outcome';
    date: string;
    category: Category;
  
}

interface Category{
  name:string;
  icon:string;
}

export function TransactionCard({name,amount, type,date,category}:TransactionCardProps){
  return (
    <Container>
        <Title>{name}</Title>
        <Amount type={type} >
          {type === 'outcome' && '-'} 
          {amount}
        </Amount>
        <Footer>
            <Category>
              <Icon name={category.icon} />
              <CategoryName>{category.name}</CategoryName>
            </Category>
            <Date>{date}</Date>

        </Footer>
    </Container>
  )
}