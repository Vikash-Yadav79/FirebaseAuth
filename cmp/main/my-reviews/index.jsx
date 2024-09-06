import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Header from '../../reusable/header';

const Reviews = ()=>{
    return (
        <Header title="My Reviews">
            <View className="px-6 gap-y-4">
                {
                    Array(16).fill(0).map((item,index)=>(
                        <View key={index} className="flex-row bg-white gap-x-3 rounded-lg py-4">
                            <View className="bg-gray-500 w-16 h-16 rounded" />
                            <View>
                                <Text className="text-gray-500">Your order MKS368952 is ready for ship</Text>
                                <Text className="text-gray-500 text-xs">10:00AM</Text>
                                <TouchableOpacity className="self-end rounded-full bg-violet-200 py-1.5 px-2.5">
                                    <Text className="text-xs">Reviews</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))
                }
            </View>
        </Header>
    )
}

export default Reviews
