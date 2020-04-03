import React from 'react';
import { NavigatorContainer } from '@react-navigation/native';
import { CreateStackNavigator } from '@react-navigation/stack';

const AppStack = CreateStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

export default function Routes() {
    return(
        <NavigatorContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>
        </NavigatorContainer>
    );
}