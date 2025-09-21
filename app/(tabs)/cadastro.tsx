import react from 'react';
import { View, Text, StyleSheet, Image} from 'react-native'; 
import { Fontes } from '@/constants/Fontes';
import { Cores } from '@/constants/Colors';

// Tela de Cadastro 
export default function CadastroScreen() {
    return (
        <View style={styles.conteiner}>
            <View style={styles.imagem}>
              <Image source={require('@/assets/images/forest.png')}/>
            </View>
            <View style={styles.conteinerTitulo}> 
               <Text style={styles.titulo}>Cadastro</Text>
            </View>
            <View style={styles.conteinerInputs}> 
              <input style={styles.inputs} placeholder="Email" /> 
              <input style={styles.inputs} placeholder="Senha" />
              <input style={styles.inputs} placeholder="Confirmar senha" />
            </View>
            <View style={styles.conteinerButton}>
                <button style={styles.button}>Cadastrar</button>
                </View>
                <view style={styles.conteinerText}></view>
                <text style={styles.text1}>Já tem conta? <text style={styles.text2}>Faça Login!</text></text>
        </View>
    );
}

const styles = StyleSheet.create({
  conteiner: { // conteiner principal 
    height: 900,
    alignItems: 'center',
    backgroundColor: Cores.roxoFundo, // roxo inknity fundo tela
  },  
  imagem:{ // estilisação imagem
    alignItems: 'center',
    width: '100%',
    height: '30%', 
    borderRadius: 4,
  },
  conteinerTitulo: { // conteiner titulo
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
  titulo: { // estilização titulo
    fontSize:52,
    paddingLeft: 37,
    paddingRight: 37,
    fontFamily: Fontes.UbuntuBold, // fonte Ubuntu Bold
    color: '#F2F0EF' //Branco inknity
  },
  conteinerInputs: { // conteiner inputs
    marginTop: 70,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  inputs: { // estilização inputs
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
conteinerButton: { // conteiner button
  marginTop: 50,
},

button: { // estilização button
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
text1: {  // estilização texto 1
  color: Cores.branco, // branco inknity
  fontSize: 12,
  fontFamily: Fontes.UbuntuRegular, // fonte Ubuntu Regular
}, 
text2: { // estilização texto 2
  color: Cores.roxo, // roxo inknity
  fontSize: 12,
  fontFamily: Fontes.UbuntuRegular, // fonte Ubuntu Regular
},
conteinerText: { // conteiner texto
  marginTop: 15,
},


});