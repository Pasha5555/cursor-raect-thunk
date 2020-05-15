import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import './App.css';
import Users from './components/users';
import AddUser from './components/addUser';
import Tweets from './components/Tweets';
import AddTweet from './components/addTweet';
import { fetchUsersData, fetchUsersDataSuccess, fetchUsersTweets } from './actions'

class App extends Component{
  componentDidMount(){
    this.props.fetchUsersData('https://77.120.108.119:9999/users/');
    this.props.fetchUsersTweets('https://77.120.108.119:9999/tweets/')
 }
  render(){
  return (
    <div className = "App">
    <Router>
      <div className = "header">
          <ul className = "menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/addUser">Add user</Link>
            </li>
            <li>
              <Link to="/tweets">Tweets</Link>
            </li>
            <li>
              <Link to="/addTweet">Add tweet</Link>
            </li>
          </ul>
          </div>
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/addUser">
            <AddUser />
          </Route>
          <Route path="/Tweets">
            <Tweets />
          </Route>
          <Route path="/addTweet">
            <AddTweet />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
  );
  }
}

function Home() {
  return <h2>Home</h2>;
}

const mapActionsToProps = (dispatch)=>{
  return{
    fetchUsersTweets : bindActionCreators (fetchUsersTweets,dispatch),
      fetchUsersData: bindActionCreators(fetchUsersData,dispatch),
      fetchUsersDataSuccess: bindActionCreators( fetchUsersDataSuccess, dispatch )
  }
}

export default connect(null,mapActionsToProps)(App);
