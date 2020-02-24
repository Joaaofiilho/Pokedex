import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import App from './pages/app'

// Search
import Pokedex from './pages/pokedex'

//News
import News from './pages/news'

export default createAppContainer(
    createStackNavigator({
        App,
        Pokedex,
        News
    },
    {
        initialRouteName: 'App'
    })
)