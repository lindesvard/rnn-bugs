import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {closeModal, push} from '../navigation';

export default function Modal(props) {
  const [promise, setPromise] = useState('no');
  async function handleNavigation() {
    if (promise === 'no') {
      setPromise('ongoing');
      await push('stack:Home', 'Stack');
      setPromise('resolved');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Modal</Text>
        <TouchableOpacity onPress={() => closeModal(props.componentId)}>
          <Text>Close modal</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    padding: 20,
  },
  title: {
    fontSize: 20,
  },
  container: {flex: 1, backgroundColor: 'red'},
});
