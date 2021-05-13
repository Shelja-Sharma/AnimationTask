import React from 'react'
import { Image, Text, View } from 'react-native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const SettingScreen = ()=>{
    return(
        <View style ={{alignItems:"center",height:responsiveHeight(100)}}>
            <Image source = {require("../assets/images/image4.png")} style = {{width:responsiveWidth(30),height:responsiveHeight(30)}} resizeMode ='contain' />
        </View>
    )
}


export default SettingScreen