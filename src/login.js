import React from 'react';
import axios from 'axios';

class Login extends React.Component
{
    state =
    {
        username: "",
        password: "",
        data: {}
    }

    fieldChange = (event) =>
    {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = async (event) =>
    {
        event.preventDefault();

        try
        {
            let response = await axios.post('http://localhost:5000/login',
            {
                username: this.state.username,
                password: this.state.password
            } );
    
            this.setState( { data: response.data } );

            //axios.defaults.headers.common['Authorization'] = response.data.token;
            localStorage.setItem( 'authToken', response.data.token );
        }
        catch( err )
        {
            this.setState( { data: err.response.data } );
        }
    }

    render()
    {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username: <input type="text" name="username" onChange={this.fieldChange} />
                    </label>
                    <label>
                        Password: <input type="text" name="password" onChange={this.fieldChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div>
                    <div>
                        Login response
                    </div>
                    <div>
                        {JSON.stringify( this.state.data )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
