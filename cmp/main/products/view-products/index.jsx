import React, {useEffect, useState} from 'react';
import {TextInput, Text, ScrollView, View, TouchableOpacity, Image} from 'react-native';
import Animated, {withSpring, useSharedValue, useAnimatedStyle, withRepeat, withSequence, withTiming, interpolate} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import Tab from '../../../reusable/tab';
import Carousel from '../../../reusable/carousel';

const reviews = [
  {
    rating: 4,
    user: 'Username',
    content: 'Filler text is text that shares some characteristics of a real',
    createdAt: new Date()
  },
  {
    rating: 3,
    user: 'Username',
    content: 'Filler text is text that shares some characteristics of a real',
    createdAt: new Date()
  },
  {
    rating: 5,
    user: 'Username',
    content: 'Filler text is text that shares some characteristics of a real',
    createdAt: new Date()
  }
]

const comments = [
  {
    username: 'ravi',
    comment: 'Filler text is text that shares some characteristics of a real',
    createdAt: new Date(),
    reply: [
      {
        username: 'sikha',
        comment: 'Filler text is text that shares some characteristics of a real',
        createdAt: new Date()
      },
      {
        username: 'sohan',
        comment: 'Filler text is text that shares some characteristics of a real',
        createdAt: new Date()
      }
    ]
  },
  {
    username: 'sam',
    comment: 'Filler text is text that shares some characteristics of a real',
    createdAt: new Date(),
    reply: [
      {
        username: 'riya',
        comment: 'Filler text is text that shares some characteristics of a real',
        createdAt: new Date()
      },
      {
        username: 'priya',
        comment: 'Filler text is text that shares some characteristics of a real',
        createdAt: new Date()
      }
    ]
  }
]

const product = {
  pics: [
    require("../../../../assets/products/p1.jpg"),
    require("../../../../assets/products/p2.jpg"),
    require("../../../../assets/products/p3.jpg"),
    require("../../../../assets/products/p4.jpg"),
    require("../../../../assets/products/p5.jpg")
  ],
  title: 'Red blue shirt',
  description: "Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated",
  brand: 'brand name',
  rating: 4.5,
  price: 2000,
  discount: 10,
  colors: ["tomato","blue","yellow","green"],
  sizes: ["s","m","x","xl"]
}

