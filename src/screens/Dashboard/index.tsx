import React, {useState, useEffect} from 'react'
import { Container, Header, Photo, UserInfo, User, UserName, UserGreeting, LogoutButton, UserWrapper, Icon, HighlightCards, Transactions, Title, TransactionList } from './styles'
import { HighlightCard } from '../../components/HighlightCard'
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { dataKey } from '../Register'
export interface DataListProps extends TransactionCardProps{
    id: string;
}
export function Dashboard(){

  const [transactions, setTransactions] = useState<DataListProps[]>([])
  useEffect(() => {
    async function loadData(){
      const data = await AsyncStorage.getItem(dataKey)
      const transactions = data ? JSON.parse(data) : []
      const transactionsFormatted: DataListProps[] = transactions.map((item:DataListProps) =>{
        const amount = Number(item.amount).toLocaleString('pt-BR',{
          style:'currency',
          currency: 'BRL'
        })

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
      setTransactions(transactionsFormatted)
    }
    loadData()
  },[transactions])
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
        <HighlightCard type="up" title="Entradas" amount={'R$ 17.000,00'} lastTransaction="2 days ago" />
        <HighlightCard type="down" title="Saídas" amount={'R$ 1.200,98'} lastTransaction="7 days ago" />
        <HighlightCard type="total" title="Total" amount={'R$ 15.799,02'} lastTransaction="Today" />
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
