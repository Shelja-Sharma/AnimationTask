import { Picker } from '@react-native-picker/picker'
import React, { useRef, useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

import AntDesign from 'react-native-vector-icons/AntDesign';

const CustomDropDown = (props) => {
    const { item, pic } = props
    const newArray = item
    console.log("newArray is", newArray, pic)
    const [value, setValue] = useState('')
    const pickerRef = useRef();
    return (
        <View style={styles.pickerViewStyle}>
            {
                pic && <AntDesign
                    name="carryout" size={20} color='white' />
            }
            <Picker
                ref={pickerRef}
                selectedValue={value}
                style={{ color: 'white', width: responsiveWidth(70) }}
                onValueChange={value => setValue(value)}
                mode='dropdown'
                itemStyle={{ backgroundColor: "blue", fontSize: 25 }}
                dropdownIconColor="white"
            >
                {
                    newArray.map((item, index) => {
                        return (
                            // console.log("item value is this and this",item)
                            <Picker.Item label={item.lable} value={item.value} />
                        )
                    })
                }
                {/* // <Picker.Item label='Select your Mobile' />
            // <Picker.Item label="Android" value="Android" />
            // <Picker.Item label="iphone 6" value="iphone 6" />
            // <Picker.Item label="iphone 11" value="iphone 11" /> */}

            </Picker>
        </View>
    )
}

export default CustomDropDown

const styles = StyleSheet.create({
    pickerViewStyle: {
        // flex:1,
        marginTop: responsiveHeight(2),
        backgroundColor: '#18191c',
        width: responsiveWidth(80),
        height: responsiveHeight(8),
        borderWidth: 2,
        alignItems: 'center',
        borderColor: '#31383f',
        borderRadius: 17,
        alignSelf: 'center',
        color: 'maroon',
        flexDirection: 'row',
        paddingHorizontal: responsiveWidth(2)

    },
})

