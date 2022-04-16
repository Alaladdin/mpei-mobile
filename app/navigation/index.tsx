import * as React from 'react';
import { BottomNavigation, DarkTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import ScheduleScreen from '../screens/ScheduleScreen';
import ActualityScreen from '../screens/ActualityScreen';

export default function Navigation() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { title: 'schedule', key: 'schedule', icon: 'calendar-month' },
    { title: 'actuality', key: 'actuality', icon: 'newspaper-variant' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    schedule: ScheduleScreen,
    actuality: ActualityScreen,
  });

  return (
    <BottomNavigation
      navigationState={ { index, routes } }
      renderScene={ renderScene }
      theme={ DarkTheme }
      onIndexChange={ setIndex }
      style={ styles.view }
      barStyle={ styles.bottomNav }
      labeled={ false }
    />
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: DarkTheme.colors.background,
  },
  bottomNav: {
    backgroundColor: '#000',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    overflow: 'hidden',
  },
});
