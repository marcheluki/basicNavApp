import React from 'react';
import { Image, StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import {Stack} from 'expo-router';
import {useHeaderHeight} from "@react-navigation/elements";
import AntDesign from '@expo/vector-icons/AntDesign';
import Colors from "@/constants/colors";
import GoToButtons from '@/components/GoToButtons';
import {useState} from 'react';
import { ListingsFriends, ListingsHobbies } from '@/components/listings';

const Page = () => {
    const headerHeight = useHeaderHeight();
    
    const [data, setData] = useState('All');

    const onDataChanged = (data:string) => {
        console.log("Changed to: ", data);
        setData(data);
    };

    return (
    <>
        <Stack.Screen options={{
            headerTransparent: true,
            headerTitle: '',
            headerLeft: () => (
                <TouchableOpacity onPress={() => {}} style={{
                    shadowColor:"#171717", 
                    shadowOffset:{width:2,height:4},
                    shadowOpacity:0.2,shadowRadius:3,
                }}>
                    <Image source={{uri: 'https://avatars.githubusercontent.com/u/117956210?v=4'}} style={{width: 45, height: 45, borderRadius: 20, marginLeft:20}} />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity onPress={() => {}} style={{
                    marginRight:20, 
                    backgroundColor:Colors.white, 
                    padding:10, 
                    borderRadius:10, 
                    shadowColor:"#171717", 
                    shadowOffset:{width:2,height:4},
                    shadowOpacity:0.2,shadowRadius:3,
                    }}>
                    <AntDesign name="user" size={24} color={Colors.primaryColor}/>
                </TouchableOpacity>
            ),
        }} 
        />
        <View style={[styles.container, {paddingTop: headerHeight}]}>
            <Text style={styles.headingTxt}>Get to know me</Text>
            <Text style={styles.normalTxt1}>These are my friends and hobbies!</Text>
            <GoToButtons onDataChanged={onDataChanged}/>
            {data === 'All' && (
          <>
            <ListingsFriends />
            <ListingsHobbies />
          </>
        )}
        {data === 'Friends' && <ListingsFriends />}
        {data === 'Hobbies' && <ListingsHobbies />}
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
        marginTop: 20,
        color: Colors.primaryColor,
        marginBottom: 5,
    },
    normalTxt1: {
        fontSize: 16,
        fontWeight: '400',
        color: Colors.black,
        marginBottom:30,
    },
})

export default Page;
