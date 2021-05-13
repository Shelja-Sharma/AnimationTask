import React from 'react'
import { Image, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const HomeScreen = ()=>{


    return(
        <View style ={{alignItems:"center",height:responsiveHeight(100)}}>
            <Image source = {require("../assets/images/image3.png")} style = {{width:responsiveWidth(30),height:responsiveHeight(30)}} resizeMode ='contain' />
        </View>
    )
}


export default HomeScreen