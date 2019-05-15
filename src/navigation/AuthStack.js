import { createStackNavigator } from 'react-navigation'
import SigninPage from 'src/pages/AuthStack/SigninPage'
import LoginPage from 'src/pages/AuthStack/LoginPage'

const AuthStack = createStackNavigator({
  SigninPage: SigninPage,
  LoginPage: LoginPage,
})

export default AuthStack
