import React, { useState } from 'react';

const CFeild = () => {

    const [pass, setPass] = useState('1234');
    const [err, setErr] = useState('');

    const handleLogin = (e) => {
        e.preventDefault(); 
        console.log("Form submitted!");
    }

    const onChangePass = (e) => {
        console.log(e.target.value);
        setPass(e.target.value);
        if (pass.length < 6) {
            setErr("Password is too short!")
        } else {
            setErr('');
        }
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type="email" name="email" id="email" placeholder='user@domain.com' required/>
                <br />
                <input type="password" name="password" id="password" onChange={onChangePass} defaultValue={pass} placeholder='********' required/>
                <br />
                <input type="submit" value="Login" />
            </form>
            <p style={{color: 'red'}}>
                <small>{err}</small>
            </p>
        </div>
    );
};

export default CFeild;