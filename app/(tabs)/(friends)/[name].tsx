import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { Friend } from '@/components/types';
import { Feather } from '@expo/vector-icons';
import Colors from '@/constants/colors';

const FriendDetails = () => {
  const { name } = useLocalSearchParams();
  const [friend, setFriend] = useState<Friend | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchFriendData = async () => {
      try {
        const response = await fetch('https://marcheluki.github.io/JsonAPIs4Apps/json1Friends.json');
        const data: Friend[] = await response.json();
        const selectedFriend = data.find(f => f.name === name);
        setFriend(selectedFriend || null);
      } catch (error) {
        console.error('Error fetching friend data:', error);
      }
    };

    fetchFriendData();
  }, [name]);

  if (!friend) {
    return <Text>Loading...</Text>;
  }

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
      <Image source={{ uri: friend.picture }} style={styles.image} />
      <Text style={styles.name}>{friend.name}</Text>
      <Text style={styles.age}>Age: {friend.age}</Text>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  age: {
    fontSize: 18,
    color: 'gray',
  },
});

export default FriendDetails;