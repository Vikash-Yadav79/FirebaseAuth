import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Message = ()=>{
    return (
        <View className="flex-1 bg-white justify-center items-center px-8">
            <View className="bg-violet-700 rounded-3xl pb-10 items-center px-12 gap-y-4">
                <Icon name="checkmark-circle" size={96} color="#FFBE00" />
                <Text className="text-center text-white">
                    You have successfully placed an order.
                    we will call to verity the order ,Do more
                    than pay attention to the phone
                </Text>
                <TouchableOpacity className="bg-amber-400 px-12 py-4 rounded-lg">
                    <Text>Back To Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Message
