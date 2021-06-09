import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {openModal, push} from '../navigation';

export default function Home({componentId, ...props}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Home</Text>
        <TouchableOpacity onPress={() => push(componentId, 'Stack')}>
          <Text>Push stack</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openModal('Modal')}>
          <Text>Open modal</Text>
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
});
