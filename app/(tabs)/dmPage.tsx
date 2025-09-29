// dmPage.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';

import { useRouter } from 'expo-router';

export default function DmPage() {
  const router = useRouter();

  const conversations = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    name: 'Claude Monet',
    handle: '@cmonet',
    date: '28 de Set',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    avatar: 'https://i.pravatar.cc/150?img=12',
  }));

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/home")} activeOpacity={0.7}>
          <ArrowLeftIcon size={24} color="white" />
        </TouchableOpacity>

        <Image
          source={require('../../assets/images/logo2.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar mensagens"
          placeholderTextColor="#ccc"
        />
      </View>

      {/* Chat list */}
      <ScrollView style={styles.chatList}>
        {conversations.map((conv) => (
          <TouchableOpacity key={conv.id} style={styles.chatItem}>
            <Image source={{ uri: conv.avatar }} style={styles.avatar} />
            <View style={styles.chatInfo}>
              <View style={styles.chatHeader}>
                <Text style={styles.name}>{conv.name}</Text>
                <Text style={styles.date}>{conv.date}</Text>
              </View>
              <Text style={styles.handle}>{conv.handle}</Text>
              <Text style={styles.message} numberOfLines={1}>
                {conv.message}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0a1a',
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#1c1230",
    gap: 20,
  },
  logo: {
    width: 100,
    height: 50,
  },
  searchContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#1c1230',
  },
  searchInput: {
    backgroundColor: '#2a203e',
    borderRadius: 100,
    padding: 10,
    color: 'white',
  },
  chatList: {
    paddingHorizontal: 10,
    marginTop: 5,
  },
  chatItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomColor: '#2f2536',
    borderBottomWidth: 1,
    alignItems: 'flex-start',
    gap: 10,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  chatInfo: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  date: {
    color: '#aaa',
    fontSize: 12,
  },
  handle: {
    color: '#aaa',
    fontSize: 13,
  },
  message: {
    color: 'white',
    fontSize: 14,
    marginTop: 3,
  },
});
