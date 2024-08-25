import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListingsHobbies } from '@/components/listings';

const HobbiesScreen = () => {
  return (
    <View style={styles.container}>
      <ListingsHobbies />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default HobbiesScreen;