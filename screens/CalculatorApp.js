import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function CalculatorApp() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);
  const [history, setHistory] = useState([]);
  const [isScientific, setIsScientific] = useState(false);
  const [isDegree, setIsDegree] = useState(true); // true = derece, false = radyan

  // Rakam butonuna basıldığında
  const handleNumber = (num) => {
    if (waitingForNewValue) {
      setDisplay(num);
      setWaitingForNewValue(false);
    } else {
      // Başta 0 varsa değiştir, yoksa ekle
      setDisplay(display === '0' ? num : display + num);
    }
  };

  // Ondalık nokta
  const handleDecimal = () => {
    if (waitingForNewValue) {
      setDisplay('0.');
      setWaitingForNewValue(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  // Operatör butonuna basıldığında
  const handleOperator = (op) => {
    const current = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(current);
    } else if (operator && !waitingForNewValue) {
      const result = calculate(previousValue, current, operator);
      setDisplay(String(result));
      setPreviousValue(result);
    }

    setOperator(op);
    setWaitingForNewValue(true);
  };

  // Hesaplama yap
  const calculate = (prev, current, op) => {
    switch (op) {
      case '+':
        return prev + current;
      case '-':
        return prev - current;
      case '×':
        return prev * current;
      case '÷':
        return current !== 0 ? prev / current : 'Error';
      default:
        return current;
    }
  };

  // Eşittir butonuna basıldığında
  const handleEquals = () => {
    if (operator && previousValue !== null) {
      const current = parseFloat(display);
      const result = calculate(previousValue, current, operator);

      // Geçmişe ekle
      const historyItem = `${previousValue} ${operator} ${current} = ${result}`;
      setHistory([historyItem, ...history.slice(0, 4)]);

      setDisplay(String(result));
      setPreviousValue(null);
      setOperator(null);
      setWaitingForNewValue(true);
    }
  };

  // Temizle
  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperator(null);
    setWaitingForNewValue(false);
  };

  // Geri silme (Backspace)
  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  // Yüzde hesaplama
  const handlePercent = () => {
    const current = parseFloat(display);
    setDisplay(String(current / 100));
  };

  // Pozitif/Negatif değiştir
  const handleToggleSign = () => {
    setDisplay(String(parseFloat(display) * -1));
  };

  // Bilimsel fonksiyonlar
  const handleScientific = (func) => {
    const current = parseFloat(display);
    let result;

    // Derece/Radyan dönüşümü
    const toRadians = (deg) => (deg * Math.PI) / 180;
    const angle = isDegree ? toRadians(current) : current;

    switch (func) {
      case 'sin':
        result = Math.sin(angle);
        break;
      case 'cos':
        result = Math.cos(angle);
        break;
      case 'tan':
        result = Math.tan(angle);
        break;
      case 'log':
        result = current > 0 ? Math.log10(current) : 'Error';
        break;
      case 'ln':
        result = current > 0 ? Math.log(current) : 'Error';
        break;
      case '√':
        result = current >= 0 ? Math.sqrt(current) : 'Error';
        break;
      case 'x²':
        result = Math.pow(current, 2);
        break;
      case 'x³':
        result = Math.pow(current, 3);
        break;
      case 'π':
        result = Math.PI;
        break;
      case 'e':
        result = Math.E;
        break;
      default:
        result = current;
    }

    // Sonucu yuvarla (floating point hatalarını önle)
    if (typeof result === 'number') {
      result = parseFloat(result.toFixed(10));
    }

    setDisplay(String(result));
    setWaitingForNewValue(true);
  };

  // Buton komponenti
  const CalcButton = ({ value, onPress, style, textStyle }) => (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.buttonText, textStyle]}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* İşlem Geçmişi */}
      {history.length > 0 && (
        <View style={styles.historyContainer}>
          <Text style={styles.historyTitle}>Geçmiş</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {history.map((item, index) => (
              <View key={index} style={styles.historyItem}>
                <Text style={styles.historyText}>{item}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      )}

      {/* Mod Toggle */}
      <View style={styles.modeContainer}>
        <TouchableOpacity
          style={[styles.modeButton, isScientific && styles.modeButtonActive]}
          onPress={() => setIsScientific(!isScientific)}
        >
          <Text style={[styles.modeButtonText, isScientific && styles.modeButtonTextActive]}>
            {isScientific ? 'SCI' : 'STD'}
          </Text>
        </TouchableOpacity>

        {isScientific && (
          <TouchableOpacity
            style={[styles.modeButton, styles.degRadButton]}
            onPress={() => setIsDegree(!isDegree)}
          >
            <Text style={styles.modeButtonText}>
              {isDegree ? 'DEG' : 'RAD'}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Ekran */}
      <View style={[styles.displayContainer, isScientific && styles.displayContainerSmall]}>
        {operator && previousValue !== null && (
          <Text style={styles.operationText}>
            {previousValue} {operator}
          </Text>
        )}
        <Text style={[styles.displayText, isScientific && styles.displayTextSmall]} numberOfLines={1} adjustsFontSizeToFit>
          {display}
        </Text>
      </View>

      {/* Butonlar Grid */}
      <View style={styles.buttonsContainer}>
        {/* Bilimsel Satır 1: sin, cos, tan, log */}
        {isScientific && (
          <View style={styles.row}>
            <CalcButton value="sin" onPress={() => handleScientific('sin')} style={styles.scientificButton} textStyle={styles.scientificText} />
            <CalcButton value="cos" onPress={() => handleScientific('cos')} style={styles.scientificButton} textStyle={styles.scientificText} />
            <CalcButton value="tan" onPress={() => handleScientific('tan')} style={styles.scientificButton} textStyle={styles.scientificText} />
            <CalcButton value="log" onPress={() => handleScientific('log')} style={styles.scientificButton} textStyle={styles.scientificText} />
          </View>
        )}

        {/* Bilimsel Satır 2: ln, √, x², x³ */}
        {isScientific && (
          <View style={styles.row}>
            <CalcButton value="ln" onPress={() => handleScientific('ln')} style={styles.scientificButton} textStyle={styles.scientificText} />
            <CalcButton value="√" onPress={() => handleScientific('√')} style={styles.scientificButton} textStyle={styles.scientificText} />
            <CalcButton value="x²" onPress={() => handleScientific('x²')} style={styles.scientificButton} textStyle={styles.scientificText} />
            <CalcButton value="x³" onPress={() => handleScientific('x³')} style={styles.scientificButton} textStyle={styles.scientificText} />
          </View>
        )}

        {/* Bilimsel Satır 3: π, e, (, ) */}
        {isScientific && (
          <View style={styles.row}>
            <CalcButton value="π" onPress={() => handleScientific('π')} style={styles.scientificButton} textStyle={styles.scientificText} />
            <CalcButton value="e" onPress={() => handleScientific('e')} style={styles.scientificButton} textStyle={styles.scientificText} />
            <CalcButton value="(" onPress={() => handleNumber('(')} style={styles.scientificButton} textStyle={styles.scientificText} />
            <CalcButton value=")" onPress={() => handleNumber(')')} style={styles.scientificButton} textStyle={styles.scientificText} />
          </View>
        )}
        {/* Satır 1: C, ±, %, ÷ */}
        <View style={styles.row}>
          <CalcButton value="C" onPress={handleClear} style={styles.functionButton} textStyle={styles.functionText} />
          <CalcButton value="±" onPress={handleToggleSign} style={styles.functionButton} textStyle={styles.functionText} />
          <CalcButton value="%" onPress={handlePercent} style={styles.functionButton} textStyle={styles.functionText} />
          <CalcButton value="÷" onPress={() => handleOperator('÷')} style={styles.operatorButton} textStyle={styles.operatorText} />
        </View>

        {/* Satır 2: 7, 8, 9, × */}
        <View style={styles.row}>
          <CalcButton value="7" onPress={() => handleNumber('7')} style={styles.numberButton} />
          <CalcButton value="8" onPress={() => handleNumber('8')} style={styles.numberButton} />
          <CalcButton value="9" onPress={() => handleNumber('9')} style={styles.numberButton} />
          <CalcButton value="×" onPress={() => handleOperator('×')} style={styles.operatorButton} textStyle={styles.operatorText} />
        </View>

        {/* Satır 3: 4, 5, 6, - */}
        <View style={styles.row}>
          <CalcButton value="4" onPress={() => handleNumber('4')} style={styles.numberButton} />
          <CalcButton value="5" onPress={() => handleNumber('5')} style={styles.numberButton} />
          <CalcButton value="6" onPress={() => handleNumber('6')} style={styles.numberButton} />
          <CalcButton value="-" onPress={() => handleOperator('-')} style={styles.operatorButton} textStyle={styles.operatorText} />
        </View>

        {/* Satır 4: 1, 2, 3, + */}
        <View style={styles.row}>
          <CalcButton value="1" onPress={() => handleNumber('1')} style={styles.numberButton} />
          <CalcButton value="2" onPress={() => handleNumber('2')} style={styles.numberButton} />
          <CalcButton value="3" onPress={() => handleNumber('3')} style={styles.numberButton} />
          <CalcButton value="+" onPress={() => handleOperator('+')} style={styles.operatorButton} textStyle={styles.operatorText} />
        </View>

        {/* Satır 5: ⌫, 0, ., = */}
        <View style={styles.row}>
          <CalcButton value="⌫" onPress={handleBackspace} style={styles.numberButton} />
          <CalcButton value="0" onPress={() => handleNumber('0')} style={styles.numberButton} />
          <CalcButton value="." onPress={handleDecimal} style={styles.numberButton} />
          <CalcButton value="=" onPress={handleEquals} style={styles.equalsButton} textStyle={styles.equalsText} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    padding: 12,
  },

  // Mod Toggle
  modeContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  modeButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#252540',
  },
  modeButtonActive: {
    backgroundColor: '#667eea',
  },
  modeButtonText: {
    color: '#8888aa',
    fontSize: 12,
    fontWeight: 'bold',
  },
  modeButtonTextActive: {
    color: '#ffffff',
  },
  degRadButton: {
    backgroundColor: '#374151',
  },

  // Geçmiş
  historyContainer: {
    marginBottom: 10,
  },
  historyTitle: {
    color: '#667eea',
    fontSize: 12,
    marginBottom: 8,
    fontWeight: '600',
  },
  historyItem: {
    backgroundColor: '#252540',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  historyText: {
    color: '#8888aa',
    fontSize: 12,
  },

  // Ekran
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    paddingBottom: 15,
    minHeight: 100,
  },
  operationText: {
    color: '#667eea',
    fontSize: 20,
    marginBottom: 5,
  },
  displayText: {
    color: '#ffffff',
    fontSize: 48,
    fontWeight: '300',
  },
  displayContainerSmall: {
    minHeight: 70,
    paddingBottom: 8,
  },
  displayTextSmall: {
    fontSize: 36,
  },

  // Butonlar
  buttonsContainer: {
    paddingBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  // Rakam butonları
  numberButton: {
    backgroundColor: '#374151',
  },

  // Fonksiyon butonları (C, ±, %)
  functionButton: {
    backgroundColor: '#4b5563',
  },
  functionText: {
    color: '#ffffff',
  },

  // Operatör butonları
  operatorButton: {
    backgroundColor: '#667eea',
  },
  operatorText: {
    color: '#ffffff',
    fontSize: 28,
  },

  // Eşittir butonu
  equalsButton: {
    backgroundColor: '#22c55e',
  },
  equalsText: {
    color: '#ffffff',
    fontSize: 28,
  },

  // Bilimsel butonlar
  scientificButton: {
    backgroundColor: '#4c1d95',
  },
  scientificText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
