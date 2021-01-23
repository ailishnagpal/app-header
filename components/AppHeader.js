import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component {

  render() {
    return (
      <View style={styles.textContainer}>
      <Text style = {styles.text}>
        Quiz Buzzer App
      </Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({

  textContainer: {background:"blue"},
  text: {color: "white",
  padding:20,
  textAlign: "center",
  fontSize: 20,
  fontWeight: "bold"
  }
  
  })
export default AppHeader;