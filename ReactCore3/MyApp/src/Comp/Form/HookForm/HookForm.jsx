import React from 'react';
import useInputField from '../UseInputCodes/useInputField';

const HookForm = () => {

    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');

    const onSubmitFunc = (e) => {
        e.preventDefault();
        console.log("Submitted!", name, email);
    }

    return (
        <div>
            <form onSubmit={onSubmitFunc}>
                <input defaultValue={name} type="text" onChange={nameOnChange} /> <br />
                <input type="email" name="email" id="email" onChange={emailOnChange}/> <br />
                <input type="submit" value="Push" />
            </form>
        </div>
    );
};

export default HookForm;