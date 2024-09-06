import React from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  interpolate
} from 'react-native-reanimated';

const Index = ({navigation})=>{
  const {width,height} = Dimensions.get('window');
  const anim = useSharedValue(0);

  const onSlideChange = (index)=>{
    anim.value = withTiming(index,{duration: 10})
  }

  const slideTop = useAnimatedStyle(()=>({
    transform: [{
      translateY: withSpring(interpolate(anim.value,[0,1,2],[0,height,height]))
    }]
  }));

  const slideRight = useAnimatedStyle(()=>({
    transform: [{
      translateX: withSpring(interpolate(anim.value,[0,1,2],[width,0,width]))
    }]
  }));

  const zoom = useAnimatedStyle(()=>({
    transform: [{
      scale: withSpring(interpolate(anim.value,[0,1,2],[0,0,1]))
    }]
  }));

  const expand = useAnimatedStyle(()=>({
    transform: [{
      scaleX: withSpring(interpolate(anim.value,[0,1,2],[0,0,1]))
    }]
  }));

  const data = [
    {
      key: 1,
      image: require('../../assets/welcome-screen/a.png'),
      title: "Enjoy New Fashion Deals Today",
      subtitle: "Top brands and deals available only on bizWap"
    },
    {
      key: 2,
      image: require('../../assets/welcome-screen/b.png'),
      title: "Enjoy New Fashion Deals Today",
      subtitle: "Top brands and deals available only on bizWap"
    },
    {
      key: 3,
      image: require('../../assets/welcome-screen/c.png'),
      title: "Enjoy New Fashion Deals Today",
      subtitle: "Top brands and deals available only on bizWap"
    }
  ];

  const renderItem = ({item,index})=>{
    let effect = null;
    if(index === 0) effect = slideTop;
    if(index === 1) effect = slideRight;
    if(index === 2) effect = zoom;

    return (
      <View style={{flex: 1, justifyContent: index !== 2 ? 'center' : null, alignItems: 'center'}}>
        <Animated.Image
          resizeMode="contain"
          source={item.image}
          style={[
            {
              width: 325,
              height: 399,
              top: item.key === 3 ? -50 : 0,
              right: item.key === 3 ? -100 : 0
            },
            effect
          ]}
        />
        {index === 2 && <Image source={require('../../assets/Logo.png')} />}
        <View style={{marginVertical : 20}}>
          <Text style={{textAlign: 'center',fontSize: 18, marginBottom: 4}}>
            {item.title}
          </Text>
          <Text style={{textAlign: 'center'}}>{item.subtitle}</Text>
        </View>
      </View>
    );
  }

  const renderSkipButton = ()=>(
    <TouchableOpacity onPress={()=>navigation.navigate('drawer')} style={{
      backgroundColor: '#752FFF',
      paddingVertical: 14,
      borderRadius: 4
    }}>
      <Text style={{color: 'white', fontSize: 16, textAlign: 'center'}}>Skip</Text>
    </TouchableOpacity>
  );

  const renderDoneButton = ()=>(
    <Animated.View style={expand}>
      <TouchableOpacity style={{
        backgroundColor: '#752FFF',
        paddingVertical: 14,
        borderRadius: 4,
        marginBottom: 8
      }}
      onPress={()=>navigation.navigate("sign-up")}
      >
        <Text style={{color: 'white', fontSize: 16, textAlign: 'center'}}>
          Create An Account
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        backgroundColor: '#FFBE00',
        paddingVertical: 14,
        borderRadius: 4
      }}
      onPress={()=>navigation.navigate("login")}
      >
        <Text style={{color: 'white', fontSize: 16, textAlign: 'center'}}>
          Sign in
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <View style={{flex: 1}}>
      <AppIntroSlider
        data={data}
        renderItem={renderItem}
        showSkipButton
        bottomButton
        showNextButton={false}
        renderSkipButton={renderSkipButton}
        renderDoneButton={renderDoneButton}
        onSlideChange={onSlideChange}
      />
    </View>
  );
}

export default Index;
