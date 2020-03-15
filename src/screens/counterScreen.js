import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Constants from 'expo-constants';
import { useSelector, useDispatch } from 'react-redux';
import { SELECT_COUNTER } from '../actions/types';

const CounterScreen = props => {
  const data = useSelector(state => state.counters);
  const dispatch = useDispatch();

  const selectCounter = (index) => {
    dispatch(
      {
        type: SELECT_COUNTER,
        counter: index
      }
    );
  }

  const renderItem = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => selectCounter(index)}
        style={{backgroundColor: '#f0f', margin: 10}}>
          <Text>{item.number}</Text>
      
      </TouchableOpacity>
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          
          <View style={styles.body}>
            <Text>Config === </Text>

            <Text>Counter number: {data.step}</Text>
          </View>
          <FlatList
            data={data}
            renderItem={({item, index}) => renderItem(item, index)}
            keyExtractor={(item, index) => index}
          />

        </ScrollView>
      </SafeAreaView>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});


export default CounterScreen;