
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  // const [loaded] = useFonts({
  //   SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  // });

  // if (!loaded) {
  //   return null;
  // }

  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="index" options={{ title:'whatsapp', headerShown:true}}/>
        <Stack.Screen name="updates" options={{ title:'updates', headerShown:true}}/>
        <Stack.Screen name="communities" options={{ title:'Communities', headerShown:true}}/>
        <StatusBar style="auto" />
      </Stack>
  );
}
