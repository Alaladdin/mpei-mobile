import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { DarkTheme } from 'react-native-paper';
import useCachedResources from './app/hooks/useCachedResources';
import Navigation from './app/navigation';
import MainContainer from './app/containers/MainContainer';
import LinkingConfiguration from './app/navigation/LinkingConfiguration';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <NavigationContainer linking={ LinkingConfiguration }>
      <StatusBar style="light" backgroundColor={ styles.statusBar.backgroundColor } />
      <MainContainer>
        <Navigation />
      </MainContainer>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: DarkTheme.colors.background,
  },
});
