import React from "react";
import {StyleSheet,View,ScrollView,Text,Image} from 'react-native';
import {Button}  from 'react-native-elements';
import {useNavigation } from '@react-navigation/native'

export default function UserGuest() { 
    const navigation = useNavigation()
    return(
       <ScrollView centerContent={true} style={styles.viewBody}> 
           <Image
           source={require("../../../assets/img/user-guest.jpg")}
           resizeMode="contain"
           style={styles.image}
           />
           <Text style={styles.title}>Consulta de perfil</Text>
           <Text style={styles.description}></Text>
           <View style={styles.viewbtn}>
               <Button 
               title='Ver perfil'
               buttonStyle={styles.btnStyle}
               containerStyle={styles.btnContainer}
               onPress={()=> navigation.navigate('login')}>
               
               </Button>
               

           </View>
       </ScrollView>

    );
   

}
const styles = StyleSheet.create({
    viewBody: {
        marginleft:30,
        marginRight:30,
    },
    image: {
        height:300,
        width:'100%',
        marginBottom:40,
    },
    title: {
        fontNeight:'bold',
        fontSize:19,
        marginBottom:18,
        textAlign:'center'
    },

    description:{
        textAlign:'center',
        marginBottom: 20,

    },
    viewbtn:{
        flex:1,
        alignItems:'center'
    },
    btnStyle:{
        backgroundColor: '#00a680',
    },

    btnContainer: {
        width: '70%',
    }
});


    
