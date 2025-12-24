import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  // route.params'dan verileri al
  const { productId, productName, productPrice, productImage, productCategory } = route.params;

  return (
    <View style={styles.container}>
      {/* Ürün Görseli */}
      <Image source={{ uri: productImage }} style={styles.image} />

      {/* Ürün Bilgileri */}
      <View style={styles.infoContainer}>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{productCategory}</Text>
        </View>

        <Text style={styles.productName}>{productName}</Text>
        <Text style={styles.productPrice}>${productPrice}</Text>

        {/* Params Debug Bilgisi */}
        <View style={styles.debugBox}>
          <Text style={styles.debugTitle}>route.params içeriği:</Text>
          <Text style={styles.debugText}>productId: {productId} (tip: {typeof productId})</Text>
          <Text style={styles.debugText}>productName: {productName}</Text>
          <Text style={styles.debugText}>productPrice: {productPrice}</Text>
          <Text style={styles.debugText}>productCategory: {productCategory}</Text>
        </View>

        {/* Butonlar */}
        <TouchableOpacity
          style={styles.buyButton}
          onPress={() => alert(`${productName} sepete eklendi!`)}
        >
          <Text style={styles.buyButtonText}>Sepete Ekle</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Geri Dön</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
    backgroundColor: '#f0f0f0',
  },
  infoContainer: {
    flex: 1,
    padding: 20,
  },
  categoryBadge: {
    backgroundColor: '#e8f0fe',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  categoryText: {
    color: '#667eea',
    fontSize: 12,
    fontWeight: '600',
  },
  productName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: 20,
  },
  debugBox: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  debugTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#495057',
    marginBottom: 10,
  },
  debugText: {
    fontSize: 12,
    color: '#6c757d',
    fontFamily: 'monospace',
    marginBottom: 3,
  },
  buyButton: {
    backgroundColor: '#667eea',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  backButtonText: {
    color: '#666',
    fontSize: 16,
  },
});
