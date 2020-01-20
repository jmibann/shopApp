import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import ProductItem from '../../components/shop/ProductItem';


const ProductsOverviewScreen = props => {

  const products = useSelector(state => state.products.availableProducts)

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
        onAddToCart={() => { }}

      />
    } />
  );

};

ProductsOverviewScreen.navigationOptions = {
  headerTitle: 'All products'
}

const styles = StyleSheet.create({

});

export default ProductsOverviewScreen;