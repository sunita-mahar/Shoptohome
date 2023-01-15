
import React from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import {colors, Icon} from 'react-native-elements';
import {color} from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ToDoListCall = ({dataArray}) => {
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

            <Text style={styles.categoryTitle}>{i.name?i.name:null}</Text>
              
            <View style={styles.todoist_container}>
              
              <View style={{width: hp('30%'), height: hp('20%'), }}>
                <Image source={{uri: i.imageLink}} style={styles.listArrayImage}/>
              </View>
               
              <View style={styles.todolist_title_section}>
                <View style={styles.todolist_title_sec}>
                 <Text style={styles.listArrayTitle}>{i.title}</Text>
                 <Text style={{ color: 'coral',fontWeight: 'normal',}}>{i.cost?i.cost:null}</Text>
                </View>
                 <Text style={{alignItems:'flex-end',}}><Ionicons name='cart-sharp' color={'coral'} size={25} backgroundColor={'red'}/> </Text>
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
        marginVertical: 20,  
        marginHorizontal:10,
        //backgroundColor: "#ffffffd9",
        borderRadius: 6,
       // overflow:"hidden",
        //shadowColor: '#000',
        //shadowOffset: { width: 0, height: 1 },
        //shadowOpacity: 0.2,
        //shadowRadius: 4,  
        // elevation: 3,
        // alignItems: 'center', 
        // justifyContent:'center',
        //width:160,
       // height:180,
       
    },
    listArrayTitle:{
      color: 'black',
      fontWeight: 'normal',
      fontSize: 15,
      //marginBottom:10,
      //flexWrap:'wrap',
      //flex:1,
      //flexDirection:'column',
    },

    bold_LineStyle:{
      backgroundColor:"#ffffffd9",
      height: hp('30%'),
      //width: hp('100%'),
      marginBottom:20,
      marginTop:30,
    },

    listArrayImage:{
      height: hp('23%'),
      width: hp('28%'),
      //height:180,
      // width:200,
       resizeMode:"cover",
       borderRadius:4,
    
    },

    toDoListScroll: {
    //width: wp('100%'),
    //height: hp('30%'),
    marginTop:-10,
    marginBottom:-30,
    
  },

  todolist_title_section:{
    flex:1,
     flexDirection:'row',
     marginTop:30,
     marginBottom:10,
     
  },
   
  todolist_title_sec:{
    flexDirection:'column',
    paddingRight:10,
  },

  imgStyle: {
    //width: wp('40%'),
  },
  myList: {
    marginLeft: 20,
    //width: wp('100%'),
  },
  categoryTitle:{
    color: colors.black,
    fontWeight: '700',
    fontSize: 20,
    marginTop:20,
    
  },
  marketcontent: {
    marginVertical: 10,
    //width: wp('50%'),
    marginTop: 30,
  },
});

export default ToDoListCall ;

