import React, {useState, useEffect, useCallback} from 'react'
import { Container, Header, Photo, UserInfo, User, UserName, UserGreeting, LogoutButton, UserWrapper, Icon, HighlightCards, Transactions, Title, TransactionList } from './styles'
import { HighlightCard } from '../../components/HighlightCard'
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { dataKey } from '../Register'
import { useFocusEffect } from '@react-navigation/core'
export interface DataListProps extends TransactionCardProps{
    id: string;
}
export function Dashboard(){

  const [transactions, setTransactions] = useState<DataListProps[]>([])
  const [incomeSum, setIncomeSum] = useState('')
  const [outcomeSum, setOutcomeSum] = useState('')
  const [balance, setbalance] = useState('')
  const [highlightData, sethighlightData] = useState<HighlightProps>({} as HighlightProps)
  let incomeSumValue = 0
  let outComeSumValue = 0
  let balanceValue = 0

  interface HighlightProps{
    amount:string;
  }
  interface HighlightData{
    incomes: HighlightProps;
    outcome: HighlightProps
  }
  async function loadData(){
      const data = await AsyncStorage.getItem(dataKey)
      const transactions = data ? JSON.parse(data) : []
      const transactionsFormatted: DataListProps[] = transactions.map((item:DataListProps) =>{
        const amount = Number(item.amount).toLocaleString('pt-BR',{
          style:'currency',
          currency: 'BRL'
        })
        item.type === 'income' ? incomeSumValue+=Number(item.amount) : outComeSumValue+=Number(item.amount)

        const date = Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        }).format(new Date(item.date))

        return {
          id: item.id,
          name: item.name,
          amount,
          date,
          type: item.type,
          category: item.category,
        }
      })
      balanceValue = incomeSumValue - outComeSumValue
      setIncomeSum(Number(incomeSumValue).toLocaleString('pt-BR',{
          style:'currency',
          currency: 'BRL'
        }))
      setOutcomeSum(Number(outComeSumValue).toLocaleString('pt-BR',{
          style:'currency',
          currency: 'BRL'
        }))
      setbalance(Number(balanceValue).toLocaleString('pt-BR',{
          style:'currency',
          currency: 'BRL'
        }))   
      
      setTransactions(transactionsFormatted)
  }
  function calculateSums(){
  }
  
  useEffect(() => {
    loadData()
   
  },[transactions])

  useFocusEffect(useCallback(() => {
    loadData()
    calculateSums()

  },[]))

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
          <LogoutButton onPress={() =>{}}  >
                      <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>
      <HighlightCards  >
        <HighlightCard type="up" title="Entradas" amount={incomeSum} lastTransaction="2 days ago" />
        <HighlightCard type="down" title="Saídas" amount={outcomeSum} lastTransaction="7 days ago" />
        <HighlightCard type="total" title="Total" amount={balance} lastTransaction="Today" />
      </HighlightCards>

      <Transactions>
          <Title>Listagem</Title>
          <TransactionList
            data={transactions}
            keyExtractor={item => item.id}
            renderItem={({item}) => <TransactionCard data={item} />}
            
          />
      </Transactions>

    </Container>
  )
}
