import React from 'react';

const FormAction = () => {

    const handleSubmmit = (formData)  => {
        console.log(formData.get('name'));
        console.log(formData.get('email'));
    }

    return (
        <div>
            <form action={handleSubmmit}>
                <input type="text" name='name' placeholder='Your Name' /> <br />
                <input type="email" name='email' placeholder='Your Email' /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormAction;