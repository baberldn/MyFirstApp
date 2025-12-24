import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function ProfileTabScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Profil Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/120?img=12' }}
          style={styles.avatar}
        />
        <Text style={styles.userName}>Kullanıcı Adı</Text>
        <Text style={styles.userHandle}>@kullanici</Text>
      </View>

      {/* İstatistikler */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>142</Text>
          <Text style={styles.statLabel}>Gönderi</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>8.5K</Text>
          <Text style={styles.statLabel}>Takipçi</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>365</Text>
          <Text style={styles.statLabel}>Takip</Text>
        </View>
      </View>

      {/* Bilgi */}
      <View style={styles.noteBox}>
        <Text style={styles.noteTitle}>Tab Navigator</Text>
        <Text style={styles.noteText}>
          Bu ekran alt menüdeki "Profil" sekmesinden geldi.{'\n'}
          Alt menüde 5 farklı sekme var.
        </Text>
      </View>

      {/* Derslere Dön */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.getParent()?.goBack()}
      >
        <Text style={styles.backButtonText}>← Derslere Dön</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#1abc9c',
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
  },
  userHandle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: -20,
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    backgroundColor: '#eee',
  },
  noteBox: {
    backgroundColor: '#e8f4f8',
    marginHorizontal: 15,
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
  },
  noteTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2980b9',
    marginBottom: 5,
  },
  noteText: {
    fontSize: 13,
    color: '#555',
    lineHeight: 20,
  },
  backButton: {
    marginHorizontal: 15,
    marginTop: 20,
    padding: 15,
    backgroundColor: '#667eea',
    borderRadius: 10,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
