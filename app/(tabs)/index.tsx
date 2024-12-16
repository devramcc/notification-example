import { Image, StyleSheet, StatusBar, Platform, SafeAreaView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNotification } from '@/context/NotificationContext';

export default function HomeScreen() {
  const  {expoPushToken, notification, error} = useNotification();

  if (error) return <ThemedText>Error: {error.message}</ThemedText>;
  return (
    <ThemedView
    style={{
      flex: 1,
      padding: 10,
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 10,
    }}>
      <SafeAreaView style={{flex: 1}}>
        <ThemedText type="subtitle">Your push Token:</ThemedText>
        <ThemedText>{expoPushToken}</ThemedText>
        <ThemedText type="subtitle">Latest Notifications:</ThemedText>
        <ThemedText>{notification?.request.content.title}</ThemedText>
        <ThemedText>
          {JSON.stringify(notification?.request.content.data, null, 2)}
        </ThemedText>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
