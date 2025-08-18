import axios from 'axios';
import { useEffect, useState } from 'react';
import { View,StyleSheet, FlatList,Text ,Image, ActivityIndicator} from 'react-native'
import Searchbar from '../../components/Searchbar';
import { Pressable} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

type PhotoItem = {
  id: string;
  title: string;
  photo: string[];
};

export default function HomeScreen() {

    const BASE_URL = 'https://demo-api-1-splx.onrender.com/api/users'

  const [data,setData] = useState<PhotoItem[]>([])
  const [loading , setLoading] = useState<boolean>(true)

  const route = useRouter()
  
      useEffect(()  => {
     const response = axios.get(BASE_URL)
           .then((res) => {
              setData(res.data)
           })
           .catch((err) => {
            console.log('Coudlnt fetch Data',err);
            
          })
           .finally(() => setLoading(false))
        },[])

     
  
  const renderItem = ({ item }: any) => (

<Pressable onPress={() => route.push('/[id]')}>
    <View  style={styles.ItemContainer}>

     <Pressable
     onPress={() => route.push({
      pathname:'/(tabs)/updates',
      params : {
        title : item.title,
        photo : encodeURIComponent(item.photo[0])
      }
      
     }
     )} >
      <Image source={{ uri:item.photo[1]}} style={styles.avatar} />
      {/* <Text style={{color:'white'}}>{item.photo}</Text> */}
</Pressable>
      <View  style={styles.textContainer}>
        <Text style={styles.name}>{item.title}</Text>
      </View> 
    </View>
  </Pressable>
  );
  
    return (

      <View style={styles.container}>

      {loading ? (
       < ActivityIndicator size={'large'} color='#fff' style={{marginTop:300}}/>

      ):(

      <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      ListHeaderComponent={<Searchbar/>}
      ItemSeparatorComponent={() => <View style={styles.separator}/>}
keyExtractor={item => item.id?.toString() || Math.random().toString()}
      renderItem={renderItem}
  />
  
  )}
      </View>
    )
  
  }
  
  
  const styles = StyleSheet.create({
  
  container : {
      flex : 1,
      backgroundColor : '#010101ff',
      alignContent:'center',
  },

  text : {
fontSize:18, 
color:'white',
padding:20
  },

  separator : {
    height : 1,
    backgroundColor: 'grey',
    width:'100%',
  },

    ItemContainer: {
          flexDirection:'row',
          alignItems:'center',
          paddingVertical : 15,
          paddingHorizontal:15,
    },
    
  textContainer : {
    flex:1
  },

    avatar: {
    width: 50,
    height: 50,
    borderRadius: 25, 
    marginRight: 15,
  },

  name:{
    fontSize:18,
    color:'white',
    fontWeight:'bold'
  },

  message : {
    fontSize:14,
    color:'grey'
  },

    
  })
          



