import react from 'react';
import { View, Text, StyleSheet, Image} from 'react-native'; 
import { Fontes } from '@/constants/Fontes';
import { Cores } from '@/constants/Colors';

// Tela de Criação de Perfil
export default function CriacaoPerfilScreen() {
  return (  
        <View style={styles.conteiner}> 

        </View>


  );
}
const styles = StyleSheet.create({
  conteiner: {
    height: 900,
    alignItems: 'center',
    backgroundColor: Cores.roxoFundo, // roxo inknity fundo tela
  },  

});
