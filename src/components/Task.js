import React, { Component } from "react";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";

import '../assets/task.css'

export default class Task extends Component  {
    constructor(props) {
      super(props);
  
      this.state = {
        content: this.props.value || []
      };
      this.getUser=this.getUser.bind(this);
      this.getUser();
    }
    getUser(){
      AuthService.getUser().then(
        response => {
          this.setState({
            content: response.data.results.data
          });
        }
      );
    }
    componentDidMount() {
      this.getUser();
       
    }

    render(){
        let users = this.state.content.map((item, i) => {
          return (
                <option key={i} value={item.first}>Name: {item.name}</option>
            )
        });
      return (
        <div className='taskform'>
            <div className='heading'>
                <span>TASKS</span>
                <button className='add'>ADD</button>
            </div>
            <div className='input'>
                <span>Task Description</span>
                <input />
            </div>
            <div className='input'>
                <span>Date</span>
                <input type="date" id="birthday" name="birthday"></input>
            </div>
            <div className='input'>
                <span>Time</span>
                <input type="time" id="appt" name="appt"></input>
            </div>
            <div className='input'>
                <span>Assigned User</span><br />
                <select>
				          {users}
			          </select>
            </div>
            <div className='input'>
              <button>Save</button>
            </div>
        </div>
      )
    }
}
