import React from 'react'
import { Button, View, Text } from 'react-native'
import { Google } from 'expo';
import * as firebase from 'firebase'

class GoogleButton extends React.Component {
  onClickLogin = async () => {
    const clientId = "88989378200-bul8u36qdlvjoo2h6j3csaq59qgjgaot.apps.googleusercontent.com"
    // put this client id in the firebase console
    // create client android https://console.cloud.google.com/apis/credentials?
    // see https://blog.expo.io/google-sign-in-with-react-native-and-expo-9cac6c392f0e
    try {
      const { type, idToken, ...rest } = await Google.logInAsync({ clientId });
      console.log(type, idToken, rest)
      if (type === 'success') {
        // Build Firebase credential with the Google access token.
        const credential = firebase.auth.GoogleAuthProvider.credential(idToken);

        // Sign in with credential from the Facebook user.
        firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => {
          // Handle Errors here.
          console.log(error)
        });
      }
    } catch (e) {
      console.log("Error", e)
    }
  }

  render() {
    return (
      <Button
        title="login with Google"
        onPress={this.onClickLogin}
      />
    )
  }
}

export default GoogleButton
