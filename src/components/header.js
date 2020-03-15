import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { 
  blue, 
  darkBlue, 
  fontFamily 
} from '../style/globalConstant';

const Header = props => {
  return (
    <>
      <View style={styles.contentHeader}>
        <View style={styles.alignHeader}>
          <Text style={styles.titleHeader}>
            {props.title ? props.title : ''}
          </Text>
        </View>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  contentHeader: {
    backgroundColor: darkBlue,
    height: 100,
  },
  alignHeader: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  titleHeader: {
    fontFamily,
    fontSize: 30,
    color: '#fff',
    paddingHorizontal: 15,
    fontWeight: '700',
    marginBottom: 10
  }
});


export default Header;