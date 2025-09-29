import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { Cores } from '@/constants/Colors';
import { Fontes } from '@/constants/Fontes';

const { width: screenWidth } = Dimensions.get('window');

const commissions = [
  {
    id: 1,
    description: 'Comissão de retrato finalizada.',
    image: require('@/assets/images/inknityLogo.png'),
  },
  {
    id: 2,
    description: 'Personagem em estilo anime pronto!',
    image: require('@/assets/images/inknityLogo.png'),
  },
];

export default function Comissões() {
  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
      <View style={styles.imagem}>
        <Image style={styles.seta} source={require('@/assets/images/Vector.png')} />
        <Image source={require('@/assets/images/inknityLogo.png')} />
      </View>

      <View style={styles.conteinerAvatar}>
        <Image style={styles.avatar} source={require('@/assets/images/avatar.png')} />
        <View style={styles.conteinerButton}>
          <TouchableOpacity style={styles.button} onPress={() => console.log('Editar perfil')}>
            <Text style={styles.styleText}>Editar perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1} onPress={() => console.log('Configurações')}>
            <Image source={require('@/assets/images/Config.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.NameTagConteiner}>
        <Text style={styles.NameTag}>John Doe</Text>
        <Text style={styles.UserName}>@JohnDoe</Text>
      </View>

      <View style={styles.NavBar}>
        <Text style={styles.TextPreto}>Posts</Text>
        <Text style={styles.TextAmarelo}>Comissões</Text>
      </View>

      {commissions.map(comm => (
        <View style={styles.profilePost} key={comm.id}>
          <View style={styles.profilePostHeader}>
            <Image style={styles.avatar1} source={require('@/assets/images/avatar.png')} />
            <View style={styles.textHeader}>
              <Text style={styles.headerName}>John Doe</Text>
              <Text style={styles.headerUser}>@Johndoe</Text>
            </View>
          </View>

          <View style={styles.Post}>
            <Image source={comm.image} />
          </View>

          <View style={styles.profileFooter}>
            <View style={styles.footerIcons}>
              <Image source={require('@/assets/images/Comentario.png')} />
              <Image source={require('@/assets/images/Aviao.png')} />
              <Image source={require('@/assets/images/desenho.png')} />
            </View>
            <View>
              <Text style={styles.footerText}>{comm.description}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: Cores.roxoFundo,
  },
  contentContainer: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  imagem: {
    width: screenWidth,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Cores.roxo87,
    position: 'relative',
  },
  seta: {
    width: 12,
    height: 20,
    position: 'absolute',
    left: 20,
    top: 15,
  },
  conteinerAvatar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screenWidth - 40,
    marginTop: -40,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: Cores.roxoFundo,
  },
  conteinerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: Cores.roxo,
    borderWidth: 2,
    width: 110,
    height: 40,
    backgroundColor: Cores.roxoEscuro,
    marginRight: 10,
  },
  button1: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: Cores.roxo,
    borderWidth: 2,
    width: 40,
    height: 40,
    backgroundColor: Cores.roxoEscuro,
  },
  NameTagConteiner: {
    width: screenWidth - 40,
    marginTop: 10,
  },
  NameTag: {
    marginLeft: 25,
    color: Cores.branco,
    fontFamily: Fontes.UbuntuBold,
    fontSize: 26,
  },
  UserName: {
    color: Cores.cinza,
    marginLeft: 25,
  },
  NavBar: {
    width: screenWidth - 40,
    height: 60,
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderBottomColor: Cores.cinza,
    borderBottomWidth: 1,
    gap: 10,
  },
  TextAmarelo: {
    textAlign: 'center',
    width: 100,
    fontSize: 16,
    color: Cores.amarelo,
    borderBottomWidth: 2,
    marginBottom: 5,
    fontWeight: "600",
    borderBottomColor: "#facc15",
  },
  TextPreto: {
    textAlign: 'center',
    width: 100,
    color: Cores.cinza,
    marginBottom: 5,
  },
  profilePost: {
    marginTop: 20,
    width: screenWidth,
  },
  profilePostHeader: {
    backgroundColor: Cores.roxo87,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar1: {
    width: 40,
    height: 40,
    borderRadius: 15,
    marginLeft: 15,
  },
  textHeader: {
    marginLeft: 10,
  },
  headerName: {
    fontSize: 18,
    fontFamily: Fontes.UbuntuRegular,
    color: Cores.branco,
  },
  headerUser: {
    fontSize: 14,
    fontFamily: Fontes.UbuntuRegular,
    color: Cores.cinza,
  },
  Post: {
    backgroundColor: Cores.roxo40,
    height: 175,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileFooter: {
    backgroundColor: Cores.roxo87,
    height: 60,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  footerIcons: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 4,
  },
  footerText: {
    color: Cores.branco,
  },
  styleText: {
    color: Cores.branco,
    fontSize: 14,
    fontFamily: Fontes.UbuntuRegular,
  },
});