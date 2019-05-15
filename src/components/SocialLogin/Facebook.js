import React from 'react'
import { Button, View, Text } from 'react-native'
import { Facebook } from 'expo';
import * as firebase from 'firebase'

class FacebookButton extends React.Component {
  onClickLogin = async () => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      '2077132879061960', // Your app id from Facebook dev
      { permissions: ['public_profile'] }
    );

    if (type === 'success') {
      // Build Firebase credential with the Facebook access token.
      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      // Sign in with credential from the Facebook user.
      firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => {
        // Handle Errors here.
      });
    }
  }

  render() {
    return (
      <Button
        title="login with Facebook"
        onPress={this.onClickLogin}
      />
    )
  }
}

export default FacebookButton
