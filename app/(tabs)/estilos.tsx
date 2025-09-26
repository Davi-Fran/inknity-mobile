import { Cores } from '@/constants/Colors';
import { Fontes } from '@/constants/Fontes';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Tela de seleção de estilos
export default function EstilosScreen() {
  return (
        <View style={styles.conteiner}>
            <Text style={styles.titulo}>Selecione seus estilos!</Text>
              <View style={styles.conteinerEstilos}>  
                <View style={styles.estilosR}>
                  <Text style={styles.textEstilos}>Cyberpunk<Text style={styles.textSelect}>X</Text></Text>
                </View>
                <View style={styles.estilosR}>
                  <Text style={styles.textEstilos}>Realista<Text style={styles.textSelect}>X</Text></Text>
                </View>
                <View style={styles.estilosR}>
                  <Text style={styles.textEstilos}>Medieval<Text style={styles.textSelect}>X</Text></Text>
                </View>
                <View style={styles.estilosP}>
                  <Text style={styles.textEstilos}>Semirealismo<Text style={styles.textSelect}>+</Text></Text>
                </View>
                <View style={styles.estilosP}>
                  <Text style={styles.textEstilos}>Aquarela<Text style={styles.textSelect}>+</Text></Text>
                </View>
                <View style={styles.estilosP}>
                  <Text style={styles.textEstilos}>Tradicional<Text style={styles.textSelect}>+</Text></Text>
                </View>
                <View style={styles.estilosP}>
                  <Text style={styles.textEstilos}>Steampunk<Text style={styles.textSelect}>+</Text></Text>
                </View>
                <View style={styles.estilosP}>
                  <Text style={styles.textEstilos}>Pixelart<Text style={styles.textSelect}>+</Text></Text>
                </View>
             </View>
              <View style={styles.conteinerInputs}>
                  <TextInput  multiline
                numberOfLines={4} style={{ 
                  marginLeft: 4,
                  height: 60,
                  borderColor: Cores.branco, // branco inknity',
                  borderWidth: 1,
                  borderRadius: 8,
                  paddingTop: 20,
                  paddingLeft: 10,
                  width: 250,
                  textAlign:'left',
                  backgroundColor: 'transparent',
                  fontSize: 16, 
                  color: Cores.branco, // branco inknity
                  fontFamily: Fontes.UbuntuRegular, // fonte Ubuntu Regular
                 }} placeholder="Outros"/>
                  <TouchableOpacity style={styles.btn}>
                    <View  style={styles.buttonI}> 
                        <Text style={styles.textButton}>+</Text>
                    </View>
                  </TouchableOpacity>
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
    justifyContent: 'center',
  },
  estilosR:{
    width: 150,
    height: 40,
    borderRadius: 4,
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: Cores.roxo, // roxo inknity
    gap: 10,
    margin: 10,
    position: 'relative',
  },
  estilosP:{
    width: 150,
    height: 40,
    borderRadius: 4,
    justifyContent: 'space-between',
    padding: 10,
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
    fontFamily: Fontes.UbuntuRegular, // fonte Ubuntu Regular
    color: Cores.branco, // branco inknity
    fontSize: 16,
    position: 'absolute',
    right: -20,
    top: 0, 
  },
  textButton: {
    fontSize: 24,
    color: Cores.branco,
  },
  btn: {
    height: 65
  },
  buttonI: {
   marginTop: 1,
   marginLeft: 10,
   borderRadius: 14,
   borderColor: Cores.roxo, // roxo inknity
   borderWidth: 2,
   width: 90,
   height: 60,
   backgroundColor: Cores.roxo60,
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center', // roxo inknity com opacidade de 60%
},
 conteinerInputs: {
    marginTop: 70,
    flexDirection: 'row',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
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
  marginTop: 80,
  marginBottom: 80.
},
});
