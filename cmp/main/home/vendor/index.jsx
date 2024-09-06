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
    image: require('../../../../assets/brands/brand1.png')
  },
  {
    image: require('../../../../assets/brands/brand2.png')
  },
  {
    image: require('../../../../assets/brands/brand3.png')
  },
  {
    image: require('../../../../assets/brands/brand4.png')
  },
  {
    image: require('../../../../assets/brands/brand5.png')
  },
  {
    image: require('../../../../assets/brands/brand6.png')
  },
  {
    image: require('../../../../assets/brands/brand1.png')
  },
  {
    image: require('../../../../assets/brands/brand2.png')
  },
  {
    image: require('../../../../assets/brands/brand3.png')
  },
  {
    image: require('../../../../assets/brands/brand4.png')
  },
  {
    image: require('../../../../assets/brands/brand5.png')
  },
  {
    image: require('../../../../assets/brands/brand6.png')
  }
]

const Vendor = ({style})=>{
  return (
    <View {...style}>
      <Text style={{fontSize: 18, color: '#424242', marginBottom: 12}}>Popular vendor</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          {
          menus.map((item, index)=>(
            <TouchableOpacity key={index}>
              <View>
                <View style={{
                  width: 200,
                  height: 60,
                  marginBottom: 4,
                  marginRight: 16,
                  borderWidth: 1,
                  borderColor: '#f5f5f5',
                  padding: 12,
                  borderRadius: 4
                }}>
                  <Image
                    source={item.image}
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
              </View>
            </TouchableOpacity>
          ))
        }
        </View>
      </ScrollView>
    </View>
  );
}
export default Vendor;
