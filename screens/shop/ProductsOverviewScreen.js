import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, FlatList, Platform } from 'react-native';

import ProductItem from '../../components/shop/ProductItem';
import { HeaderButtons, Item, HeaderButton } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/UI/CustomHeaderButton';

import * as cartActions from '../../store/actions/cart'

const ProductsOverviewScreen = props => {

  const products = useSelector(state => state.products.availableProducts)
  const dispatch = useDispatch();

  return (
    <FlatList data={products} keyExtractor={item => item.id} renderItem={itemData =>
      <ProductItem
        title={itemData.item.title}
        price={itemData.item.price}
        image={itemData.item.imageUrl}
        onViewDetail={() => {
          props.navigation.navigate('ProductDetail', {
            productId: itemData.item.id,
            productTitle: itemData.item.title
          })
        }}
        onAddToCart={() => { dispatch(cartActions.addToCart(itemData.item)) }}

      />
    } />
  );

};

ProductsOverviewScreen.navigationOptions = navData => ({

  headerTitle: 'All products',
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title='Cart'
        iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
        onPress={() => { navData.navigation.navigate('Cart') }}
      />
    </HeaderButtons>
  )
})

const styles = StyleSheet.create({

});

export default ProductsOverviewScreen;