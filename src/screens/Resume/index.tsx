import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { HistoryCard } from '../../components/HistoryCard'
import { Content } from '../../components/HistoryCard/styles'
import { categories } from '../../utils/categories'
import { DataListProps } from '../Dashboard'
import { dataKey } from '../Register'
import { Container, Header, Title } from './styles'

interface CategoryData{
  name: string;
  total: string;
  color:string;
  percentage: number;
  percentageFormatted: string;
}

export function Resume(){

  const [transactions, setTransactions] = useState<DataListProps[]>([]);
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>([]);
  //load all transactions
  useEffect(() =>{
    async function loadTransactions(){

      const response = await AsyncStorage.getItem(dataKey);
      const data = response ? JSON.parse(response) : []
      setTransactions(data)
      const expenses = data.filter((expense:DataListProps) => expense.type === 'outcome')
      const expensesTotal = expenses.reduce((total:number, expense:DataListProps) => total + Number(expense.amount), 0);
      
      const totalByCategory:CategoryData[] = []
      categories.forEach(category => {
        let categorySum = 0;
        expenses.forEach((expense: DataListProps) =>{
          if(expense.category === category.key){
            categorySum+= Number(expense.amount)
          }
        })
        if(categorySum > 0){
          const total = categorySum.toLocaleString('pt-BR',{
            currency:'BRL',
            style:'currency'
          })
          const percentage = (categorySum / expensesTotal*100)
          const percentageFormatted = `${percentage.toFixed(0)}%`
          totalByCategory.push({
            name: category.name,
            total: total,
            color: category.color,
            percentage,
            percentageFormatted,
          })
        }
        
       
      })
              setTotalByCategories(totalByCategory)

      
    }
    loadTransactions();
  },[])


  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
       
      </Header>
        <Content  >
            
              {totalByCategories.map(category => (
              <HistoryCard 
                key={category.name}
                amount={category.total}
                title={category.name} 
                color={category.color}
            />
            ))}
        </Content>
       
    </Container>
  )
}