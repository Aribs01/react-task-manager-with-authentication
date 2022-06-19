import React, { Component } from "react";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";

import '../assets/task.css'

export default class List extends Component  {
    constructor(props) {
        super(props);
    
        this.state = {
          content: []
        };
    }
    componentDidMount() {

        // AuthService.getUser().then(
        //   response => {
        //     this.setState({
        //       // content: response.data.results.users_accepted
        //       content: response.data.results.data
        //     });
        //   },
        //   error => {
        //     this.setState({
        //       content:
        //         (error.response &&
        //           error.response.data &&
        //           error.response.data.message) ||
        //         error.message ||
        //         error.toString()
        //     });
    
        //     if (error.response && error.response.status === 401) {
        //       EventBus.dispatch("logout");
        //     }
        //   }
        // );
        // console.log(JSON.stringify(this.state));
    }

    render(){

        // let users = this.state.content.length > 0
        //     && this.state.content.map((item, i) => {
        //     return (
        //         <option key={i} value={item.first}>Name: {item.name}</option>
        //     )
        // }, this);
      // <img className="logo" src={item.icon} alt="logo" />
      return (
        <div className='list'>
            
        </div>
      )
    }
}
