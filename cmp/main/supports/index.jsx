import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import Header from '../../reusable/header';
import Icon from 'react-native-vector-icons/Ionicons';

const chats = [
    {
        user: false,
        message: 'Hi'
    },
    {
        user: true,
        message: 'Hi'
    },
    {
        user: true,
        message: 'Good evening'
    },
    {
        user: true,
        message: 'Help me !'
    },
    {
        user: true,
        message: 'Thank you !'
    },
    {
        user: false,
        message: 'Hi'
    },
    {
        user: false,
        message: 'Hi'
    },
    {
        user: false,
        message: 'Hi'
    },
    {
        user: true,
        message: 'Hi'
    },
    {
        user: false,
        message: 'Hi'
    },
    {
        user: true,
        message: 'Hi'
    },
    {
        user: false,
        message: 'Hi'
    },
    {
        user: true,
        message: 'Hi'
    }
]

const Supports = ()=>{
    return (
        <Header title="Supports">
            <View className="px-6">
                <View className="items-center gap-y-14 mb-8">
                    <View>
                        {
                            Array(3).fill(0).map((item,index)=>(
                                <View 
                                    key={index}
                                    className={`bg-gray-400 w-12 h-12 rounded-full absolute border border-white z-${index*10} -left-${index*8}`}
                                />
                            ))
                        }
                    </View>
                    <Text className="text-lg">Our Support Team</Text>
                </View>
                <View>
                    {
                        chats.map((item,index)=>(
                            <View key={index}>
                                {
                                    !item.user && 
                                    <View className="gap-y-1 mb-6">
                                        <View className="w-8 h-8 rounded-full bg-gray-400" />
                                        <View className="ml-8 w-3/5 bg-violet-200 p-4 rounded-bl-lg rounded-r-lg">
                                        <Text>{item.message}</Text> 
                                        </View>
                                    </View>
                                }
                                {
                                    item.user && 
                                    <View className="self-end mb-4 w-3/5 bg-violet-500 p-4 rounded-l-lg rounded-br-lg">
                                        <Text className="text-white">{item.message}</Text>
                                    </View>
                                }
                            </View>
                        ))
                    }
                    
                    
                </View>
                <View className="gap-y-3">
                    <View className="flex-row gap-x-2 items-center">
                        <TouchableOpacity>
                            <Icon name="happy-outline" size={20} color="#424242" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="camera-outline" size={23} color="#424242" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="image-outline" size={19} color="#424242" />
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row gap-x-3 items-center">
                        <TextInput 
                            className="bg-white flex-grow p-4 text-gray-500 border border-slate-200 rounded-lg"
                            multiline
                            placeholder="How are you today ?"
                        />
                         <TouchableOpacity>
                            <Icon name="send-outline" size={24} color="#424242" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Header>
    )
}

export default Supports;
