import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';
import Header from '../../reusable/header';

const Wishlist = ()=>{
    const [wishlist, setWishlist] = useState([
        {
            thumbnail: 'photo_url',
            title: 'Low Blush Bean',
            subtitle: 'Contraty to popular',
            price: 89,
            date: 'Feb 18 at 7:30pm'
        },
        {
            thumbnail: 'photo_url',
            title: 'Low Blush Bean',
            subtitle: 'Contraty to popular',
            price: 89,
            date: 'Feb 18 at 7:30pm'
        },
        {
            thumbnail: 'photo_url',
            title: 'Low Blush Bean',
            subtitle: 'Contraty to popular',
            price: 89,
            date: 'Feb 18 at 7:30pm'
        },
        {
            thumbnail: 'photo_url',
            title: 'Low Blush Bean',
            subtitle: 'Contraty to popular',
            price: 89,
            date: 'Feb 18 at 7:30pm'
        }
    ]);

    const deleteWishlist = (index)=>{
        let tmp = [...wishlist];
        tmp.splice(index,1);
        setWishlist(tmp)
    }

    return (
        <Header title="Wishlist">
            <View className="gap-y-4 px-6">
                {
                    wishlist.map((item,index)=>(
                        <View key={index} className="flex-row bg-white rounded-lg p-3">
                            <View 
                                className="w-14 h-20 bg-gray-500 mr-4"
                            />
                            <View className="flex-grow">
                                <Text>{item.title}</Text>
                                <Text className="text-xs text-gray-400">{item.subtitle}</Text>
                                <Text className="text-lg mt-1">${item.price}</Text>
                                <View className="flex-row items-center justify-between">
                                    <Text className="text-xs text-gray-400">{item.date}</Text>
                                    <TouchableOpacity onPress={()=>deleteWishlist(index)}>
                                        <Icon name="trash-outline" color="gray" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ))
                }               
            </View>
        </Header>
    )
}

export default Wishlist;
