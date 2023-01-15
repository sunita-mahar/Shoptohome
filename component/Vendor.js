import React, { Component } from 'react';
import { View, Text, Switch, Image, ScrollView, FlatList, StyleSheet } from 'react-native';
import { Chip, ListItem, Input, SocialIcon, SafeAreaView } from 'react-native-elements';
import { SafeAreaProvider, } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from "react";
import { colors } from "../constant/Colors";
import Search from './Search';
import { product } from './ProductData';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
    Header,
    Icon,
    Button,
    Text as Etext,
    FontAwesomeIcon,
} from 'react-native-elements';


const VendorList = ({ navigation }) => {


    const vendor = [
        {
            index: "1",
            title: 'Online Boutique',
            address: 'North India Best Shop, Woolen Cloth',
            distance: '42 min | 5 km away',
            placedOrder: '545+',
            imageLink: 'https://blog.tunubi.com/wp-content/uploads/2018/06/Ropa-2-800x500.jpg',
            category: 'Clothes',
        },
        {
            index: "2",
            title: 'Pasrija Boot House',
            address: 'Pasrija Boot House, Best Footwear Collection',
            distance: '45 min | 4 km away',
            placedOrder: '774+',
            imageLink: 'https://media.istockphoto.com/id/471895463/photo/portrait-of-a-shoe-store-owner.jpg?s=612x612&w=0&k=20&c=uR2w7PaPfWad2GVlRXv1C8--IDoDUHgPCyswq2e_mOc=',
            category: 'Footwear',
        },
        {
            index: "3",
            title: 'Geeta Leather Emporium',
            address: 'Geeta Leather Emporium, Leather Good Store',
            distance: '30 min | 10 km away',
            placedOrder: '500+',
            imageLink: 'https://i0.wp.com/www.craftshades.com/wp-content/uploads/2022/02/Untitled-2-14.png?fit=514%2C514&ssl=1',
            category: 'Bags',
        },
        {
            index: "4",
            title: 'EvershineTrendz',
            address: 'Fashion Accessories, Jewelry & Handbags',
            distance: '40 min | 5 km away',
            placedOrder: '340+',
            imageLink: 'https://sassytownhouseliving.com/wp-content/uploads/2021/07/How-To-Style-Any-Outfit-With-Beautiful-Fashion-Accessories.jpeg',
            category: 'Accessories',
        },


    ];

    return (
        <View style={{ marginHorizontal: 10, }}>

            <View style={{ height: wp('15%'), }}>
                <Search />
            </View>

            <View style={{ marginTop: 20, }}>
                <Text style={styles.bakery_title}> Vendor Shop</Text>
            </View>
            <View style={[styles.lineStyle, { marginVertical: 20, },]}></View>

            <FlatList

                data={vendor}
                renderItem={(element) => {
                    console.log(element.item.vendor);

                    return (
                        //   <View style={{ }}>

                        <View style={styles.vendor_container}>


                            <View style={{ flex: 0, flexDirection: 'row', width: wp('95%'), height: wp('38%'), padding: 15, marginBottom: 10, backgroundColor: colors.white, borderRadius: 10, }}>
                                <View style={{ width: wp('25%') }}>
                                    <Image source={{ uri: element.item.imageLink }} style={styles.productArrayImage} />
                                </View>
                                <View style={{ width: wp('70%'), height: wp('50%'), alignItems: 'flex-end', }}>
                                    <View style={{ width: wp('60%'), height: wp('9%'), flex: 0, flexDirection: 'row', marginVertical: 0, }}>
                                        <View style={{ width: wp('45%'), }}><Text style={{ color: colors.black, fontSize: 15, fontWeight: "600", }} onPress={() => navigation.navigate("product")}>{element.item.title}</Text></View>
                                        <View style={{ width: wp('15%'), color: colors.black, }}>
                                            <Text><MaterialIcons name='verified-user' color={colors.primary_shadow} size={17} /></Text>
                                        </View>
                                    </View>

                                    <View style={{ width: wp('60%'), height: wp('10%'), flex: 0, flexDirection: 'row', marginTop: 0 }}>
                                        <View style={{ width: wp('5%'), }}><Text><MaterialCommunityIcons name='map-marker-right-outline' color={colors.danger} size={15} /></Text></View>
                                        <View style={{ width: wp('50%'), }}><Text style={{ fontSize: 12, }}>{element.item.address}</Text></View>
                                        {/* <View style={{ width: wp('30%'),}}><Text style={{fontSize:12,}}>Start From ₹1,000</Text></View> */}
                                    </View>

                                    <View style={{ width: wp('60%'), height: wp('5%'), flex: 0, flexDirection: 'row', marginTop: 2, }}>
                                        <View style={{ width: wp('5%'), }}><Text><MaterialCommunityIcons name='av-timer' color={colors.danger} size={15} /></Text></View>
                                        <View style={{ width: wp('50%'), }}><Text style={styles.walking_distance}>{element.item.distance ? element.item.distance : null}</Text></View>
                                    </View>

                                    <View style={{ borderBottomColor: colors.light_gray, borderBottomWidth: 1, width: wp('50%'), alignSelf: 'center', }}></View>

                                    <View style={{ width: wp('60%'), height: wp('8%'), flex: 0, flexDirection: 'row', marginVertical: 2, justifyContent: 'space-between', }}>
                                        <View style={{ width: wp('5%'), }}><Text><FontAwesome5 name='map' color={colors.danger} size={13} /></Text></View>
                                        <View style={{ width: wp('80%'), }}><Text style={{ fontSize: 10, }}>{element.item.placedOrder} orders placed from here</Text></View>
                                    </View>


                                </View>
                            </View>


                        </View>

                        //   {/* </View> */}

                    )
                }

                }

                keyExtractor={(item, index) => index}
                numColumns={1}
            />

        </View>

    )
}


const styles = StyleSheet.create({

    lineStyle: {
        borderColor: colors.danger,
        borderWidth: 1,
    },

    walking_distance: {
        color: colors.primary_shadow,
        fontWeight: '500',
        fontSize: 10,
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

    productArrayImage: {
        width: wp('30%'),
        height: wp('30%'),
        borderRadius: 6,
        resizeMode: 'cover',
    },

    vendor_container: {


    },
})




export default VendorList;