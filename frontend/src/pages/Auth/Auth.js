import React, { Component } from 'react';
import AuthForm from '../../components/Forms/AuthForm';

class Auth extends Component{
    state={
        currentForm:'login'
    }

    render(){
        return(
            <div className="page">
                <AuthForm />
            </div>
        )
    }
}

export default Auth;