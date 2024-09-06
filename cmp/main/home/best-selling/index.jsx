import React from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  primary,
  secondary,
  error,
  danger,
  warning,
  success,
  info
} from '../../../reusable/colors';

const menus = [
  {
    thumbnail: require('../../../../assets/products/p1.jpg'),
    title: 'Red dress',
    price: 50,
    rating: 4.2,
    soldOut: true
  },
  {
    thumbnail: require('../../../../assets/products/p2.jpg'),
    title: 'Red dress',
    price: 50,
    rating: 4.2,
    soldOut: false
  },
  {
    thumbnail: require('../../../../assets/products/p3.jpg'),
    title: 'Red dress',
    price: 50,
    rating: 4.2,
    soldOut: false
  },
  {
    thumbnail: require('../../../../assets/products/p4.jpg'),
    title: 'Red dress',
    price: 50,
    rating: 4.2,
    soldOut: true
  },
  {
    thumbnail: require('../../../../assets/products/p5.jpg'),
    title: 'Red dress',
    price: 50,
    rating: 4.2,
    soldOut: true
  },
  {
    thumbnail: require('../../../../assets/products/p6.jpg'),
    title: 'Red dress',
    price: 50,
    rating: 4.2,
    soldOut: false
  },
  {
    thumbnail: require('../../../../assets/products/p1.jpg'),
    title: 'Red dress',
    price: 50,
    rating: 4.2,
    soldOut: true
  },
  {
    thumbnail: require('../../../../assets/products/p2.jpg'),
    title: 'Red dress',
    price: 50,
    rating: 4.2,
    soldOut: false
  },
  {
    thumbnail: require('../../../../assets/products/p3.jpg'),
    title: 'Red dress',
    price: 50,
    rating: 4.2,
    soldOut: false
  },
  {
    thumbnail: require('../../../../assets/products/p4.jpg'),
    title: 'Red dress',
    price: 50,
    rating: 4.2,
    soldOut: true
  },
  {
    thumbnail: require('../../../../assets/products/p5.jpg'),
    title: 'Red dress',
    price: 50,
    rating: 4.2,
    soldOut: true
  },
  {
    thumbnail: require('../../../../assets/products/p6.jpg'),
    title: 'Red dress',
    price: 50,
    rating: 4.2,
    soldOut: false
  }
]

const BestSelling = ({style})=>{
  return (
    <View {...style}>
      <Text style={{fontSize: 18, color: '#424242', marginBottom: 12}}>Best selling</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          {
          menus.map((item, index)=>(
            <View key={index} style={{
              width: 120,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: '#ccc',
              marginRight: 16,
              paddingHorizontal: 12,
              paddingVertical: 8
            }}>
              <View style={{flexDirection: 'row', marginBottom: 8, justifyContent: 'space-between', alignItems: 'center'}}>
                {
                  item.soldOut &&
                  <Text style={{backgroundColor: primary, color: 'white', borderRadius: 4, height: 15, fontSize: 10, width: 45, textAlign: 'center'}}>Sold out</Text>
                }
                <TouchableOpacity>
                  <Icon size={24}>more_horiz</Icon>
                </TouchableOpacity>
              </View>

              <Image
                source={item.thumbnail}
                style={{width: '100%', height: 80, marginBottom: 8}}
              />

              <View>
                <Text style={{marginBottom: 2}}>{item.title}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{fontSize: 12}}>${item.price}</Text>
                  <Text style={{fontSize: 12}}>{item.rating}</Text>
                </View>
              </View>
            </View>
          ))
        }
        </View>
      </ScrollView>
    </View>
  );
}
export default BestSelling;
