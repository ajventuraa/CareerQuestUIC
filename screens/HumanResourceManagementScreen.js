import React from 'react';
import * as InterimAPIApi from '../apis/InterimAPIApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Divider, IconButton, ScreenContainer, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Video } from 'expo-av';
import {
  ActivityIndicator,
  ImageBackground,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Fetch } from 'react-request';

const HumanResourceManagementScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [isBookmarked, setIsBookmarked] = React.useState(false);
  const [isWatched, setIsWatched] = React.useState(false);
  const [showTab, setShowTab] = React.useState('description');
  const [showVideo, setShowVideo] = React.useState(false);

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { backgroundColor: 'rgb(255, 255, 255)', flex: 1 },
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
            justifyContent: 'space-between',
            paddingBottom: 24,
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 24,
          },
          dimensions.width
        )}
      >
        {/* Back */}
        <View>
          {/* Back Button */}
          <IconButton
            onPress={() => {
              try {
                navigation.navigate('COABScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            size={32}
            icon={'Ionicons/arrow-back-circle'}
            color={theme.colors['Error']}
          />
        </View>
      </View>
      {/* Content */}
      <KeyboardAwareScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          {
            backgroundColor: 'rgb(255, 255, 255)',
            paddingBottom: 48,
            paddingLeft: 24,
            paddingRight: 24,
          },
          dimensions.width
        )}
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps={'never'}
      >
        <InterimAPIApi.FetchLessonGET id={2}>
          {({ loading, error, data, refetchLesson }) => {
            const fetchData = data;
            if (!fetchData || loading) {
              return <ActivityIndicator />;
            }

            if (error) {
              return (
                <Text style={{ textAlign: 'center' }}>
                  There was a problem fetching this data
                </Text>
              );
            }

            return (
              <>
                {/* Video */}
                <View>
                  {/* Video Frame */}
                  <View
                    style={StyleSheet.applyWidth(
                      { borderRadius: 24, overflow: 'hidden' },
                      dimensions.width
                    )}
                  >
                    {/* Poster */}
                    <>
                      {showVideo ? null : (
                        <ImageBackground
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              height: 320,
                              justifyContent: 'center',
                              width: '100%',
                            },
                            dimensions.width
                          )}
                          resizeMode={'cover'}
                          source={Images._5356723}
                        />
                      )}
                    </>
                    <>
                      {!showVideo ? null : (
                        <Video
                          style={StyleSheet.applyWidth(
                            { height: 320 },
                            dimensions.width
                          )}
                          source={{
                            uri: 'http://static.draftbit.com/videos/intro-to-draftbit.mp4',
                          }}
                          resizeMode={'cover'}
                          useNativeControls={true}
                        />
                      )}
                    </>
                  </View>
                </View>
                {/* Title */}
                <View
                  style={StyleSheet.applyWidth(
                    { marginTop: 24 },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: 'rgb(0, 0, 0)',
                        fontFamily: 'Poppins_700Bold',
                        fontSize: 26,
                      },
                      dimensions.width
                    )}
                  >
                    {
                      'Bachelor of Science in Business Administration major in Human Resource Management'
                    }
                  </Text>
                </View>
                {/* Description */}
                <View
                  style={StyleSheet.applyWidth(
                    { marginTop: 24 },
                    dimensions.width
                  )}
                >
                  <View>
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: 'rgb(0, 0, 0)',
                          fontFamily: 'System',
                          fontSize: 16,
                          fontWeight: '400',
                          lineHeight: 24,
                        },
                        dimensions.width
                      )}
                    >
                      {
                        'The Human Resource Management Program prepares the graduate for a career in the Human Resources Department of any organization, handling the many diverse human capital requirements of the organization, including recruitment, staffing. training and career development.'
                      }
                    </Text>
                  </View>
                </View>
              </>
            );
          }}
        </InterimAPIApi.FetchLessonGET>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(HumanResourceManagementScreen);
