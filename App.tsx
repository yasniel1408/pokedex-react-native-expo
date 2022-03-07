import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import MainStackNavigation from './src/navigations/MainStackNavigation';
import { store } from './src/redux/store';

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <MainStackNavigation />
                <StatusBar style="auto" />
            </NavigationContainer>
        </Provider>
    );
}
