import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, View, TextInput} from 'react-native';
import Social from '../reusable/social';
import {insert} from '../../firebase/db';
import {auth,emailSignup} from '../../firebase/auth';

const SignUp = ({navigation})=>{
  const [fullname, setFullname] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [repeatPassword,setRepeatPassword] = useState('');

  useEffect(()=>{
    const releaseEvent = auth.onAuthStateChanged((user)=>{
      user && navigation.navigate("drawer")
    })
    return ()=>releaseEvent
  },[])

  const signUp = async ()=>{
    const formData = {fullname, email, password}
    const {data, error} = await emailSignup(email, password);
    if(error) return alert(error.message)
    console.log(JSON.stringify(data,null,2))
  }

  return (
    <View style={{backgroundColor: 'white', flex: 1, justifyContent: 'space-between', padding: 20}}>
      <View>
          <View style={{marginBottom: 12}}>
              <Text>Fullname</Text>
              <TextInput
                name="fullname"
                placeholder="Enter your name"
                value={fullname}
                onChangeText={setFullname}
                style={{
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 4,
                  padding: 8,
                  marginTop:6
                }}
              />
          </View>
          <View style={{marginBottom: 12}}>
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
                  marginTop:6
                }}
              />
          </View>
          <View style={{marginBottom: 12}}>
              <Text>Password</Text>
              <TextInput
                name="password"
                placeholder="*********"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                style={{
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 4,
                  padding: 8,
                  marginTop:6
                }}
              />
          </View>
          <View style={{marginBottom: 12}}>
              <Text>Repeat Password</Text>
              <TextInput
                name="repeatPassword"
                placeholder="*********"
                secureTextEntry={true}
                value={repeatPassword}
                onChangeText={setRepeatPassword}
                style={{
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 4,
                  padding: 8,
                  marginTop:6
                }}
              />
          </View>
        <TouchableOpacity onPress={signUp} style={{
          backgroundColor: '#752FFF',
          paddingVertical: 14,
          borderRadius: 4,
          marginVertical: 8
        }}>
          <Text style={{color: 'white', fontSize: 16, textAlign: 'center'}}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'center', marginBottom: 4}}>By signing up you agree to our privacy</Text>
        <Text style={{textAlign: 'center', color: '#752FFF'}}>Policy and Terms</Text>
      </View>

      <Social />

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', marginRight: 5}}>
          Already have an account?
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('login')}>
          <Text style={{color: '#752FFF'}}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignUp;
