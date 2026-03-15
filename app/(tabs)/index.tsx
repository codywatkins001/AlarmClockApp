import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  const [alarmActive, setAlarmActive] = useState(true);

  const toggleAlarm = () => {
    setAlarmActive(!alarmActive);
  };

  return (
    <View style={styles.container}>
      {/*App Title*/}
      <Text style={styles.title}>CS 135M Exam 2 Code</Text>

      {/*Center Alarm Box*/}
      <Pressable
        style={[
          styles.centerBox,
          { backgroundColor: alarmActive ? 'red' : '#222A2E' },
        ]}
        onPress={toggleAlarm}
      >
        <Text style={styles.centerText}>
          {alarmActive ? 'ALARM RINGING' : 'Alarm Stopped'}
        </Text>
      </Pressable>
    </View>
  );
}

{/*Styles for the app*/}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },

  title: {
    fontSize: 26,
    marginBottom: 30,
    fontWeight: 'bold',
  },

  centerBox: {
    width: 250,
    height: 250,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },

  centerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});