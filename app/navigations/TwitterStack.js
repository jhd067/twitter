import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Twitter from '../screens/Twitter'

const Stack = createStackNavigator();

export default function TwitterStack()
{
    return(
        <Stack.Navigator>
            <Stack.Screen
              name='twitters'
              component = {Twitter}
              options= {{title: "Twitter"}}
            
            />

        </Stack.Navigator>
    )
}