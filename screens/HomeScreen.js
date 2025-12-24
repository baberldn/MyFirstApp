import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

// Örnek ürün listesi
const products = [
  { id: 1, name: 'iPhone 15 Pro', price: 1199, image: 'https://i.pravatar.cc/100?img=1', category: 'Telefon' },
  { id: 2, name: 'MacBook Air M3', price: 1299, image: 'https://i.pravatar.cc/100?img=2', category: 'Laptop' },
  { id: 3, name: 'AirPods Pro', price: 249, image: 'https://i.pravatar.cc/100?img=3', category: 'Aksesuar' },
  { id: 4, name: 'iPad Pro', price: 999, image: 'https://i.pravatar.cc/100?img=4', category: 'Tablet' },
  { id: 5, name: 'Apple Watch', price: 399, image: 'https://i.pravatar.cc/100?img=5', category: 'Saat' },
];

export default function HomeScreen({ navigation }) {
  // Bir ürüne tıklandığında
  const handleProductPress = (product) => {
    // Params ile detay sayfasına git
    navigation.navigate('Details', {
      productId: product.id,
      productName: product.name,
      productPrice: product.price,
      productImage: product.image,
      productCategory: product.category,
    });
  };

  // Her bir ürün kartı
  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => handleProductPress(item)}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productCategory}>{item.category}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
      <Text style={styles.arrow}>→</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Başlık */}
      <View style={styles.header}>
        <Text style={styles.title}>Ürünler</Text>
        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.profileButtonText}>Profil</Text>
        </TouchableOpacity>
      </View>

      {/* Ürün Listesi */}
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  profileButton: {
    backgroundColor: '#667eea',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  profileButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  listContainer: {
    padding: 15,
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  productInfo: {
    flex: 1,
    marginLeft: 15,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  productCategory: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#667eea',
    marginTop: 5,
  },
  arrow: {
    fontSize: 20,
    color: '#ccc',
  },
});
