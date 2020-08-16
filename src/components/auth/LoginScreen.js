import React from 'react'
import { useDispatch } from 'react-redux';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const loginGoogle = () => {
        console.log('Login google');
        dispatch(loginGoogle());
    }
    const loginFacebook = () => {
        console.log('Login facebook');
        dispatch(loginFacebook());
    }
    return (
        <div className="container">
            <div
                className="bg-white pt-2 mt-2 shadow text-center"
            >
                <button
                    className="btn btn-danger"
                    onClick={loginGoogle}>
                    Login Google
                </button>
                <br />
                <br />
                <button
                    className="btn btn-primary"
                    onClick={loginFacebook}
                >
                    Login Facebook
                </button>
            </div>

        </div>
    )
}
