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

const Showcase = ({style})=>{
  return (
    <View {...style}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          {
          menus.map((item, index)=>(
              <View key={index}>
                <View style={{
                  width: 250,
                  height: 150,
                  backgroundColor: item.background,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  borderRadius: 4,
                  marginBottom: 4,
                  marginRight: 16,
                  paddingHorizontal: 20
                }}>
                  <Text style={{fontSize: 18, fontWeight: 'bold'}}>For all summer clothing needs</Text>
                  <TouchableOpacity>
                    <View style={{padding: 8, backgroundColor: 'white', borderRadius: 4, marginTop: 12}}>
                      <Text>Shop now</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
          ))
        }
        </View>
      </ScrollView>
    </View>
  );
}
export default Showcase;
