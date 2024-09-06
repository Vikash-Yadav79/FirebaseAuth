import React from 'react';
import {Text, View, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';

const Delivery = ()=>{
    return (
        <View className="flex-1 bg-gray-100">
            <View className="px-6 pt-4 pb-8 gap-y-8">
                <View className="flex-row items-center gap-x-8">
                    <TouchableOpacity className="bg-white p-2 rounded border border-slate-200">
                        <Icon name="chevron-back" size={18} color="purple" />
                    </TouchableOpacity>
                    <Text className="text-xl font-semibold">Delivery</Text>
                </View>
                <View className="gap-y-2">
                    <View className="flex-row items-center">
                        <View className="w-2 h-2 bg-purple-500 rounded-full" />
                        <View className="h-0.5 bg-purple-500 flex-grow" />
                        <View className="w-2 h-2 bg-purple-500 rounded-full" />
                        <View className="h-0.5 bg-purple-500 flex-grow" />
                        <View className="w-2 h-2 bg-gray-300 rounded-full" />
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
            <View className="flex-1 bg-purple-50 rounded-t-3xl p-10 justify-between">
                <View className="gap-y-3">
                    <View className="bg-white p-4 rounded-lg gap-y-0.5 shadow-lg shadow-indigo-500/50">
                        <Text>Free Delivery - $0.00</Text>
                        <Text className="text-slate-500 text-xs">2-5 Day Delivery</Text>
                    </View>
                    <View className="bg-purple-500 p-4 rounded-lg gap-y-0.5 shadow-lg shadow-indigo-500/50">
                        <Text className="text-white">Free Delivery - $0.00</Text>
                        <Text className="text-white text-xs">2-5 Day Delivery</Text>
                    </View>
                    <View className="bg-white p-4 rounded-lg gap-y-0.5 shadow-lg shadow-indigo-500/50">
                        <Text>Free Delivery - $0.00</Text>
                        <Text className="text-slate-500 text-xs">2-5 Day Delivery</Text>
                    </View>
                </View>
                <View className="items-center gap-y-6">
                    <Text className="w-3/5 text-center text-slate-500 text-xs">Free shipping over $49+ free return and exchange</Text>
                    <TouchableOpacity className="w-full bg-purple-500 py-3 rounded">
                        <Text className="text-white text-center">Next</Text>
                    </TouchableOpacity>
                </View>               
            </View>
        </View>
    );
}

export default Delivery
