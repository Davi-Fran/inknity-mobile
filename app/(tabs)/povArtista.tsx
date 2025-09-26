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
                <View style={styles.conteinerButton}>
                  <TouchableOpacity style={styles.button}>Editar perfil</TouchableOpacity>
                  <TouchableOpacity style={styles.button1}>
                    <Image source={require('@/assets/images/Config.png')} />
                  </TouchableOpacity>
                </View>
            </View>
            <View style={styles.NameTagConteiner}>
              <Text style={styles.NameTag}> John Doe </Text>

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
    width: '100%',
   
  },
  NameTag: {
    color: Cores.branco,
    fontFamily: Fontes.UbuntuBold,
    fontSize: 26,
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
});