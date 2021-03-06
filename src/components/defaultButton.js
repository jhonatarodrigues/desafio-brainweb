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
    let style = {};
    let styleLabel = {};
    if(this.props.icon){
      style = styles.iconButton;
    }
    if(this.props.icon){
      styleLabel = styles.labelIcon;
    }
    return (
      <TouchableOpacity style={[styles.button,  style]} onPress={this.props.onPress}>
        { this.props.icon ? (
              this.props.icon
            ) : (
              <></>
            )
          }
        <Text style={[styles.label, styleLabel]}>{this.props.label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  iconButton: {
    flexDirection: 'row',
    alignItems: "center"
  },

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
    marginBottom: 10
  },
  label: {
    fontSize: 15,
    color:  darkBlue,
    fontWeight: 'bold',
    textAlign: 'center',
    minWidth: 100
  },
  labelIcon: {
    textAlign: 'left',
    paddingLeft: 5
  }
});