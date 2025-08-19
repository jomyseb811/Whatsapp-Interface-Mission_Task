import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const calls = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>calls</Text>
    </View>
  )
}

export default calls

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center',
  },
  text : {
    color:'white'
  }
})