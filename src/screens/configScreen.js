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
import {darkBlue, darkGrey, fontFamily, blue} from '../style/globalConstant';

const ConfigScreen = props => {
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

  function resetCounter() {
    dispatch({ type: RESET_COUNTER });
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={darkBlue}/>
      <Header title="Config" />
      <SafeAreaView style={styles.contentSafe}>
       
          <View style={styles.content}>
            <View style={styles.panelButton}>
              <Text style={styles.panelLabel}>Counters</Text>
              <View style={styles.contentPanelButtons}>
                <Button label={'Add\nCounter'} onPress={addCounter} />
                <Button label={'Remove\nCounter'} onPress={removeCounter} />
              </View>
            </View>

            <View style={styles.panelButton}>
              <Text style={styles.panelLabel}>Selected Counter <Text style={styles.spanTextPanel}>(Counter {selected + 1})</Text></Text>
              <View style={styles.contentPanelButtons}>
                <Button label={'Increment\nCounter'} onPress={incrementCounter} />
                <Button label={'Decrement\nCounter'} onPress={decrementCounter} />
              </View>
              <View style={styles.contentPanelButtons}>
                <Button label={'Reset\nCounter'} onPress={resetCounter} />
              </View>
              
            </View>
          </View>

      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  contentSafe: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: blue,
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  panelLabel: {
    fontFamily,
    color: darkGrey,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 15
  },
  spanTextPanel: {
    fontFamily,
    color: darkGrey,
    fontWeight: '700',
    fontSize: 12
  },
  panelButton: {
    paddingHorizontal: 20,
  },
  contentPanelButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30
  }
});

export default ConfigScreen;
