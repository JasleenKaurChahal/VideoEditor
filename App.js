/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  VESDK,
  VideoEditorModal,
  Configuration,
} from 'react-native-videoeditorsdk';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <VideoEditorModal
          visible={true}
          video={require('./video.mp4')}
          configuration={{
            audio: {
              categories: [
                {
                  thumbnailURI:
                    'https://www.designbold.com/academy/wp-content/uploads/2018/10/Something-to-remember-when-designing-an-ablum-cover.jpg',
                  items: [
                    {
                      audioURI:
                        'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3',
                      duration: '2.12',
                      thumbnailURI:
                        'https://www.designbold.com/academy/wp-content/uploads/2018/10/Something-to-remember-when-designing-an-ablum-cover.jpg',
                    },
                    {
                      audioURI:
                        'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3',
                      duration: '2.12',
                      thumbnailURI:
                        'https://www.designbold.com/academy/wp-content/uploads/2018/10/Something-to-remember-when-designing-an-ablum-cover.jpg',
                    },
                  ],
                },
              ],
            },
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
