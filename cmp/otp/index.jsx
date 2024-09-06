import React, {useState, useRef, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const Otp = ()=>{
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);

  useEffect(()=>{
    first.current.focus();
  },[]);

  const [value, setValue] = useState([]);
  const handleChange = (value)=>{
    setValue(oldData=>[...oldData,value]);
  }
  return (
    <View style={{flex: 1, padding: 20, backgroundColor: 'white'}}>
      <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
        <View style={{paddingVertical: 40}}>
          <Text style={{textAlign: 'center'}}>Enter pin to verify your account</Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              keyboardType="numeric"
              maxLength={1}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: '#ccc',
                marginRight: 16,
                marginTop: 16,
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 24
              }}
              onChangeText={handleChange}
              ref={first}
              onChange={({nativeEvent})=>nativeEvent.text === "" ? null : second.current.focus()}
            />

            <TextInput
              keyboardType="numeric"
              maxLength={1}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: '#ccc',
                marginRight: 16,
                marginTop: 16,
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 24
              }}
              onChangeText={handleChange}
              ref={second}
              onChange={({nativeEvent})=>nativeEvent.text === "" ? first.current.focus() : third.current.focus()}
            />

            <TextInput
              keyboardType="numeric"
              maxLength={1}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: '#ccc',
                marginRight: 16,
                marginTop: 16,
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 24
              }}
              onChangeText={handleChange}
              ref={third}
              onChange={({nativeEvent})=>nativeEvent.text === "" ? second.current.focus() : fourth.current.focus()}
            />

            <TextInput
              keyboardType="numeric"
              maxLength={1}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: '#ccc',
                marginRight: 16,
                marginTop: 16,
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 24
              }}
              onChangeText={handleChange}
              ref={fourth}
              onChange={({nativeEvent})=>nativeEvent.text === "" ? third.current.focus() : null}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={{textAlign: 'center', marginRight: 5}}>
            Didn`t recieve it ?
          </Text>
          <TouchableOpacity>
            <Text style={{color: '#752FFF'}}>Resend otp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Otp;
