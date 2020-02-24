import styled from 'styled-components/native'
import { TouchableNativeFeedback } from 'react-native';
import { colors } from '../../values'

export const ButtonAndroid = styled.TouchableNativeFeedback.attrs({
    background: TouchableNativeFeedback.Ripple(colors.text, false)
})``;

export const ButtonIOS = styled.TouchableOpacity``;