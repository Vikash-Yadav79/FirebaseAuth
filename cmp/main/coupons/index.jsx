import React from 'react';
import {Text, View} from 'react-native';
import Header from '../../reusable/header';


const Coupons = ()=>{
    return (
        <Header title="Coupons">
            <View className="px-6 gap-y-6">
                <View className="bg-red-400 overflow-hidden py-6 rounded-xl flex-row justify-between items-center">
                    <View className="-ml-3 w-8 h-8 bg-gray-100 rounded-full" />
                    <View className="flex-grow px-4">
                        <View className="border-b border-dashed border-white pb-4">
                            <Text className="font-bold text-5xl text-white">10%</Text>
                        </View>
                        <Text className="mt-4 text-white">Applies to first purchase</Text>                       
                        <Text className="text-white">Applies to first</Text>                       
                    </View>
                    <View className="w-8 h-8 bg-gray-100 rounded-full -mr-3" />
                </View>

                <View className="bg-amber-400 overflow-hidden py-6 rounded-xl flex-row justify-between items-center">
                    <View className="-ml-3 w-8 h-8 bg-gray-100 rounded-full" />
                    <View className="flex-grow px-4">
                        <View className="border-b border-dashed border-white pb-4">
                            <Text className="font-bold text-5xl text-white">10%</Text>
                        </View>
                        <Text className="mt-4 text-white">Applies to first purchase</Text>                       
                        <Text className="text-white">Applies to first</Text>                       
                    </View>
                    <View className="w-8 h-8 bg-gray-100 rounded-full -mr-3" />
                </View>

                <View className="bg-violet-500 overflow-hidden py-6 rounded-xl flex-row justify-between items-center">
                    <View className="-ml-3 w-8 h-8 bg-gray-100 rounded-full" />
                    <View className="flex-grow px-4">
                        <View className="border-b border-dashed border-white pb-4">
                            <Text className="font-bold text-5xl text-white">10%</Text>
                        </View>
                        <Text className="mt-4 text-white">Applies to first purchase</Text>                       
                        <Text className="text-white">Applies to first</Text>                       
                    </View>
                    <View className="w-8 h-8 bg-gray-100 rounded-full -mr-3" />
                </View>
            </View>
        </Header>
    )
}

export default Coupons;
