import React from 'react'
import { View, Text } from 'react-native'
import GoogleButton from 'src/components/SocialLogin/Google'
import FacebookButton from 'src/components/SocialLogin/Facebook'

class SigninPage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
        <Text>
          Signin page
        </Text>
        <GoogleButton />
        <FacebookButton />
      </View>
    )
  }
}

export default SigninPage
