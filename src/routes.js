import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import App from './pages/app'

// Pokedex
import Pokedex from './pages/pokedex'
import Pokemon from './pages/pokemon'

//News
import News from './pages/news'

export default createAppContainer(
    createStackNavigator({
        App,
        Pokedex,
        Pokemon,
        News
    },
    {
        initialRouteName: 'App'
    })
)