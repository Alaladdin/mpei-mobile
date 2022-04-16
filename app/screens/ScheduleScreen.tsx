import { ScrollView, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Colors, Title, Card, Paragraph, DarkTheme } from 'react-native-paper';
import { API_URL } from '@env';
import * as React from 'react';

const getSchedule = () => fetch(`${API_URL}/getSchedule`)
  .then(async (res) => {
    const json = await res.json();

    if (!res.ok) throw json;

    return json.schedule;
  });

export default function ActualityScreen({ route }: any) {
  const [schedule, setSchedule] = React.useState('');

  if (!schedule) {
    getSchedule().then(setSchedule);

    return (
      <ActivityIndicator
        size="large"
        color={ Colors.purpleA400 }
        style={ styles.loader }
        animating
      />
    );
  }
  // t style={ styles.schedule }
  const schedules = schedule.map((s, i) => (
    <Card key={ i } style={ styles.schedule }>
      <Card.Content>
        <Title style={ styles.scheduleText }>
          { `[${s.dayOfWeekString.toUpperCase()}] ${s.disciplineAbbr} — ${s.date}` }
        </Title>
        <Paragraph style={ styles.scheduleText }>
          { s.kindOfWork }
          { `\n${s.beginLesson} — ${s.endLesson}\n` }
          { s.lecturer }
        </Paragraph>
      </Card.Content>
    </Card>
  ));

  return (
    <View style={ styles.view }>
      <ScrollView style={ styles.scrollView }>
        <Title style={ styles.title }>{ route.title }</Title>
        { schedules }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    minHeight: '100%',
    backgroundColor: '#121212',
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
  schedule: {
    marginBottom: 20,
    backgroundColor: '#1e1e1e',
  },
  scheduleText: {
    color: DarkTheme.colors.text,
  },
  loader: {
    flex: 1,
    alignSelf: 'center',
  },
});
