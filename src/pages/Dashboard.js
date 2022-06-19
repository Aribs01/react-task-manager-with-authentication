import React, { Component } from "react";
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

import { Navigate } from 'react-router-dom';
import { connect } from "react-redux";
import Task from "../components/Task";
import List from "../components/List";

class Dashboard extends Component {
  componentDidMount() {
    // console.log('I was triggered during componentDidMount' + localStorage.getItem("user"))
  }
  render() {
    const { user: currentUser } = this.props;
    if (!currentUser) {
      return <Navigate to="/" />;
    }
    return (
      <div>
        <Topbar />
        <Sidebar />
        <div className="section">
          <header className="jumbotron">
            <h3>
              <strong>{currentUser.results.name}</strong>
            </h3>
          </header>

          <p>
            <strong>Email:</strong> {currentUser.results.email}
          </p>
        <Task />
        <List />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}
export default connect(mapStateToProps)(Dashboard);