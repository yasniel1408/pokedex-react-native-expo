import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../utils/colors';
import { FavoriteScreen } from '../screens';

const Stack = createNativeStackNavigator();

const FavoriteNavigation: FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="FavoriteNavigator"
                component={FavoriteScreen}
                options={{
                    title: 'Favorites',
                    headerStyle: {
                        backgroundColor: colors.primary,
                    },
                    headerTintColor: colors.white,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
        </Stack.Navigator>
    );
};

export default FavoriteNavigation;
