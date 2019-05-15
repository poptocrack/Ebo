import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import AuthLoadingPage from 'src/pages/AuthLoadingPage'
import AppStack from 'src/navigation/AppStack'
import AuthStack from 'src/navigation/AuthStack'
import * as firebase from 'firebase';
// import firestore if you need it
import 'firebase/firestore';

import { FIREBASE_CONFIG } from 'src/environement'

// Init firebase app. Check if one is already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingPage,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
))
