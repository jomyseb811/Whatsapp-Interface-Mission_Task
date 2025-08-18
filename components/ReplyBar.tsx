import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const ReplyBar = () => {
    const [reply , setReply] = useState('')
  return (
    <View>
     <TextInput
     style={styles.input}
     value={reply}
     placeholder='Reply'
     placeholderTextColor={'white'}
     onChangeText={setReply}
     />
    </View>
  )
}

export default ReplyBar

const styles = StyleSheet.create({

    input : {
     width:310,
     height:43,
     borderRadius:53,
     backgroundColor:'#262626ff',
     fontSize:16,
     fontWeight:'500',
     paddingLeft:30
    }
})