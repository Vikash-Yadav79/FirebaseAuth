import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';
import Header from '../../reusable/header';
 
const categories = [
    "All",
    "Mens`s",
    "Women`s",
    "Kid`s"
]


const Toolbar = ()=>{
    const [activeIndex,setActiveIndex] = useState(0);
    return (
        <View className="flex-row gap-x-4 items-start">
            <View className="flex-row gap-3 flex-wrap" style={{width: 250}}>
                {
                    categories.map((item,index)=>(
                        <TouchableOpacity 
                            key={index} 
                            className={`shadow-2xl border border-slate-200 rounded-full px-4 py-2 ${activeIndex === index ? 'bg-violet-600' : 'bg-white'}`}
                            onPress={()=>setActiveIndex(index)}
                        >
                            <Text className={`${activeIndex === index ? 'text-white' : 'text-inherit'}`}>{item}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
            <View className="flex-row gap-x-1">
                <TouchableOpacity className="bg-white p-2 rounded border border-slate-200">
                    <Icon name="search" size={18} color="purple" />
                </TouchableOpacity>
                <TouchableOpacity className="bg-white p-2 rounded border border-slate-200">
                    <Icon name="filter" size={18} color="purple" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Products = ()=>{
    return (
        <Header toolbar={<Toolbar />} title="Products">
            <View className="px-6 flex-row flex-wrap gap-3">
                    {
                        Array(12).fill(0).map((item,index)=>(
                            <TouchableOpacity key={index} className="flex-grow">
                                <View className="bg-white rounded p-2 shadow-2xl">
                                    <View className="items-end">
                                        <TouchableOpacity>
                                            <Icon name="ellipsis-horizontal" size={18} color="#323232" />
                                        </TouchableOpacity>
                                    </View>
                                    <View className="w-full h-14 bg-gray-400" />
                                    <Text className="mt-2">Men`s Wear</Text>
                                    <Text className="text-xs text-slate-400">$399</Text>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                    
                </View>
        </Header>
    );
}

export default Products;
