import { Cores } from '@/constants/Colors';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Fontes } from '@/constants/Fontes';
import { Button } from '@react-navigation/elements';

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
                  <Button style={styles.button}>Editar perfil</Button>
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
  button: {
    marginTop: 15,
    color: Cores.branco, // branco inknity
    fontFamily: Fontes.UbuntuBold, // fonte Ubuntu Bold
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 14,
    borderRadius: 14,
    borderColor: Cores.roxo, // roxo inknity
    borderWidth: 2,
    width: 110,
    height: 50,
    backgroundColor: Cores.roxoEscuro, // roxo inknity com opacidade de 15%
  },
  conteinerButton: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
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
    marginTop: -40,
  },
  avatar :{
    borderRadius: 100,
    borderWidth: 4,
    borderColor: Cores.roxoFundo, // roxo inknity fundo tela
  },
});