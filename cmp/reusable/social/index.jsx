import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

const Social = ()=>{
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <TouchableOpacity style={{marginRight: 12}}>
        <Image
          style={{width: 38, height: 38}}
          source={require('../../../assets/icons/facebook.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity style={{marginRight: 12}}>
        <Image
          style={{width: 40, height: 40}}
          source={require('../../../assets/icons/google.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          style={{width: 40, height: 40}}
          source={require('../../../assets/icons/twitter.png')}
        />
      </TouchableOpacity>
    </View>
  )
}

export default Social;
