import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

const categories = [
  { id: 1, name: 'Teknoloji', icon: '💻', color: '#3498db' },
  { id: 2, name: 'Spor', icon: '⚽', color: '#27ae60' },
  { id: 3, name: 'Müzik', icon: '🎵', color: '#9b59b6' },
  { id: 4, name: 'Yemek', icon: '🍕', color: '#e74c3c' },
  { id: 5, name: 'Seyahat', icon: '✈️', color: '#f39c12' },
  { id: 6, name: 'Oyun', icon: '🎮', color: '#1abc9c' },
];

const trending = [
  { id: 1, tag: '#ReactNative', posts: '12.5K' },
  { id: 2, tag: '#MobileDev', posts: '8.2K' },
  { id: 3, tag: '#JavaScript', posts: '45.1K' },
  { id: 4, tag: '#Expo', posts: '5.7K' },
];

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Keşfet</Text>
        <Text style={styles.headerSubtext}>Kategoriler ve Trendler</Text>
      </View>

      {/* Kategoriler */}
      <Text style={styles.sectionTitle}>Kategoriler</Text>
      <View style={styles.categoriesGrid}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat.id}
            style={[styles.categoryCard, { backgroundColor: cat.color }]}
          >
            <Text style={styles.categoryIcon}>{cat.icon}</Text>
            <Text style={styles.categoryName}>{cat.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Trendler */}
      <Text style={styles.sectionTitle}>Trend Konular</Text>
      <View style={styles.trendingContainer}>
        {trending.map((item) => (
          <TouchableOpacity key={item.id} style={styles.trendItem}>
            <Text style={styles.trendTag}>{item.tag}</Text>
            <Text style={styles.trendPosts}>{item.posts} gönderi</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ height: 30 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#9b59b6',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSubtext: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 15,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  categoryCard: {
    width: '29%',
    aspectRatio: 1,
    margin: '2%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryIcon: {
    fontSize: 30,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
  trendingContainer: {
    marginHorizontal: 15,
  },
  trendItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trendTag: {
    fontSize: 16,
    fontWeight: '600',
    color: '#667eea',
  },
  trendPosts: {
    fontSize: 13,
    color: '#888',
  },
});
