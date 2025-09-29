// chats.tsx
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { ArrowLeftIcon, PaperAirplaneIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export default function Chats() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("home")}>
            <ArrowLeftIcon size={22} color="white" />
        </TouchableOpacity>
        <Image
          source={{ uri: "https://placekitten.com/200/200" }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.username}>@johndoe</Text>
        </View>
      </View>

      {/* CHAT SCROLL */}
      <ScrollView style={styles.chatArea} showsVerticalScrollIndicator={false}>
        <View style={styles.msgReceived}>
          <Text style={styles.textMsg}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>
        <View style={styles.msgSent}>
          <Text style={styles.textMsg}>
            Tudo certo por aqui, e você?
          </Text>
        </View>
        <View style={styles.msgReceived}>
          <Text style={styles.textMsg}>
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </Text>
        </View>
      </ScrollView>

      {/* INPUT */}
      <View style={styles.inputArea}>
        <TextInput
          placeholder="Enviar mensagem"
          placeholderTextColor="#aaa"
          style={styles.input}
        />
        <TouchableOpacity style={styles.btnSend}>
          <PaperAirplaneIcon size={18} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0b0720" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: "#1a1230",
    borderBottomWidth: 1,
    borderBottomColor: "#2e2147",
  },
  avatar: { width: 36, height: 36, borderRadius: 18, marginHorizontal: 10 },
  name: { color: "white", fontWeight: "bold", fontSize: 15 },
  username: { color: "#aaa", fontSize: 12 },
  chatArea: { flex: 1, padding: 12 },
  msgReceived: {
    alignSelf: "flex-start",
    backgroundColor: "#201737",
    padding: 12,
    borderRadius: 16,
    borderBottomLeftRadius: 4,
    marginBottom: 12,
    maxWidth: "75%",
  },
  msgSent: {
    alignSelf: "flex-end",
    backgroundColor: "#4b3f72",
    padding: 12,
    borderRadius: 16,
    borderBottomRightRadius: 4,
    marginBottom: 12,
    maxWidth: "75%",
  },
  textMsg: { color: "white", fontSize: 14, lineHeight: 18 },
  inputArea: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#1a1230",
    borderTopWidth: 1,
    borderTopColor: "#2e2147",
  },
  input: {
    flex: 1,
    backgroundColor: "#2a203e",
    color: "white",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 25,
    marginRight: 8,
    fontSize: 14,
  },
  btnSend: {
    backgroundColor: "#6a5acd",
    padding: 10,
    borderRadius: 25,
  },
});
