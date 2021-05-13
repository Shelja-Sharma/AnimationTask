import React from 'react'
import { Text, View } from 'react-native'
import { responsiveFontSize } from 'react-native-responsive-dimensions'

const NewUserScreen = ()=>{
    return(
        <View>
            <Text style = {{fontSize:responsiveFontSize(3)}}>welcome</Text>
        </View>
    )
}




export default NewUserScreen