const ViewProducts = ()=>{
  const [colorIndex, setColorIndex] = useState(0);
  const [sizeIndex, setSizeIndex] = useState(0);
  const colorZoom = useSharedValue(1);
  const colorZoomEffect = useAnimatedStyle(()=>({
    transform: [{
      scale: withSpring(colorZoom.value)
    }]
  }));
  const sizeZoom = useSharedValue(1);
  const sizeZoomEffect = useAnimatedStyle(()=>({
    transform: [{
      scale: withSpring(sizeZoom.value)
    }]
  }));

  const About = ()=>(
    <View>
      <Text style={{textAlign: 'justify'}}>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
      </Text>
    </View>
  )

  const Review = ()=>(
    <View>
      {
        reviews.map((item,index)=>(
          <View key={index} style={{marginBottom: 16}}>
            <View style={{flexDirection: 'row'}}>
              {
                Array(item.rating).fill(0).map((rating, ratingIndex)=>(
                  <Icon name="star" key={ratingIndex} color="#FFC107" />
                ))
              }
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', marginVertical: 2}}>{item.user}</Text>
              <Text style={{color: 'gray'}}>{item.createdAt.toLocaleDateString()}</Text>
            </View>
            <Text style={{color: '#424242'}}>{item.content}</Text>
          </View>
        ))
      }
    </View>
  )

  const Ask = ()=>(
    <View>
      <Text>Ask you questions</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#ddd',
          borderRadius: 8,
          marginTop: 6,
          marginBottom: 32
        }}
        multiline
        numberOfLines={6}
      />
      <View>
        {
          comments.map((comment,commentIndex)=>(
            <View key={commentIndex} style={{marginBottom: 24}}>
              <View style={{flexDirection: 'row', marginBottom: 12}}>
                <View style={{marginRight: 8, width: 32, height: 32, borderRadius: 4, backgroundColor: '#752FFF', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{color: 'white', textTransform: 'capitalize', fontWeight: 'bold'}}>{comment.username.slice(0,1)}</Text>
                </View>
                <View>
                  <Text>{comment.comment}</Text>
                  <Text style={{color: 'gray'}}>{comment.createdAt.toLocaleDateString()}</Text>
                </View>
              </View>
              <View>
                {
                  comment.reply.map((item,index)=>(
                    <View style={{flexDirection: 'row', marginLeft: 24, marginVertical: 8}} key={index}>
                      <View style={{marginRight: 8, width: 32, height: 32, borderRadius: 4, backgroundColor: '#FFBE00', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: 'white', textTransform: 'capitalize', fontWeight: 'bold'}}>{item.username.slice(0,1)}</Text>
                      </View>
                      <View>
                        <Text>{item.comment}</Text>
                        <Text style={{color: 'gray'}}>{item.createdAt.toLocaleDateString()}</Text>
                      </View>
                    </View>
                  ))
                }
              </View>
            </View>
          ))
        }
      </View>
    </View>
  )

  const data = [
    {
      label: 'About',
      content: <About />
    },
    {
      label: 'Review',
      content: <Review />
    },
    {
      label: 'Ask question',
      content: <Ask />
    }
  ]

  useEffect(()=>{
    colorZoom.value = withSequence(
      withTiming(2,{duration: 50}),
      withTiming(1,{duration: 50})
    );
  },[colorIndex]);

  useEffect(()=>{
    sizeZoom.value = withSequence(
      withTiming(2,{duration: 50}),
      withTiming(1,{duration: 50})
    );
  },[sizeIndex]);

  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
        <Carousel data={product.pics} />
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View style={{
              backgroundColor: '#752FFF',
              paddingVertical: 4,
              paddingHorizontal: 8,
              borderRadius: 4,
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <Icon name="star" color="#FFC107" style={{marginRight: 2}} />
              <Text style={{color: 'white'}}>{product.rating}</Text>
            </View>
            <View>
              <Text style={{fontSize: 18, color: 'tomato'}}>${product.price-(product.price*product.discount/100)}</Text>
              <Text style={{color: 'gray'}}>${product.price}</Text>
            </View>
          </View>
          <View style={{marginBottom: 16}}>
            <Text style={{fontSize: 24}}>{product.title}</Text>
            <Text style={{color: 'gray'}}>{product.brand}</Text>
          </View>
          <View style={{marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
              {
                product.colors.map((item,index)=>(
                  <TouchableOpacity key={index} onPress={()=>setColorIndex(index)}>
                    <Animated.View style={[
                      {
                        width: 24,
                        height: 24,
                        backgroundColor: item,
                        borderRadius: 12,
                        marginRight: (index === product.colors.length-1 ? 0 : 12),
                        justifyContent: 'center',
                        alignItems: 'center',
                        elevation: 2
                      },
                      colorIndex === index ? colorZoomEffect : null
                      ]}
                      >
                        {
                          colorIndex === index && <Icon name="checkmark-outline" color="black" />
                        }
                    </Animated.View>
                  </TouchableOpacity>
                ))
              }
            </View>
            <View style={{flexDirection: 'row'}}>
              {
                product.sizes.map((item,index)=>(
                  <TouchableOpacity key={index} onPress={()=>setSizeIndex(index)}>
                    <Animated.View style={[
                      {
                        width: 24,
                        height: 24,
                        borderWidth: 1,
                        borderColor: 'gray',
                        marginRight: (index === product.sizes.length-1 ? 0 : 12),
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 4,
                        backgroundColor: (sizeIndex === index ? '#2D2E4A' : 'white')
                      },
                      sizeIndex === index ? sizeZoomEffect : null
                      ]}
                      >
                        <Text
                          style={{
                            textTransform: 'uppercase',
                            color: (sizeIndex === index ? 'white' : '#2D2E4A')
                          }}>{item}</Text>
                    </Animated.View>
                  </TouchableOpacity>
                ))
              }
            </View>
          </View>
        </View>
        <View>
          <Tab data={data} />
        </View>
        <View style={{flexDirection :'row', justifyContent: 'center'}}>
          <TouchableOpacity style={{
            backgroundColor: '#752FFF',
            paddingVertical: 14,
            borderRadius: 4,
            marginVertical: 8,
            paddingHorizontal: 24,
            marginRight: 16
          }}>
            <Text style={{color: 'white', fontSize: 16, textAlign: 'center'}}>Buy now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            backgroundColor: '#FF696A',
            paddingVertical: 14,
            borderRadius: 4,
            marginVertical: 8,
            paddingHorizontal: 24,
          }}>
            <Text style={{color: 'white', fontSize: 16, textAlign: 'center'}}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default ViewProducts;
