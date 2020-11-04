import React from 'react';
import {createStackNavigator, createStackNvigator} from '@react-navigation/stack';
import Favorites from '../screens/Favorites';

const Stack = createStackNavigator();

export default function FavoriteStack()
{
    return(
        <Stack.Navigator>
            <Stack.Screen
            
            name='favorites'
            component={ Favorites}
            options = {{title:'Publicaciones  favoritas'}}
            
            
            />

        </Stack.Navigator>
    )
}