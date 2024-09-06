import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Animated, {useSharedValue, useAnimatedStyle, withRepeat, withSequence, withTiming, interpolate} from 'react-native-reanimated';
import GestureRecognizer from 'react-native-swipe-gestures';

const Carousel = ({data})=>{
  const width = 200;
  const [value,setValue] = useState(0);
  const left = useSharedValue(0);
  const effect = useAnimatedStyle(()=>({
    left: -interpolate(left.value,[0,1,2,3,4],[0,200,400,600,800])
  }));

  useEffect(()=>{
    left.value = withTiming(value,{duration: 200});
  },[value]);

  const onSwipeLeft = ()=>{
    if(value < data.length-1) setValue(value+1);
    else setValue(0);
  }

  const onSwipeRight = ()=>{
    if(value > 0) setValue(value-1);
    else setValue(data.length-1);
  }


  return (
    <View style={{alignItems: 'center'}}>
      <View style={{width, overflow: 'hidden', marginBottom: 16}}>
        <GestureRecognizer
          onSwipeLeft={onSwipeLeft}
          onSwipeRight={onSwipeRight}
        >
          <Animated.View style={[{flexDirection: 'row', width: (width*data.length)},effect]}>
            {
              data.map((item,index)=>(
                <Image
                  source={item}
                  style={{width, height: 250}}
                  key={index}
                />
              ))
            }
          </Animated.View>
        </GestureRecognizer>
      </View>
      <View style={{width, flexDirection: 'row', justifyContent: 'space-around'}}>
        {
          data.map((item,index)=>(
            <TouchableOpacity key={index} onPress={()=>setValue(index)}>
              <View style={{width: 20, height: 20, backgroundColor: value === index ? 'red' : '#ddd', borderRadius: 10}}/>
            </TouchableOpacity>
          ))
        }
      </View>
    </View>
  )
}

export default Carousel;
