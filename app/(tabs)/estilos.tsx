import react from 'react';
import { View, Text, StyleSheet, Image, TextInput} from 'react-native'; 
import { Fontes } from '@/constants/Fontes';
import { Cores } from '@/constants/Colors';

// Tela de seleção de estilos
export default function EstilosScreen() {
  return (
        <View style={styles.conteiner}>
            <text style={styles.titulo}>Selecione seus estilos!</text>
            <View>

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
   titulo: { 
    fontSize:32,
    fontFamily: Fontes.UbuntuRegular, // fonte Ubuntu Regular
    color: '#F2F0EF', //Branco da inknity
    marginTop: 50,
  },
  conteinerEstilos: {


    
  },
});
