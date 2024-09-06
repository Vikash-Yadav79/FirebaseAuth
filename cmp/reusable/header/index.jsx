import React from 'react';
import {Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';

const Header = ({right, toolbar, children, title="Title"})=>{
    return (
        <ScrollView>
            <View className="flex-1 bg-gray-100 pb-6">
                <View className="px-6 pt-4 pb-8 gap-y-8">
                    <View className="flex-row items-center gap-x-8 justify-between items-center">
                        <View className="flex-row items-center">
                            <TouchableOpacity className="bg-white p-2 mr-6 rounded border border-slate-200">
                                <Icon name="chevron-back" size={18} color="purple" />
                            </TouchableOpacity>
                            <Text className="text-xl font-semibold">{title}</Text>
                        </View>
                        {right}
                    </View>
                    {
                        toolbar && 
                        <View className="gap-y-2">
                            {toolbar}
                        </View>
                    }                   
                </View>
                {children}
            </View>
        </ScrollView>
    );
}

export default Header
