import { Cores } from '@/constants/Colors';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Fontes } from '@/constants/Fontes';

// Tela de Pov Artista

export default function PovArtistaScreen() {
  return ( 
        <View style={styles.conteiner}>
            <View style={styles.imagem}>
            
              <Image style={styles.seta} source={require('@/assets/images/Vector.png')}/>
              <Image source={require('@/assets/images/inknityLogo.png')} />
            </View> 
            <View style={styles.conteinerAvatar}>
                <Image style={styles.avatar} source={require('@/assets/images/avatar.png')} />
            </View>
            <View style={styles.NameTagConteiner}>
              <Text style={styles.NameTag}>John Doe</Text>
              <Text style={styles.UserName}>@JohnDoe</Text>
              <Image style={styles.chat} source={require('@/assets/images/Chat.png')}/>
            </View>
            <View style={styles.NavBar}>
                <Text style={styles.TextAmarelo}>Posts</Text>
                <Text style={styles.TextPreto}>Comissões</Text>
            </View>
            <View style={styles.StylesBar}>
                <View style={styles.StylesARTr}>
                  <Text style={styles.styleText}>Medieval</Text>
                </View>
                <View style={styles.StylesARTc}>
                   <Text style={styles.styleText}>Medieval</Text>
                </View>
                <View style={styles.StylesARTc}>
                   <Text style={styles.styleText}>Medieval</Text>
                </View>
                <View style={styles.StylesARTc}>
                   <Text style={styles.styleText}>Medieval</Text>
                </View>
                <View style={styles.StylesARTc}>
                   <Text style={styles.styleText}>Medieval</Text>
                </View>
                <View style={styles.StylesARTc}>
                   <Text style={styles.styleText}>Medieval</Text>
                </View>
                <View style={styles.StylesARTc}>
                   <Text style={styles.styleText}>Medieval</Text>
                </View>
                <View style={styles.StylesARTc}>
                   <Text style={styles.styleText}>Medieval</Text>
                </View>
            </View>
            <View style={styles.profilePost}>
              <View style={styles.profilePostHeader}>
                <Image style={styles.avatar1}source={require('@/assets/images/avatar.png')} />
                <View style={styles.textHeader}>
                  <Text style={styles.headerName}>John Doe</Text>
                  <Text style={styles.headerUser}>@Johndoe</Text>
                </View>
              </View>
                <View style={styles.Post}>
                  <Image source={require('@/assets/images/inknityLogo.png')} />
                </View>
                <View style={styles.profileFooter}>
                  <View style={styles.footerIcons}>
                    <Image source={require('@/assets/images/Comentario.png')} />
                    <Image source={require('@/assets/images/Aviao.png')} />
                    <Image source={require('@/assets/images/desenho.png')} />
                  </View>
                  <View>
                     <Text style={styles.footerText}>top descrições de desenho.</Text>
                  </View>
                </View>
            </View>
            <View style={styles.profilePost}>
              <View style={styles.profilePostHeader}>
                <Image style={styles.avatar1}source={require('@/assets/images/avatar.png')} />
                <View style={styles.textHeader}>
                  <Text style={styles.headerName}>John Doe</Text>
                  <Text style={styles.headerUser}>@Johndoe</Text>
                </View>
              </View>
                <View style={styles.Post}>
                  <Image source={require('@/assets/images/inknityLogo.png')} />
                </View>
                <View style={styles.profileFooter}>
                  <View style={styles.footerIcons}>
                    <Image source={require('@/assets/images/Comentario.png')} />
                    <Image source={require('@/assets/images/Aviao.png')} />
                    <Image source={require('@/assets/images/desenho.png')} />
                  </View>
                  <View>
                     <Text style={styles.footerText}>top descrições de desenho.</Text>
                  </View>
                </View>
            </View>
        </View>
  )
}
const styles = StyleSheet.create({
  conteiner: {
    height: 900,
    alignItems: 'center',
    backgroundColor: Cores.roxoFundo, // roxo inknity fundo tela
  },  
  NameTagConteiner: {
    width: 400,
   
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
    width: 370,
    height: 60,
    marginTop: 20,
    marginLeft: 15 ,
    marginRight: 15  ,
    marginBottom: 15 , 
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: Cores.cinza,
    borderBottomWidth: 1, 
    gap: 10,
  },
  TextAmarelo: {
   textAlign: 'center',
   width: 100,
   fontSize: 20,
   color: Cores.amarelo,
   borderBottomWidth: 1 ,
   borderColor: Cores.amarelo,
   marginTop: 30,
  },
  TextPreto: {
   textAlign: 'center',
   width: 100,
   color: Cores.cinza,
   marginTop: 40,
  },
  StylesBar: {
    width: 370,
    height: 60,
    marginLeft: 15 ,
    marginRight: 15  ,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
  },
  StylesARTr: {
    borderRadius: 20,
    width: 80,
    height: 25,
    backgroundColor: Cores.roxo,
    justifyContent: 'center'
  },
   StylesARTc: {
    borderRadius: 20,
    width: 80,
    height: 25,
    backgroundColor: Cores.cinzaEscuro,
    justifyContent: 'center',
  },
  styleText:{
    textAlign: 'center',
    color: Cores.branco, 
    fontSize: 16,
    fontFamily: Fontes.UbuntuRegular
  },
  profilePost: {
    marginTop:20,
  },
  profilePostHeader: {
    backgroundColor: Cores.roxo87,
    width:400,
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textHeader:{
    marginLeft: 10,
    width: 80,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerName:{
    fontSize: 18,
    fontFamily: Fontes.UbuntuRegular,
    color: Cores.branco
  },
  headerUser:{
    fontSize: 14,
    fontFamily: Fontes.UbuntuRegular,
    marginRight: 10,
    color: Cores.cinza
  },
  Post: {
    backgroundColor: Cores.roxo40 , 
    width:400,
    height:175,
    justifyContent:'center',
    alignItems: 'center',
  },
  profileFooter:{
    backgroundColor: Cores.roxo87,
    width:400,
    height: 60,
  },
  footerIcons:{
    padding: 8,
    gap: 8, 
    flexDirection: 'row',
  },
  footerText:{
    color: Cores.branco,
    marginLeft: 10,
  },
  button: {
    marginTop: 15,
    color: Cores.branco, // branco inknity
    fontFamily: Fontes.UbuntuBold, // fonte Ubuntu Bold
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 8,
    borderColor: Cores.roxo, // roxo inknity
    borderWidth: 2,
    width: 110,
    height: 40,
    backgroundColor: Cores.roxoEscuro, // roxo inknity com opacidade de 15%
  },
  button1: {
    marginTop: 15,
    color: Cores.branco, // branco inknity
    fontFamily: Fontes.UbuntuBold, // fonte Ubuntu Bold
    justifyContent: 'center', 
    alignItems:'center',
    borderRadius: 8,
    borderColor: Cores.roxo, // roxo inknity
    borderWidth: 2,
    width: 40,
    marginLeft: 20,
    marginRight: 20,
    height: 40,
    backgroundColor: Cores.roxoEscuro, // roxo inknity com opacidade de 15%
  },
  conteinerButton: {
    marginTop: 40,
    flexDirection: 'row',
  },
  seta: {
    width: 12,
    height: 20,
    marginLeft: -360,
  },
   chat: {
    marginTop: -40,
    marginLeft: 165,
    width: 20,
    height: 20,
  },
  imagem:{
    width: 412,
    height: 150, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Cores.roxo87,
    
  }, 
  conteinerAvatar: { 
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingLeft: 20,
    width: 412,
    marginLeft: 20,
    marginTop: -40,
  },
  avatar :{
    width: 110,
    height: 110,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: Cores.roxoFundo, // roxo inknity fundo tela
  },
   avatar1 :{
    width: 40,
    height: 40,
    borderRadius: 15,
    marginLeft: 15,
  },
});