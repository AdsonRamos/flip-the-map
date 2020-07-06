import React from 'react';
import { View, TouchableOpacity, Text, Button } from 'react-native';
import { styles } from '../styles/styles'


export default class PreGame extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    pressHandler = (level) => {
        if (level < 1 || level > 9) return
        this.props.navigation.navigate('Level0' + level)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textTitle}>Selecione seu nível</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.tileGreen} onPress={() => this.pressHandler(1)}>
                        <Text style={styles.textBoard}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tileGreen} onPress={() => this.pressHandler(2)}>
                        <Text style={styles.textBoard}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tileGreen} onPress={() => this.pressHandler(3)}>
                        <Text style={styles.textBoard}>3</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.tileGreen} onPress={() => this.pressHandler(4)}>
                        <Text style={styles.textBoard}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tileGreen} onPress={() => this.pressHandler(5)}>
                        <Text style={styles.textBoard}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tileGreen} onPress={() => this.pressHandler(6)}>
                        <Text style={styles.textBoard}>6</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.tileGreen} onPress={() => this.pressHandler(7)}>
                        <Text style={styles.textBoard}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tileGreen} onPress={() => this.pressHandler(8)}>
                        <Text style={styles.textBoard}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tileGreen} onPress={() => this.pressHandler(9)}>
                        <Text style={styles.textBoard}>9</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }

}
