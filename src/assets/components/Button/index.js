import React, { Component } from 'react';
import { Platform } from 'react-native';

import {
    ButtonAndroid,
    ButtonIOS
} from './styles'

export default function Button({children, ...rest}) {
    return (
        Platform.OS === 'ios' ?
            <ButtonIOS {...rest}>
                {children}
            </ButtonIOS>
        :
            <ButtonAndroid {...rest}>
                {children}
            </ButtonAndroid>
    );
}
