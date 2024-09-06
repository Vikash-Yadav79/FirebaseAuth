import React from 'react';
import {Text, View, StatusBar, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  primary,
  secondary,
  error,
  danger,
  warning,
  success,
  info
} from '../../reusable/colors';
import Categories from './categories';
import Showcase from './showcase';
import Vendor from './vendor';
import BestSelling from './best-selling';

const Home = ()=>{
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white'
    }}>
      <StatusBar backgroundColor={primary} />
      <ScrollView>
        <View style={{padding: 20}}>
          <TextInput
            placeholder="Search Products"
            style={{
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderWidth: 1,
              borderColor: '#ccc',
              marginBottom: 20
            }}
          />
          <Categories style={{marginBottom: 20, marginRight: -20}} />
          <Showcase style={{marginBottom: 20, marginRight: -20}} />
          <Vendor style={{marginBottom: 20, marginRight: -20}} />
          <BestSelling style={{marginBottom: 20, marginRight: -20}} />
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
