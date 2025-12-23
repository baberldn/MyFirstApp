import { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Pressable,
} from 'react-native';

export default function CounterApp() {
  // State tanımla
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1); // Adım değeri: 1, 5 veya 10

  // Animasyon için - hafif bounce efekti
  const bounceAnim = useRef(new Animated.Value(0)).current;

  // Uzun basma için interval referansı
  const intervalRef = useRef(null);

  // Sayı değişince animasyon - yumuşak bounce
  useEffect(() => {
    // Önce yukarı, sonra geri
    Animated.sequence([
      Animated.timing(bounceAnim, {
        toValue: -8,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.spring(bounceAnim, {
        toValue: 0,
        friction: 4,
        tension: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [count]);

  // Artırma fonksiyonu
  const increment = () => {
    setCount((prev) => prev + step);
  };

  // Azaltma fonksiyonu (negatife düşmesin)
  const decrement = () => {
    setCount((prev) => Math.max(0, prev - step));
  };

  // Sıfırlama fonksiyonu
  const reset = () => {
    setCount(0);
  };

  // Uzun basma başlangıcı
  const startLongPress = (action) => {
    action(); // İlk tıklama
    intervalRef.current = setInterval(() => {
      action();
    }, 100); // Her 100ms'de bir çalıştır
  };

  // Uzun basma bitişi
  const stopLongPress = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Component unmount olduğunda interval'i temizle
  useEffect(() => {
    return () => stopLongPress();
  }, []);

  return (
    <View style={styles.container}>
      {/* Adım seçici */}
      <View style={styles.stepSelector}>
        <Text style={styles.stepLabel}>Adım:</Text>
        {[1, 5, 10].map((value) => (
          <TouchableOpacity
            key={value}
            style={[
              styles.stepButton,
              step === value && styles.stepButtonActive,
            ]}
            onPress={() => setStep(value)}
          >
            <Text
              style={[
                styles.stepButtonText,
                step === value && styles.stepButtonTextActive,
              ]}
            >
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Sayı gösterimi - Animasyonlu */}
      <View style={styles.counterDisplay}>
        <Animated.Text
          style={[
            styles.counterText,
            { transform: [{ translateY: bounceAnim }] },
          ]}
        >
          {count}
        </Animated.Text>
      </View>

      {/* Butonlar */}
      <View style={styles.buttonRow}>
        {/* Azalt butonu - Uzun basma destekli */}
        <Pressable
          style={[styles.button, styles.decrementButton]}
          onPress={decrement}
          onLongPress={() => startLongPress(decrement)}
          onPressOut={stopLongPress}
          delayLongPress={300}
        >
          <Text style={styles.buttonText}>-</Text>
        </Pressable>

        {/* Sıfırla butonu */}
        <TouchableOpacity
          style={[styles.button, styles.resetButton]}
          onPress={reset}
        >
          <Text style={styles.resetButtonText}>Sıfırla</Text>
        </TouchableOpacity>

        {/* Artır butonu - Uzun basma destekli */}
        <Pressable
          style={[styles.button, styles.incrementButton]}
          onPress={increment}
          onLongPress={() => startLongPress(increment)}
          onPressOut={stopLongPress}
          delayLongPress={300}
        >
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>

      {/* Bilgi notları */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          Uzun bas = Hızlı sayma
        </Text>
        <Text style={styles.infoText}>
          Sayı negatife düşemez
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    padding: 20,
    borderRadius: 12,
  },
  stepSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 8,
  },
  stepLabel: {
    fontSize: 14,
    color: '#666',
    marginRight: 5,
  },
  stepButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
  },
  stepButtonActive: {
    backgroundColor: '#667eea',
  },
  stepButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
  },
  stepButtonTextActive: {
    color: '#fff',
  },
  counterDisplay: {
    backgroundColor: '#fff',
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
    marginBottom: 30,
  },
  counterText: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#667eea',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 15,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  decrementButton: {
    backgroundColor: '#ef4444',
  },
  incrementButton: {
    backgroundColor: '#22c55e',
  },
  resetButton: {
    backgroundColor: '#667eea',
    width: 80,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  resetButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  infoContainer: {
    marginTop: 20,
    alignItems: 'center',
    gap: 5,
  },
  infoText: {
    fontSize: 12,
    color: '#999',
  },
});
