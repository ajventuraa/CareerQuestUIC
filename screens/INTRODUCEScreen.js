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

const INTRODUCEScreen = props => {
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
                marginBottom: 20,
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
                alignSelf: 'flex-start',
                color: theme.colors['Custom Color'],
                fontFamily: 'Poppins_500Medium',
                fontSize: 16,
                paddingBottom: 3,
                textAlign: 'left',
              },
              dimensions.width
            )}
          >
            {'What is CareerQuest?\n'}
          </Text>

          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', alignSelf: 'center' },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color'],
                  fontFamily: 'Poppins_500Medium',
                  fontSize: 16,
                  textAlign: 'left',
                },
                dimensions.width
              )}
            >
              {
                "Career Quest is a career recommendation system that aims to help users make informed decisions about their career paths. The application uses various data points, such as the user's skills, interests, and career goals, to provide personalized recommendations for career paths that may be a good fit for them."
              }
            </Text>
          </View>
        </View>

        <View style={StyleSheet.applyWidth({ bottom: 70 }, dimensions.width)}>
          <Button
            onPress={() => {
              try {
                navigation.navigate('HOMEScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
                backgroundColor: 'rgb(218, 85, 106)',
                borderRadius: 64,
                fontFamily: 'Poppins_400Regular',
              }),
              dimensions.width
            )}
            title={'Proceed'}
          />
        </View>
      </ImageBackground>
    </ScreenContainer>
  );
};

export default withTheme(INTRODUCEScreen);
