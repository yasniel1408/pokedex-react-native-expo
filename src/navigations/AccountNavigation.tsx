import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../utils/colors';
import { AccountScreen } from '../screens';

const Stack = createNativeStackNavigator();

const AccountNavigation: FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="AccountNavigator"
                component={AccountScreen}
                options={{
                    title: 'My Account',
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

export default AccountNavigation;
