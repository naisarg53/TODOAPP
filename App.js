import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './components/HomeScreen';
import DetailsScreen  from './components/DetailsScreen';
import AddScreen from './components/AddScreen';
import { TodoProvider } from './Context/TodoContext';
import UpdateScreen from './components/UpdateScreen';

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
        Create: AddScreen,
        Update: UpdateScreen,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',                
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }
);

const AppContainer = createAppContainer(RootStack);

export default function App(){ 
    return <TodoProvider>
                <AppContainer />
            </TodoProvider>
    }
