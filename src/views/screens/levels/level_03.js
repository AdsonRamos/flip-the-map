import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles/styles'


export default class LevelThree extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textTitle}>Nível 03</Text>
            </View>
        );
    }
}
