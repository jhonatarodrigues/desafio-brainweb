import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class DefaultButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button}>
        <Text>{this.props.label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: '#f00',
    padding: 10,
  }
});