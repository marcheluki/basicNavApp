import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import Colors from "@/constants/colors";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.bgColor,
          borderTopWidth: 1,
          borderTopColor: Colors.funPurple,
          padding: 0,
        },
        tabBarActiveTintColor: Colors.crazyPurple,
        tabBarInactiveTintColor: Colors.funPurple,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="team" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="hobbies"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="smile-circle" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}