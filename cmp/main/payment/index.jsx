import React, {useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView, TextInput, Switch, Image} from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';

const cards = [
    require('../../../assets/card/visa.png'),
    require('../../../assets/card/master-card.png'),
    require('../../../assets/card/visa.png'),
    require('../../../assets/card/master-card.png'),
    require('../../../assets/card/visa.png'),
    require('../../../assets/card/master-card.png')
]

const Payment = ()=>{
    const [save, setSave] = useState(true);
    return (
        <View className="flex-1 bg-gray-100">
            <View className="px-6 pt-4 pb-8 gap-y-8">
                <View className="flex-row items-center gap-x-8">
                    <TouchableOpacity className="bg-white p-2 rounded border border-slate-200">
                        <Icon name="chevron-back" size={18} color="purple" />
                    </TouchableOpacity>
                    <Text className="text-xl font-semibold">Payment</Text>
                </View>
                <View className="gap-y-2">
                    <View className="flex-row items-center">
                        <View className="w-2 h-2 bg-purple-500 rounded-full" />
                        <View className="h-0.5 bg-purple-500 flex-grow" />
                        <View className="w-2 h-2 bg-purple-500 rounded-full" />
                        <View className="h-0.5 bg-purple-500 flex-grow" />
                        <View className="w-2 h-2 bg-purple-500 rounded-full" />
                        <View className="h-0.5 bg-gray-200 flex-grow" />
                        <View className="w-2 h-2 bg-gray-300 rounded-full" />
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
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{height: 96}}>
                    <View className="flex-row">
                        {
                            cards.map((item,index)=>(
                                <TouchableOpacity key={index}>
                                    <Image 
                                        source={item}
                                        style={{width: 96, height: 96}}
                                    />
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </ScrollView>
                <View className="gap-y-6">
                    <View>
                        <Text>Card Number</Text>
                        <TextInput keyboardType="numeric" className="border-b border-slate-200" />
                    </View>
                    <View>
                        <Text>Card Holder Name</Text>
                        <TextInput className="border-b border-slate-200" />
                    </View>
                    <View className="flex-row gap-x-6">
                        <View className="flex-grow">
                            <Text>Expiry Date</Text>
                            <TextInput className="border-b border-slate-200" />
                        </View>
                        <View className="flex-grow">
                            <Text>CVV</Text>
                            <TextInput keyboardType="numeric" className="border-b border-slate-200" />
                        </View>
                    </View>
                </View>
                <View className="gap-y-6">
                    <View className="flex-row justify-between items-center">
                        <Text className="text-center text-slate-500 text-xs">Save credit card information</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            value={save}
                            onValueChange={()=>setSave(!save)}
                            thumbColor={save ? '#f5dd4b' : '#f4f3f4'}
                        />
                    </View>                   
                    <TouchableOpacity className="w-full bg-purple-500 py-3 rounded">
                        <Text className="text-white text-center">Pay now</Text>
                    </TouchableOpacity>
                </View>               
            </View>
        </View>
    );
}

export default Payment
