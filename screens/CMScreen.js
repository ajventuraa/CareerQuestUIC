import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  IconButton,
  Pressable,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CMScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        {
          paddingBottom: 24,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 24,
        },
        dimensions.width
      )}
      hasTopSafeArea={true}
      scrollable={true}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            paddingBottom: 20,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            position: 'relative',
          },
          dimensions.width
        )}
      >
        <IconButton
          onPress={() => {
            try {
              navigation.navigate('HOMEScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          size={32}
          icon={'Ionicons/arrow-back-circle'}
          color={theme.colors['PrimaryDarker']}
        />
      </View>

      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps={'never'}
      >
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', paddingBottom: 0, paddingTop: 15 },
            dimensions.width
          )}
        >
          {/* COLLEGE DEP */}
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                fontFamily: 'Poppins_700Bold',
                fontSize: 30,
                marginBottom: 0,
              }),
              dimensions.width
            )}
          >
            {'College of Music'}
          </Text>
        </View>
        {/* COURSE1 */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.surface,
              borderRadius: 8,
              overflow: 'hidden',
              paddingBottom: 5,
              paddingTop: 5,
            },
            dimensions.width
          )}
        >
          <Pressable
            style={StyleSheet.applyWidth({ borderRadius: 0 }, dimensions.width)}
          >
            {/* Header */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: 'rgb(218, 85, 106)',
                  borderRadius: 64,
                  flexDirection: 'row',
                  paddingBottom: 16,
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 16,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.surface,
                    flex: 1,
                    fontFamily: 'Poppins_600SemiBold',
                    fontSize: 16,
                    marginLeft: 6,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
                ellipsizeMode={'tail'}
                numberOfLines={1}
              >
                {'Bachelor of Music in Music Education'}
              </Text>
            </View>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(CMScreen);
