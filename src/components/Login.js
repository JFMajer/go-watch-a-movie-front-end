import React, { Fragment } from 'react';
import { useState } from 'react';
import Input from './form/Input';
import { useOutletContext } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { setJwtToken } = useOutletContext();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email === 'admin@example.com') {
            setJwtToken('admin');
        }

    }

    return (
        <Fragment>
            <div className="col-md-6 offset-md-3">
                <h2>Login</h2>
                <hr></hr>

                <form onSubmit={ handleSubmit }>
                    <Input
                        title="Email Address"
                        type="email"
                        className="form-control"
                        name="email"
                        autocomplete="email-new"
                        onChange={ (event) => setEmail(event.target.value) }
                    />
                    <Input
                        title="Password"
                        type="password"
                        className="form-control"
                        name="password"
                        autocomplete="password-new"
                        onChange={ (event) => setPassword(event.target.value) }
                    />

                    <input type='submit' value='Login' className='btn btn-primary mt-3' />
                </form>
            </div>
        </Fragment>
    )
}

export default Login;
