import React, { useContext } from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg'
import { AuthContext } from '../../AuthContext'
import {Title, Button, ImageContainer} from './styles'

interface SignInButtonProps  extends RectButtonProps{
  title: string;
  svg: React.FC<SvgProps>

}

export function SignInButton({title, svg:Svg, ...rest}: SignInButtonProps){
  const data = useContext(AuthContext)

  return (
    <Button {...rest} >
      <ImageContainer>
        <Svg/>
      </ImageContainer>
      
      <Title>{title}</Title>
    </Button>
  )
}