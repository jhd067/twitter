import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Top from '../screens/Top'
//import { RotationGestureHandler } from 'react-native-gesture-handler';

const Stack =  createStackNavigator();

export default function TopStack(){

    return(
        <Stack.Navigator>
            <Stack.Screen
             name = 'top'
             component={Top}
             options={{title:'Top de publicaciones'}}
            
            />

        </Stack.Navigator>
         

    )
}