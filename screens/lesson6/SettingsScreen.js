import { StyleSheet, Text, View, TouchableOpacity, Switch } from 'react-native';
import { useState } from 'react';

export default function SettingsScreen({ navigation }) {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <View style={styles.container}>
      {/* Ayarlar Listesi */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tercihler</Text>

        <View style={styles.settingItem}>
          <View>
            <Text style={styles.settingLabel}>Karanlık Mod</Text>
            <Text style={styles.settingDesc}>Koyu tema kullan</Text>
          </View>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: '#ddd', true: '#667eea' }}
          />
        </View>

        <View style={styles.settingItem}>
          <View>
            <Text style={styles.settingLabel}>Bildirimler</Text>
            <Text style={styles.settingDesc}>Push bildirimleri al</Text>
          </View>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: '#ddd', true: '#667eea' }}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hesap</Text>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>👤</Text>
          <Text style={styles.menuText}>Profili Düzenle</Text>
          <Text style={styles.menuArrow}>→</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>🔒</Text>
          <Text style={styles.menuText}>Gizlilik</Text>
          <Text style={styles.menuArrow}>→</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>❓</Text>
          <Text style={styles.menuText}>Yardım</Text>
          <Text style={styles.menuArrow}>→</Text>
        </TouchableOpacity>
      </View>

      {/* Tab Bilgisi */}
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Tab Navigator</Text>
        <Text style={styles.infoText}>
          Bu sayfa Tab bar'daki Ayarlar sekmesinden açıldı.{'\n'}
          Alt menüde 5 farklı sekme bulunuyor.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 20,
    marginHorizontal: 15,
    borderRadius: 12,
    overflow: 'hidden',
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#888',
    padding: 15,
    paddingBottom: 10,
    textTransform: 'uppercase',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  settingLabel: {
    fontSize: 16,
    color: '#333',
  },
  settingDesc: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  menuIcon: {
    fontSize: 20,
    marginRight: 15,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  menuArrow: {
    fontSize: 16,
    color: '#ccc',
  },
  infoBox: {
    backgroundColor: '#e8f4f8',
    marginHorizontal: 15,
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2980b9',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 13,
    color: '#555',
    lineHeight: 20,
  },
});
