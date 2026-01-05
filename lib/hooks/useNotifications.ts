import { useEffect, useState } from 'react';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export const useNotifications = () => {
  const [expoPushToken, setExpoPushToken] = useState<string | undefined>();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => {
      setExpoPushToken(token);
    });
  }, []);

  const scheduleNotification = async (title: string, body: string, seconds = 1) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
      },
      trigger: { seconds },
    });
  };

  return {
    expoPushToken,
    scheduleNotification,
  };
};

async function registerForPushNotificationsAsync() {
  let token;

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    alert('Failed to get push token for push notification!');
    return;
  }

  token = (await Notifications.getExpoPushTokenAsync()).data;

  return token;
}
