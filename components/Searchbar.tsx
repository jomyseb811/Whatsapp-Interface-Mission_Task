import { StyleSheet,  TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

const Searchbar = () => {
    const [text,setText] = useState('')
  return (
    <View>
        <Ionicons name='search' size={20} color='#dfdfdfff' style={styles.icon}/>
        
<TextInput
style={styles.input}
value={text}
placeholder='Ask Meta AI or Search'
onChangeText={setText}
/>
    </View>
  )
}

export default Searchbar

const styles = StyleSheet.create({

    input : {
        width:370,
        height:50,
        borderRadius:53,
        backgroundColor: '#727272ff',
        marginHorizontal:10,
        marginTop:4,
        fontWeight:'bold',
        fontSize:16,
        paddingLeft:49,

    },
    icon : {
        
        position:'absolute',
        left:30,
        bottom : 16,
        zIndex:16,
       },


})