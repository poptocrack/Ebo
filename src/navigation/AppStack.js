import { createStackNavigator } from 'react-navigation';
import HomePage from 'src/pages/HomePage'

const AppStack = createStackNavigator({
  Home: HomePage
})

export default AppStack
