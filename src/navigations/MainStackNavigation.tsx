import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Image } from 'react-native';
import FavoriteNavigation from './FavoriteNavigation';
import PokedexNavigation from './PokedexNavigation';
import AccountNavigation from './AccountNavigation';

const Tab = createBottomTabNavigator();

const MainStackNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="FavoriteTab"
                component={FavoriteNavigation}
                options={{
                    title: 'Favorites',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="PokedexTab"
                component={PokedexNavigation}
                options={{
                    title: 'Pokedex',
                    tabBarLabel: '',
                    tabBarIcon: ({ size }) => (
                        <Image
                            source={require('../assets/pokeball.png')}
                            style={{ width: size + 30, height: size + 30 }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="AccountTab"
                component={AccountNavigation}
                options={{
                    title: 'My Account',
                    tabBarIcon: ({ color, size }) => <Icon name="user" size={size} color={color} />,
                }}
            />
        </Tab.Navigator>
    );
};

export default MainStackNavigation;
