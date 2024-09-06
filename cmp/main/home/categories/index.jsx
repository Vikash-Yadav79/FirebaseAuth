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
    label: 'Fashion',
    background: warning,
    icon: require('../../../../assets/icons/fashion.png')
  },
  {
    label: 'Women',
    background: danger,
    icon: require('../../../../assets/icons/women.png')
  },
  {
    label: 'Device',
    background: secondary,
    icon: require('../../../../assets/icons/device.png')
  },
  {
    label: 'Kids',
    background: info,
    icon: require('../../../../assets/icons/kids.png')
  },
  {
    label: 'Electronic',
    background: error,
    icon: require('../../../../assets/icons/electronics.png')
  },
  {
    label: 'Beauty',
    background: warning,
    icon: require('../../../../assets/icons/beauty.png')
  },
  {
    label: 'Fashion',
    background: warning,
    icon: require('../../../../assets/icons/fashion.png')
  },
  {
    label: 'Women',
    background: danger,
    icon: require('../../../../assets/icons/women.png')
  },
  {
    label: 'Device',
    background: secondary,
    icon: require('../../../../assets/icons/device.png')
  },
  {
    label: 'Kids',
    background: info,
    icon: require('../../../../assets/icons/kids.png')
  },
  {
    label: 'Electronic',
    background: error,
    icon: require('../../../../assets/icons/electronics.png')
  },
  {
    label: 'Beauty',
    background: warning,
    icon: require('../../../../assets/icons/beauty.png')
  }
]

const Categories = ({style})=>{
  return (
    <View {...style}>
      <Text style={{fontSize: 18, color: '#424242', marginBottom: 12}}>Category</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          {
          menus.map((item, index)=>(
            <TouchableOpacity key={index}>
              <View>
                <View style={{
                  width: 48,
                  height: 48,
                  backgroundColor: item.background,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 4,
                  marginBottom: 4,
                  marginRight: 16
                }}>
                  <Image
                    source={item.icon}
                    style={{width: 32, height: 32}}
                  />
                </View>
                <Text style={{fontSize: 13, color: '#424242'}}>{item.label}</Text>
              </View>
            </TouchableOpacity>
          ))
        }
        </View>
      </ScrollView>
    </View>
  );
}
export default Categories;
