import React from 'react';

import { View, StyleSheet, Text, Image, ScrollView, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderTitle } from 'react-navigation-stack';

import Colors from '../../constants/Colors';
import * as cartActions from '../../store/actions/cart';

const ProductDetailScreen = props => {

  const productId = props.navigation.getParam('productId');
  const dispatch = useDispatch();



  const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId))

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.buttonContainer}>
        <Button color={Colors.primary} title='Add to cart' onPress={() => {
          dispatch(cartActions.addToCart(selectedProduct))
        }} />
      </View>
      <Text style={styles.title}>{selectedProduct.title}</Text>
      <Text style={styles.price}>${selectedProduct.price}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView >
  )
};

ProductDetailScreen.navigationOptions = navData => {
  const title = navData.navigation.getParam('productTitle');

  return ({
    headerTitle: title
  })
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 15

  },
  image: {
    width: '100%',
    height: 300
  },
  title: {
    fontSize: 23,
    textAlign: 'center'
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center'
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20
  }
});

export default ProductDetailScreen;  