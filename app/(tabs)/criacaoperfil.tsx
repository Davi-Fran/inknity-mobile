import react from 'react';
import { View, Text, StyleSheet, Image, TextInput} from 'react-native'; 
import { Fontes } from '@/constants/Fontes';
import { Cores } from '@/constants/Colors';

// Tela de Criação de Perfil
export default function CriacaoPerfilScreen() {
  return (  
        <View style={styles.conteiner}> 
            <View style={styles.userphoto}>
              <Image source={require('@/assets/images/adphoto.png')} />
            </View>
            <View style={styles.conteinerInputs}>
              <input style={styles.inputs} placeholder="Nome de exibição" /> 
              <input style={styles.inputs} placeholder="Nome de usúario" />
              <input style={styles.inputs} placeholder="Pronomes" />
              <TextInput
                multiline
                numberOfLines={4} // define a altura inicial
                style={{ 
                  marginLeft: 4,
                  height: 150,
                  borderColor: Cores.branco, // branco inknity',
                  borderWidth: 1,
                  borderRadius: 8,
                  padding: 10,
                  width: 306,
                  backgroundColor: 'transparent',
                  fontSize: 16, 
                  color: Cores.branco, // branco inknity
                  fontFamily: Fontes.UbuntuRegular, // fonte Ubuntu Regular
                 }}
                placeholder="Bio"
                placeholderTextColor={ Cores.cinza }
              />
            </View>
            <View style={styles.conteinerButton}>
                <button style={styles.button}>Avançar</button>
            </View>
        </View>
  );
}


const styles = StyleSheet.create({
  conteiner: {
    height: 900,
    alignItems: 'center',
    backgroundColor: Cores.roxoFundo, // roxo inknity fundo tela
  },
  userphoto: {
    backgroundColor: Cores.cinzaEscuro,
    marginTop: 75,
    height: 175,
    width: 175,
    borderRadius: 87.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  conteinerInputs: {
    marginTop: 40,
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
  width: 306,
  height: 60,
  backgroundColor: Cores.roxoEscuro, // roxo inknity com opacidade de 15%
},
}); 
