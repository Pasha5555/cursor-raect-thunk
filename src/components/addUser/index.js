import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { pushUsersDataSuccess } from '../../actions'
import { Input, Background, Button} from './styles/inputs_styled';


class AddUser extends Component {
  state = {
    name: '',
    avatarUrl: '',
    userName: ''
  }


  changeName = (e) => {
    this.setState({ 
      name: e.target.value 
    })
  }

  changeAvatar = (e) => {
    this.setState({ 
      avatarUrl: e.target.value 
    })
}

  changeUserName=(e)=>{
    this.setState({ 
        userName: e.target.value 
    })
  }


  render () {
    const { pushUsersDataSuccess } = this.props;
    const saveValueInput = () => {
      if(this.state.name&&this.state.avatarUrl&&this.state.userName){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: this.state.name,
            nickname: this.state.userName,
            photo: this.state.avatarUrl
        })
    };
    fetch('https://77.120.108.119:9999/users/', requestOptions).then(function(res){ console.log(res) });

    pushUsersDataSuccess({
      name: this.state.name,
      nickname: this.state.userName,
      photo: this.state.avatarUrl
  })

  
      this.setState({
        name: '',
        avatarUrl: '',
        userName: ''
      }) 
    }else{
      alert('Some fields are empty!')
    }
  }
   
    return (
        <Background>
        <center>
        <Input
          type='text'
          onChange={this.changeName} 
          value={this.state.name}
          placeholder='Input Name*'
        />
        <Input
          onChange={this.changeAvatar}
          value={this.state.avatarUrl}
          type='text' 
          placeholder='Input Avatar*'
        />
        <Input
          onChange={this.changeUserName}
          value={this.state.userName}
          type='text' 
          placeholder='Input Username*'
        />
        <Button onClick={saveValueInput}>Add</Button>
        </center>
      </Background>
    );
  }
}


const mapActionsToProps = (dispatch)=>{
  return{
      pushUsersDataSuccess:bindActionCreators(pushUsersDataSuccess,dispatch)
  }
}

export default connect(null,mapActionsToProps)(AddUser);