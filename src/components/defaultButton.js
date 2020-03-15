import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { fontFamily, darkBlue } from '../style/globalConstant';

export default class DefaultButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.label}>{this.props.label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: '#fff',
    position: 'relative',
    borderColor: '#000',
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 3,
    shadowColor: 'rgba(0,0,0,.8)',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  label: {
    fontSize: 15,
    color:  darkBlue,
    fontWeight: 'bold',
    textAlign: 'center',
    minWidth: 85,
  }
});