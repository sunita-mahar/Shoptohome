
import React from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import {colors, Icon} from 'react-native-elements';
import {color} from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Home_Category = ({dataArray}) => {
  return (
    <View style={styles.toDoListScroll} >
      <ScrollView 
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.myList}>
        {dataArray.map((i, index) => {
            //console.log(i.imageLink)
          return (
            <View key={index}>

              {/* <Text style={styles.categoryTitle}>{i.name?i.name:null}</Text> */}
              
            <View style={styles.todoist_container}>
              
              <View style={styles.todolist_title_section}>
                 
               <View>
                <Image source={{uri: i.imageLink}} style={styles.listArrayImage}/>
               </View>
                
                <View style={styles.todolist_title_sec}>
                  <Text style={styles.listArrayTitle}>{i.title}</Text>
                </View>
                   {/* <Text style={{}}><Ionicons name='cart-sharp' color={'coral'} size={25} backgroundColor={'red'}/> </Text> */}
              </View>

              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    todoist_container:{
        //marginVertical: 20,  
        //marginHorizontal:10,
       // backgroundColor: "#ffffffd9",
        //padding:20,
        borderRadius: 6,
        //marginRight:20,
        // overflow:"hidden",
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.2,
        // shadowRadius: 4,  
        // elevation: 3,
        alignItems: 'center', 
        justifyContent:'center',
        marginLeft:50,
        // width:50,
        // height:180,
        width: wp('15%'),
       height: hp('30%'),

       
    },
    listArrayTitle:{
      color: colors.black,
      fontWeight:'normal',
      fontSize:12,
      textAlign:'center',
      //marginBottom:10,
      //flexWrap:'wrap',
      //flex:1,
      //flexDirection:'column',
    },

    bold_LineStyle:{
      backgroundColor:"#ffffffd9",
      height:3,
      width:"100%",
      marginBottom:20,
      marginTop:30,
    },

    listArrayImage:{
      height:70,
       width:70,
       resizeMode:"contain",
       borderRadius:50,
       alignSelf:'center',
    },

    toDoListScroll: {
    //width: wp('100%'),
    //height: hp('30%'),
    marginTop:-10,
    marginBottom:-10,
    
  },

  todolist_title_section:{
     flexDirection:'column',
     //marginTop:20,
     //marginBottom:-20,
     //backgroundColor:'coral',
     //width:100,
     width: wp('100%'),
    
  },
   
  todolist_title_sec:{
    // flexDirection:'column',
    // paddingRight:10,
    
  },

  imgStyle: {
    //width: wp('40%'),
  },
  myList: {
    //marginLeft:20,
    //width: wp('100%'),
  },
  categoryTitle:{
    color: 'black',
    fontWeight: 'normal',
    fontSize: 15,
    marginTop:20,
  },
  marketcontent: {
    marginVertical: 10,
    //width: wp('50%'),
    marginTop: 30,
  },
});

export default Home_Category ;

