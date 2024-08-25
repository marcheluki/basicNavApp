import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Friend, Hobby } from '../components/types';

type RootStackParamList = {
    FriendDetail: { friend: Friend };
    HobbyDetail: { hobby: Hobby };
  };
  type FriendDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'FriendDetail'>;
  type HobbyDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HobbyDetail'>;
  
  const ListingsFriends = () => {
    const [friends, setFriends] = useState<Friend[]>([]);
    const [loadingFriends, setLoadingFriends] = useState(true);
    const navigation = useNavigation<FriendDetailScreenNavigationProp>();
  useEffect(() => {
    const fetchFriendsData = async () => {
      try {
        const response = await fetch('https://marcheluki.github.io/JsonAPIs4Apps/json1Friends.json');
        const data: Friend[] = await response.json();
        setFriends(data);
      } catch (error) {
        console.error("Error fetching friends data:", error);
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
      <FlatList horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
                paddingVertical: 5,
                marginBottom: 10,
                gap: 10,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        data={friends}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('FriendDetail', { friend: item })}>
            <View style={styles.item}>
              <Text style={styles.name}>Name: {item.name}</Text>
              <Text style={styles.age}>Age: {item.age}</Text>
              <Image source={{ uri: item.picture }} style={{ width: 150, height: 150 }} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

// Component for displaying the list of hobbies
const ListingsHobbies = () => {
  const [hobbies, setHobbies] = useState<Hobby[]>([]);
  const [loadingHobbies, setLoadingHobbies] = useState(true);
  const navigation = useNavigation<HobbyDetailScreenNavigationProp>();

  useEffect(() => {
    const fetchHobbiesData = async () => {
      try {
        const response = await fetch('https://marcheluki.github.io/JsonAPIs4Apps/json2namePic.json');
        const data: Hobby[] = await response.json();
        setHobbies(data);
      } catch (error) {
        console.error("Error fetching hobbies data:", error);
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
      <FlatList horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
                paddingVertical: 5,
                marginBottom: 10,
                gap: 10,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        data={hobbies}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('HobbyDetail', { hobby: item })}>
            <View style={styles.item}>
              <Text style={styles.name}>{item.name}</Text>
              <Image source={{ uri: item.picture }} style={{ width: 150, height: 150 }} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    name:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'gray',
    },
    age: {
        fontSize: 14,
        color: 'gray',
        fontWeight: 'semibold',
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
});

export { ListingsFriends, ListingsHobbies };