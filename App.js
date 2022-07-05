/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';
import WebView from 'react-native-webview';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <WebView source={{uri: 'https://mind-x-voxo.vercel.app/'}} />
    </View>
  );
};

export default App;
