import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <Text> Profile </Text>
      </View>
    );
  }
}
