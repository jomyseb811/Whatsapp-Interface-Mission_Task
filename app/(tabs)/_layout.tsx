import { Tabs } from 'expo-router';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor:'grey',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
       backgroundColor:'black',
       borderTopWidth:0,
       
        },
        tabBarLabelStyle:{
          fontWeight:'700'
        },

        headerStyle:{
          backgroundColor:'black'
        },
        headerTintColor:'white',
         headerTitleStyle: {
      fontWeight: 'bold',
      fontSize:20,         
      color: 'white',            
    },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel:'Chats',
          title: 'Whatsapp',
          headerShown: true,
          tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="android-messages" size={28} color="white" />),
        }}
        
      />
      <Tabs.Screen
        name="updates"
        options={{
          title: 'Updates',
          tabBarIcon: ({ color }) => (<Image source={require('@/assets/images/updates.png')}
          style={{width:28 ,height:28 ,tintColor:'white'}}
          />),
        }}
      />
      <Tabs.Screen
      name="communities"
      options={{
        title : 'Communities',
        tabBarIcon : ({}) => (<MaterialIcons name="groups-2" size={28} color="white" />)
      }}
      />
      <Tabs.Screen
      name='calls'
      options={{
        title:'calls',
        tabBarIcon : ({}) => (<MaterialIcons name='call' size={28} color={'white'}/>)
      }}
      />
   
    </Tabs>
  );
}
