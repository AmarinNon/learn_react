import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { db } from './firebase';

export default function App() {
  const [shopminders, setShopminders] = useState([]);
  
  
  useEffect(() => {
    const ref = db.collection('shopminders');
    ref.onSnapshot((query) => {
        const objs = [];
        query.forEach((doc) => {
          objs.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setShopminders(objs);
      });
  }, [])

  return (
    <View style={styles.container}>
      <h1>Test</h1>
      {shopminders.map((obj) => (

        <View id={obj.id}>
          <Text>{obj.name}</Text>
          <img style={{  width: '20%' }} src={`data:image/jpeg;base64,${obj.pic}`} />

        </View>
  ))}
  <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
