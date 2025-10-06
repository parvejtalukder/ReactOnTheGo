import React from 'react';

const ProductTable = ({products}) => {
    return (
        <div>
            {/* products */}
            <h3>Product: {products.length}</h3>
            <table>
                <thead>
                    <tr>
                   <th>No.</th>
                   <th>Name</th> 
                   <th>Price</th>
                   <th>Qnt.</th>
                   <th>Action</th>
                   </tr> 
                </thead>
                <tbody>
                      {
                      products.map((product, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.action}</td>
                        </tr>
        ))}
    </tbody>
            </table>
        </div>
    );
};

export default ProductTable;