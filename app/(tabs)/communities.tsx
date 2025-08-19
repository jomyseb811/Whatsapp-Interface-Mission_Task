import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const communities = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>communities</Text>
    </View>
  )
}

export default communities

const styles = StyleSheet.create({
  container : {
    backgroundColor:'black',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },

   text : {
    color:'white'
  }
})