
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableWithoutFeedback,
  TouchableOpacity, TextInput, StatusBar
} from 'react-native';
let finalval = 0;
let history = 0;
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '', result: '', finalval: ''
    };
  }
  isvalidate() {
    const txt = finalval;


    switch (txt.slice(-1)) {
      case '+':
      case '-':
      case '/':
      case '*':
      case '%':
        return false;
    }
    return true;
  }

  buttonpressed(text) {
    switch (text) {
      case 'clear':
        this.setState({
          value: ''
        })
        break;

      case '=':
        this.setState({ finalval: this.state.result })

        finalval = this.state.result;
        history = this.state.result;
        this.setState({
          value: this.state.result
        });
        this.setState({
          result: ''
        });
        break;

      case '.':
        let oprations = ['#', '.'];
        console.log(oprations.indexOf('.'))
        if (oprations.indexOf('.') > 0) {
          return
        }
        this.setState({
          value: this.state.value + '' + text
        });
        break;

      default:

        this.setState({
          value: this.state.value + '' + text
        });
        finalval = this.state.value + '' + text;
        console.log(finalval)
        this.autocalculate(finalval);
        break;
    }
  }

  autocalculate(final) {

    if (this.isvalidate() == true) {
      const result = finalval;
      let final = eval(result);
      // console.log(final)
      this.setState({ result: final })
      this.setState({ finalval: final })

    }
  }

  calcuopration(opration) {
    switch (opration) {
      case 'history':
        this.setState({ value: history })
        break;
      case 'del':
        let txt = String(this.state.value).split('');
        txt.pop();
        this.setState({
          value: txt.join('')
        })
        break;
      case '+':
      case '-':
      case '*':
      case '/':
      case '%':
        console.log(finalval)
        let oprations = ['del', '+', '-', '*', '/', '%'];
        const lastchar = String(finalval).split('').pop();
        console.log(oprations.indexOf(lastchar))
        if (oprations.indexOf(lastchar) > 0) return
        if (this.state.value == '') return
        this.setState({
          value: this.state.value + '' + opration
        })
        this.setState({
          value: this.state.value + '' + opration
        })
        finalval = this.state.value + opration;
        this.autocalculate(finalval);
    }
  }

  render() {

    return (

      <View style={styles.contaner}>
        <StatusBar
          backgroundColor="black" barStyle="light-content"
        >

        </StatusBar>
        <View style={styles.header}>


        </View>

        <View style={styles.calculation}>
          <Text style={styles.input}>{this.state.value}</Text>

        </View>
        <View style={styles.result}>
          <Text style={styles.resultprop}>{this.state.result}</Text>
        </View>
        <View style={styles.bottompart}>

          <View style={styles.bottom}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => this.buttonpressed('clear')} style={{ flex: 1, backgroundColor: "#C7F3F9", justifyContent: "center", alignItems: "center" }}>
              <View >
                <Text style={styles.clickbtn}>Clear</Text>
              </View>
            </TouchableOpacity >
            <TouchableOpacity activeOpacity={0.5} onPress={() => this.calcuopration('del')} style={{ flex: 1, backgroundColor: "#ADEBF8", justifyContent: "center", alignItems: "center" }}>
              <View>
                <Text style={styles.clickbtn}>Del</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => this.calcuopration('%')} style={{ flex: 1, backgroundColor: "#95DFF8", justifyContent: "center", alignItems: "center" }}>
              <View>
                <Text style={styles.clickbtn}>%</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} onPress={() => this.calcuopration('/')} style={{ flex: 1, backgroundColor: "#7BCDF8", justifyContent: "center", alignItems: "center" }}>
              <View>
                <Text style={styles.clickbtn}>/</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.bottom}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => this.buttonpressed(7)} style={{ flex: 1, backgroundColor: "#ffffff", justifyContent: "center", alignItems: "center" }}>
              <View>
                <Text style={styles.clickbtn}>7</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => this.buttonpressed(8)} style={{ flex: 1, backgroundColor: "#ffffff", justifyContent: "center", alignItems: "center" }}>
              <View>
                <Text style={styles.clickbtn}>8</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => this.buttonpressed(9)} style={{ flex: 1, backgroundColor: "#ffffff", justifyContent: "center", alignItems: "center" }}>
              <View>
                <Text style={styles.clickbtn}>9</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} onPress={() => this.calcuopration('*')} style={{ flex: 1, backgroundColor: "#62BAF8", justifyContent: "center", alignItems: "center" }}>
              <View>
                <Text style={styles.clickbtn}>*</Text>
              </View>
            </TouchableOpacity>
          </View>


          <View style={styles.bottom}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => this.buttonpressed(4)} style={{ flex: 1, backgroundColor: "#ffffff", justifyContent: "center", alignItems: "center" }}>
              <View>
                <Text style={styles.clickbtn}>4</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => this.buttonpressed(5)} style={{ flex: 1, backgroundColor: "#ffffff", justifyContent: "center", alignItems: "center" }}>
              <View>
                <Text style={styles.clickbtn}>5</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => this.buttonpressed(6)} style={{ flex: 1, backgroundColor: "#ffffff", justifyContent: "center", alignItems: "center" }}>
              <View>
                <Text style={styles.clickbtn}>6</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} onPress={() => this.calcuopration('-')} style={{ flex: 1, backgroundColor: "#4AA1F8", justifyContent: "center", alignItems: "center" }}>
              <View>
                <Text style={styles.clickbtn}>-</Text>
              </View>
            </TouchableOpacity>
          </View>


          <View style={styles.bottom}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => this.buttonpressed(1)} style={{ flex: 1, backgroundColor: "#ffffff", justifyContent: "center", alignItems: "center" }}>
              <View>
                <Text style={styles.clickbtn}>1</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => this.buttonpressed(2)} style={{ flex: 1, backgroundColor: "#ffffff", justifyContent: "center", alignItems: "center" }}>
              <View>
                <Text style={styles.clickbtn}>2</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => this.buttonpressed(3)} style={{ flex: 1, backgroundColor: "#ffffff", justifyContent: "center", alignItems: "center" }}>
              <View>
                <Text style={styles.clickbtn}>3</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} onPress={() => this.calcuopration('+')} style={{ flex: 1, backgroundColor: "#3084F8", justifyContent: "center", alignItems: "center" }}>
              <View>
                <Text style={styles.clickbtn}>+</Text>
              </View>
            </TouchableOpacity>
          </View>


          <View style={styles.bottom}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => this.calcuopration('history')} style={{ flex: 1, backgroundColor: "#ffffff", justifyContent: "center", alignItems: "center" }}>
              <View>
                <Text style={styles.clickbtn}>Last</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => this.buttonpressed(0)} style={{ flex: 1, backgroundColor: "#ffffff", justifyContent: "center", alignItems: "center" }}>
              <View>
                <Text style={styles.clickbtn}>0</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => this.buttonpressed('.')} style={{ flex: 1, backgroundColor: "#ffffff", justifyContent: "center", alignItems: "center" }}>
              <View>
                <Text style={styles.clickbtn}>.</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} onPress={() => this.buttonpressed('=')} style={{ flex: 1, backgroundColor: "#1B62EA", justifyContent: "center", alignItems: "center" }}>
              <View>
                <Text style={styles.clickbtn}>=</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({

  contaner: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: "#F7F7FF"

  }
  ,
  calculation: {
    flex: 2,
    backgroundColor: "#F7F7FF"
  },
  result: {
    flex: 1,
    backgroundColor: "#F7F7FF"
  },

  bottompart: {
    flex: 10
  },
  bottom: {
    flex: 1,
    flexDirection: "row"
  },

  clickbtn: {
    fontSize: 30,


  },
  resultprop: {
    fontSize: 30,
    textAlign: "right",
    marginRight: 10
  },
  input: {
    fontSize: 55,
    textAlign: "right",
    marginLeft: 10,
  }

});

