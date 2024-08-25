import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { ListingsFriends } from './(friends)/listingsFriends';
import { Stack, useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import Colors from '@/constants/colors';

const FriendsScreen = () => {
  const router = useRouter();
  return (
    <>
    <Stack.Screen options={{
        headerTransparent: true,
        headerTitle: '',

        headerLeft: () => (
          <TouchableOpacity onPress={() => router.back()} style={{
            shadowColor: '#171717',
            shadowOffset: { width: 2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}>
            <View style={{backgroundColor:Colors.primaryColor, padding:6, borderRadius:10, marginLeft:10}}>
              <Feather name="arrow-left" size={24} color="black" />
            </View>
          </TouchableOpacity>
        ),
    }}></Stack.Screen>
    <View style={styles.container}>
      <Text style={styles.headingTxt}>This are three of my greatest friends!</Text>
      <Text style={styles.normalTxt1}>Scroll to se more and click on their cards to find out more about them</Text>
      <ListingsFriends />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headingTxt: {
    fontSize: 30,
    fontWeight: '800',
    color: Colors.black,
    marginTop: 250,
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
});

export default FriendsScreen;