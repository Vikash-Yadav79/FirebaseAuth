import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import Social from '../reusable/social';

const Forgot = ()=>{
  const fields = [
    {
      label: 'Enter email address to forgot',
      inputProps: {
        name: 'email',
        placeholder: 'example@mail.com'
      }
    }
  ]
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
      padding: 20
    }}>
      {
        fields.map((item,index)=>(
          <View key={index} style={{
            marginBottom: 12
          }}>
            <Text>{item.label}</Text>
            <TextInput {...item.inputProps} style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 4,
              padding: 8,
              marginTop: 6
            }}/>
          </View>
        ))
      }
      <TouchableOpacity
        style={{
          backgroundColor: '#752FFF',
          paddingVertical: 14,
          borderRadius: 4,
          marginVertical: 8
        }}
      >
        <Text style={{color: 'white', fontSize: 16, textAlign: 'center'}}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Forgot;
