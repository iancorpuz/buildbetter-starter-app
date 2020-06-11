import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import the sub-stacks or modules
import LandingScreen from '../modules/Landing/LandingScreen';

const Stack = createStackNavigator();

const defaultNavigationConfig = {
  headerShown: false,
};

export const PublicScreens = () => (
  <Stack.Navigator screenOptions={defaultNavigationConfig}>
    {/* Register the stack/screen at the navigator */}
    <Stack.Screen name="LandingScreen" component={LandingScreen} />
  </Stack.Navigator>
);
