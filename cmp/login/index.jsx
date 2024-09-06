import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import Social from '../reusable/social';
import {auth, emailSignin} from '../../firebase/auth';

const Login = ({navigation})=>{
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')


  useEffect(()=>{
    const releaseEvent = auth.onAuthStateChanged((user)=>{
      user && navigation.navigate("drawer")
    })
    return ()=>releaseEvent
  },[])


  const login = async ()=>{
    const {data,error} = await emailSignin(email,password);
    if(error) return alert(error.message)
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
      padding: 20
    }}>
      <View style={{
            marginBottom: 12
          }}>
            <Text>Email</Text>
            <TextInput 
            name="email"
            placeholder="example@gmail.com"
            value={email}
            onChangeText={setEmail}
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 4,
              padding: 8,
              marginTop: 6
            }}/>
      </View>
      <View style={{
            marginBottom: 12
          }}>
            <Text>Password</Text>
            <TextInput 
            name="password"
            placeholder="******"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 4,
              padding: 8,
              marginTop: 6
            }}/>
      </View>
      <TouchableOpacity
        onPress={login}
        style={{
          backgroundColor: '#752FFF',
          paddingVertical: 14,
          borderRadius: 4,
          marginVertical: 8
        }}
      >
        <Text style={{color: 'white', fontSize: 16, textAlign: 'center'}}>Sign In</Text>
      </TouchableOpacity>
      <View style={{alignItems: 'flex-end', marginBottom: 32}}>
        <TouchableOpacity onPress={()=>navigation.navigate('forgot')}>
          <Text>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <Text style={{marginBottom: 12}}>Or</Text>
        <Social />
      </View>
    </View>
  );
}

export default Login;
