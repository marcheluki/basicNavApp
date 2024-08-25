import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListingsFriends } from '@/components/listings';

const FriendsScreen = () => {
  return (
    <View style={styles.container}>
      <ListingsFriends />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default FriendsScreen;