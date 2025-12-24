import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

// Ekranları import et
import FeedScreen from './FeedScreen';
import ExploreScreen from './ExploreScreen';
import NotificationsScreen from './NotificationsScreen';
import ProfileTabScreen from './ProfileTabScreen';
import SettingsScreen from './SettingsScreen';

// Tab Navigator oluştur
const Tab = createBottomTabNavigator();

export default function Lesson6Navigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#667eea',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: '#667eea',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#eee',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          title: 'Ana Sayfa',
          tabBarLabel: 'Ana Sayfa',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ fontSize: size }}>🏠</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          title: 'Keşfet',
          tabBarLabel: 'Keşfet',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ fontSize: size }}>🔍</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          title: 'Bildirimler',
          tabBarLabel: 'Bildirimler',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ fontSize: size }}>🔔</Text>
          ),
          tabBarBadge: 6,
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileTabScreen}
        options={{
          title: 'Profil',
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ fontSize: size }}>👤</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Ayarlar',
          tabBarLabel: 'Ayarlar',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ fontSize: size }}>⚙️</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
