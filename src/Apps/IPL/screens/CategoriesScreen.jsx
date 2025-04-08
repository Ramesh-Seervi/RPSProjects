import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';



const DUMMY_SCHEDULE = [
  {
    id: '1',
    team1: 'Mumbai Indians',
    team2: 'Chennai Super Kings',
    date: '23 Mar 2025',
    time: '7:30 PM',
    venue: 'Wankhede Stadium, Mumbai',
  },
  {
    id: '2',
    team1: 'Royal Challengers Bangalore',
    team2: 'Kolkata Knight Riders',
    date: '24 Mar 2025',
    time: '3:30 PM',
    venue: 'M. Chinnaswamy Stadium, Bangalore',
  },
  {
    id: '3',
    team1: 'Delhi Capitals',
    team2: 'Rajasthan Royals',
    date: '25 Mar 2025',
    time: '7:30 PM',
    venue: 'Arun Jaitley Stadium, Delhi',
  },
];

export default function ScheduleScreen() {
  const [schedule, setSchedule] = useState(DUMMY_SCHEDULE);

  return (
    <ScrollView style={styles.container}>
      {schedule.map((match) => (
        <TouchableOpacity key={match.id} style={styles.matchCard}>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>{match.date}</Text>
            <Text style={styles.time}>{match.time}</Text>
          </View>
          <View style={styles.matchInfo}>
            <Text style={styles.teamName}>{match.team1}</Text>
            <Text style={styles.vs}>vs</Text>
            <Text style={styles.teamName}>{match.team2}</Text>
          </View>
          <Text style={styles.venue}>{match.venue}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    padding: 16,
  },
  matchCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  date: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
  },
  time: {
    fontSize: 16,
    color: '#64748b',
  },
  matchInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  teamName: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  vs: {
    fontSize: 16,
    color: '#64748b',
    marginHorizontal: 12,
  },
  venue: {
    fontSize: 14,
    color: '#64748b',
  },
});