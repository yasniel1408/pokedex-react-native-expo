import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../utils/colors';
import { FavoriteScreen } from '../screens';
import PokemonScreen from '../screens/PokemonScreen/PokemonScreen';

const Stack = createNativeStackNavigator();

const FavoriteNavigation: FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="FavoriteNavigator"
                component={FavoriteScreen}
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

export default FavoriteNavigation;
