//search.tsx
import React from 'react';
import { View, TextInput, StyleSheet, Image, ScrollView } from 'react-native';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import { useRouter } from 'expo-router';

export default function SearchPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Barra de busca */}
      <View style={styles.searchBar}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Pesquisar"
            placeholderTextColor="#aaa"
            
          />
          <MagnifyingGlassIcon size={20} color="#fff" />
        </View>
        <Image
          source={{ uri: 'https://i.pravatar.cc/100?img=5' }}
          style={styles.avatar}
        />
      </View>

      {/* Resultados / Cards (placeholders) */}
      <ScrollView style={styles.results}>
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
      </ScrollView>

      {/* Barra de navegação inferior */}
      <View style={styles.tabBar}>
        <HomeIcon
          size={26}
          color="white"
          onPress={() => router.push("/home")}
        />
        <MagnifyingGlassIcon
          size={26}
          color="#a855f7" // ativo (search aberta)
          onPress={() => router.push("/search")}
        />
        <PencilSquareIcon
          size={26}
          color="white"
          onPress={() => router.push("/criacaopost")}
        />
        <UserIcon
          size={26}
          color="white"
          onPress={() => router.push("/perfil")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0a1a',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#1c1230',
    justifyContent: 'space-between',
    borderBottomColor: "#2f2536ff",
    borderBottomWidth: 1.5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2e1f47',
    borderRadius: 100,
    paddingHorizontal: 10,
    flex: 1,
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#fff',
    height: 40,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  results: {
    flex: 1,
    padding: 15,
  },
  card: {
    height: 180,
    backgroundColor: '#1c1230',
    borderRadius: 12,
    marginBottom: 20,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#1c1230",
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
});
