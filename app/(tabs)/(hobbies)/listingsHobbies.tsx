import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Hobby } from '@/components/types';

const ListingsHobbies = () => {
  const [hobbies, setHobbies] = useState<Hobby[]>([]);
  const [loadingHobbies, setLoadingHobbies] = useState(true);

  useEffect(() => {
    const fetchHobbiesData = async () => {
      try {
        const response = await fetch('https://marcheluki.github.io/JsonAPIs4Apps/json2namePic.json');
        const data: Hobby[] = await response.json();
        setHobbies(data);
      } catch (error) {
        console.error('Error fetching hobbies data:', error);
      } finally {
        setLoadingHobbies(false);
      }
    };

    fetchHobbiesData();
  }, []);

  if (loadingHobbies) {
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
        data={hobbies}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Link
            href={{
              pathname: '/(hobbies)/[name]', // This is the correct path
              params: { name: item.name }, // Pass the dynamic
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
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 5,
    textAlign: 'center',
  },
  picture: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
});

export { ListingsHobbies };