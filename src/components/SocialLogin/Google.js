import React from 'react'
import { Button, View, Text } from 'react-native'
import { Google } from 'expo';
import * as firebase from 'firebase'
import { GOOGLE_CLIENT_ID } from 'src/environement'

class GoogleButton extends React.Component {
  onClickLogin = async () => {
    try {
      const { type, idToken } = await Google.logInAsync({ GOOGLE_CLIENT_ID });
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
