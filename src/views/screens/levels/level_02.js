import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles/styles'


export default class LevelTwo extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textTitle}>Nível 02</Text>
            </View>
        );
    }
}
