import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Button from '../components/defaultButton';
import { useSelector, useDispatch } from 'react-redux';

const ConfigScreen = props => {
  const data = useSelector(state => state);
  const dispatch = useDispatch();

  console.log(data);

  function increment() {
    console.log('increment');
    dispatch({type: 'INCREMENT'});
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          
          <View style={styles.body}>
            <Text> {data.number} </Text>
            <Button label="Increment" onPress={increment} />
            <Text> ====== </Text>
            <Button label="Decrement" />
          </View>

        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default ConfigScreen;
