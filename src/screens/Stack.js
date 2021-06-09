import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {popTo} from '../navigation';

export default function Stack(props) {
  const withAwait = async () => {
    console.log('[expected] Printing');
    try {
      await popTo('not_existing_component_id');
      console.log('[expected] Not printing');
    } catch (e) {
      console.log('[not excepted!] Not printing', e);
    }
    console.log('[not excepted!] Not printing');
  };

  const withPromise = async () => {
    console.log('popTo with promise');
    const promise = popTo('not_existing_component_id');

    promise.then(() => {
      console.log('Resolved...');
    });
    promise.catch(() => {
      console.log('Catching...');
    });
    promise.finally(() => {
      console.log('Finally...');
    });
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Stack</Text>
        <TouchableOpacity onPress={withPromise}>
          <Text>Try popTo promise (fail)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={withAwait}>
          <Text>Try popTo await (fail)</Text>
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
