import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Search from '../screens/Search'
//import { RotationGestureHandler } from 'react-native-gesture-handler';

const Stack =  createStackNavigator();

export default function TopStack(){

    return(
        <Stack.Navigator>
            <Stack.Screen
             name = 'search'
             component={Search}
             options={{title:'Buscar publicacion'}}
            
            />

        </Stack.Navigator>
         

    )
}