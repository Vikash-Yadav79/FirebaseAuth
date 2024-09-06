import React from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import Header from '../../reusable/header';

const Profile = ()=>{
    return (
        <Header title="User Profile">
            <View className="px-6">
                <View 
                    className="bg-gray-500 shadow-lg rounded-full w-24 h-24 self-center relative z-10"
                />
                <View className="bg-white p-6 rounded-lg gap-y-8 py-6">
                    <View>
                        <Text>Name</Text>
                        <TextInput 
                            className="border-b border-slate-300 mt-1"
                            placeholder="Yourname"
                        />
                    </View>
                    <View>
                        <Text>Email</Text>
                        <TextInput 
                            className="border-b border-slate-300 mt-1"
                            placeholder="email@email.com"
                        />
                    </View>
                    <View>
                        <Text>Address</Text>
                        <TextInput 
                            className="border-b border-slate-300 mt-1"
                            multiline
                            placeholder="email@email.com"
                        />
                    </View>
                    <View>
                        <Text>Phone</Text>
                        <TextInput 
                            className="border-b border-slate-300 mt-1"
                            placeholder="+91(0123456789)"
                            keyboardType="numeric"
                        />
                    </View>
                    <TouchableOpacity className="bg-violet-200 p-3 rounded">
                        <Text className="text-center text-gray-700">Update Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Header>
    )
}

export default Profile;
