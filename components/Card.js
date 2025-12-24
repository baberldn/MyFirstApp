import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

/**
 * Yeniden kullanılabilir Card componenti
 * Compound Component Pattern kullanıyor
 *
 * Kullanım:
 * <Card>
 *   <Card.Header title="Başlık" subtitle="Alt başlık" />
 *   <Card.Body>
 *     <Text>İçerik...</Text>
 *   </Card.Body>
 *   <Card.Footer>
 *     <Button title="Kaydet" />
 *   </Card.Footer>
 * </Card>
 *
 * veya basit kullanım:
 * <Card title="Başlık" subtitle="Alt başlık">
 *   <Text>İçerik...</Text>
 * </Card>
 */

// Ana Card componenti
function Card({
  children,
  title,
  subtitle,
  variant = 'default', // 'default' | 'outlined' | 'elevated'
  onPress,
  style,
}) {
  const variantStyles = {
    default: {
      backgroundColor: '#fff',
      borderWidth: 0,
      shadowOpacity: 0.1,
      elevation: 3,
    },
    outlined: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#e0e0e0',
      shadowOpacity: 0,
      elevation: 0,
    },
    elevated: {
      backgroundColor: '#fff',
      borderWidth: 0,
      shadowOpacity: 0.2,
      elevation: 8,
    },
  };

  const currentVariant = variantStyles[variant] || variantStyles.default;

  const content = (
    <View
      style={[
        styles.card,
        {
          backgroundColor: currentVariant.backgroundColor,
          borderWidth: currentVariant.borderWidth,
          borderColor: currentVariant.borderColor,
          shadowOpacity: currentVariant.shadowOpacity,
          elevation: currentVariant.elevation,
        },
        style,
      ]}
    >
      {/* Eğer title prop varsa basit header göster */}
      {title && (
        <View style={styles.simpleHeader}>
          <Text style={styles.simpleTitle}>{title}</Text>
          {subtitle && <Text style={styles.simpleSubtitle}>{subtitle}</Text>}
        </View>
      )}
      {children}
    </View>
  );

  // Eğer onPress varsa TouchableOpacity ile sar
  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        {content}
      </TouchableOpacity>
    );
  }

  return content;
}

// Card.Header componenti
function CardHeader({ title, subtitle, avatar, rightElement }) {
  return (
    <View style={styles.header}>
      {avatar && (
        <Image source={{ uri: avatar }} style={styles.avatar} />
      )}
      <View style={styles.headerText}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
      {rightElement && <View style={styles.rightElement}>{rightElement}</View>}
    </View>
  );
}

// Card.Body componenti
function CardBody({ children, style }) {
  return <View style={[styles.body, style]}>{children}</View>;
}

// Card.Footer componenti
function CardFooter({ children, style }) {
  return <View style={[styles.footer, style]}>{children}</View>;
}

// Card.Image componenti
function CardImage({ source, height = 150, style }) {
  return (
    <Image
      source={typeof source === 'string' ? { uri: source } : source}
      style={[styles.image, { height }, style]}
      resizeMode="cover"
    />
  );
}

// Card.Divider componenti
function CardDivider() {
  return <View style={styles.divider} />;
}

// Compound Components'ları Card'a ekle
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Image = CardImage;
Card.Divider = CardDivider;

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    marginVertical: 8,
  },
  // Simple header (title prop ile)
  simpleHeader: {
    padding: 16,
    paddingBottom: 8,
  },
  simpleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  simpleSubtitle: {
    fontSize: 13,
    color: '#888',
    marginTop: 4,
  },
  // Card.Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 23,
    marginRight: 12,
  },
  headerText: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  subtitle: {
    fontSize: 13,
    color: '#888',
    marginTop: 2,
  },
  rightElement: {
    marginLeft: 'auto',
  },
  // Card.Body
  body: {
    padding: 16,
    paddingTop: 8,
  },
  // Card.Footer
  footer: {
    flexDirection: 'row',
    padding: 16,
    paddingTop: 8,
    gap: 10,
  },
  // Card.Image
  image: {
    width: '100%',
  },
  // Card.Divider
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 16,
  },
});
