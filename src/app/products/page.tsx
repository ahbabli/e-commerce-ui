import ProductList from '@/components/ProductList'
import React from 'react'

const ProductsPage = ({
  searchParams,
}: {
  searchParams: {category:string };
}) => {
  const category = ( searchParams).category;
  return (
    <div className=''>
        <ProductList category={category} params={'products'} />

    </div>
  )
}

export default ProductsPage