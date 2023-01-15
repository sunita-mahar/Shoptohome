import React, { Component } from 'react';
import { View, Text, Switch, Image, ScrollView, FlatList, StyleSheet } from 'react-native';
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


const Order_Details = ({ navigation }) => {


    const orderDetails = [
        {
            index: "1",
            orderID: '0SD67894562887657',
            productName: 'Real 9i(Prism Blue, 128 GB)',
            productColor: 'Prism Blue',
            seller: 'NGIVR RETAILS',
            prize: '₹11,048',
            imageLink: 'https://rukminim1.flixcart.com/image/300/300/l29c9e80/mobile/l/g/m/-original-imagdnefhnhztahe.jpeg?q=90',
        },


    ];

    return (
        <View style={{ marginHorizontal: 10, }}>

            <ScrollView>

                <View style={{ height: wp('15%'), }}>
                    <Search />
                </View>

                <View style={{ marginTop: 20, }}>
                    <Text style={styles.bakery_title}> Order Details </Text>
                </View>
                <View style={[styles.lineStyle, { marginVertical: 20, },]}></View>

                <FlatList

                    data={orderDetails}
                    renderItem={(element) => {
                        console.log(element.item.orderDetails);

                        return (



                            <View style={styles.order_details_container}>
                                <View style={{ width: wp('100%'), height: wp('10%'), borderBottomColor: colors.light_gray, borderBottomWidth: 1, }}>
                                    <Text style={{ justifyContent: 'center', }}>Order ID - {element.item.orderID}</Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, flexDirection: 'row', width: wp('100%'), borderBottomColor: colors.light_gray, borderBottomWidth: 1, }}>
                                    <View style={{ width: wp('40%'), paddingLeft: 15, }}>
                                        <Image source={{ uri: element.item.imageLink }} style={styles.Order_historyArrayImage} />
                                    </View>
                                    <View style={{ width: wp('60%'), }}>
                                        <Text style={{ color: colors.black, fontWeight: "500", }}>{element.item.productName}</Text>
                                        <Text style={{ marginVertical: 5, }}>{element.item.productColor}</Text>
                                        <Text style={{ TextSize: 0, }}>seller: {element.item.seller}</Text>
                                        <Text style={{ color: colors.black }}> {element.item.prize}</Text>
                                    </View>
                                </View>

                                <View style={{ marginTop: 20, borderBottomColor: colors.light_gray, borderBottomWidth: 1, height: wp('30%'), }}>
                                    <Text style={{ color: colors.black }}>Order Confirmed</Text>
                                    <Text>Fri, 30th Dec 2022</Text>

                                    <Text style={{ color: colors.black, marginTop: 10, }}>Delivered <MaterialCommunityIcons name='chevron-right' size={20} style={{ justifyContent: 'center', marginTop: 20, }} /></Text>
                                    <Text>Your Item has been delivered</Text>
                                </View>

                                <View style={{ height: wp('10%'), flex: 0, flexDirection: 'row', marginVertical: 15, borderBottomColor: colors.light_gray, borderBottomWidth: 1, }}>
                                    <Text style={{ width: wp('60%'), }}>
                                        <Ionicons name='star' color={colors.primary_yellow} size={20} />
                                        <Ionicons name='star' color={colors.primary_yellow} size={20} />
                                        <Ionicons name='star' color={colors.primary_yellow} size={20} />
                                        <Ionicons name='star-half-sharp' color={colors.primary_yellow} size={20} />
                                        <Ionicons name='md-star-outline' color={colors.primary_yellow} size={20} />
                                    </Text>
                                    <Text style={{ width: wp('40%'), color: colors.primary_light }}> Write a Review</Text>
                                </View>

                                <View style={{ height: wp('10%'), alignItems: 'center', marginVertical: 5, }}>

                                    <Text style={{ color: colors.black }}> Need any help?</Text>
                                </View>


                                <View>
                                    <View style={{ height: wp('15%'), paddingTop: 25, borderBottomColor: colors.light_gray, borderBottomWidth: 1, }}>
                                        <Text>Shipping Details</Text>
                                    </View>

                                    <View style={{ paddingVertical: 10, borderBottomColor: colors.light_gray, borderBottomWidth: 1, }}>
                                        <Text style={{ color: colors.black, }}>SUNITA MAHAR</Text>
                                        <Text style={{ color: colors.black, }}>Delhi hospital, sector 23, urban estate, jind, haryana.</Text>
                                        <Text style={{ color: colors.black, }}>Delhi hospital</Text>
                                        <Text style={{ color: colors.black, }}>Jind</Text>
                                        <Text style={{ color: colors.black, }}>Haryana - 126102</Text>
                                        <Text style={{ color: colors.black, }}>Phone number : 9846574438</Text>
                                    </View>

                                </View>



                                <View style={{marginTop:15,}}>
                                    <View style={{ height: wp('10%'), paddingTop: 10, borderBottomColor: colors.light_gray, borderBottomWidth: 1, }}>
                                        <Text>Price Details</Text>
                                    </View>

                                    <View style={{ paddingVertical: 10, borderBottomColor: colors.light_gray, borderBottomWidth: 1, }}>
                                        <View style={{ height: wp('8%'), flex: 0, flexDirection: 'row',  }}>
                                            <Text style={{ width: wp('70%'), color: colors.black, }}>Selling Price</Text>
                                            <Text style={{ width: wp('30%'), color: colors.black, }}>₹16,999 </Text>
                                        </View>
                                        <View style={{ height: wp('8%'), flex: 0, flexDirection: 'row', }}>
                                            <Text style={{ width: wp('70%'), color: colors.black, }}>Extra Discount</Text>
                                            <Text style={{ width: wp('30%'), color: colors.black, }}>-₹6,000 </Text>
                                        </View>
                                        <View style={{ height: wp('8%'), flex: 0, flexDirection: 'row',  }}>
                                            <Text style={{ width: wp('70%'), color: colors.black, }}>Special Price</Text>
                                            <Text style={{ width: wp('30%'), color: colors.black, }}>₹10,999 </Text>
                                        </View>
                                        <View style={{ height: wp('8%'), flex: 0, flexDirection: 'row',  }}>
                                            <Text style={{ width: wp('70%'), color: colors.black, }}>Promotion Discount</Text>
                                            <Text style={{ width: wp('30%'), color: colors.black, }}>₹0 </Text>
                                        </View>
                                        <View style={{ height: wp('8%'), flex: 0, flexDirection: 'row', }}>
                                            <Text style={{ width: wp('70%'), color: colors.black, }}>Shipping fee + Secured Packaging fee</Text>
                                            <Text style={{ width: wp('30%'), color: colors.black, }}>₹89 </Text>
                                        </View>
                                        <View style={{ height: wp('8%'), flex: 0, flexDirection: 'row', }}>
                                            <Text style={{ width: wp('70%'), color: colors.black, }}>Shipped Discount</Text>
                                            <Text style={{ width: wp('30%'), color: colors.black, }}>-₹40 </Text>
                                        </View>


                                        <View style={{ height: wp('8%'), flex: 0, flexDirection: 'row', marginVertical: 15, borderBottomColor: colors.light_gray, borderBottomWidth: 1,  borderTopColor: colors.light_gray, borderTopWidth: 1, }}>
                                            <Text style={{ width: wp('70%'), color: colors.black, }}>Total Ammount</Text>
                                            <Text style={{ width: wp('30%'), color: colors.black }}> ₹11,048</Text>
                                        </View>

                                    </View>

                                </View>

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
    order_details_container: {
        height: wp('250%'),
        marginTop: 0,
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




export default Order_Details;