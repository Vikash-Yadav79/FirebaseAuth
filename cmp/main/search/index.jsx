import React, {useState} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Search = ()=>{
    const [searches, setSearches] = useState([
        "Kid`s fashion",
        "Kid`s fashion",
        "Kid`s fashion",
        "Kid`s fashion",
        "Kid`s fashion",
        "Kid`s fashion"
    ])

    const [hint, setHint] = useState([
        "Kid`s fashion",
        "Kid`s fashion",
        "Kid`s fashion",
        "Kid`s fashion",
        "Kid`s fashion",
        "Kid`s fashion"
    ])

    const deleteSearch = (index)=>{
        let tmp = [...searches];
        tmp.splice(index,1)
        setSearches(tmp)
    }

    const deleteHint = (index)=>{
        let tmp = [...hint];
        tmp.splice(index,1)
        setHint(tmp)
    }

    return (
        <View className="bg-violet-50 flex-1 px-6 py-8 gap-y-6">
            <View className="flex-row items-center">
                <TextInput 
                    className="border px-2 py-1 border-slate-200 bg-white flex-grow"
                    placeholder="Search this site"
                />
                <TouchableOpacity className="border border-l-0 border-slate-200 p-2">
                    <Icon name="search-outline" size={18} color="#424242" />
                </TouchableOpacity>
            </View>
            <View className="gap-y-1.5">
                {
                    hint.map((item,index)=>(
                        <View key={index} className="flex-row px-2 py-1 flex-grow items-center justify-between">
                            <View className="flex-row items-center gap-x-1">
                                <Icon name="locate-outline" />
                                <Text>{item}</Text>
                            </View>
                            <TouchableOpacity onPress={()=>deleteHint(index)}>
                                <Text className="text-xs text-slate-500">Remove</Text>
                            </TouchableOpacity>
                        </View>               
                    ))
                }                   
            </View>
            <View>
                <Text>Recent Search</Text>
                <View className="flex-row flex-wrap gap-2 mt-1">
                    {
                        searches.map((item,index)=>(
                            <TouchableOpacity key={index} onPress={()=>deleteSearch(index)}>
                                <View className="flex-row bg-white px-2 py-1 flex-grow items-center shadow-lg rounded">
                                    <Text>{item}</Text>
                                    <Icon name="close-outline" />
                                </View>               
                            </TouchableOpacity>
                        ))
                    }                   
                </View>
            </View>
        </View>
    )
}

export default Search;
