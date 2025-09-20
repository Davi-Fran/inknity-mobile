import react from 'react';
import { View, Text, StyleSheet, Image} from 'react-native'; 
import { Fontes } from '@/constants/Fontes';
import { Cores } from '@/constants/Colors';

// Tela de Login
export default function LoginScreen() {
  return (
     <View style={styles.conteiner}>  
       <View style={styles.imagem}>
        <Image source={require('@/assets/images/forest.png')} />
       </View>
     
       <View style={styles.conteinerTitulo}> 
          <Text style={styles.titulo}>Login</Text>
       </View>

      <view style={styles.conteinerInputs}> 
        <input style={styles.inputs} placeholder="Email ou nome de usúario" /> 
        <input style={styles.inputs} placeholder="Senha" />
      </view>

      <view style={styles.conteinerButton}>
        <button style={styles.button}>Entrar</button>
      </view>
      <view style={styles.conteinerText}></view>
        <text style={styles.text1}>Não tem conta? <text style={styles.text2}>Cadastre-se!</text></text>
      
    </View>
  )
} 
// estilização padrão
const styles = StyleSheet.create({
  conteiner: {
    height: 900,
    alignItems: 'center',
    backgroundColor: Cores.roxoFundo, // roxo inknity fundo tela
  },  
  imagem:{ 
    alignItems: 'center',
    width: '100%',
    height: '30%', 
    borderRadius: 4,
  },
  conteinerTitulo: {
    maxHeight: 60,
    borderWidth: 5,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderLeftColor: Cores.roxo, // roxo inknity
    borderRightColor: Cores.amarelo, // amarelo inknity
    flex: 1,
    gap: 5,
    marginTop: 50,
  },
  titulo: { 
    fontSize:52,
    paddingLeft: 80,
    paddingRight: 80,
    fontFamily: Fontes.UbuntuBold, // fonte Ubuntu Bold
    color: '#F2F0EF' //Branco da inknity
  },
  conteinerInputs: {
    marginTop: 70,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    
  },
  inputs: {
    color: Cores.branco, // branco inknity
    width: 290,
    height: 40,
    backgroundColor: 'transparent',
    borderColor: Cores.branco, // branco inknity
    borderRadius: 8,
    margin: 4,
    fontSize: 16, 
    fontFamily: Fontes.UbuntuRegular, // fonte Ubuntu Regular
    paddingLeft: 10,
 }, 
conteinerButton: {
  marginTop: 50,
},

button: {
  color: Cores.branco, // branco inknity
  fontSize: 22,
  fontFamily: Fontes.UbuntuBold, // fonte Ubuntu Bold
  textAlign: 'center',
  borderRadius: 14,
  borderColor: Cores.roxo, // roxo inknity
  borderWidth: 2,
  width: 290,
  height: 60,
  backgroundColor: Cores.roxoEscuro, // roxo inknity com opacidade de 15%
},
text1: {
  color: Cores.branco, // branco inknity
  fontSize: 12,
  fontFamily: Fontes.UbuntuRegular, // fonte Ubuntu Regular
},
text2: {
  color: Cores.roxo, // roxo inknity
  fontSize: 12,
  fontFamily: Fontes.UbuntuRegular, // fonte Ubuntu Regular
},
conteinerText: {
  marginTop: 15,
},


});