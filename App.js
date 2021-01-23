import * as React from 'react';
import { View } from 'react-native';
import SoundButton from './components/SoundButton'
import AppHeader from './components/AppHeader'



export default class App extends React.Component {
  render() {
    return (
      <View style = {{marginTop: 10}}>
        <SoundButton />
        <AppHeader />
      </View>
    );
  }
}

