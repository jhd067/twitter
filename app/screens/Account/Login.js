import React from 'react';
import {StyleSheet,View,ScrollView,Text,Image} from 'react-native';
import {Divider} from 'react-native-elements';

export default function Login(){
    return(
        <ScrollView>
        <Image
         source={require('../../../assets/img/it.png')}
         resize='contain' 
         style={styles.logo} />
         
        <View style={styles.viewContainer}>
            <Text>Login....</Text>
            <CreateCount/>
        </View>
        <Divider style={styles.divider}/>
        </ScrollView>
        
    )
}
function CreateCount(){
    return(
    <Text style={styles.textRegister}>Aun no tienes cuenta{""}
    <Text  style={styles.btnRegister}
            onPress={() =>console.log('Registro...')}>
                Registrate
        
        </Text></Text>
    
    )
}
const styles = StyleSheet.create({

    logo:{
        width:100,
        height:150,
        marginTop:20,
        alignItems:'center'
        
    },
    viewContainer:{
        marginRight:40,
        marginLeft:40,

    },
    textRegister:{
        marginTop:15,
        marginLeft:10,
        marginRight:10,
    },
    btnRegister:{
        color: '#00a680',
        fontWeight:'bold'

    },
    divider:{
        backgroundColor: '#00a680',
        margin:40

    }
})