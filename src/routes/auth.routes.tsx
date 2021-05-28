import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'

import {Authentication} from '../screens/Authentication'

const {Navigator,Screen} = createStackNavigator() 
export function AuthRoutes(){
  return (
    <Navigator headerMode="none" >
      <Screen name="SignIn" component={Authentication} />
    </Navigator>
  )
}