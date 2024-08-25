import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { ListingsFriends } from './(friends)/listingsFriends';
import { Stack, useRouter } from 'expo-router';
import Colors from '@/constants/colors';

const Index = () => {
    return (
        <>
        <Stack.Screen options={{
            headerTransparent: true,
            headerTitle: '',
        }}></Stack.Screen>
        <View style={styles.container}>
            <Text style={styles.headingTxt}>This is me!</Text>
            <Image source={{uri: 'https://avatars.githubusercontent.com/u/117956210?v=4'}} style={styles.pic} />
            <Text style={styles.normalTxt1}>I am a Marcela de la Rosa, a software engineer in the making currently enrolled @Tec de Monterrey. I am also a daughter, a girlfriend and a friend.</Text>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingTxt: {
    fontSize: 30,
    fontWeight: '800',
    color: Colors.black,
    textAlign: 'center',
  },
  normalTxt1: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.black,
    marginTop: 10,
    marginBottom:10,
    textAlign: 'center',
},
pic: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    marginTop: 20,
    alignSelf: 'center',
  },
});

export default Index;
