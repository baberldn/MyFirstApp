import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

const posts = [
  { id: 1, user: 'Ahmet', avatar: 'https://i.pravatar.cc/50?img=1', content: 'React Native öğreniyorum!', likes: 42 },
  { id: 2, user: 'Ayşe', avatar: 'https://i.pravatar.cc/50?img=5', content: 'Tab Navigator harika çalışıyor', likes: 28 },
  { id: 3, user: 'Mehmet', avatar: 'https://i.pravatar.cc/50?img=3', content: 'Drawer menu eklemeyi denedim', likes: 35 },
  { id: 4, user: 'Fatma', avatar: 'https://i.pravatar.cc/50?img=9', content: 'Nested navigators biraz karmaşık ama mantıklı', likes: 56 },
];

export default function FeedScreen() {
  const renderPost = ({ item }) => (
    <View style={styles.postCard}>
      <View style={styles.postHeader}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <Text style={styles.userName}>{item.user}</Text>
      </View>
      <Text style={styles.postContent}>{item.content}</Text>
      <Text style={styles.likes}>❤️ {item.likes} beğeni</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.headerText}>Ana Akış</Text>
            <Text style={styles.headerSubtext}>Tab Navigator Demo</Text>
          </View>
        }
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
    padding: 20,
    backgroundColor: '#667eea',
    marginBottom: 10,
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
  listContainer: {
    paddingBottom: 20,
  },
  postCard: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 10,
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  postContent: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
    marginBottom: 10,
  },
  likes: {
    fontSize: 13,
    color: '#888',
  },
});
