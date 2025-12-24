import { StyleSheet, Text, View, FlatList } from 'react-native';

const notifications = [
  { id: 1, type: 'like', user: 'Ahmet', message: 'gönderini beğendi', time: '2 dk', icon: '❤️' },
  { id: 2, type: 'comment', user: 'Ayşe', message: 'yorum yaptı: "Harika!"', time: '5 dk', icon: '💬' },
  { id: 3, type: 'follow', user: 'Mehmet', message: 'seni takip etmeye başladı', time: '15 dk', icon: '👤' },
  { id: 4, type: 'like', user: 'Fatma', message: 'gönderini beğendi', time: '1 saat', icon: '❤️' },
  { id: 5, type: 'mention', user: 'Can', message: 'senden bahsetti', time: '2 saat', icon: '📢' },
  { id: 6, type: 'like', user: 'Zeynep', message: 'gönderini beğendi', time: '3 saat', icon: '❤️' },
];

export default function NotificationsScreen() {
  const renderNotification = ({ item }) => (
    <View style={styles.notificationCard}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{item.icon}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.message}>
          <Text style={styles.userName}>{item.user}</Text> {item.message}
        </Text>
        <Text style={styles.time}>{item.time} önce</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.headerText}>Bildirimler</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{notifications.length}</Text>
            </View>
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
    backgroundColor: '#e74c3c',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  badge: {
    backgroundColor: '#fff',
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: '#e74c3c',
    fontWeight: 'bold',
    fontSize: 14,
  },
  listContainer: {
    paddingBottom: 20,
  },
  notificationCard: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: 10,
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    fontSize: 20,
  },
  contentContainer: {
    flex: 1,
  },
  message: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  userName: {
    fontWeight: 'bold',
  },
  time: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
});
