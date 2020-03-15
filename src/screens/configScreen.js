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
  DECREMENT_COUNTER,
  RESET_COUNTER
} from '../actions/types';
import Button from '../components/defaultButton';
import Header from '../components/header';
import {darkBlue, darkGrey, fontFamily, blue} from '../style/globalConstant';
import Toast from 'react-native-simple-toast';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faMinus, faRedo } from '@fortawesome/free-solid-svg-icons';


const ConfigScreen = props => {
  const dispatch = useDispatch();
  const selected = useSelector(state => state.counterSelected);
  const data = useSelector(state => state.counters);

  function addCounter() {
    dispatch({ type: ADD_COUNTER });
    Toast.show('Contador Adicionado');
  }

  function removeCounter() {
    if(data.length == 0){
      Toast.show('Não há mais contadores para ser removidos.', Toast.LONG);
      return false;
    }
    dispatch({ type: REMOVE_COUNTER });
    Toast.show('Contador ' + (selected + 1) + ' Removido');
  }

  function incrementCounter() {
    dispatch({ type: INCREMENT_COUNTER });
    Toast.show('Contador ' + (selected + 1) + ' Incrementado');
  }

  function decrementCounter() {
    if(data[selected].number == 0){
      Toast.show('Contador ' + (selected + 1) + ' Está zerado não é possivel diminuir mais', Toast.LONG);
      return false;
    }
    dispatch({ type: DECREMENT_COUNTER });
    Toast.show('Contador ' + (selected + 1) + ' Decrementado');
  }

  function resetCounter() {
    dispatch({ type: RESET_COUNTER });
    Toast.show('Contador ' + (selected + 1) + ' Zerado');
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
                <Button label={'Increment\nCounter'} icon={<FontAwesomeIcon icon={ faPlus } size={15} />} onPress={incrementCounter} />
                <Button label={'Decrement\nCounter'} onPress={decrementCounter} icon={<FontAwesomeIcon icon={ faMinus } size={15} />}/>
                <Button label={'Reset\nCounter'} onPress={resetCounter} icon={<FontAwesomeIcon icon={ faRedo } size={15} />}/>
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
    marginBottom: 30,
    flexWrap: 'wrap',
    flex: 0
  }
});

export default ConfigScreen;
