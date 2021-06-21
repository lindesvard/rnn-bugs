import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Text} from 'react-native';

export default function Home({componentId, ...props}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Tab</Text>
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
