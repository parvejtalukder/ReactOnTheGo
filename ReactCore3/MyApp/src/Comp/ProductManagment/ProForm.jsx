import React, { useState } from 'react';

const ProForm = ({handleAddProduct}) => {

    const [nameErr, setNameErr] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();
        // console.log(e.target);
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const NewProduct = {
            name, price, quantity
        }
        // console.log(NewProduct);

        if (name.length === 0) {
            setNameErr("Enter a name!")
            return 0;
        } else if (price  < 0) {
            setNameErr("Give a positive price!");
            return 0;
        } else if (quantity.length === 0) {
            setNameErr("Provide a quantity!");
            return 0;
        } else {
            setNameErr('');
        }

        handleAddProduct(NewProduct);

    }

    return (
        <div>
            <h3>Add Product!</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="name" placeholder='Product Name' /> <br />
                <input type="text" name="price" id="price" placeholder='Product Price' /> <br />
                <input type="text" name="quantity" id="quantity" placeholder='Product Qnt.' /> <br />
                <input type="submit" value="Submit" />
                <p style={{color: 'red'}}> <small>{nameErr}</small> </p>
            </form>
        </div>
    );
};

export default ProForm;