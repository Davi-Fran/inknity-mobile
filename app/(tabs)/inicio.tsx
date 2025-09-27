import { Cores } from '@/constants/Colors';
import { Fontes } from '@/constants/Fontes';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  return (
     <View style={styles.conteiner}>
        <View style={styles.InitialPage}>
            <View style={styles.logo}>
                <Image style={styles.imagems} source={require('@/assets/images/inknityLogo.png')} />
            </View>
            <View style={styles.buttonInitial}>
                <TouchableOpacity style={styles.InitialButton}>
                    <Text style={styles.buttonText}> Pressione qualquer tecla para iniciar </Text>
                </TouchableOpacity>
            </View> 
        </View>
     </View>    
  )
}

const styles = StyleSheet.create({
  conteiner: {
    width: '100%',
    height: 900,
    alignItems: 'center',
    backgroundColor: Cores.roxoFundo, // roxo inknity fundo tela
  },  
  InitialPage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    height: 900,
  },
  InitialButton: {
    backgroundColor: Cores.roxoInitial,
    width: 330,
    borderRadius: 35,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: Fontes.UbuntuRegular,
    color: Cores.branco,
    fontSize: 16,
  },
  logo: {
    alignItems: 'center',
    width:400,
    height:200,
    position: 'absolute'
  },
  buttonInitial: {
     marginTop: 600,
  },
  imagems: {
    width: 300,
    height: 150,
  },
});