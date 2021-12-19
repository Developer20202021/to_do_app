import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';




const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);






export default function App() {

  console.log('i am');

  const [getdata, setdata] = useState([])


useEffect(()=>{

  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
  })
  .catch(err=>{

    console.log(err);
  })


},[])


const renderItem = ({ item }) => (
  <Item title={item.title} />
);
  








  return (
    <SafeAreaView>
        <FlatList
        data={getdata}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      

    </SafeAreaView>
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
