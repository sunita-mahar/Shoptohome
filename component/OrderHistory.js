import React, { Component } from 'react';
import { View, Text, Switch, Image, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Chip, ListItem, Input, SocialIcon, SafeAreaView } from 'react-native-elements';
import { SafeAreaProvider, } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from "react";
import { colors } from "../constant/Colors";
import Search from './Search';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    Header,
    Icon,
    Button,
    Text as Etext,
    FontAwesomeIcon,
} from 'react-native-elements';
// import { TouchableOpacity } from 'react-native-gesture-handler';


const OrderHistory = ({ navigation }) => {


    const orderHistory = [
        {
            index: "1",
            delivery_date: 'Delivery on Jan 01',
            product_details: 'Real 9i(Prism Blue, 128 GB)',
            imageLink: 'https://rukminim1.flixcart.com/image/300/300/l29c9e80/mobile/l/g/m/-original-imagdnefhnhztahe.jpeg?q=90',

        },
        {
            index: "2",
            delivery_date: 'Delivery on Oct 10, 2022',
            product_details: 'Fire-Bolt Ninja Call 2',
            imageLink: 'https://rukminim1.flixcart.com/image/312/312/xif0q/smartwatch/a/c/c/-original-imagkghdrag2eftf.jpeg?q=70',

        },
        {
            index: "3",
            delivery_date: 'Deliver on Oct 22, 2021',
            product_details: 'Fashion2wear Women Gown',
            imageLink: 'https://rukminim1.flixcart.com/image/612/612/k5si2kw0/gown/f/g/e/na-s-g23-new-ethical-fashion-na-original-imafkg97vhp9qqmy.jpeg?q=70',

        },
        {
            index: "4",
            delivery_date: 'Delivered on Oct 01, 2021',
            product_details: 'Haniya Oxidised Silver Jewel Set',
            imageLink: 'https://rukminim1.flixcart.com/image/612/612/l3xcr680/jewellery-set/a/f/g/na-na-elegant-design-jewellery-set-arch-gallery-original-imagexsjcywu5u6b.jpeg?q=70',

        },
        {
            index: "5",
            delivery_date: 'Delivered on Aug 22, 2021',
            product_details: 'Sasitrends Brass Jewel Set',
            imageLink: 'https://sassytownhouseliving.com/wp-content/uploads/2021/07/How-To-Style-Any-Outfit-With-Beautiful-Fashion-Accessories.jpeg',

        },


    ];

    return (
        <View style={{ marginHorizontal: 10, }}>

            <ScrollView>

                <View style={{ height: wp('15%'), }}>
                    <Search />
                </View>

                <View style={{ marginTop: 20, }}>
                    <Text style={styles.bakery_title}> Order History </Text>
                </View>
                <View style={[styles.lineStyle, { marginVertical: 20, },]}></View>

                <FlatList

                    data={orderHistory}
                    renderItem={(element) => {
                        console.log(element.item.orderHistory);

                        return (



                            <View>
                                <TouchableOpacity style={styles.order_history_container} onPress={() => navigation.navigate("orderDetails")}>

                                    <View style={{ flex: 1, flexDirection: 'row', width: wp('100%'), justifyContent: 'center', alignItems: 'center', borderBottomColor: colors.light_gray, borderBottomWidth: 1, }}>
                                        <View style={{ width: wp('35%'), paddingLeft: 15, }}>
                                            <Image source={{ uri: element.item.imageLink }} style={styles.Order_historyArrayImage} />
                                        </View>
                                        <View style={{ width: wp('50%'), }}>
                                            <Text style={{ color: colors.black, fontWeight: "500", }}>{element.item.delivery_date}</Text>
                                            <Text style={{ marginVertical: 5, }}>{element.item.product_details}</Text>
                                            <Text style={{ marginTop: 10, marginVertical: 5, }}>
                                                <Ionicons name='star' color={colors.primary_yellow} size={15} />
                                                <Ionicons name='star' color={colors.primary_yellow} size={15} />
                                                <Ionicons name='star' color={colors.primary_yellow} size={15} />
                                                <Ionicons name='star-half-sharp' color={colors.primary_yellow} size={15} />
                                                <Ionicons name='md-star-outline' color={colors.primary_yellow} size={15} />
                                            </Text>
                                            <Text>Rate This Product Now</Text>
                                        </View>
                                        <View style={{ width: wp('20%'), height: wp('100%'), justifyContent: 'center', }}>
                                            <MaterialCommunityIcons name='chevron-right' size={25} style={{ alignItem: 'center', justifyContent: 'center', marginRight: 50, }} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>



                        )
                    }

                    }

                    keyExtractor={(item, index) => index}
                    numColumns={1}
                />

            </ScrollView>

        </View>

    )
}


const styles = StyleSheet.create({
    order_history_container: {
        height: wp('38%'),
        marginTop: 15,
    },

    lineStyle: {
        borderColor: colors.danger,
        borderWidth: 1,
    },


    bakery_categoryTitle: {
        fontSize: 18,
        color: colors.black,
        //fontWeight:"500",
    },

    bakery_title: {
        fontSize: 19,
        color: colors.black,
        fontWeight: "500",
    },

    Order_historyArrayImage: {
        width: wp('22%'),
        height: wp('25%'),
        borderRadius: 6,
        resizeMode: 'contain',

    },


})




export default OrderHistory;