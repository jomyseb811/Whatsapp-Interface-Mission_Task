import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams, useRouter } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import ReplyBar from '@/components/ReplyBar';

const Status = () => {
const { title , photo,} = useLocalSearchParams<{ title: string , photo : string }>()
const imagesuri = photo? decodeURIComponent(photo) : undefined
const router = useRouter();


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name='arrowleft' size={28} color='white' style={{marginLeft:20 ,}} onPress={() => router.back()}/>
      <Text style={styles.text}>{title}</Text>
      </View>

      <View style={styles.imageContainer}>
      {imagesuri? (
<>
<Image source={{ uri : imagesuri}} style={styles.image} resizeMode='contain'/>

</>
      ):(
        <Text style={styles.text}>No Image to display</Text>
      )
    }
      
            </View>
            
      {imagesuri && (
        <View style={styles.replybarContainer}>
          <ReplyBar/>
        </View>
      )}

    </View>
  )
}

export default Status

const styles = StyleSheet.create({

    container : {
        flex:1,
        backgroundColor:'black',
    },

    imageContainer : {
      flex:1,
         justifyContent:'center',
         alignItems:"center",
    },

    text : {
        color:'white',
        fontSize:20,
        marginLeft:15,
    },

    image : {
        width:'100%',
        height:'100%',
    },

    header : {
      marginTop:50,
      alignItems:'center',
      flexDirection : 'row',
      paddingHorizontal:20,
    },

    replybarContainer: {
      position:'absolute',
      left:10,
      right:0,
      bottom:15,
    }

})