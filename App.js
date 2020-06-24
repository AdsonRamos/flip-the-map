import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      colors: [0, 1], // 0 - green, 1 - pink
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      gameCheated: [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
      ],
      logger: "",
      cheated: false
    }
  }

  componentDidMount() {
    this.initializeGame()
  }

  initializeGame() {
    this.setState({
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      gameCheated: [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
      ],
      logger: "",
      cheated: false
    })
  }

  changeColor = (row, col) => {
    var colorState = this.state.gameState[row][col]
    var arr = this.state.gameState.slice()
    arr[row][col] = !colorState
    this.setState({ gameState: arr })
  }

  checkCheat = (row, col) => {
    var newLogger = this.state.logger.concat(row * 3 + col + 1 + "")
    this.setState({ logger: newLogger })
    if (newLogger.includes('987153398')) {
      this.setState({ gameState: this.state.gameCheated })
      this.state.cheated = true
      Alert.alert("You won!!")
      return
    }
  }

  flip = (row, col) => {

    this.checkCheat(row, col)
    if (this.state.cheated) return

    if (row == 0 && col == 0) {
      this.changeColor(0, 0)
      this.changeColor(0, 1)
      this.changeColor(1, 0)
      this.changeColor(1, 1)
    }

    if (row == 0 && col == 1) {
      this.changeColor(0, 0)
      this.changeColor(0, 1)
      this.changeColor(0, 2)
      this.changeColor(1, 0)
      this.changeColor(1, 1)
      this.changeColor(1, 2)
    }

    if (row == 0 && col == 2) {
      this.changeColor(0, 1)
      this.changeColor(0, 2)
      this.changeColor(1, 1)
      this.changeColor(1, 2)
    }

    if (row == 1 && col == 0) {
      this.changeColor(0, 0)
      this.changeColor(0, 1)
      this.changeColor(1, 0)
      this.changeColor(1, 1)
      this.changeColor(2, 0)
      this.changeColor(2, 1)
    }

    if (row == 1 && col == 1) {
      this.changeColor(0, 0)
      this.changeColor(0, 1)
      this.changeColor(0, 2)
      this.changeColor(1, 0)
      this.changeColor(1, 2)
      this.changeColor(2, 0)
      this.changeColor(2, 1)
      this.changeColor(2, 2)
    }

    if (row == 1 && col == 2) {
      this.changeColor(0, 1)
      this.changeColor(0, 2)
      this.changeColor(1, 1)
      this.changeColor(1, 2)
      this.changeColor(2, 1)
      this.changeColor(2, 2)
    }

    if (row == 2 && col == 0) {
      this.changeColor(1, 0)
      this.changeColor(1, 1)
      this.changeColor(2, 0)
      this.changeColor(2, 1)
    }

    if (row == 2 && col == 1) {
      this.changeColor(1, 0)
      this.changeColor(1, 1)
      this.changeColor(1, 2)
      this.changeColor(2, 2)
      this.changeColor(2, 0)
      this.changeColor(2, 1)
    }

    if (row == 2 && col == 2) {
      this.changeColor(1, 1)
      this.changeColor(1, 2)
      this.changeColor(2, 1)
      this.changeColor(2, 2)
    }
  }

  getColor(n) {
    if (n == 0) return styles.tileGreen
    else if (n == 1) return styles.tilePink
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ paddingBottom: 30, fontSize: 23, fontStyle: 'italic' }}>Flip the map, if you can.</Text>
        <Text style={{ paddingBottom: 10, fontSize: 14, fontStyle: 'italic' }}>Change to Pink.</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={this.getColor(this.state.gameState[0][0])} onPress={() => this.flip(0, 0)}></TouchableOpacity>
          <TouchableOpacity style={this.getColor(this.state.gameState[0][1])} onPress={() => this.flip(0, 1)}></TouchableOpacity>
          <TouchableOpacity style={this.getColor(this.state.gameState[0][2])} onPress={() => this.flip(0, 2)}></TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={this.getColor(this.state.gameState[1][0])} onPress={() => this.flip(1, 0)}></TouchableOpacity>
          <TouchableOpacity style={this.getColor(this.state.gameState[1][1])} onPress={() => this.flip(1, 1)}></TouchableOpacity>
          <TouchableOpacity style={this.getColor(this.state.gameState[1][2])} onPress={() => this.flip(1, 2)}></TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={this.getColor(this.state.gameState[2][0])} onPress={() => this.flip(2, 0)}></TouchableOpacity>
          <TouchableOpacity style={this.getColor(this.state.gameState[2][1])} onPress={() => this.flip(2, 1)}></TouchableOpacity>
          <TouchableOpacity style={this.getColor(this.state.gameState[2][2])} onPress={() => this.flip(2, 2)}></TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => this.initializeGame()}>
          <Text>New Game</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tileGreen: {
    margin: 2,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5C946E'
  },
  tilePink: {
    margin: 2,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF92C2'
  },
  button: {
    width: 100,
    height: 50,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#247BA0'
  }
});
