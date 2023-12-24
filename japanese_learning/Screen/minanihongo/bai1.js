import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';


const Bai1 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const lessonNumber = route.params?.lessonNumber || 1; // Default to lesson 1
  console.log(lessonNumber);
  useEffect(() => {
    fetch(`https://japan-app.vercel.app/api/getByBai?bai=${lessonNumber}`)
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [lessonNumber]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.word}>{item.ja} </Text>
      <Text style={styles.kanji}>{item.romaji}</Text>
      <Text style={styles.kanji}>{item.kanji}</Text>
      <Text style={styles.meaning}>{item.nghia}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  word: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  kanji: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  meaning: {
    fontSize: 16,
  },
});

export default Bai1 ;
