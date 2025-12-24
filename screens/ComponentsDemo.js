import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { useState } from 'react';

// Custom componentleri import et
import Button from '../components/Button';
import Card from '../components/Card';

export default function ComponentsDemo() {
  const [loading, setLoading] = useState(false);

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <ScrollView style={styles.container}>
      {/* ==================== BUTTON DEMO ==================== */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Button Componenti</Text>
        <Text style={styles.sectionSubtitle}>Farklı variant ve size seçenekleri</Text>

        {/* Variants */}
        <Text style={styles.label}>Variants (Çeşitler)</Text>
        <View style={styles.row}>
          <Button title="Primary" variant="primary" onPress={() => Alert.alert('Primary!')} />
          <Button title="Secondary" variant="secondary" onPress={() => Alert.alert('Secondary!')} />
        </View>
        <View style={styles.row}>
          <Button title="Outline" variant="outline" onPress={() => Alert.alert('Outline!')} />
          <Button title="Danger" variant="danger" onPress={() => Alert.alert('Danger!')} />
          <Button title="Success" variant="success" onPress={() => Alert.alert('Success!')} />
        </View>

        {/* Sizes */}
        <Text style={styles.label}>Sizes (Boyutlar)</Text>
        <View style={styles.row}>
          <Button title="Small" size="small" />
          <Button title="Medium" size="medium" />
          <Button title="Large" size="large" />
        </View>

        {/* States */}
        <Text style={styles.label}>States (Durumlar)</Text>
        <View style={styles.row}>
          <Button title="Normal" />
          <Button title="Disabled" disabled />
          <Button
            title="Loading"
            loading={loading}
            onPress={handleLoadingDemo}
          />
        </View>

        {/* Full Width */}
        <Text style={styles.label}>Full Width</Text>
        <Button
          title="Tam Genişlik Buton"
          fullWidth
          size="large"
          onPress={() => Alert.alert('Full Width!')}
        />
      </View>

      {/* ==================== CARD DEMO ==================== */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Card Componenti</Text>
        <Text style={styles.sectionSubtitle}>Compound Component Pattern</Text>

        {/* Simple Card */}
        <Text style={styles.label}>Basit Kullanım</Text>
        <Card title="Basit Kart" subtitle="Alt başlık ile">
          <Card.Body>
            <Text style={styles.cardText}>
              Bu en basit kart kullanımı. Title ve subtitle prop olarak verildi.
            </Text>
          </Card.Body>
        </Card>

        {/* Card Variants */}
        <Text style={styles.label}>Variants</Text>
        <Card variant="default">
          <Card.Body>
            <Text style={styles.cardText}>Default - Hafif gölge</Text>
          </Card.Body>
        </Card>

        <Card variant="outlined">
          <Card.Body>
            <Text style={styles.cardText}>Outlined - Kenarlık</Text>
          </Card.Body>
        </Card>

        <Card variant="elevated">
          <Card.Body>
            <Text style={styles.cardText}>Elevated - Yoğun gölge</Text>
          </Card.Body>
        </Card>

        {/* Compound Card */}
        <Text style={styles.label}>Compound Pattern</Text>
        <Card variant="elevated">
          <Card.Header
            title="Ahmet Yılmaz"
            subtitle="Software Developer"
            avatar="https://i.pravatar.cc/100?img=12"
          />
          <Card.Divider />
          <Card.Body>
            <Text style={styles.cardText}>
              React Native ile mobil uygulama geliştiriyorum.
              Custom componentler harika!
            </Text>
          </Card.Body>
          <Card.Footer>
            <Button title="Takip Et" size="small" />
            <Button title="Mesaj" size="small" variant="outline" />
          </Card.Footer>
        </Card>

        {/* Card with Image */}
        <Text style={styles.label}>Resimli Kart</Text>
        <Card
          variant="elevated"
          onPress={() => Alert.alert('Kart tıklandı!')}
        >
          <Card.Image
            source="https://picsum.photos/400/200"
            height={150}
          />
          <Card.Header
            title="Doğa Fotoğrafı"
            subtitle="Güzel manzara"
          />
          <Card.Body>
            <Text style={styles.cardText}>
              Bu kart tıklanabilir! onPress prop'u ile.
            </Text>
          </Card.Body>
        </Card>

        {/* Practical Example */}
        <Text style={styles.label}>Gerçek Dünya Örneği</Text>
        <Card variant="outlined">
          <Card.Header
            title="React Native Kursu"
            subtitle="Mobil Geliştirme"
            rightElement={
              <View style={styles.badge}>
                <Text style={styles.badgeText}>YENİ</Text>
              </View>
            }
          />
          <Card.Divider />
          <Card.Body>
            <View style={styles.priceRow}>
              <Text style={styles.originalPrice}>₺599</Text>
              <Text style={styles.discountPrice}>₺299</Text>
            </View>
            <Text style={styles.cardText}>
              • 50+ saat video{'\n'}
              • Sertifika{'\n'}
              • Ömür boyu erişim
            </Text>
          </Card.Body>
          <Card.Footer>
            <Button
              title="Satın Al"
              fullWidth
              variant="success"
              onPress={() => Alert.alert('Sepete eklendi!')}
            />
          </Card.Footer>
        </Card>
      </View>

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
    padding: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#555',
    marginTop: 20,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
  },
  badge: {
    backgroundColor: '#e74c3c',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 10,
  },
  originalPrice: {
    fontSize: 16,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  discountPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#27ae60',
  },
});
