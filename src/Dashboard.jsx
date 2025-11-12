import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard</Text>
      <HomeScreen />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
  },
});
