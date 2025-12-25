import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  ScrollView,
  LayoutAnimation,
  UIManager,
  Platform,
  PanResponder,
  Dimensions,
} from 'react-native';

// Android için LayoutAnimation'ı aktif et
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function AnimationsDemo() {
  // ========== ANIMATED API STATE'LERİ ==========
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const springAnim = useRef(new Animated.Value(1)).current;

  // ========== LAYOUT ANIMATION STATE'LERİ ==========
  const [expanded, setExpanded] = useState(false);
  const [items, setItems] = useState([1, 2, 3]);

  // ========== GESTURE STATE'LERİ ==========
  const pan = useRef(new Animated.ValueXY()).current;

  // PanResponder - Sürükle bırak için
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        // Dokunma başladığında mevcut değeri offset olarak kaydet
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
        pan.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: Animated.event(
        [null, { dx: pan.x, dy: pan.y }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        // Parmak kalktığında offset'i değere ekle
        pan.flattenOffset();
      },
    })
  ).current;

  // ========== ANIMATED API FONKSİYONLARI ==========

  // 1. Fade animasyonu
  const handleFade = () => {
    // Toggle: 0 ise 1'e, 1 ise 0'a
    const toValue = fadeAnim._value === 0 ? 1 : 0;
    Animated.timing(fadeAnim, {
      toValue,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  // 2. Scale animasyonu
  const handleScale = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.5,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // 3. Rotate animasyonu
  const handleRotate = () => {
    Animated.timing(rotateAnim, {
      toValue: rotateAnim._value + 1, // Her seferinde 360 derece dönsün
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  // Rotate için interpolate
  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  // 4. Spring animasyonu
  const handleSpring = () => {
    Animated.sequence([
      Animated.spring(springAnim, {
        toValue: 0.5,
        friction: 2,
        tension: 160,
        useNativeDriver: true,
      }),
      Animated.spring(springAnim, {
        toValue: 1,
        friction: 3,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // ========== LAYOUT ANIMATION FONKSİYONLARI ==========

  // Accordion toggle
  const toggleAccordion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  // Liste'ye item ekle
  const addItem = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setItems([...items, items.length + 1]);
  };

  // Liste'den item sil
  const removeItem = () => {
    if (items.length > 0) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setItems(items.slice(0, -1));
    }
  };

  // ========== GESTURE FONKSİYONLARI ==========

  // Pozisyonu sıfırla
  const resetPosition = () => {
    Animated.spring(pan, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  };

  return (
    <ScrollView style={styles.container}>
      {/* ==================== BÖLÜM 1: ANIMATED API ==================== */}
      <View style={styles.section}>
        <View style={[styles.badge, { backgroundColor: '#6C63FF' }]}>
          <Text style={styles.badgeText}>ANIMATED API</Text>
        </View>
        <Text style={styles.sectionTitle}>Temel Animasyonlar</Text>
        <Text style={styles.sectionSubtitle}>timing, spring, interpolate</Text>

        {/* Fade Animasyonu */}
        <View style={styles.demoCard}>
          <Text style={styles.demoTitle}>1. Fade (Saydamlık)</Text>
          <Text style={styles.demoCode}>Animated.timing + opacity</Text>

          <Animated.View style={[styles.animBox, { opacity: fadeAnim }]}>
            <Text style={styles.animBoxText}>Fade</Text>
          </Animated.View>

          <TouchableOpacity style={styles.animButton} onPress={handleFade}>
            <Text style={styles.animButtonText}>Toggle Fade</Text>
          </TouchableOpacity>
        </View>

        {/* Scale Animasyonu */}
        <View style={styles.demoCard}>
          <Text style={styles.demoTitle}>2. Scale (Ölçek)</Text>
          <Text style={styles.demoCode}>Animated.sequence + transform</Text>

          <Animated.View style={[styles.animBox, styles.scaleBox, { transform: [{ scale: scaleAnim }] }]}>
            <Text style={styles.animBoxText}>Scale</Text>
          </Animated.View>

          <TouchableOpacity style={styles.animButton} onPress={handleScale}>
            <Text style={styles.animButtonText}>Pulse</Text>
          </TouchableOpacity>
        </View>

        {/* Rotate Animasyonu */}
        <View style={styles.demoCard}>
          <Text style={styles.demoTitle}>3. Rotate (Döndürme)</Text>
          <Text style={styles.demoCode}>interpolate: 0 → 360deg</Text>

          <Animated.View style={[styles.animBox, styles.rotateBox, { transform: [{ rotate: spin }] }]}>
            <Text style={styles.animBoxText}>Rotate</Text>
          </Animated.View>

          <TouchableOpacity style={styles.animButton} onPress={handleRotate}>
            <Text style={styles.animButtonText}>Spin</Text>
          </TouchableOpacity>
        </View>

        {/* Spring Animasyonu */}
        <View style={styles.demoCard}>
          <Text style={styles.demoTitle}>4. Spring (Yay)</Text>
          <Text style={styles.demoCode}>Animated.spring + friction/tension</Text>

          <Animated.View style={[styles.animBox, styles.springBox, { transform: [{ scale: springAnim }] }]}>
            <Text style={styles.animBoxText}>Spring</Text>
          </Animated.View>

          <TouchableOpacity style={styles.animButton} onPress={handleSpring}>
            <Text style={styles.animButtonText}>Bounce</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ==================== BÖLÜM 2: LAYOUT ANIMATION ==================== */}
      <View style={styles.section}>
        <View style={[styles.badge, { backgroundColor: '#FF6B6B' }]}>
          <Text style={styles.badgeText}>LAYOUT ANIMATION</Text>
        </View>
        <Text style={styles.sectionTitle}>Otomatik Layout Geçişleri</Text>
        <Text style={styles.sectionSubtitle}>Tek satır ile animasyonlu değişim</Text>

        {/* Accordion */}
        <View style={styles.demoCard}>
          <Text style={styles.demoTitle}>1. Accordion</Text>
          <Text style={styles.demoCode}>LayoutAnimation.Presets.easeInEaseOut</Text>

          <TouchableOpacity style={styles.accordionHeader} onPress={toggleAccordion}>
            <Text style={styles.accordionTitle}>Detayları Gör</Text>
            <Text style={styles.accordionIcon}>{expanded ? '▲' : '▼'}</Text>
          </TouchableOpacity>

          {expanded && (
            <View style={styles.accordionContent}>
              <Text style={styles.accordionText}>
                LayoutAnimation ile açılıp kapanma animasyonu otomatik oluyor.
                State değişmeden önce configureNext çağır, gerisini React Native halleder!
              </Text>
            </View>
          )}
        </View>

        {/* Liste Animasyonu */}
        <View style={styles.demoCard}>
          <Text style={styles.demoTitle}>2. Liste Animasyonu</Text>
          <Text style={styles.demoCode}>LayoutAnimation.Presets.spring</Text>

          <View style={styles.listContainer}>
            {items.map((item, index) => (
              <View key={item} style={[styles.listItem, { backgroundColor: `hsl(${index * 40}, 70%, 60%)` }]}>
                <Text style={styles.listItemText}>Item {item}</Text>
              </View>
            ))}
          </View>

          <View style={styles.listButtons}>
            <TouchableOpacity style={[styles.listButton, styles.addButton]} onPress={addItem}>
              <Text style={styles.listButtonText}>+ Ekle</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.listButton, styles.removeButton]} onPress={removeItem}>
              <Text style={styles.listButtonText}>- Sil</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* ==================== BÖLÜM 3: GESTURE HANDLING ==================== */}
      <View style={styles.section}>
        <View style={[styles.badge, { backgroundColor: '#4ECDC4' }]}>
          <Text style={styles.badgeText}>GESTURE HANDLING</Text>
        </View>
        <Text style={styles.sectionTitle}>Dokunma ve Sürükleme</Text>
        <Text style={styles.sectionSubtitle}>PanResponder + Animated.ValueXY</Text>

        {/* Sürükle Bırak */}
        <View style={styles.demoCard}>
          <Text style={styles.demoTitle}>Sürükle & Bırak</Text>
          <Text style={styles.demoCode}>PanResponder + Animated.event</Text>

          <View style={styles.dragContainer}>
            <Text style={styles.dragHint}>Kutuyu sürükle!</Text>

            <Animated.View
              {...panResponder.panHandlers}
              style={[
                styles.draggableBox,
                {
                  transform: [
                    { translateX: pan.x },
                    { translateY: pan.y },
                  ],
                },
              ]}
            >
              <Text style={styles.dragBoxText}>Sürükle</Text>
            </Animated.View>
          </View>

          <TouchableOpacity style={styles.resetButton} onPress={resetPosition}>
            <Text style={styles.resetButtonText}>Sıfırla</Text>
          </TouchableOpacity>
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
    backgroundColor: '#f5f5f5',
  },
  section: {
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
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  badgeText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  sectionSubtitle: {
    fontSize: 13,
    color: '#7f8c8d',
    marginBottom: 20,
  },

  // Demo Card
  demoCard: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  demoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#34495e',
    marginBottom: 5,
  },
  demoCode: {
    fontSize: 11,
    color: '#7f8c8d',
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
    marginBottom: 15,
  },

  // Animated Box
  animBox: {
    width: 80,
    height: 80,
    backgroundColor: '#6C63FF',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 15,
  },
  scaleBox: {
    backgroundColor: '#FF6B6B',
  },
  rotateBox: {
    backgroundColor: '#4ECDC4',
  },
  springBox: {
    backgroundColor: '#FFE66D',
  },
  animBoxText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },

  // Animated Button
  animButton: {
    backgroundColor: '#2c3e50',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignSelf: 'center',
  },
  animButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },

  // Accordion
  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 10,
  },
  accordionTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  accordionIcon: {
    color: '#fff',
    fontSize: 14,
  },
  accordionContent: {
    backgroundColor: '#ffe0e0',
    padding: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: -5,
  },
  accordionText: {
    color: '#c0392b',
    fontSize: 13,
    lineHeight: 20,
  },

  // Liste
  listContainer: {
    marginBottom: 15,
  },
  listItem: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 8,
  },
  listItemText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  listButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  listButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#27ae60',
  },
  removeButton: {
    backgroundColor: '#e74c3c',
  },
  listButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },

  // Drag
  dragContainer: {
    height: 200,
    backgroundColor: '#e8f4f8',
    borderRadius: 12,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  dragHint: {
    position: 'absolute',
    top: 15,
    color: '#7f8c8d',
    fontSize: 12,
  },
  draggableBox: {
    width: 80,
    height: 80,
    backgroundColor: '#4ECDC4',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#4ECDC4',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  dragBoxText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  resetButton: {
    backgroundColor: '#95a5a6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});
