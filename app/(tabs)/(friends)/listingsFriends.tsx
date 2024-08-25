import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Friend } from '@/components/types';

const ListingsFriends = () => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [loadingFriends, setLoadingFriends] = useState(true);

  useEffect(() => {
    const fetchFriendsData = async () => {
      try {
        const response = await fetch('https://marcheluki.github.io/JsonAPIs4Apps/json1Friends.json');
        const data: Friend[] = await response.json();
        setFriends(data);
      } catch (error) {
        console.error('Error fetching friends data:', error);
      } finally {
        setLoadingFriends(false);
      }
    };

    fetchFriendsData();
  }, []);

  if (loadingFriends) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 5,
          marginBottom: 10,
          gap: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        data={friends}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Link
          href={{
          pathname: '/(friends)/[name]', // Corrected path
          params: { name: item.name }, // Pass the dynamic parameter here
          }}
          asChild
        >
          <TouchableOpacity>
            <View style={styles.item}>
              <Text style={styles.name}>{item.name}</Text>
              <Image source={{ uri: item.picture }} style={styles.picture} />
            </View>
          </TouchableOpacity>
          </Link>
          )}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 5,
    textAlign: 'center',
  },
  age: {
    fontSize: 14,
    color: 'gray',
    fontWeight: 'semibold',
    marginBottom: 5,
  },
  item: {
    padding: 10,
    marginVertical: 2,
    borderRadius: 10,
    marginHorizontal: 2,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  picture: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
});

export { ListingsFriends };