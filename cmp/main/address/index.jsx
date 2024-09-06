import React from 'react';
import {Text, View, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';

const Address = ()=>{
    return (
        <View className="flex-1 bg-gray-100">
            <View className="px-6 pt-4 pb-8 gap-y-8">
                <View className="flex-row items-center gap-x-8">
                    <TouchableOpacity className="bg-white p-2 rounded border border-slate-200">
                        <Icon name="chevron-back" size={18} color="purple" />
                    </TouchableOpacity>
                    <Text className="text-xl font-semibold">Address</Text>
                </View>
                <View className="gap-y-2">
                    <View className="flex-row items-center">
                        <View className="w-2 h-2 bg-purple-500 rounded-full" />
                        <View className="h-0.5 bg-purple-500 flex-grow" />
                        <View className="w-2 h-2 bg-gray-300 rounded-full" />
                        <View className="h-0.5 bg-gray-200 flex-grow" />
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
            <View className="flex-1 bg-white rounded-t-3xl p-6 justify-between">
                <View className="gap-y-6">
                    <View>
                        <Text>Name</Text>
                        <TextInput className="border-b border-slate-200" />
                    </View>
                    <View>
                        <Text>Email</Text>
                        <TextInput className="border-b border-slate-200" />
                    </View>
                    <View className="flex-row gap-x-6">
                        <View className="flex-grow">
                            <Text>City</Text>
                            <TextInput className="border-b border-slate-200" />
                        </View>
                        <View className="flex-grow">
                            <Text>Pincode</Text>
                            <TextInput keyboardType="numeric" className="border-b border-slate-200" />
                        </View>
                    </View>
                    <View>
                        <Text>State</Text>
                        <TextInput className="border-b border-slate-200" />
                    </View>
                    <View>
                        <Text>Mobile</Text>
                        <TextInput keyboardType="numeric" className="border-b border-slate-200" />
                    </View>
                </View>
                <TouchableOpacity className="bg-purple-500 py-3 rounded">
                    <Text className="text-white text-center">Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Address;
