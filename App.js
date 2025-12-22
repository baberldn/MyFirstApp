import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';

// Kullanıcı verileri (normalde API'den gelir)
const kullanicilar = [
  {
    id: '1',
    isim: 'Ahmet Yılmaz',
    kullaniciAdi: '@ahmet',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: '2',
    isim: 'Ayşe Demir',
    kullaniciAdi: '@ayse',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: '3',
    isim: 'Mehmet Kaya',
    kullaniciAdi: '@mehmet',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: '4',
    isim: 'Zeynep Arslan',
    kullaniciAdi: '@zeynep',
    avatar: 'https://i.pravatar.cc/150?img=9',
  },
  {
    id: '5',
    isim: 'Can Özturk',
    kullaniciAdi: '@can',
    avatar: 'https://i.pravatar.cc/150?img=8',
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <Text style={styles.header}>Kullanıcılar</Text>

      <FlatList
        data={kullanicilar}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Profil Fotoğrafı */}
            <Image
              source={{ uri: item.avatar }}
              style={styles.avatar}
            />

            {/* Kullanıcı Bilgileri */}
            <View style={styles.info}>
              <Text style={styles.isim}>{item.isim}</Text>
              <Text style={styles.kullaniciAdi}>{item.kullaniciAdi}</Text>
            </View>

            {/* Buton */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => alert(`${item.isim} profiline gidiliyor!`)}
            >
              <Text style={styles.buttonText}>Profil</Text>
            </TouchableOpacity>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    // Gölge (iOS)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Gölge (Android)
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  isim: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
  },
  kullaniciAdi: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 2,
  },
  button: {
    backgroundColor: '#3498db',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});
