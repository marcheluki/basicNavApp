import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Index = () => {
    return (
        <View style={styles.container}>
            <Text>Friends</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Index;
