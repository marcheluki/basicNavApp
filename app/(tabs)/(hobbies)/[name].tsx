import React, { useEffect, useState } from 'react';
import { Stack, useLocalSearchParams, useRouter} from 'expo-router';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Hobby } from '@/components/types';
import { Feather } from '@expo/vector-icons';
import Colors from '@/constants/colors';

const HobbyDetails = () => {
  const { name } = useLocalSearchParams();
  const [hobby, setHobby] = useState<Hobby | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchHobbyData = async () => {
      try {
        const response = await fetch('https://marcheluki.github.io/JsonAPIs4Apps/json2namePic.json');
        const data: Hobby[] = await response.json();
        const selectedHobby = data.find(h => h.name === name);
        setHobby(selectedHobby || null);
      } catch (error) {
        console.error('Error fetching hobby data:', error);
      }
    };

    fetchHobbyData();
  }, [name]);

  if (!hobby) {
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
      <Image source={{ uri: hobby.picture }} style={styles.image} />
      <Text style={styles.name}>{hobby.name}</Text>
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
});

export default HobbyDetails;
