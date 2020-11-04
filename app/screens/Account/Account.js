import React, {useEffect,useState} from 'react';
import { View, Text } from "react-native";
import * as firebase from 'firebase';
import UserGuest from './UserGuest';
import UserLogged from './UserLogged';
import Loading  from '../../component/Loading';


export default function Account() { 
    const [login,setlogin]= useState(null);
    useEffect(()=>{
firebase.auth().onAuthStateChanged((user) =>{
    //console.log(user);
    !user? setlogin(false):setlogin(true);
     });

}, [])
if(login===null) return <Loading isvisible={true} text ='Cargando...'/>
    return login? <UserLogged/> : <UserGuest/>

        
    


}