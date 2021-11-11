import React, { Component } from 'react'
import UserServices from '../../services/UserServices';

export default class HomeUsersPages extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          content: ""
        };
      }
    
      componentDidMount() {
        UserServices.CheckUsers().then(
          data => {
            this.setState({
              content: data.data
            });
            console.log(this.state.content);
          },
          error => {
            console.log(error);
          }
        );
      }    

    render() {
        return (
            <div>
                <h1>Berhasil {this.state.content.data}</h1>
            </div>
        )
    }
}
