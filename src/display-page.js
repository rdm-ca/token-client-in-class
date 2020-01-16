import React from "react";
import axios from 'axios';

class DisplayPage extends React.Component
{
    state = { data: {} };
    
    callAPI = async () =>
    {
        try
        {
            let response = await axios.get( 'http://localhost:5000/secure_stuff',
            { headers: {'Authorization': localStorage.getItem('authToken') } } );
            this.setState( { data: response.data } );
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
                <button onClick={this.callAPI}>Call API</button>
                <div>
                    Data returned
                </div>
                <div>
                    {JSON.stringify( this.state.data )}
                </div>
            </div>
        );
    }
}

export default DisplayPage;
