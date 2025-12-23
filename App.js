import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';

// Görev componentlerini import et
import CounterApp from './CounterApp';

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

      {/* ==================== DERS 3 ==================== */}
      <View style={styles.lessonCard}>
        <View style={[styles.lessonBadge, { backgroundColor: '#3498db' }]}>
          <Text style={styles.lessonText}>DERS 3</Text>
        </View>
        <Text style={styles.header}>StyleSheet API</Text>
        <Text style={styles.subtitle}>CSS'den farklar ve stil yönetimi</Text>

        {/* 1. camelCase kullanımı */}
        <Text style={styles.sectionTitle}>1. camelCase Yazım</Text>
        <View style={styles.comparisonBox}>
          <Text style={styles.cssCode}>CSS: background-color</Text>
          <Text style={styles.rnCode}>RN: backgroundColor</Text>
        </View>

        {/* 2. Birim kullanılmaz */}
        <Text style={styles.sectionTitle}>2. Birim Yok (px, em, rem)</Text>
        <View style={styles.comparisonBox}>
          <Text style={styles.cssCode}>CSS: fontSize: 16px</Text>
          <Text style={styles.rnCode}>RN: fontSize: 16</Text>
        </View>

        {/* 3. Stil birleştirme */}
        <Text style={styles.sectionTitle}>3. Stil Birleştirme (Dizi)</Text>
        <View style={[styles.mergeDemo, styles.mergeShadow]}>
          <Text style={styles.mergeText}>style={'{[styles.a, styles.b]}'}</Text>
        </View>

        {/* 4. Koşullu stil */}
        <Text style={styles.sectionTitle}>4. Koşullu Stil</Text>
        <View style={styles.conditionalRow}>
          <Text style={[styles.conditionalBox, styles.activeStyle]}>Aktif</Text>
          <Text style={[styles.conditionalBox, styles.inactiveStyle]}>Pasif</Text>
        </View>

        {/* 5. Kısayollar */}
        <Text style={styles.sectionTitle}>5. Margin/Padding Kısayolları</Text>
        <View style={styles.shortcutDemo}>
          <View style={styles.shortcutBox}>
            <Text style={styles.shortcutText}>marginVertical: 10</Text>
            <Text style={styles.shortcutSubtext}>(top + bottom)</Text>
          </View>
          <View style={styles.shortcutBox}>
            <Text style={styles.shortcutText}>marginHorizontal: 10</Text>
            <Text style={styles.shortcutSubtext}>(left + right)</Text>
          </View>
        </View>

        {/* 6. Inline vs StyleSheet */}
        <Text style={styles.sectionTitle}>6. Inline vs StyleSheet</Text>
        <View style={{ backgroundColor: '#fee', padding: 10, borderRadius: 8, marginBottom: 8 }}>
          <Text style={styles.badExample}>❌ Inline: Her renderda yeni obje</Text>
        </View>
        <View style={styles.goodExample}>
          <Text style={styles.goodExampleText}>✅ StyleSheet: Optimize edilmiş</Text>
        </View>
      </View>

      {/* ==================== DERS 4 ==================== */}
      <View style={styles.lessonCard}>
        <View style={[styles.lessonBadge, { backgroundColor: '#1abc9c' }]}>
          <Text style={styles.lessonText}>DERS 4</Text>
        </View>
        <Text style={styles.header}>Platform Farklılıkları</Text>
        <Text style={styles.subtitle}>iOS ve Android için ayrı kod yazma</Text>

        {/* 1. Platform.OS */}
        <Text style={styles.sectionTitle}>1. Platform.OS</Text>
        <View style={styles.platformInfoBox}>
          <Text style={styles.platformLabel}>Şu an çalıştığın platform:</Text>
          <View style={styles.platformBadge}>
            <Text style={styles.platformBadgeText}>
              {Platform.OS.toUpperCase()}
            </Text>
          </View>
        </View>

        {/* 2. Platform.select() */}
        <Text style={styles.sectionTitle}>2. Platform.select()</Text>
        <View style={styles.selectDemo}>
          <Text style={styles.selectText}>
            Bu kutunun padding değeri:{'\n'}
            iOS → 20, Android → 12
          </Text>
          <View style={styles.selectResultBox}>
            <Text style={styles.selectResultText}>
              Şu anki: {Platform.select({ ios: 20, android: 12 })}px
            </Text>
          </View>
        </View>

        {/* 3. Shadow Farkı */}
        <Text style={styles.sectionTitle}>3. Shadow vs Elevation</Text>
        <View style={styles.shadowCompareRow}>
          <View style={styles.iosShadowBox}>
            <Text style={styles.shadowBoxText}>iOS{'\n'}shadow</Text>
          </View>
          <View style={styles.androidShadowBox}>
            <Text style={styles.shadowBoxText}>Android{'\n'}elevation</Text>
          </View>
        </View>
        <Text style={styles.shadowNote}>
          {Platform.OS === 'ios'
            ? '→ iOS: shadowColor, shadowOffset... kullanılır'
            : '→ Android: elevation kullanılır'}
        </Text>

        {/* 4. SafeAreaView */}
        <Text style={styles.sectionTitle}>4. SafeAreaView</Text>
        <View style={styles.safeAreaDemo}>
          <View style={styles.phoneFrame}>
            <View style={styles.notch} />
            <View style={styles.safeContent}>
              <Text style={styles.safeText}>Güvenli Alan</Text>
            </View>
            <View style={styles.homeBar} />
          </View>
          <Text style={styles.safeAreaNote}>
            iPhone çentik ve alt çubuktan{'\n'}içeriği korur
          </Text>
        </View>

        {/* 5. Platform.Version */}
        <Text style={styles.sectionTitle}>5. Platform.Version</Text>
        <View style={styles.versionBox}>
          <Text style={styles.versionLabel}>İşletim Sistemi Versiyonu:</Text>
          <Text style={styles.versionValue}>{Platform.Version}</Text>
        </View>
      </View>

      {/* ==================== GÖREV 1 ==================== */}
      <View style={styles.taskCard}>
        <View style={[styles.lessonBadge, { backgroundColor: '#667eea' }]}>
          <Text style={styles.lessonText}>GÖREV 1</Text>
        </View>
        <Text style={styles.header}>Sayaç Uygulaması</Text>
        <Text style={styles.subtitle}>useState, TouchableOpacity, StyleSheet</Text>

        {/* CounterApp componentini burada kullan */}
        <View style={styles.taskContainer}>
          <CounterApp />
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

  // Ders 3 stilleri - StyleSheet API
  comparisonBox: {
    backgroundColor: '#2c3e50',
    padding: 12,
    borderRadius: 8,
  },
  cssCode: {
    color: '#e74c3c',
    fontFamily: 'monospace',
    fontSize: 13,
    marginBottom: 4,
  },
  rnCode: {
    color: '#2ecc71',
    fontFamily: 'monospace',
    fontSize: 13,
  },
  mergeDemo: {
    backgroundColor: '#9b59b6',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  mergeShadow: {
    shadowColor: '#9b59b6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  mergeText: {
    color: '#fff',
    fontFamily: 'monospace',
    fontSize: 12,
  },
  conditionalRow: {
    flexDirection: 'row',
    gap: 10,
  },
  conditionalBox: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
  activeStyle: {
    backgroundColor: '#27ae60',
    color: '#fff',
    fontWeight: 'bold',
  },
  inactiveStyle: {
    backgroundColor: '#bdc3c7',
    color: '#7f8c8d',
  },
  shortcutDemo: {
    flexDirection: 'row',
    gap: 10,
  },
  shortcutBox: {
    flex: 1,
    backgroundColor: '#f39c12',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  shortcutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 11,
  },
  shortcutSubtext: {
    color: '#fff',
    fontSize: 10,
    opacity: 0.8,
  },
  badExample: {
    color: '#c0392b',
    fontSize: 12,
  },
  goodExample: {
    backgroundColor: '#d5f4e6',
    padding: 10,
    borderRadius: 8,
  },
  goodExampleText: {
    color: '#27ae60',
    fontSize: 12,
  },

  // Ders 4 stilleri - Platform Farklılıkları
  platformInfoBox: {
    backgroundColor: '#ecf0f1',
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  platformLabel: {
    fontSize: 13,
    color: '#34495e',
  },
  platformBadge: {
    backgroundColor: Platform.select({
      ios: '#007AFF',
      android: '#3DDC84',
    }),
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  platformBadgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  selectDemo: {
    backgroundColor: '#f8f9fa',
    padding: Platform.select({ ios: 20, android: 12 }),
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#3498db',
    borderStyle: 'dashed',
  },
  selectText: {
    fontSize: 12,
    color: '#7f8c8d',
    marginBottom: 10,
  },
  selectResultBox: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  selectResultText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  shadowCompareRow: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 10,
  },
  iosShadowBox: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  androidShadowBox: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    // Android elevation
    elevation: 8,
  },
  shadowBoxText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
  },
  shadowNote: {
    fontSize: 11,
    color: '#27ae60',
    fontStyle: 'italic',
  },
  safeAreaDemo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  phoneFrame: {
    width: 80,
    height: 140,
    backgroundColor: '#2c3e50',
    borderRadius: 12,
    padding: 5,
    alignItems: 'center',
  },
  notch: {
    width: 30,
    height: 8,
    backgroundColor: '#1a252f',
    borderRadius: 4,
    marginBottom: 5,
  },
  safeContent: {
    flex: 1,
    backgroundColor: '#1abc9c',
    width: '100%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeText: {
    color: '#fff',
    fontSize: 8,
    fontWeight: 'bold',
  },
  homeBar: {
    width: 35,
    height: 4,
    backgroundColor: '#fff',
    borderRadius: 2,
    marginTop: 5,
  },
  safeAreaNote: {
    flex: 1,
    fontSize: 12,
    color: '#7f8c8d',
    lineHeight: 18,
  },
  versionBox: {
    backgroundColor: '#2c3e50',
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  versionLabel: {
    color: '#bdc3c7',
    fontSize: 12,
  },
  versionValue: {
    color: '#f39c12',
    fontSize: 18,
    fontWeight: 'bold',
  },

  // Görev kartı stilleri
  taskCard: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: 20,
    padding: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#667eea',
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  taskContainer: {
    marginTop: 15,
    borderRadius: 12,
    overflow: 'hidden',
    minHeight: 400,
  },
});
