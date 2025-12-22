import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="dark" />

      {/* ==================== DERS 1 ==================== */}
      <View style={styles.lessonCard}>
        <View style={[styles.lessonBadge, { backgroundColor: '#9b59b6' }]}>
          <Text style={styles.lessonText}>DERS 1</Text>
        </View>
        <Text style={styles.header}>Temel Bileşenler</Text>
        <Text style={styles.subtitle}>View, Text, Image, TouchableOpacity</Text>

        {/* View Örneği */}
        <Text style={styles.sectionTitle}>View - Konteyner</Text>
        <View style={styles.demoBox}>
          <View style={styles.nestedBox}>
            <Text style={styles.demoText}>İç içe View</Text>
          </View>
        </View>

        {/* Text Örneği */}
        <Text style={styles.sectionTitle}>Text - Yazı</Text>
        <Text style={styles.normalText}>Normal metin</Text>
        <Text style={styles.boldText}>Kalın metin</Text>
        <Text style={styles.coloredText}>Renkli metin</Text>

        {/* Image Örneği */}
        <Text style={styles.sectionTitle}>Image - Görsel</Text>
        <View style={styles.imageRow}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/100?img=1' }}
            style={styles.avatar}
          />
          <Image
            source={{ uri: 'https://i.pravatar.cc/100?img=5' }}
            style={styles.avatar}
          />
          <Image
            source={{ uri: 'https://i.pravatar.cc/100?img=8' }}
            style={styles.avatar}
          />
        </View>

        {/* TouchableOpacity Örneği */}
        <Text style={styles.sectionTitle}>TouchableOpacity - Buton</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('Butona tıkladın!')}
        >
          <Text style={styles.buttonText}>Tıkla Bana</Text>
        </TouchableOpacity>
      </View>

      {/* ==================== DERS 2 ==================== */}
      <View style={styles.lessonCard}>
        <View style={[styles.lessonBadge, { backgroundColor: '#e74c3c' }]}>
          <Text style={styles.lessonText}>DERS 2</Text>
        </View>
        <Text style={styles.header}>Flexbox Layout</Text>
        <Text style={styles.subtitle}>flexDirection, justifyContent, alignItems</Text>

        {/* flexDirection */}
        <Text style={styles.sectionTitle}>1. flexDirection</Text>

        <Text style={styles.label}>row (yatay)</Text>
        <View style={styles.rowContainer}>
          <View style={[styles.box, styles.box1]}><Text style={styles.boxText}>1</Text></View>
          <View style={[styles.box, styles.box2]}><Text style={styles.boxText}>2</Text></View>
          <View style={[styles.box, styles.box3]}><Text style={styles.boxText}>3</Text></View>
        </View>

        <Text style={styles.label}>column (dikey)</Text>
        <View style={styles.columnContainer}>
          <View style={[styles.smallBox, styles.box1]}><Text style={styles.boxText}>1</Text></View>
          <View style={[styles.smallBox, styles.box2]}><Text style={styles.boxText}>2</Text></View>
          <View style={[styles.smallBox, styles.box3]}><Text style={styles.boxText}>3</Text></View>
        </View>

        {/* justifyContent */}
        <Text style={styles.sectionTitle}>2. justifyContent</Text>

        <Text style={styles.label}>space-between</Text>
        <View style={styles.spaceBetween}>
          <View style={[styles.box, styles.box1]}><Text style={styles.boxText}>1</Text></View>
          <View style={[styles.box, styles.box2]}><Text style={styles.boxText}>2</Text></View>
          <View style={[styles.box, styles.box3]}><Text style={styles.boxText}>3</Text></View>
        </View>

        <Text style={styles.label}>center</Text>
        <View style={styles.centerContent}>
          <View style={[styles.box, styles.box1]}><Text style={styles.boxText}>1</Text></View>
          <View style={[styles.box, styles.box2]}><Text style={styles.boxText}>2</Text></View>
        </View>

        {/* alignItems */}
        <Text style={styles.sectionTitle}>3. alignItems</Text>

        <Text style={styles.label}>center (dikey ortalama)</Text>
        <View style={styles.alignDemo}>
          <View style={[styles.tallBox, styles.box1]}><Text style={styles.boxText}>1</Text></View>
          <View style={[styles.box, styles.box2]}><Text style={styles.boxText}>2</Text></View>
          <View style={[styles.smallBox, styles.box3]}><Text style={styles.boxText}>3</Text></View>
        </View>
      </View>

      {/* Alt boşluk */}
      <View style={{ height: 50 }} />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 50,
  },
  lessonCard: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: 15,
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  lessonBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  lessonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 13,
    color: '#7f8c8d',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#34495e',
    marginTop: 15,
    marginBottom: 10,
  },
  label: {
    fontSize: 12,
    color: '#95a5a6',
    marginBottom: 5,
    marginTop: 5,
  },

  // Ders 1 stilleri
  demoBox: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
  },
  nestedBox: {
    backgroundColor: '#2980b9',
    padding: 10,
    borderRadius: 5,
  },
  demoText: {
    color: '#fff',
    textAlign: 'center',
  },
  normalText: {
    fontSize: 14,
    color: '#2c3e50',
  },
  boldText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  coloredText: {
    fontSize: 14,
    color: '#e74c3c',
  },
  imageRow: {
    flexDirection: 'row',
    gap: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  button: {
    backgroundColor: '#27ae60',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  // Ders 2 stilleri - Flexbox
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#ecf0f1',
    padding: 10,
    borderRadius: 8,
  },
  columnContainer: {
    flexDirection: 'column',
    backgroundColor: '#ecf0f1',
    padding: 10,
    borderRadius: 8,
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ecf0f1',
    padding: 10,
    borderRadius: 8,
  },
  centerContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
    borderRadius: 8,
  },
  alignDemo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
    borderRadius: 8,
    height: 80,
  },

  // Kutular
  box: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 8,
  },
  smallBox: {
    width: 40,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 5,
  },
  tallBox: {
    width: 40,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 8,
  },
  box1: { backgroundColor: '#3498db' },
  box2: { backgroundColor: '#e74c3c' },
  box3: { backgroundColor: '#2ecc71' },
  boxText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
