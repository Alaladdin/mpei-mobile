import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { DarkTheme } from 'react-native-paper';
import { MainContainerProps } from '../../types';

export default function MainContainer({ children } : MainContainerProps) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={ styles.view }>
        { children }
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 30,
    height: '100%',
    backgroundColor: DarkTheme.colors.background,
  },
});
