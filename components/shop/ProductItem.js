import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'

import Colors from '../../constants/Colors';

const ProductItem = props => {

  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) TouchableCmp = TouchableNativeFeedback;

  return (
    <View style={styles.product}>
      <TouchableCmp onPress={props.onViewDetail} useForeground>
        <View style={styles.detailContainer}>
          <Image style={styles.image} source={{ uri: props.image }} />
          <View style={styles.details}>
            <Text style={styles.title} >{props.title}</Text>
            <Text style={styles.price} >${props.price.toFixed(2)} </Text>
          </View>
          <View style={styles.actions}>
            <Button color={Colors.primary} title="View Details" onPress={props.onViewDetail} />
            <Button color={Colors.primary} title="Add to Cart" onPress={props.onAddToCart} />
          </View>
        </View>
      </TouchableCmp>
    </View>
  )
}

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '60%'
  },
  title: {
    // textAlign: 'center',
    fontSize: 18,
    marginVertical: 4
  },
  price: {
    fontSize: 14,
    color: '#888'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    marginHorizontal: 25,
    paddingBottom: 10
  },
  detailContainer: {

  },
  details: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ProductItem;