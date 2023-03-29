import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Montserrat_200ExtraLight, Montserrat_300Light, Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Comfortaa_300Light, Comfortaa_400Regular, Comfortaa_500Medium, Comfortaa_600SemiBold, Comfortaa_700Bold } from '@expo-google-fonts/comfortaa';
import Home from './src/home/home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/store/appstore';


export default function App() {

  const [fontsLoaded] = useFonts({
    Montserrat_200ExtraLight, Montserrat_300Light, Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold,
    Comfortaa_300Light, Comfortaa_400Regular, Comfortaa_500Medium, Comfortaa_600SemiBold, Comfortaa_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store} >
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen name="home" component={Home} options={{ title: '',
            headerShadowVisible: false, headerShown: false, headerStyle: styles.navHeaderStyle}}/>
          {/* <Stack.Screen name="welcome" component={Welcome} options={{ title: '',
            headerShadowVisible: false, headerShown: false, headerStyle: styles.navHeaderStyle}}/> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  navHeaderStyle: { 
    height: 40,
    borderBottomWidth: 0,
  }
});
