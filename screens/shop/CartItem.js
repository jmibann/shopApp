import React from 'react';

import { StyleSheet, View, Text, TouchableOpacity, Platform } from 'react-native';

import { Ionicons } from '@expo/vector-icons'


const CartItem = props => {

  return (
    <View style={styles.CartItem}>
      <Text style={styles.itemData}>
        <Text style={styles.quantity}>{props.quantity} </Text>
        <Text style={styles.mainText}>{props.title} </Text>
      </Text>

      <View style={styles.itemData} >
        <Text style={styles.mainText} >${props.sum.toFixed(2)}</Text>
      </View>
      <TouchableOpacity onPress={props.onRemove} style={styles.deleteButton} >
        <Ionicons
          name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash '}
          size={23}
          color='red'
        />
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  CartItem: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    width: '80%'
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  quantity: {
    fontFamily: 'open-sans',
    color: '#888'
  },
  mainText: {
    fontFamily: 'open-sans-bold',
    fontSize: 16
  },
  amount: {},
  deleteButton: {
    marginLeft: 20
  }
})

export default CartItem;