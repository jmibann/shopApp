import React from 'react';

import { View, StyleSheet, Text, Image, ScrollView, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderTitle } from 'react-navigation-stack';

const ProductDetailScreen = props => {

  const productId = props.navigation.getParam('productId')

  const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId))

  return (
    <View style={styles.detailContainer}>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <Text style={styles.title}>{selectedProduct.title}</Text>
      <Text style={styles.price}>${selectedProduct.price}</Text>
      <Text style={styles.description}>${selectedProduct.description}</Text>
    </View >
  )
};

ProductDetailScreen.navigationOptions = navData => {
  const title = navData.navigation.getParam('productTitle');

  return ({
    headerTitle: title
  })
}

const styles = StyleSheet.create({
  detailContainer: {
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 300
  },
  title: {
    fontSize: 23,

  },
  price: {
    fontSize: 20
  },
  description: {
    fontSize: 18,
    textAlign: 'center'
  }
});

export default ProductDetailScreen;  