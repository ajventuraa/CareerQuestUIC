import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  CircleImage,
  ScreenContainer,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const HOMEScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [selectedTopic, setSelectedTopic] = React.useState('Engineering');
  const [showFilters, setShowFilters] = React.useState(false);
  const [showNotifications, setShowNotifications] = React.useState(false);
  const [skillLevel, setSkillLevel] = React.useState(2);
  const [switchRowValue, setSwitchRowValue] = React.useState(true);
  const [switchRowValue2, setSwitchRowValue2] = React.useState(true);
  const [switchRowValue3, setSwitchRowValue3] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { backgroundColor: 'rgb(255, 255, 255)' },
        dimensions.width
      )}
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingBottom: 15,
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 24,
          },
          dimensions.width
        )}
      >
        {/* Avatar */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', alignSelf: 'center' },
            dimensions.width
          )}
        >
          <CircleImage
            style={StyleSheet.applyWidth(
              { height: 90, width: 90 },
              dimensions.width
            )}
            size={36}
            source={Images._253775196363533675458611738074939695285263N}
          />
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: 'rgb(0, 0, 0)',
                fontFamily: 'Poppins_700Bold',
                fontSize: 25,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'CAREER QUEST'}
          </Text>
        </View>
      </View>
      {/* Content */}
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps={'never'}
      >
        {/* MENU */}
        <View
          style={StyleSheet.applyWidth({ marginTop: 32 }, dimensions.width)}
        >
          {/* Heading */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                paddingBottom: 15,
                paddingLeft: 24,
                paddingRight: 24,
              },
              dimensions.width
            )}
          >
            <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
              {/* MAIN MENU */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'center',
                    color: 'rgb(0, 0, 0)',
                    fontFamily: 'Poppins_700Bold',
                    fontSize: 30,
                  },
                  dimensions.width
                )}
              >
                {'MAIN MENU'}
              </Text>
            </View>
            <View />
          </View>
          {/* COURSES */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: 16, paddingLeft: 24, paddingRight: 24 },
              dimensions.width
            )}
          >
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('COURSESScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              {/* Lesson Card */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-start',
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Medium'],
                    borderLeftWidth: 1,
                    borderRadius: 24,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    paddingBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 13,
                  },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      alignSelf: 'flex-start',
                      flex: 1,
                      marginLeft: 24,
                    },
                    dimensions.width
                  )}
                >
                  {/* Name */}
                  <View
                    style={StyleSheet.applyWidth(
                      { flexDirection: 'row', justifyContent: 'space-between' },
                      dimensions.width
                    )}
                  >
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          alignSelf: 'flex-start',
                          color: 'rgb(0, 0, 0)',
                          flex: 1,
                          fontFamily: 'Poppins_600SemiBold',
                          fontSize: 30,
                        },
                        dimensions.width
                      )}
                      numberOfLines={2}
                      ellipsizeMode={'tail'}
                    >
                      {'COURSES'}
                    </Text>
                  </View>
                  {/* Time */}
                  <View
                    style={StyleSheet.applyWidth(
                      { marginTop: 8 },
                      dimensions.width
                    )}
                  />
                </View>
              </View>
            </Touchable>
          </View>
          {/* EVAL */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: 16, paddingLeft: 24, paddingRight: 24 },
              dimensions.width
            )}
          >
            <Touchable>
              {/* Lesson Card */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-start',
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Medium'],
                    borderLeftWidth: 1,
                    borderRadius: 24,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    paddingBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 13,
                  },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      alignSelf: 'flex-start',
                      flex: 1,
                      marginLeft: 24,
                    },
                    dimensions.width
                  )}
                >
                  {/* Name */}
                  <View
                    style={StyleSheet.applyWidth(
                      { flexDirection: 'row', justifyContent: 'space-between' },
                      dimensions.width
                    )}
                  >
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          alignSelf: 'flex-start',
                          color: 'rgb(0, 0, 0)',
                          flex: 1,
                          fontFamily: 'Poppins_600SemiBold',
                          fontSize: 30,
                        },
                        dimensions.width
                      )}
                      numberOfLines={2}
                      ellipsizeMode={'tail'}
                    >
                      {'EVALUATION'}
                    </Text>
                  </View>
                  {/* Time */}
                  <View
                    style={StyleSheet.applyWidth(
                      { marginTop: 8 },
                      dimensions.width
                    )}
                  />
                </View>
              </View>
            </Touchable>
          </View>
          {/* SETTINGS */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: 16, paddingLeft: 24, paddingRight: 24 },
              dimensions.width
            )}
          >
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('SETTINGSScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              {/* Lesson Card */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-start',
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Medium'],
                    borderLeftWidth: 1,
                    borderRadius: 24,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    paddingBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 13,
                  },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      alignSelf: 'flex-start',
                      flex: 1,
                      marginLeft: 24,
                    },
                    dimensions.width
                  )}
                >
                  {/* Name */}
                  <View
                    style={StyleSheet.applyWidth(
                      { flexDirection: 'row', justifyContent: 'space-between' },
                      dimensions.width
                    )}
                  >
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          alignSelf: 'flex-start',
                          color: 'rgb(0, 0, 0)',
                          flex: 1,
                          fontFamily: 'Poppins_600SemiBold',
                          fontSize: 30,
                        },
                        dimensions.width
                      )}
                      numberOfLines={2}
                      ellipsizeMode={'tail'}
                    >
                      {'SETTINGS'}
                    </Text>
                  </View>
                </View>
              </View>
            </Touchable>
          </View>
        </View>
        <Spacer right={8} left={8} top={16} bottom={16} />
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(HOMEScreen);
