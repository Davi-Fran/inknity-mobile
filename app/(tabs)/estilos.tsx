import react from 'react';
import { View, Text, StyleSheet, Image, TextInput} from 'react-native'; 
import { Fontes } from '@/constants/Fontes';
import { Cores } from '@/constants/Colors';

// Tela de seleção de estilos
export default function EstilosScreen() {
  return (
        <View style={styles.conteiner}>
            <text style={styles.titulo}>Selecione seus estilos!</text>
              <View style={styles.conteinerEstilos}>  
                <View style={styles.estilosR}>
                  <text style={styles.textEstilos}>Cyberpunk<text style={styles.textSelect}>X</text></text>
                </View>
                <View style={styles.estilosR}>
                  <text style={styles.textEstilos}>Realista<text style={styles.textSelect}>X</text></text>
                </View>
                <View style={styles.estilosR}>
                  <text style={styles.textEstilos}>Medieval<text style={styles.textSelect}>X</text></text>
                </View>
                <View style={styles.estilosP}>
                  <text style={styles.textEstilos}>Semirrealismo<text style={styles.textSelect}>+</text></text>
                </View>
                <View style={styles.estilosP}>
                  <text style={styles.textEstilos}>Aquarela<text style={styles.textSelect}>+</text></text>
                </View>
                <View style={styles.estilosP}>
                  <text style={styles.textEstilos}>Tradicional<text style={styles.textSelect}>+</text></text>
                </View>
                <View style={styles.estilosP}>
                  <text style={styles.textEstilos}>Steampunk<text style={styles.textSelect}>+</text></text>
                </View>
                <View style={styles.estilosP}>
                  <text style={styles.textEstilos}>Pixelart<text style={styles.textSelect}>+</text></text>
                </View>
             </View>
              <View style={styles.conteinerInputs}>
                  <input style={styles.inputs} placeholder="outros"/>
                  <button style={styles.buttonI}>+</button>
              </View>
              <View style={styles.conteinerButton}>
                  <button style={styles.button}>Finalizar</button>
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
    marginTop: 100,
  },
  conteinerEstilos: {
    width: 350,
    height: 350,
    backgroundColor: Cores.roxo40, // roxo inknity com opacidade de 40%
    marginTop: 40,
    borderRadius: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  estilosR:{
    width: 150,
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Cores.roxo, // roxo inknity
    gap: 10,
    margin: 10,
    position: 'relative',
  },
  estilosP:{
    width: 150,
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Cores.cinzaEscuro, // roxo inknity
    gap: 10,
    margin: 10,
    position: 'relative',
  },
  textEstilos:{
    fontFamily: Fontes.UbuntuRegular, // fonte Ubuntu Regular
    color: Cores.branco, // branco inknity
    fontSize: 18,        
    textAlign: 'center', 
    marginRight: 20, 
  },
  textSelect:{
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    fontFamily: Fontes.UbuntuRegular, // fonte Ubuntu Regular
    color: Cores.branco, // branco inknity
    fontSize: 16,
    position: 'absolute',
    right: 10,
    top: 10, 
  },
  buttonI: {
   marginTop: 1,
   marginLeft: 10,
   color: Cores.branco, // branco inknity
   fontSize: 14,
   fontFamily: Fontes.UbuntuBold, // fonte Ubuntu Bold
   textAlign: 'center',
   borderRadius: 14,
   borderColor: Cores.roxo, // roxo inknity
   borderWidth: 2,
   width: 90,
   height: 60,
   backgroundColor: Cores.roxo60, // roxo inknity com opacidade de 60%
},
 conteinerInputs: {
    marginTop: 70,
    flexDirection: 'row',
 },
  inputs: {
    color: Cores.branco, // branco inknity
    width: 225,
    height: 50,
    backgroundColor: 'transparent',
    borderColor: Cores.branco, // branco inknity
    borderRadius: 8,
    margin: 4,
    fontSize: 16, 
    fontFamily: Fontes.UbuntuRegular, // fonte Ubuntu Regular
    paddingLeft: 10,
 },
  button: {
  color: Cores.branco, // branco inknity
  fontSize: 22,
  fontFamily: Fontes.UbuntuBold, // fonte Ubuntu Bold
  textAlign: 'center',
  borderRadius: 14,
  borderColor: Cores.roxo, // roxo inknity
  borderWidth: 2,
  width: 310,
  height: 60,
  backgroundColor: Cores.roxoEscuro, // roxo inknity com opacidade de 15%
},
conteinerButton: {
  marginTop: 50,
},
});
