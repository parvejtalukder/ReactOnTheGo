import React, { useRef, useState } from 'react';

const Uncontrolled = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('mail@domain.com');
    const [password, setPassword] = useState('******');
    const [emailErr, setEmailErr] = useState('');
    const [passErr, setPassErr] = useState('');
    
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');

    const handleNameOnChange = () => {
        setName(nameRef.current.value);
    }

    const handleEmailOnChange = () => {
        // let count = 0;
        const value = emailRef.current.value;
        setEmail(value);
        // console.log(value);
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
            setEmailErr("Wrong Email!");
        } else {
            setEmailErr('');
        }
    }

    const handlePassOnChange = () => {
        // const value = ;
        setPassword(passRef.current.value);
        console.log(password);
        if (password.length < 6) {
            setPassErr("Wrong Password!");
        } else {
            setPassErr('');
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setName(nameRef.current.value);
        setEmail(emailRef.current.value);
        setPassword(passRef.current.value);
        console.log(name, email, password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameOnChange} ref={nameRef} type="text" name="name" id="name" placeholder='Your Name'/> <br />
                <input onChange={handleEmailOnChange} ref={emailRef} type="email" name="email" id="email" placeholder='user@ex.com' /> <br />
                <input onChange={handlePassOnChange} ref={passRef} type="password" name="pass" id="pass" placeholder='******' /> <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color: 'red'}}>
                <small>{emailErr}</small>
            </p> 
            <p style={{color: 'red'}}>
            <small>{passErr}</small>
            </p> <br />
        </div>
    );
};

export default Uncontrolled;