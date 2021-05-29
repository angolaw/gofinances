import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useCallback, useEffect, useState } from 'react'
import { HistoryCard } from '../../components/HistoryCard'
import { categories } from '../../utils/categories'
import { DataListProps } from '../Dashboard'
import { dataKey } from '../Register'
import { Container, Header, Title, ChartContainer,Content, MonthSelect,
MonthSelectButton,
MonthSelectIcon,
Month, 
LoadContainer} from './styles'
import {useTheme} from 'styled-components'
import {VictoryPie} from 'victory-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs'
import {addMonths, subMonths, format} from 'date-fns'
import {ptBR} from 'date-fns/locale'
import { useFocusEffect } from '@react-navigation/native'
import { ActivityIndicator } from 'react-native'
import { useAuth } from '../../hooks/auth'

interface CategoryData{
  name: string;
  totalFormatted: string;
  total:number;
  color:string;
  percentage: number;
  percentageFormatted: string;
}

export function Resume(){
  const theme = useTheme()
  const [transactions, setTransactions] = useState<DataListProps[]>([]);
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date())
  const {user} = useAuth()
  const [isLoading, setIsLoading] = useState(true)

  const dataKey = `@gofinances:transactions_user:${user.id}`

  function handleDateChange(action: 'next'| 'prev'){
    setIsLoading(true)
    if(action == 'next'){
      const newDate = addMonths(selectedDate,1)
      setSelectedDate(
        newDate)
    }else{
      const newDate = subMonths(selectedDate,1)
      setSelectedDate(newDate)

    }
  }
  async function loadTransactions(){

      const response = await AsyncStorage.getItem(dataKey);
      const data = response ? JSON.parse(response) : []
      setTransactions(data)
      const expenses = data.filter((expense:DataListProps) => expense.type === 'outcome' && new Date(expense.date).getMonth() === selectedDate.getMonth() && new Date(expense.date).getMonth() 
      && new Date(expense.date).getFullYear() === selectedDate.getFullYear()
      
      )
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
          const totalFormatted = categorySum.toLocaleString('pt-BR',{
            currency:'BRL',
            style:'currency'
          })
          const percentage = (categorySum / expensesTotal*100)
          const percentageFormatted = `${percentage.toFixed(0)}%`
          totalByCategory.push({
            name: category.name,
            totalFormatted,
            color: category.color,
            percentage,
            percentageFormatted,
            total:categorySum
          })
        }
        
       
      })
      setTotalByCategories(totalByCategory)
      setIsLoading(false)

      
  }
  //load all transactions

  useFocusEffect(useCallback(
    () => {
      loadTransactions()
    },
    [selectedDate],
  ))

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
       
      </Header>
      {isLoading 
      ? 
      <LoadContainer>
        <ActivityIndicator color={theme.colors.primary} />
      </LoadContainer>
      :
        <Content   
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            padding:24,
            paddingBottom:useBottomTabBarHeight()}}
        >
              <MonthSelect>
                <MonthSelectButton onPress={()=> {handleDateChange('prev')}} >
                  <MonthSelectIcon name="chevron-left"/>
                </MonthSelectButton>
                 <Month>{format(selectedDate, 'MMM,yyyy', {locale: ptBR} )}</Month>
                <MonthSelectButton onPress={()=> {handleDateChange('next')}} >
                  <MonthSelectIcon name="chevron-right"/>
                </MonthSelectButton>
                 <Month></Month>

              </MonthSelect>
              
              
              
              
              
              <ChartContainer>
                <VictoryPie
                data={totalByCategories}
                x="percentageFormatted"
                y="total"
                style={{
                  labels:{fontSize: RFValue(14 ), fontWeight: 'bold', fill: theme.colors.shape}
                }}
                labelRadius={75}
                colorScale={totalByCategories.map((item) => item.color)}
              />
              </ChartContainer>
              {totalByCategories.map(category => (
              <HistoryCard 
                key={category.name}
                amount={category.totalFormatted}
                title={category.name} 
                color={category.color}
            />
            ))}
        </Content>
      }
       
    </Container>
  )
}