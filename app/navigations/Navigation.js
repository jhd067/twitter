import 'react-native-gesture-handler';
import React from "react";
//import {Icon} from '@react-native-elements'
import {Icon} from 'react-native-elements'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountStack from './AccountStack';
import SearchStack from './SearchStack';
import TwitterStack from "./TwitterStack";
import  FavoriteStack from './FavoriteStack';
import TopStack from './TopStack';
import { Value } from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
         < NavigationContainer >
        <Tab.Navigator initialRouteName='Twitter'
        tabBarOptions={{
            inactiveTintColor:'#646464',
            activeTintColor:'#00a680'
        }}
        screenOptions={({route}) =>({
            tabBarIcon:({color}) =>screenOptions(route,color),

        })}
        >
        <Tab.Screen name = "Account" 
                    component = { AccountStack  }
                    options = {{ title: 'Cuenta'}}/> 
        <Tab.Screen name = "twitter"
                    component = { TwitterStack  }
                    options = {{ title: 'Twitter'}}/>  
        <Tab.Screen name = "favorite" 
                    component = { FavoriteStack }
                    options = {{ title: 'Favoritos'}}/>  
        
        <Tab.Screen name = "search" 
                    component = { SearchStack }
                    options = {{ title: 'Buscar'}}/> 
        <Tab.Screen name = "top" 
                    component = { TopStack }
                    options = {{ title: 'Top'}}/> 
                    
        </Tab.Navigator >  
        </NavigationContainer >


    );
}
function screenOptions(route,color){
    let iconName;
    switch(route.name){
        case 'twitter':
            iconName = 'compass-outline';
            break;
            case 'favorite':
            iconName = 'heart-outline';
            break;
            case 'search':
                iconName = 'magnify';
                break;
            case 'top':
                    iconName = 'star-outline';
                    break;
            case 'Account':
                        iconName = 'home-outline';
                        break;
            
            default:
                break;
    }
    return(
        <Icon type='material-community' name={iconName} size={22} color={color} />
    )

}