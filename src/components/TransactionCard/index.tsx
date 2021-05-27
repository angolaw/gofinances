import React from 'react'
import { Container, Title, Amount, Footer,Icon, Category, CategoryName,Date } from './styles'
import { Text } from 'react-native'
import {format, parse} from 'date-fns'
import { categories } from '../../utils/categories'
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
interface Props extends TransactionCardProps{
  data: TransactionCardProps
}

export function TransactionCard({data}:Props){

  const category = categories.filter(item => item.key === data.category)[0]
  return (
    <Container>
        <Title>{data.name}</Title>
        <Amount type={data.type} >
          {data.type === 'outcome' && '-'} 
          {data.amount}
        </Amount>
        <Footer>
            <Category>
              <Icon name={category.icon} />
              <CategoryName>{category.name}</CategoryName>
            </Category>
            <Date>{data.date}</Date>

        </Footer>
    </Container>
  )
}