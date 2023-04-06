import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import {
  Image,
  ImageBackground,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const WELCOMEScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={false}
      hasTopSafeArea={true}
    >
      <ImageBackground
        style={StyleSheet.applyWidth(
          {
            height: '100%',
            justifyContent: 'space-around',
            paddingLeft: 16,
            paddingRight: 16,
          },
          dimensions.width
        )}
        resizeMode={'cover'}
        source={Images.Bg}
      >
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', alignSelf: 'center' },
            dimensions.width
          )}
        >
          <Image
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                borderStyle: 'solid',
                height: 300,
                width: 300,
              }),
              dimensions.width
            )}
            resizeMode={'contain'}
            source={Images._253775196363533675458611738074939695285263N}
          />
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color'],
                fontFamily: 'Poppins_700Bold',
                fontSize: 36,
                marginBottom: 8,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {'CAREER QUEST'}
          </Text>

          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color'],
                fontFamily: 'System',
                fontSize: 16,
                fontWeight: '500',
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {null}
          </Text>
        </View>

        <View style={StyleSheet.applyWidth({ bottom: 70 }, dimensions.width)}>
          {/* Button Solid */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('REGISTERScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: 'rgb(218, 85, 106)',
                borderRadius: 64,
                fontFamily: 'Poppins_400Regular',
                height: 48,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'Sign Up'}
          >
            {'Sign Up'}
          </Button>
          {/* Button Outline */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('LOGINScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: '"rgb(218, 85, 106)"',
                borderColor: 'rgb(218, 85, 106)',
                borderRadius: 64,
                borderWidth: 0,
                color: theme.colors['Custom Color'],
                fontFamily: 'Poppins_400Regular',
                height: 48,
                marginTop: 16,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'Log In'}
          >
            {'Log In'}
          </Button>
        </View>
      </ImageBackground>
    </ScreenContainer>
  );
};

export default withTheme(WELCOMEScreen);
