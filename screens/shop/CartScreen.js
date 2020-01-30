import React from 'react';

import { StyleSheet, View, Text, FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';

import CartItem from './CartItem';
import { removeFromCart } from '../../store/actions/cart';

const CartScreen = props => {

  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
  const cartItems = useSelector(state => {
    let transformedCartItems = [];

    for (const key in state.cart.items) {
      transformedCartItems = [...transformedCartItems, {
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum
      }]
    }

    transformedCartItems.sort((a, b) => a.productId >= b.productId ? 1 : -1)

    return transformedCartItems
  }
  )

  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText} >Total: <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text></Text>
        <Button title="Order Now" />
      </View>

      <View>
        <Text>CART ITEMS:</Text>
      </View>

      <FlatList data={cartItems} keyExtractor={item => item.productId} renderItem={(itemData) => {
        return (
          <CartItem
            title={itemData.item.productTitle}
            price={itemData.item.productPrice}
            quantity={itemData.item.quantity}
            sum={itemData.item.sum}
            onRemove={() => { dispatch(removeFromCart(itemData.item.productId)) }}
          />

        )
      }} />

    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    marginVertical: 20,
    alignItems: 'center',
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    padding: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',

  },
  summaryText: {
    fontFamily: 'open-sans-bold',
    fontSize: 18
  },
  amount: {
    color: Colors.secondary
  }
});

export default CartScreen;