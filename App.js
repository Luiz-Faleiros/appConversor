import React, { Component } from 'react';
import { View, StyleSheet, Text,} from 'react-native';

//https://free.currencyconverterapi.com/api/v5/convert?q=USD_BRL&compact=ultra&apiKey=7c5ef455b88d735bc6ad

import Conversor from './src/conversor/index';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
    
    };
  }

  render() {
    return(
      <View style={styles.container}>
        <Conversor moedaA='USD' moedaB='BRL'/>
        <Conversor moedaA='EUR' moedaB='BRL'/>
      </View>
    )
  
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  }
});

export default App;

