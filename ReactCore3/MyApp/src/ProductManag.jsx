import React, { useState } from 'react';
import ProForm from './Comp/ProductManagment/ProForm';
import ProductTable from './Comp/ProductManagment/ProductTable';

const ProductManag = () => {
    const [products, setProducts] = useState([]);
    const handleAddProduct = NewProduct => {
        const newProducts = [...products, NewProduct];
        setProducts(newProducts);
    }
    return (
        <div>
            <ProForm handleAddProduct={handleAddProduct}></ProForm>
            <ProductTable products={products}></ProductTable>
        </div>
    );
};

export default ProductManag;