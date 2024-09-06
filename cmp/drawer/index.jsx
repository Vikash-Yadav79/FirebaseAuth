import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Tab from '../tab';
const {Navigator, Screen} = createDrawerNavigator();
import {auth, logout} from '../../firebase/auth';

const Drw = ({navigation})=>{
  
  useEffect(()=>{
    const releaseEvent = auth.onAuthStateChanged((user)=>{
      !user && navigation.navigate("Intro")
    })
    return ()=>releaseEvent;
  },[]);

  return (
    <Navigator>
      <Screen name="tab" component={Tab} options={{
        headerRight: ()=>(
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{marginRight: 8}}>
              <Icon size={24} name="notifications-outline" color="gray" />
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight: 16}}>
              <Icon size={24} name="filter-outline" color="gray" />
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight: 16}} onPress={()=>logout()}>
              <Icon size={24} name="log-out-outline" color="gray" />
            </TouchableOpacity>
          </View>
        )
      }}/>
    </Navigator>
  )
}
export default Drw;
