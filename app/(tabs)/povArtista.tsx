import { Cores } from '@/constants/Colors';
import { Image, StyleSheet, Text, View } from 'react-native';

// Tela de Pov Artista

export default function PovArtistaScreen() {
  return ( 
        <View style={styles.conteiner}>
            <Text></Text>
            <View style={styles.imagem}>
              <Image source={require('@/assets/images/inknityLogo.png')} />
            </View> 
            <View style={styles.conteinerAvatar}>
              <Image style={styles.avatar} source={require('@/assets/images/avatar.png')} />
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
  imagem:{
    width: '100%',
    height: 150, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Cores.roxo87,
  }, 
  conteinerAvatar: { 
    width: '100%',
    marginLeft: '15%',
    marginTop: -40,
  },
  avatar :{
    borderRadius: 100,
    borderWidth: 4,
    borderColor: Cores.roxoFundo, // roxo inknity fundo tela
  }, 
});