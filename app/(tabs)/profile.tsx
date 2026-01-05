import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.text}>This is the profile screen.</Text>
      <Link href="/" style={styles.link}>
        Go back to Home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  link: {
    color: 'blue',
    fontSize: 16,
  },
});
