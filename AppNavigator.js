import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import AccountancyScreen from './screens/AccountancyScreen';
import CAHScreen from './screens/CAHScreen';
import CCSScreen from './screens/CCSScreen';
import CHEFSScreen from './screens/CHEFSScreen';
import CMScreen from './screens/CMScreen';
import COABScreen from './screens/COABScreen';
import COURSESScreen from './screens/COURSESScreen';
import CTEScreen from './screens/CTEScreen';
import FinancialManagementScreen from './screens/FinancialManagementScreen';
import HOMEScreen from './screens/HOMEScreen';
import HumanResourceManagementScreen from './screens/HumanResourceManagementScreen';
import INTRODUCEScreen from './screens/INTRODUCEScreen';
import InformationSystemScreen from './screens/InformationSystemScreen';
import LOGINScreen from './screens/LOGINScreen';
import ManagementScreen from './screens/ManagementScreen';
import MarketingManagementScreen from './screens/MarketingManagementScreen';
import REGISTERScreen from './screens/REGISTERScreen';
import RealEstateManagementScreen from './screens/RealEstateManagementScreen';
import SETTINGSScreen from './screens/SETTINGSScreen';
import WELCOMEScreen from './screens/WELCOMEScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131A2A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
          color: '#FFF',
        }}
      >
        Missing Screen
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        This screen is not in a navigator.
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        Go to Navigation mode, and click the + (plus) icon in the Navigator tab
        on the left side to add this screen to a Navigator.
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFF' }}>
        If the screen is in a Tab Navigator, make sure the screen is assigned to
        a tab in the Config panel on the right.
      </Text>
    </View>
  );
}
export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: false,
        }}
      >
        <Stack.Screen
          name="LOGINScreen"
          component={LOGINScreen}
          options={{
            headerShown: false,
            title: 'LOGIN',
          }}
        />
        <Stack.Screen
          name="REGISTERScreen"
          component={REGISTERScreen}
          options={{
            headerShown: false,
            title: 'REGISTER',
          }}
        />
        <Stack.Screen
          name="WELCOMEScreen"
          component={WELCOMEScreen}
          options={{
            headerShown: false,
            title: 'WELCOME',
          }}
        />
        <Stack.Screen
          name="INTRODUCEScreen"
          component={INTRODUCEScreen}
          options={{
            headerShown: false,
            title: 'INTRODUCE',
          }}
        />
        <Stack.Screen
          name="HOMEScreen"
          component={HOMEScreen}
          options={{
            headerShown: false,
            title: 'HOME',
          }}
        />
        <Stack.Screen
          name="COURSESScreen"
          component={COURSESScreen}
          options={{
            headerShown: false,
            title: 'COURSES',
          }}
        />
        <Stack.Screen
          name="SETTINGSScreen"
          component={SETTINGSScreen}
          options={{
            headerShown: false,
            title: 'SETTINGS',
          }}
        />
        <Stack.Screen
          name="COABScreen"
          component={COABScreen}
          options={{
            headerShown: false,
            title: 'COAB',
          }}
        />
        <Stack.Screen
          name="AccountancyScreen"
          component={AccountancyScreen}
          options={{
            headerShown: false,
            title: 'Accountancy',
          }}
        />
        <Stack.Screen
          name="CAHScreen"
          component={CAHScreen}
          options={{
            title: 'CAH',
          }}
        />
        <Stack.Screen
          name="CCSScreen"
          component={CCSScreen}
          options={{
            title: 'CCS',
          }}
        />
        <Stack.Screen
          name="CHEFSScreen"
          component={CHEFSScreen}
          options={{
            title: 'CHEFS',
          }}
        />
        <Stack.Screen
          name="CTEScreen"
          component={CTEScreen}
          options={{
            title: 'CTE',
          }}
        />
        <Stack.Screen
          name="CMScreen"
          component={CMScreen}
          options={{
            title: 'CM',
          }}
        />
        <Stack.Screen
          name="ManagementScreen"
          component={ManagementScreen}
          options={{
            title: 'Management',
          }}
        />
        <Stack.Screen
          name="InformationSystemScreen"
          component={InformationSystemScreen}
          options={{
            title: 'InformationSystem',
          }}
        />
        <Stack.Screen
          name="FinancialManagementScreen"
          component={FinancialManagementScreen}
          options={{
            title: 'Financial Management',
          }}
        />
        <Stack.Screen
          name="MarketingManagementScreen"
          component={MarketingManagementScreen}
          options={{
            title: 'Marketing Management',
          }}
        />
        <Stack.Screen
          name="HumanResourceManagementScreen"
          component={HumanResourceManagementScreen}
          options={{
            title: 'Human Resource Management',
          }}
        />
        <Stack.Screen
          name="RealEstateManagementScreen"
          component={RealEstateManagementScreen}
          options={{
            title: 'Real Estate Management',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
