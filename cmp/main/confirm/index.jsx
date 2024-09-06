import React from 'react';
import {Text, View, TouchableOpacity, ScrollView, TextInput, Switch, Image} from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';

const Confirm = ()=>{
    return (
        <ScrollView>
            <View className="flex-1 bg-gray-100">
                <View className="px-6 pt-4 pb-8 gap-y-8">
                    <View className="flex-row items-center gap-x-8">
                        <TouchableOpacity className="bg-white p-2 rounded border border-slate-200">
                            <Icon name="chevron-back" size={18} color="purple" />
                        </TouchableOpacity>
                        <Text className="text-xl font-semibold">Confirm</Text>
                    </View>
                    <View className="gap-y-2">
                        <View className="flex-row items-center">
                            <View className="w-2 h-2 bg-purple-500 rounded-full" />
                            <View className="h-0.5 bg-purple-500 flex-grow" />
                            <View className="w-2 h-2 bg-purple-500 rounded-full" />
                            <View className="h-0.5 bg-purple-500 flex-grow" />
                            <View className="w-2 h-2 bg-purple-500 rounded-full" />
                            <View className="h-0.5 bg-purple-500 flex-grow" />
                            <View className="w-2 h-2 bg-purple-500 rounded-full" />
                        </View>
                        <View className="flex-row items-center">
                            <Text>Address</Text>
                            <View className="h-0.5 flex-grow" />
                            <Text>Delivery</Text>
                            <View className="h-0.5 flex-grow" />
                            <Text>Payment</Text>
                            <View className="h-0.5 flex-grow" />
                            <Text>Confirm</Text>
                        </View>
                    </View>
                </View>
                <View className="flex-1 bg-white rounded-t-3xl p-6 justify-between">
                    <View className="gap-y-6">
                        <View className="gap-y-6">
                            <Text>In Your Cart</Text> 
                            {
                                Array(3).fill(0).map((item,index)=>(
                                    <View key={index} className="flex-row gap-x-4 items-center">
                                        <Image 
                                            source={require('../../../assets/products/p1.jpg')}
                                            style={{width: 70, height: 70}}
                                            resizeMode="contain"
                                        />
                                        <View>
                                            <Text>Product title</Text>
                                            <Text className="text-xs">Color</Text>
                                            <Text className="text-xs">Brand</Text>
                                            <Text className="text-sm">$122</Text>
                                        </View>
                                    </View>
                                ))
                            }
                        </View>
                        <View className="gap-y-2">
                            <Text>Delivery</Text> 
                            <View className="border rounded border-slate-200 p-2">
                                <Text>Expires - $8.99</Text> 
                                <Text className="text-xs text-gray-500">Next Day Delivery</Text> 
                            </View>
                        </View>
                        <View className="gap-y-2">
                            <Text>Payment</Text> 
                            <View className="border rounded border-slate-200 p-2 flex-row items-center justify-between">
                                <Text>**** **** **** 8956</Text> 
                                <Image 
                                    source={require('../../../assets/card/visa.png')}
                                    style={{width: 48, height: 48}}
                                />
                            </View>
                        </View>
                        <View className="gap-y-2">
                            <Text className="text-slate-500 text-xs">Total $8.222</Text>                  
                            <TouchableOpacity className="w-full bg-purple-500 py-3 rounded">
                                <Text className="text-white text-center">Pay now</Text>
                            </TouchableOpacity>
                        </View>   
                    </View>                               
                </View>
            </View>
        </ScrollView>
    );
}

export default Confirm
