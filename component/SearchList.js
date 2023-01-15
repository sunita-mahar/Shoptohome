
import React, { Component } from 'react';
import { View, Text, Switch, Image, ScrollView, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
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
import Feather from 'react-native-vector-icons/Feather';

import {
    Header,
    Icon,
    Button,
    Text as Etext,
    FontAwesomeIcon,
} from 'react-native-elements';
// import { TouchableOpacity } from 'react-native-gesture-handler';


const SearchList = ({ navigation }) => {


    const orderHistory = [
        {
            index: "1",
            product_name: 'Silver Ring',
            location: 'Jind',
            imageLink: 'https://rukminim1.flixcart.com/image/612/612/xif0q/ring/z/3/f/adjustable-1-lr104670-ring-pissara-by-sukkhi-original-imaghkkknnuqcgzj.jpeg?q=70',

        },
        {
            index: "2",
            product_name: 'Baby Sofa Seat',
            location: 'Rohtak',
            imageLink: 'https://rukminim1.flixcart.com/image/612/612/kl6wx3k0/stuffed-toy/w/m/x/baby-stuffed-sofa-toy-sitting-chair-6-samaaya-original-imagyd43eygq8hbt.jpeg?q=70',

        },
        {
            index: "3",
            product_name: 'Complexion Care Cream',
            location: 'Delhi',
            imageLink: 'https://rukminim1.flixcart.com/image/612/612/jvzkb680/foundation/z/u/7/30-9-to-5-complexion-care-cream-spf-30-pa-lakme-original-imafgrqbw9mhyqzh.jpeg?q=70',

        },
        {
            index: "4",
            product_name: 'Realme 9i',
            location: 'Jind',
            imageLink: 'https://rukminim1.flixcart.com/image/300/300/l29c9e80/mobile/l/g/m/-original-imagdnefhnhztahe.jpeg?q=90',

        },
        {
            index: "5",
            product_name: 'Ninja Call 2',
            location: 'Gurugaon',
            imageLink: 'https://rukminim1.flixcart.com/image/312/312/xif0q/smartwatch/a/c/c/-original-imagkghdrag2eftf.jpeg?q=70',

        },
        {
            index: "6",
            product_name: 'Women Gown',
            location: 'Karnal',
            imageLink: 'https://rukminim1.flixcart.com/image/612/612/k5si2kw0/gown/f/g/e/na-s-g23-new-ethical-fashion-na-original-imafkg97vhp9qqmy.jpeg?q=70',

        },
        {
            index: "7",
            product_name: 'Silver Jewel Set',
            location: 'Jind',
            imageLink: 'https://rukminim1.flixcart.com/image/612/612/l3xcr680/jewellery-set/a/f/g/na-na-elegant-design-jewellery-set-arch-gallery-original-imagexsjcywu5u6b.jpeg?q=70',

        },
        {
            index: "8",
            product_name: 'Brass Jewel Set',
            location: 'Delhi',
            imageLink: 'https://sassytownhouseliving.com/wp-content/uploads/2021/07/How-To-Style-Any-Outfit-With-Beautiful-Fashion-Accessories.jpeg',

        },

        
        


    ];

    return (
        <View style={{ marginHorizontal: 10, }}>

            <ScrollView>

                <View style={{ height: wp('10%'), marginVertical:20, alignItems:'center',}}>
                    {/* <Search /> */}

                    <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal:10, alignItems: 'center', borderColor: colors.primary_light_yellow, borderWidth:1, borderRadius:12, width: wp('90%'), height: wp('0%'), }}>
                        <View style={{ width: wp('8%'),  }}>
                            <Ionicons name='ios-search-outline' color={colors.primary_yellow} size={25} style={{}} />
                        </View>
                        <View style={{ width: wp('70%'), }}>
                            <TextInput style={styles.searchList_input_field} placeholder="Type Here..." placeholderTextColor="#bbb8b3" />
                        </View>
                        <View style={{ width: wp('15%'), height: wp('5%'),}}>
                            <Ionicons name='close' size={20} style={{ color: colors.primary_yellow, }} />
                        </View>
                    </View>
                </View>


                <FlatList

                    data={orderHistory}
                    renderItem={(element) => {
                        console.log(element.item.orderHistory);

                        return (



                            <View>
                                <TouchableOpacity style={styles.searchList_container}>

                                    <View style={{ flex: 1, flexDirection: 'row', width: wp('100%'), height: wp('0%'), justifyContent: 'center', alignItems: 'center', }}>
                                        <View style={{ width: wp('20%'), paddingLeft: 15, }}>
                                            <Image source={{ uri: element.item.imageLink }} style={styles.searchList_img} />
                                        </View>
                                        <View style={{ width: wp('60%'), }}>
                                            <Text style={{ color: colors.black, fontSize: 13, fontWeight: "500", }}>{element.item.product_name}</Text>
                                            <Text style={{ fontSize: 12, }}>{element.item.location}</Text>
                                        </View>
                                        <View style={{ width: wp('20%'), height: wp('10%'), justifyContent: 'center', }}>
                                            <Feather name='arrow-up-left' size={18} style={{color:colors.primary_light_yellow,  alignItem: 'center', justifyContent: 'center', marginRight: 0, }} />
                                        </View>
                                    </View>

                                    <View style={{ borderBottomColor: colors.light_gray, borderBottomWidth: 1, marginBottom: 20, width: wp('75%'), alignSelf: 'flex-end', }}></View>

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
    searchList_container: {
        height: wp('17%'),
        marginTop: 0,
    },

    lineStyle: {
        borderColor: colors.danger,
        borderWidth: 1,
    },


    searchList_input_field: {
        // marginTop: 20,
        // borderWidth:1,
        // borderColor: colors.primary_yellow,
        // paddingLeft: 40,
        // paddingHorizontal: 5,
        // paddingVertical: 5,
        // borderRadius: 20,
        fontFamily: "regular",
        color: "black",
        fontSize: 16,
        //marginTop:15,
        //marginLeft:30,
        // width: "90%",
        // height: 40,
        //justifyContent:"center",
    },



    searchList_img: {
        width: wp('12%'),
        height: wp('12%'),
        borderRadius: 25,
        resizeMode: 'contain',

    },


})




export default SearchList;