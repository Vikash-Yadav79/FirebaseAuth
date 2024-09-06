import React from 'react';
import { useColorScheme } from "nativewind";
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';

const Index = ({navigation})=>{
  const {colorScheme, setColorScheme} = useColorScheme();
  return (
    <View className="flex-1 bg-amber-400 dark:bg-slate-900 gap-y-4 p-4">
      <View className="flex-row gap-x-4">
        <View className="h-28 bg-white dark:bg-slate-800 grow" />
        <View className="h-28 bg-red-500 dark:bg-slate-800 grow" />
      </View>
      <View className="flex-row gap-x-4">
        <View className="h-28 bg-white dark:bg-slate-800 grow" />
        <View className="h-28 bg-red-500 dark:bg-slate-800 grow" />
        <View className="h-28 bg-white dark:bg-slate-800 grow" />
      </View>
      <View className="flex-row gap-x-4">
        <View className="h-28 bg-red-500 dark:bg-slate-800 grow" />
        <View className="h-28 bg-white dark:bg-slate-800 w-3/4 flex-row items-center px-4">
          <View className="w-16 h-16 bg-lime-400 dark:bg-slate-700 rounded-full mr-4" />
          <View className="grow gap-y-2">
            <View className="bg-orange-400 dark:bg-slate-700 h-10"/>
            <View className="bg-green-400 dark:bg-slate-700 h-4"/>
          </View>
        </View>
        <View className="h-28 bg-red-500 dark:bg-slate-800 grow" />
      </View>
      <TouchableOpacity className="p-4 bg-white dark:bg-slate-800" onPress={()=>setColorScheme(colorScheme === "dark" ? "light" : "dark")}>
        <Text className="text-lg text-center capitalize dark:text-slate-700">{colorScheme}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Index;
