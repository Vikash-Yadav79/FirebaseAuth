import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Header from '../../reusable/header';
import Icon from 'react-native-vector-icons/Ionicons'


const SearchIcon = ()=>(
    <TouchableOpacity>
        <Icon name="search-outline" size={22} color="#424242" />
    </TouchableOpacity>
)

const Notification = ()=>{
    return (
        <Header title="Notification" right={<SearchIcon />}>
            <View className="px-6 gap-y-4">
                {
                    Array(16).fill(0).map((item,index)=>(
                        <View key={index} className="flex-row bg-white gap-x-3 rounded-lg py-4">
                            <View className="bg-gray-500 w-16 h-16 rounded" />
                            <View>
                                <Text className="text-gray-500">Your order MKS368952 is ready for ship</Text>
                                <Text className="text-gray-500 text-xs">10:00AM</Text>
                            </View>
                        </View>
                    ))
                }
            </View>
        </Header>
    )
}

export default Notification
