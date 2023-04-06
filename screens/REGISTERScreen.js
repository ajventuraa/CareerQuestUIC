import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, Link, ScreenContainer, Spacer, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  Image,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const REGISTERScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      if (false) {
        return;
      }
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { backgroundColor: 'rgb(255, 255, 255)' },
        dimensions.width
      )}
      hasTopSafeArea={true}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Background'],
            flex: 1,
            justifyContent: 'center',
          },
          dimensions.width
        )}
      >
        {/* Header */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', paddingTop: 10 },
            dimensions.width
          )}
        >
          <Image
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                height: 250,
                width: 250,
              }),
              dimensions.width
            )}
            resizeMode={'cover'}
            source={Images._253775196363533675458611738074939695285263N}
          />
          {/* Title */}
          <Text
            style={StyleSheet.applyWidth(
              {
                fontFamily: 'Poppins_700Bold',
                fontSize: 36,
                paddingBottom: 15,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {'CAREER QUEST'}
          </Text>
          {/* Title */}
          <Text
            style={StyleSheet.applyWidth(
              {
                fontFamily: 'Poppins_700Bold',
                fontSize: 36,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {'Create an Account'}
          </Text>
          {/* Subtitle */}
          <Text
            style={StyleSheet.applyWidth(
              { fontFamily: 'Poppins_400Regular', fontSize: 14, marginTop: 4 },
              dimensions.width
            )}
          >
            {'Enter your details to create your account'}
          </Text>
        </View>
        {/* Login Form */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 24, paddingLeft: 36, paddingRight: 36 },
            dimensions.width
          )}
        >
          {/* Error Message */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.error,
                fontSize: 12,
                marginBottom: 16,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {null}
          </Text>
          {/* Email Input */}
          <TextInput
            style={StyleSheet.applyWidth(
              {
                borderBottomWidth: 1,
                borderColor: theme.colors.divider,
                borderLeftWidth: 1,
                borderRadius: 8,
                borderRightWidth: 1,
                borderTopWidth: 1,
                fontFamily: 'Poppins_400Regular',
                paddingBottom: 16,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 16,
              },
              dimensions.width
            )}
            placeholder={'Email'}
            keyboardType={'email-address'}
            textContentType={'emailAddress'}
            autoCapitalize={'none'}
          />
          <Spacer top={12} right={8} bottom={12} left={8} />
          {/* Password Input */}
          <TextInput
            style={StyleSheet.applyWidth(
              {
                borderBottomWidth: 1,
                borderColor: theme.colors.divider,
                borderLeftWidth: 1,
                borderRadius: 8,
                borderRightWidth: 1,
                borderTopWidth: 1,
                fontFamily: 'Poppins_400Regular',
                paddingBottom: 16,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 16,
              },
              dimensions.width
            )}
            placeholder={'Password'}
            secureTextEntry={true}
          />
          <Spacer top={24} right={8} bottom={24} left={8} />
          {/* Sign In Button */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('INTRODUCEScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: 'rgb(218, 85, 106)',
                borderRadius: 64,
                fontFamily: 'Poppins_400Regular',
                paddingBottom: 16,
                paddingTop: 16,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'Sign in'}
          >
            {'Sign Up'}
          </Button>
          <Spacer top={16} right={8} bottom={16} left={8} />
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 12,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                { fontFamily: 'Poppins_400Regular' },
                dimensions.width
              )}
            >
              {'Already have an account?'}
            </Text>
            <Spacer top={8} right={2} bottom={8} left={2} />
            {/* Sign Up Link */}
            <Link
              onPress={() => {
                try {
                  navigation.navigate('LOGINScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  color: 'rgb(218, 85, 106)',
                  fontFamily: 'Poppins_400Regular',
                },
                dimensions.width
              )}
              title={'Login'}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(REGISTERScreen);
