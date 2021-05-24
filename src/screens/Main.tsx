import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export function Main(){
  return (
    <View style={styles.container}>
        <View style={styles.top} >

        </View>
        <View style={styles.bottom}>
          
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,

  },
  top: {
    height: '70%',
    backgroundColor: '#5636D3'
  },
  bottom: {
    height: '30%',
    backgroundColor: '#FF872C'
  }
})