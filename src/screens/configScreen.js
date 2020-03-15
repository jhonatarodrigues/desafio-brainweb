import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { 
  ADD_COUNTER, 
  REMOVE_COUNTER,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from '../actions/types';
import Button from '../components/defaultButton';
import Header from '../components/header';

const ConfigScreen = props => {
  const data = useSelector(state => state);
  const dispatch = useDispatch();
  const selected = useSelector(state => state.counterSelected);

  function addCounter() {
    dispatch({ type: ADD_COUNTER });
  }

  function removeCounter() {
    dispatch({ type: REMOVE_COUNTER });
  }

  function incrementCounter() {
    dispatch({ type: INCREMENT_COUNTER });
  }

  function decrementCounter() {
    dispatch({ type: DECREMENT_COUNTER });
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          
          <View style={styles.body}>
            <Text>Selecionado: {selected}</Text>
            <Text> {data.number} </Text>
            <Button label="Add Counter" onPress={addCounter} />
            <Text> ====== </Text>
            <Button label="Remove Counter" onPress={removeCounter} />
            <Text> ====== </Text>
            <Button label="Increment Counter" onPress={incrementCounter} />
            <Text> ====== </Text>
            <Button label="Decrement Counter" onPress={decrementCounter} />
          </View>

        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default ConfigScreen;
