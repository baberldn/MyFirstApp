import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Ekranları import et
import LessonsScreen from './screens/LessonsScreen';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import Lesson6Navigator from './screens/lesson6/Lesson6Navigator';
import ComponentsDemo from './screens/ComponentsDemo';
import AnimationsDemo from './screens/AnimationsDemo';
import CalculatorApp from './screens/CalculatorApp';

// Stack Navigator oluştur
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />

      <Stack.Navigator
        initialRouteName="Lessons"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#667eea',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {/* Ana Sayfa - Dersler */}
        <Stack.Screen
          name="Lessons"
          component={LessonsScreen}
          options={{
            title: 'React Native Dersleri',
            headerShown: false,
          }}
        />

        {/* Ders 5 - Mağaza (Navigation Demo) */}
        <Stack.Screen
          name="Shop"
          component={HomeScreen}
          options={{
            title: 'Mağaza',
          }}
        />

        {/* Ürün Detayı */}
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({ route }) => ({
            title: route.params?.productName || 'Ürün Detayı',
          })}
        />

        {/* Profil */}
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Profilim',
          }}
        />

        {/* Ders 6 - Tab Demo */}
        <Stack.Screen
          name="TabDrawerDemo"
          component={Lesson6Navigator}
          options={{
            headerShown: false,
          }}
        />

        {/* Ders 8 - Custom Components */}
        <Stack.Screen
          name="ComponentsDemo"
          component={ComponentsDemo}
          options={{
            title: 'Custom Components',
          }}
        />

        {/* Ders 9 - Animations */}
        <Stack.Screen
          name="AnimationsDemo"
          component={AnimationsDemo}
          options={{
            title: 'Animasyonlar',
          }}
        />

        {/* Görev 2 - Calculator */}
        <Stack.Screen
          name="Calculator"
          component={CalculatorApp}
          options={{
            title: 'Hesap Makinesi',
            headerStyle: { backgroundColor: '#1a1a2e' },
            headerTintColor: '#667eea',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
