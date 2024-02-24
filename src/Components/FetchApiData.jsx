import React, {Component} from "react";

export default class FetchApiData extends Component{

    state = {
            user: null,
            loading: false
    }


    async componentDidMount(){
           const response = await fetch("https://api.github.com/users");
           const userData = await response.json();
           this.setState({user: userData[0], loading: true});
           console.log(this.state.user);
        // console.log(userData);
    }

    render(){
        return(
            <div>
                    {/* USer Data Loading... */}
                    {/* {JSON.stringify(this.state.user.login)} */}

                    {
                        !this.state.user || !this.state.loading ? (
                            <div>Loading</div>
                            ) :  (
                            <div>
                                    {this.state.user.login}
                                </div>
                        )
                    }
                    
            </div>
                
        )
    }
}