import * as React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Title, ActivityIndicator, Colors, FAB, DarkTheme } from 'react-native-paper';
import Markdown from 'react-native-markdown-display';
import { API_URL } from '@env';

const getActuality = () => fetch(`${API_URL}/getActuality`)
  .then(async (res) => {
    const json = await res.json();

    if (!res.ok) throw json;

    return json.actuality;
  });

export default function ActualityScreen({ route }: any) {
  const [isLazyContent, setIsLazyContent] = React.useState('unchecked');
  const [actuality, setActuality] = React.useState('');
  const [isFabOpened, setFabOpened] = React.useState(false);
  const onStateChange = ({ open }) => setFabOpened(open);
  const onButtonToggle = () => {
    setIsLazyContent(isLazyContent === 'checked' ? 'unchecked' : 'checked');
  };

  if (!actuality) {
    getActuality().then(setActuality);

    return (
      <ActivityIndicator
        size="large"
        color={ Colors.purpleA400 }
        style={ styles.loader }
        animating
      />
    );
  }

  const getActualityTemplate = () => {
    const actualityType = isLazyContent === 'checked' ? 'lazyContent' : 'content';

    return [actuality[actualityType], `Updated by ${actuality.updatedBy.displayName}`].join('\n');
  };

  return (
    <View style={ styles.view }>
      <ScrollView style={ styles.scrollView }>
        <Title style={ styles.title }>{ route.title }</Title>
        <Markdown style={ markdownStyles }>
          { getActualityTemplate() }
        </Markdown>
      </ScrollView>

      <FAB.Group
        open={ isFabOpened }
        icon={ isFabOpened ? 'minus' : 'plus' }
        fabStyle={ styles.fabPrimaryButton }
        onStateChange={ onStateChange }
        actions={ [
          {
            label: 'Refresh',
            icon: 'refresh',
            style: styles.fabSecondaryButton,
            small: false,
            onPress: () => setActuality(null),
          },
          {
            label: 'Switch type',
            icon: 'swap-horizontal',
            style: styles.fabSecondaryButton,
            small: false,
            onPress: onButtonToggle,
          },
        ] }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    minHeight: '100%',
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  title: {
    marginBottom: 20,
    fontSize: 30,
    fontWeight: '400',
    color: '#eaeaea',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  fabPrimaryButton: {
    backgroundColor: DarkTheme.colors.primary,
  },
  fabSecondaryButton: {
    backgroundColor: '#333',
  },
  loader: {
    flex: 1,
    alignSelf: 'center',
  },
});

const markdownStyles = StyleSheet.create({
  body: {
    color: DarkTheme.colors.placeholder,
  },
  heading1: {
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#999',
  },
  heading2: {
    marginBottom: 20,
    fontWeight: '600',
    color: '#999',
  },
  fence: {
    marginBottom: 10,
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
});
