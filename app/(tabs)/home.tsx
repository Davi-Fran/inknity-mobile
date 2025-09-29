// home.tsx
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ChatBubbleOvalLeftIcon,
  HeartIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
  PencilSquareIcon,
  UserIcon,
} from "react-native-heroicons/outline";

import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  const posts = [
    {
      id: 1,
      username: "John Doe",
      handle: "@johndoe",
      avatar: "https://i.pravatar.cc/100?img=1",
      image: require("../../assets/images/logopost.png"),
      desc: "top descrições de desenho.",
    },
    {
      id: 2,
      username: "Jane Smith",
      handle: "@janesmith",
      avatar: "https://i.pravatar.cc/100?img=2",
      image: require("../../assets/images/logopost.png"),
      desc: "arte nova 🎨",
    },
    {
      id: 3,
      username: "Lucas",
      handle: "@lucasdev",
      avatar: "https://i.pravatar.cc/100?img=3",
      image: require("../../assets/images/logopost.png"),
      desc: "projeto em andamento",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/logo2.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.headerIcons}>
          <BellIcon 
            size={26} 
            color="white" 
            onPress={() => router.push("/notifications")}
          />
          <ChatBubbleOvalLeftIcon 
            size={26} 
            color="white" 
            onPress={() => router.push("/dmPage")} 
          />
        </View>
      </View>

      {/* Tabs (Para você / Seguindo) */}
      <View style={styles.tabs}>
        <Text
          style={[styles.tab, styles.tabAtivo]}
          onPress={() => router.push('/home')}
        >
          Para você
        </Text>
        <Text
          style={styles.tab}
          onPress={() => router.push('/following')}
        >
          Seguindo
        </Text>
      </View>

      {/* Feed */}
      <ScrollView style={styles.feed}>
        {posts.map((post) => (
          <View key={post.id} style={styles.post}>
            {/* Cabeçalho do post */}
            <View style={styles.postHeader}>
              <Image source={{ uri: post.avatar }} style={styles.avatar} />
              <View>
                <Text style={styles.username}>{post.username}</Text>
                <Text style={styles.handle}>{post.handle}</Text>
              </View>
            </View>

            {/* Imagem do post */}
            <Image
              source={post.image}
              style={styles.postImage}
              resizeMode="cover"
            />

            {/* Ações */}
            <View style={styles.postActions}>
              <HeartIcon size={24} color="white" style={styles.actionIcon} />
              <ChatBubbleOvalLeftEllipsisIcon
                size={24}
                color="white"
                style={styles.actionIcon}
              />
              <PaperAirplaneIcon
                size={24}
                color="white"
                style={[
                  styles.actionIcon,
                  { transform: [{ rotate: "-27deg" }], marginTop: -2.7 },
                ]}
              />
            </View>

            {/* Descrição */}
            <Text style={styles.postDesc}>{post.desc}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Barra de navegação inferior */}
            <View style={styles.tabBar}>
              <HomeIcon
                size={26}
                color="#a855f7"
                onPress={() => router.push("/home")}
              />
              <MagnifyingGlassIcon
                size={26}
                color="white"
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
    backgroundColor: "#0f0a1a",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#1c1230",
  },
  logo: {
    width: 100,
    height: 50,
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 5,
    gap: 20,
  },
  icon: {
    marginLeft: 15,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    marginVertical: 10,
    backgroundColor: "#0f0a1a",
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingBottom: 21,
    borderBottomColor: "#2f2536ff",
    borderBottomWidth: 1.5,
  },
  tab: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
    marginRight: 20,
  },
  tabAtivo: {
    color: "#facc15",
    fontWeight: "600",
    borderBottomWidth: 2,
    borderBottomColor: "#facc15",
  },
  feed: {
    flex: 1,
  },
  post: {
    backgroundColor: "#0B0211",
    marginBottom: 20,
    overflow: "hidden",
  },
  postImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    opacity: 0.8,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginTop: -7,
    backgroundColor: "#0f0a1a",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    color: "white",
    fontWeight: "bold",
  },
  handle: {
    color: "#aaa",
    fontSize: 12,
  },
  postActions: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  actionIcon: {
    marginRight: 15,
  },
  postDesc: {
    color: "white",
    paddingHorizontal: 10,
    marginTop: 5,
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
