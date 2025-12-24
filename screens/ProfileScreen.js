import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Profil Kartı */}
      <View style={styles.profileCard}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
          style={styles.avatar}
        />
        <Text style={styles.userName}>Ahmet Yılmaz</Text>
        <Text style={styles.userEmail}>ahmet@example.com</Text>
      </View>

      {/* Menü */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>📦</Text>
          <Text style={styles.menuText}>Siparişlerim</Text>
          <Text style={styles.menuArrow}>→</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>❤️</Text>
          <Text style={styles.menuText}>Favorilerim</Text>
          <Text style={styles.menuArrow}>→</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>⚙️</Text>
          <Text style={styles.menuText}>Ayarlar</Text>
          <Text style={styles.menuArrow}>→</Text>
        </TouchableOpacity>
      </View>

      {/* Navigation Metodları Demo */}
      <View style={styles.navDemo}>
        <Text style={styles.navDemoTitle}>Navigation Metodları:</Text>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.navButtonText}>goBack() - Geri dön</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.navButtonText}>navigate('Home') - Ana sayfa</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.popToTop()}
        >
          <Text style={styles.navButtonText}>popToTop() - En başa dön</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  profileCard: {
    backgroundColor: '#667eea',
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 15,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
  },
  menuContainer: {
    backgroundColor: '#fff',
    marginTop: 20,
    marginHorizontal: 15,
    borderRadius: 12,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
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
    fontSize: 18,
    color: '#ccc',
  },
  navDemo: {
    backgroundColor: '#fff',
    marginTop: 20,
    marginHorizontal: 15,
    borderRadius: 12,
    padding: 15,
  },
  navDemoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  navButton: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  navButtonText: {
    fontSize: 13,
    color: '#666',
    fontFamily: 'monospace',
  },
});
