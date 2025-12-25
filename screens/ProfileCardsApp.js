import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  Animated,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

// Profil verileri
const profilesData = {
  ahmet: {
    id: 'ahmet',
    name: 'Ahmet Yilmaz',
    username: '@ahmetyilmaz',
    avatar: 'https://i.pravatar.cc/150?img=12',
    bio: 'Full-stack developer | React Native enthusiast | Coffee addict',
    themeColor: '#3B82F6', // Mavi
    stats: {
      posts: 142,
      followers: '12.5K',
      following: 891,
    },
    skills: ['React Native', 'TypeScript', 'Node.js', 'Python'],
  },
  elif: {
    id: 'elif',
    name: 'Elif Demir',
    username: '@elifdemir',
    avatar: 'https://i.pravatar.cc/150?img=5',
    bio: 'UI/UX Designer | Creating beautiful experiences | Design lover',
    themeColor: '#8B5CF6', // Mor
    stats: {
      posts: 89,
      followers: '8.2K',
      following: 432,
    },
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
  },
  can: {
    id: 'can',
    name: 'Can Ozturk',
    username: '@canozturk',
    avatar: 'https://i.pravatar.cc/150?img=8',
    bio: 'Mobile Developer | iOS & Android | Open source contributor',
    themeColor: '#F97316', // Turuncu
    stats: {
      posts: 256,
      followers: '15.8K',
      following: 1205,
    },
    skills: ['Swift', 'Kotlin', 'Flutter', 'React Native'],
  },
};

// Profil Ekrani Componenti
function ProfileScreen({ profile, onEditPress }) {
  const scaleAnim = React.useRef(new Animated.Value(1)).current;

  const handleAvatarPress = () => {
    Animated.sequence([
      Animated.spring(scaleAnim, { toValue: 1.1, useNativeDriver: true }),
      Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true }),
    ]).start();
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: '#f8f9fa' }]}>
      {/* Header with theme color */}
      <View style={[styles.header, { backgroundColor: profile.themeColor }]}>
        <TouchableOpacity onPress={handleAvatarPress} activeOpacity={0.9}>
          <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
            <Image source={{ uri: profile.avatar }} style={styles.avatar} />
          </Animated.View>
        </TouchableOpacity>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.username}>{profile.username}</Text>
      </View>

      {/* Bio Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Hakkinda</Text>
        <Text style={styles.bio}>{profile.bio}</Text>
      </View>

      {/* Stats Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Istatistikler</Text>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, { color: profile.themeColor }]}>
              {profile.stats.posts}
            </Text>
            <Text style={styles.statLabel}>Gonderi</Text>
          </View>
          <View style={[styles.statDivider, { backgroundColor: profile.themeColor }]} />
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, { color: profile.themeColor }]}>
              {profile.stats.followers}
            </Text>
            <Text style={styles.statLabel}>Takipci</Text>
          </View>
          <View style={[styles.statDivider, { backgroundColor: profile.themeColor }]} />
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, { color: profile.themeColor }]}>
              {profile.stats.following}
            </Text>
            <Text style={styles.statLabel}>Takip</Text>
          </View>
        </View>
      </View>

      {/* Skills Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Yetenekler</Text>
        <View style={styles.skillsContainer}>
          {profile.skills.map((skill, index) => (
            <View
              key={index}
              style={[styles.skillBadge, { backgroundColor: profile.themeColor + '20' }]}
            >
              <Text style={[styles.skillText, { color: profile.themeColor }]}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Edit Button */}
      <TouchableOpacity
        style={[styles.editButton, { backgroundColor: profile.themeColor }]}
        onPress={() => onEditPress(profile)}
      >
        <Ionicons name="pencil" size={20} color="#fff" />
        <Text style={styles.editButtonText}>Profili Duzenle</Text>
      </TouchableOpacity>

      <View style={{ height: 30 }} />
    </ScrollView>
  );
}

// Edit Modal
function EditProfileModal({ visible, profile, onClose, onSave }) {
  const [name, setName] = useState(profile?.name || '');
  const [bio, setBio] = useState(profile?.bio || '');

  React.useEffect(() => {
    if (profile) {
      setName(profile.name);
      setBio(profile.bio);
    }
  }, [profile]);

  const handleSave = () => {
    onSave({ ...profile, name, bio });
    onClose();
  };

  if (!profile) return null;

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Profili Duzenle</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#666" />
            </TouchableOpacity>
          </View>

          {/* Avatar placeholder */}
          <TouchableOpacity style={styles.avatarEditContainer}>
            <Image source={{ uri: profile.avatar }} style={styles.avatarEdit} />
            <View style={[styles.avatarEditOverlay, { backgroundColor: profile.themeColor }]}>
              <Ionicons name="camera" size={20} color="#fff" />
            </View>
          </TouchableOpacity>

          <Text style={styles.inputLabel}>Isim</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Isminizi girin"
          />

          <Text style={styles.inputLabel}>Bio</Text>
          <TextInput
            style={[styles.input, styles.bioInput]}
            value={bio}
            onChangeText={setBio}
            placeholder="Kendinizden bahsedin"
            multiline
            numberOfLines={3}
          />

          <TouchableOpacity
            style={[styles.saveButton, { backgroundColor: profile.themeColor }]}
            onPress={handleSave}
          >
            <Text style={styles.saveButtonText}>Kaydet</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

// Ana Component
export default function ProfileCardsApp() {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [profiles, setProfiles] = useState(profilesData);

  const handleEditPress = (profile) => {
    setSelectedProfile(profile);
    setEditModalVisible(true);
  };

  const handleSave = (updatedProfile) => {
    setProfiles({
      ...profiles,
      [updatedProfile.id]: updatedProfile,
    });
  };

  // Her profil icin screen olustur
  const AhmetScreen = () => (
    <ProfileScreen profile={profiles.ahmet} onEditPress={handleEditPress} />
  );
  const ElifScreen = () => (
    <ProfileScreen profile={profiles.elif} onEditPress={handleEditPress} />
  );
  const CanScreen = () => (
    <ProfileScreen profile={profiles.can} onEditPress={handleEditPress} />
  );

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: '#667eea',
          tabBarInactiveTintColor: '#999',
          tabBarLabelStyle: styles.tabLabel,
        }}
      >
        <Tab.Screen
          name="Ahmet"
          component={AhmetScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
            tabBarActiveTintColor: profiles.ahmet.themeColor,
          }}
        />
        <Tab.Screen
          name="Elif"
          component={ElifScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-circle" size={size} color={color} />
            ),
            tabBarActiveTintColor: profiles.elif.themeColor,
          }}
        />
        <Tab.Screen
          name="Can"
          component={CanScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-circle-outline" size={size} color={color} />
            ),
            tabBarActiveTintColor: profiles.can.themeColor,
          }}
        />
      </Tab.Navigator>

      <EditProfileModal
        visible={editModalVisible}
        profile={selectedProfile}
        onClose={() => setEditModalVisible(false)}
        onSave={handleSave}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
  username: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 5,
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: 15,
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  bio: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 13,
    color: '#888',
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    height: 40,
    opacity: 0.3,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillBadge: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  skillText: {
    fontSize: 13,
    fontWeight: '600',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 12,
    gap: 8,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  tabBar: {
    height: 60,
    paddingBottom: 8,
    paddingTop: 8,
    borderTopWidth: 0,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '500',
  },

  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    paddingBottom: 40,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  avatarEditContainer: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  avatarEdit: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarEditOverlay: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#fff',
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  bioInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  saveButton: {
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
