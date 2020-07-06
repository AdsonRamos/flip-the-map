import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { styles } from '../styles/styles'


export default class Main extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Main Screen</Text>
            </View>
        );
    }
}
