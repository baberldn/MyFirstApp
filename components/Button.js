import { StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

/**
 * Yeniden kullanılabilir Button componenti
 *
 * Props:
 * @param {string} title - Buton yazısı
 * @param {function} onPress - Tıklama fonksiyonu
 * @param {string} variant - 'primary' | 'secondary' | 'outline' | 'danger' | 'success'
 * @param {string} size - 'small' | 'medium' | 'large'
 * @param {boolean} disabled - Devre dışı mı?
 * @param {boolean} loading - Yükleniyor mu?
 * @param {boolean} fullWidth - Tam genişlik mi?
 * @param {object} style - Ek stil
 */
export default function Button({
  title = 'Button',
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = false,
  style,
}) {
  // Variant'a göre renkler
  const variantStyles = {
    primary: {
      backgroundColor: '#667eea',
      textColor: '#fff',
      borderColor: '#667eea',
    },
    secondary: {
      backgroundColor: '#6c757d',
      textColor: '#fff',
      borderColor: '#6c757d',
    },
    outline: {
      backgroundColor: 'transparent',
      textColor: '#667eea',
      borderColor: '#667eea',
    },
    danger: {
      backgroundColor: '#e74c3c',
      textColor: '#fff',
      borderColor: '#e74c3c',
    },
    success: {
      backgroundColor: '#27ae60',
      textColor: '#fff',
      borderColor: '#27ae60',
    },
  };

  // Size'a göre boyutlar
  const sizeStyles = {
    small: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      fontSize: 12,
      borderRadius: 6,
    },
    medium: {
      paddingVertical: 12,
      paddingHorizontal: 24,
      fontSize: 14,
      borderRadius: 8,
    },
    large: {
      paddingVertical: 16,
      paddingHorizontal: 32,
      fontSize: 16,
      borderRadius: 10,
    },
  };

  const currentVariant = variantStyles[variant] || variantStyles.primary;
  const currentSize = sizeStyles[size] || sizeStyles.medium;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: currentVariant.backgroundColor,
          borderColor: currentVariant.borderColor,
          paddingVertical: currentSize.paddingVertical,
          paddingHorizontal: currentSize.paddingHorizontal,
          borderRadius: currentSize.borderRadius,
          opacity: disabled ? 0.5 : 1,
          width: fullWidth ? '100%' : 'auto',
        },
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color={currentVariant.textColor} size="small" />
      ) : (
        <Text
          style={[
            styles.text,
            {
              color: currentVariant.textColor,
              fontSize: currentSize.fontSize,
            },
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },
});
