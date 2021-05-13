import React, { useRef } from 'react'
import { Animated, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const HeaderScroll = ({navigation}) => {

    const Spacing = 20
    const AvatarSize = 70
    const INPUT_SIZE = AvatarSize + Spacing * 3
    const scrollY = useRef(new Animated.Value(0)).current
    const headerY = new Animated.Value(0)
    const diffClamp = Animated.diffClamp(headerY, 0, 45)

    const translateHeaderY = diffClamp.interpolate({
        inputRange: [0, 45],
        outputRange: [0, -45]
    })

    const data = [
        {
            id: 101, title: 'Cute Doll', type: 'toy', pic: require('../assets/images/image1.png'), starVal: 2.5, count: 1, price: 100, updatePrice: 100
        },
        {
            id: 102, title: 'Cute Baby Elephant', type: 'toy', pic: require('../assets/images/happiley.png'), starVal: 4.3, count: 1, price: 150, updatePrice: 150
        },
        {
            id: 103, title: 'Winnie the Pooh', type: 'toy', pic: require('../assets/images/image2.png'), starVal: 3, count: 1, price: 500, updatePrice: 500
        },
        {
            id: 104, title: 'Tweety Bird', type: 'toy', pic: require('../assets/images/image4.png'), starVal: 4.5, count: 1, price: 250, updatePrice: 250
        },
        {
            id: 105, title: 'Little Cute Ganesha', type: 'toy', pic: require('../assets/images/image3.png'), starVal: 2, count: 1, price: 300, updatePrice: 300
        },
        {
            id: 106, title: 'Blue shoes', type: 'shoes', pic: require('../assets/images/shoes1.png'), starVal: 2.5, count: 1, price: 200, updatePrice: 200
        },
        {
            id: 107, title: 'White shoes', type: 'shoes', pic: require('../assets/images/shoes2.png'), starVal: 5, count: 1, price: 400, updatePrice: 400
        },
        {
            id: 108, title: 'Pink shoes', type: 'shoes', pic: require('../assets/images/shoes3.png'), starVal: 1.5, count: 1, price: 100, updatePrice: 400
        },
        {
            id: 109, title: 'Black shoes', type: 'shoes', pic: require('../assets/images/shoes4.png'), starVal: 2.5, count: 1, price: 200, updatePrice: 200
        },
        {
            id: 110, title: 'MultiColorshoes', type: 'shoes', pic: require('../assets/images/shoes5.png'), starVal: 5, count: 1, price: 400, updatePrice: 400
        },
        {
            id: 111, title: 'Brown shoes', type: 'shoes', pic: require('../assets/images/shoes6.png'), starVal: 1.2, count: 1, price: 100, updatePrice: 100
        },
        {
            id: 112, title: 'Blue Kurta', type: 'cloths', pic: require('../assets/images/blue_kurta.png'), starVal: 2.5, count: 1, price: 200, updatePrice: 200
        },

        {
            id: 114, title: 'Black Kurta', type: 'cloths', pic: require('../assets/images/black_kurta.png'), starVal: 1, count: 1, price: 100, updatePrice: 100
        }
    ]

    const renderDataItem = ({ item, index }) => {

        const inputRange = [-1, 0, INPUT_SIZE * index, INPUT_SIZE * (index + 2)]
        const opacityInputRange = [-1, 0, INPUT_SIZE * index, INPUT_SIZE * (index + 1)]
        const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0]
        })
        const opacityY = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [0, 0, 0, 0],
            extrapolate: 'clamp'
        })

        return (
            <TouchableOpacity onPress = {()=>navigation.navigate("UserProfile")}>
         
                <Animated.View style={{ transform: [{ scale }], opacityY, flexDirection: 'row', backgroundColor: 'lightblue', borderRadius: 20, padding: Spacing, marginBottom: Spacing }}>
                    <Image source={item.pic} style={{ marginRight: Spacing / 2, width: AvatarSize, height: AvatarSize, borderRadius: AvatarSize }} />
                    <View>
                        <Text style={{ fontSize: responsiveFontSize(2.5), fontWeight: 'bold' }}>{item.title}</Text>
                        <Text style={{ fontSize: responsiveFontSize(2) }}>{item.price}</Text>
                    </View>
                </Animated.View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Animated.View style={{ transform: [{ translateY: translateHeaderY }], elevation: 4, zIndex: 100 }}>
                <View style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 45, width: responsiveWidth(100), backgroundColor: 'lightcoral', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: responsiveFontSize(3),color:'white' }}>Welcome</Text>
                </View>

            </Animated.View>

            <Animated.View style={{ transform: [{ translateY: translateHeaderY }], elevation: 4, zIndex: 100 }}>
                <View style={{ marginTop: 45, position: 'absolute', left: 0, right: 0, top: 0, height: 45, width: responsiveWidth(100), backgroundColor: 'maroon', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: responsiveFontSize(2), color: 'white' }}>Sub Header is t</Text>
                </View>
            </Animated.View>
            <Animated.FlatList

                onScroll={(e) => {
                    scrollY.setValue(e.nativeEvent.contentOffset.y),
                    headerY.setValue(e.nativeEvent.contentOffset.y)
                }}
                data={data} renderItem={renderDataItem} contentContainerStyle={{ padding: Spacing, paddingTop: 100 }} />

        </View>
    )
}

export default HeaderScroll