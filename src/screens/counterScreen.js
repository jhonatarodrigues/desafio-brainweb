import React, {useState} from 'react';
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
import { 
  blue, 
  darkBlue, 
  fontFamily,
  darkGrey,
  lightGrey
} from '../style/globalConstant';
import Header from '../components/header';

const CounterScreen = props => {
  const selected = useSelector(state => state.counterSelected);
  const data = useSelector(state => state.counters);
  const dispatch = useDispatch();

  const selectCounter = (item, index) => {
    dispatch({
      type: SELECT_COUNTER,
      item,
      index,
    });
  };

  const renderItem = (item, index) => {
    let styleActive = {};
    if(selected == index){
      styleActive = styles.flatListItemActiv
    }
    else{
      styleActive = styles.flatListItemNoActiv
    }

    return (
      <TouchableOpacity
        onPress={() => selectCounter(item, index)}
        style={{
          ...styles.flatListItem,
          ...styleActive
        }}>
          <Text style={styles.labelNameFlatListItem}> Counter {index + 1}</Text>
          <Text style={styles.labelFlatListItem}>
            {item.number.toString().padStart(4, '0')}
          </Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={darkBlue} />
      <SafeAreaView style={styles.content}>
        <Header title='Counters' />

        <>
          { data.length === 0 ? (
              <View style={styles.emptyItem}>
                <Text style={styles.emptyLabel}>Ops, Não encontramos nenhum contador :'(</Text>
              </View>
            ) : (
              <FlatList
                data={data}
                renderItem={({item, index}) => renderItem(item, index)}
                keyExtractor={(item, index) => String(index)}
                style={styles.flatList}
              />
            )
          }

        </>
      </SafeAreaView>
    </>
  );
}


const styles = StyleSheet.create({
  content: {
    backgroundColor: blue,
    flex: 1,
  },
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
  flatList: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  flatListItem: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 10,
    height: 150,
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
    borderRadius: 3,
    shadowColor: 'rgba(0,0,0,.8)',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 1,
  },
  flatListItemNoActiv: {
    borderColor:  'rgba(255,255,255,0)',
    borderStyle: "solid",
    borderWidth: 2,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  flatListItemActiv: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderStyle: "solid",
    borderWidth: 2,
  },
  labelFlatListItem: {
    fontSize: 60,
    fontFamily: fontFamily,
    marginBottom: 15,
    fontWeight: '700',
    color: '#484848',
    letterSpacing: -2.5,
  },
  labelNameFlatListItem: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontFamily: fontFamily,
    fontSize: 20,
    fontWeight: '700',
    opacity: 0.6,
    color: darkGrey,
    marginTop: 5,
    marginLeft: 3,
  },
  emptyItem: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  emptyLabel: {
    fontFamily,
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    opacity: .6,
  }
});


export default CounterScreen;