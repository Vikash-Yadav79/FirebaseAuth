import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import Animated, {useSharedValue, useAnimatedStyle, withRepeat, withSequence, withTiming, interpolate} from 'react-native-reanimated';

const Tab = ({data, color="#752FFF"})=>{
  const [tabIndex, setTabIndex] = useState(0);
  const onSwipeLeft= ()=>{
    if(tabIndex < data.length-1) setTabIndex(tabIndex+1)
    else setTabIndex(0);
  }

  const onSwipeRight= ()=>{
    if(tabIndex > 0) setTabIndex(tabIndex-1)
    else setTabIndex(data.length-1);
  }

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        {
          data.map((item,index)=>(
            <TouchableOpacity key={index} style={{flexGrow: 1}} onPress={()=>setTabIndex(index)}>
              <View style={{
                paddingVertical: 12,
                borderBottomWidth: (tabIndex === index ? 2 : null),
                borderColor: (tabIndex === index ? color : null),
                marginRight: (index === data.length-1 ? 0 : 16)
              }}>
                <Text>{item.label}</Text>
              </View>
            </TouchableOpacity>
          ))
        }
      </View>

      <View style={{paddingVertical: 12}}>
        {
          data.map((item,index)=>(
            <View key={index}>
              {
                tabIndex === index &&
                <GestureRecognizer
                  onSwipeLeft={onSwipeLeft}
                  onSwipeRight={onSwipeRight}
                >
                  <Animated.View>
                    {item.content}
                  </Animated.View>
                </GestureRecognizer>
              }
            </View>
          ))
        }
      </View>
    </View>
  );
}

export default Tab;
