import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import App from './pages/app'

export default createAppContainer(
    createStackNavigator({
        App
    },
    {
        initialRouteName: 'App'
    })
)