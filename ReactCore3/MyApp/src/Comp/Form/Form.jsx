import React from 'react';

const Form = () => {

    const handleSubmmit = (e)  => {
        // e.preventDefault()
        e.preventDefault();
        console.log("Form Submitted!", e.target.name.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmmit}>
                <input type="text" name='name' placeholder='Your Name' /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Form;