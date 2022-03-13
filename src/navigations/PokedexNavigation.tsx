import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PokedexScreen } from '../screens';
import PokemonScreen from '../screens/PokemonScreen/PokemonScreen';

const Stack = createNativeStackNavigator();

const PokedexNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="PokedexNavigator"
                component={PokedexScreen}
                options={{
                    title: '',
                    headerTransparent: true,
                }}
            />
            <Stack.Screen
                name="Pokemon"
                component={PokemonScreen}
                options={{
                    title: '',
                    headerTransparent: true,
                }}
            />
        </Stack.Navigator>
    );
};

export default PokedexNavigation;
