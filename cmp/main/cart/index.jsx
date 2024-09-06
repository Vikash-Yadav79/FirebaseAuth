import React from 'react';
import {Text, FlatList, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const products = [
  {
    id: 1,
    thumbnail: require('../../../assets/products/p1.jpg'),
    title: 'Product 1',
    description: 'Lorem Ipsum has been the industry standard dummy text ever since the when an unknown printer took a galley of type and scrambled',
    price: 200,
    quantity: 2
  },
  {
    id: 2,
    thumbnail: require('../../../assets/products/p2.jpg'),
    title: 'Product 1',
    description: 'Lorem Ipsum has been the industry standard dummy text ever since the when an unknown printer took a galley of type and scrambled',
    price: 200,
    quantity: 2
  },
  {
    id: 3,
    thumbnail: require('../../../assets/products/p3.jpg'),
    title: 'Product 1',
    description: 'Lorem Ipsum has been the industry standard dummy text ever since the when an unknown printer took a galley of type and scrambled',
    price: 200,
    quantity: 2
  },
  {
    id: 4,
    thumbnail: require('../../../assets/products/p4.jpg'),
    title: 'Product 1',
    description: 'Lorem Ipsum has been the industry standard dummy text ever since the when an unknown printer took a galley of type and scrambled',
    price: 200,
    quantity: 2
  },
  {
    id: 5,
    thumbnail: require('../../../assets/products/p5.jpg'),
    title: 'Product 1',
    description: 'Lorem Ipsum has been the industry standard dummy text ever since the when an unknown printer took a galley of type and scrambled',
    price: 200,
    quantity: 2
  },
  {
    id: 6,
    thumbnail: require('../../../assets/products/p6.jpg'),
    title: 'Product 1',
    description: 'Lorem Ipsum has been the industry standard dummy text ever since the when an unknown printer took a galley of type and scrambled',
    price: 200,
    quantity: 2
  }
];

const list = ({item})=>(
  <View style={{
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 12,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 8,
    elevation: 5,
    shadowColor: 'gray'
  }}>
    <View style={{marginRight: 12}}>
      <Image
        source={item.thumbnail}
        style={{width: 80, height: 80, marginBottom: 8}}
      />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity>
          <Icon name="remove-circle-outline" size={24} color="#323232" />
        </TouchableOpacity>
        <Text style={{marginHorizontal: 8, color: '#323232'}}>{item.quantity}</Text>
        <TouchableOpacity>
          <Icon name="add-circle-outline" size={24} color="#323232" />
        </TouchableOpacity>
      </View>
    </View>

    <View style={{flexGrow: 1, justifyContent: 'space-between'}}>
      <View style={{width: 230}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.title}</Text>
        <Text style={{fontSize: 13, color: '#424242'}}>{item.description.slice(0,80)}...</Text>
      </View>
      <View style={{width: 200, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>${item.price}</Text>
        <TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="trash-outline" color="gray" size={24} />
            <Text style={{color: 'gray'}}>Remove</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </View>
)

const Cart = ()=>(
  <View style={{flex: 1}}>
    <FlatList
      data={products}
      renderItem={list}
      keyExtractor={item=>item.id}
    />
    <View style={{
      padding: 20,
      backgroundColor: 'white',
      elevation: 5,
      shadowColor: 'gray',
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      marginTop: 20
    }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16}}>
        <Text>Subtotal</Text>
        <Text>:</Text>
        <Text>2000</Text>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16}}>
        <Text>Subtotal</Text>
        <Text>:</Text>
        <Text>2000</Text>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16}}>
        <Text>Subtotal</Text>
        <Text>:</Text>
        <Text>2000</Text>
      </View>
      <View style={{borderWidth: 0.3, borderColor: '#424242', marginBottom: 16}} />
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16}}>
        <Text>Total</Text>
        <Text>:</Text>
        <Text>2000</Text>
      </View>
      <TouchableOpacity style={{
        backgroundColor: '#752FFF',
        paddingVertical: 14,
        borderRadius: 4,
        marginVertical: 8
      }}>
        <Text style={{color: 'white', fontSize: 16, textAlign: 'center'}}>Checkout</Text>
      </TouchableOpacity>
    </View>
  </View>
)

export default Cart;
