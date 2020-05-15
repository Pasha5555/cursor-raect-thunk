import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import { saveUsersTweetsSuccess } from '../../actions'
import { Input, Background, Button, List } from '../../components/addUser/styles/inputs_styled';


class AddUser extends Component {
  state = {
    author: '',
    content: '',
    image: '',
    ava: ''
  }


  changeAuthor = (e) => {
    this.setState({ 
      author: e.target.value 
    })
  }

  changeContent = (e) => {
    this.setState({ 
      content: e.target.value 
    })
}

  changeImage=(e)=>{
    this.setState({ 
        image: e.target.value 
    })
  }


  render () {
    const { saveUsersTweetsSuccess } = this.props;
    const saveValueInput = () => {
      if(this.state.content&&this.state.image&&this.state.author){

            axios({
                method: 'post',
                url: 'https://77.120.108.119:9999/tweets/',
                data:{
                    content:this.state.content,
                    image : this.state.image,
                    name: this.state.author,
                    nickname: "@" + this.state.author.toLocaleLowerCase().toString().replace(/\s/g, ''),
                    photo: this.state.author === 'Harry Poter'? (this.state.ava = 'https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg?w=600&quality=85') : 
                      this.state.author === 'John Cena'? (this.state.ava = 'https://sun6-16.userapi.com/c846020/v846020635/71579/UKw0hOXcuFs.jpg?ava=1') : 
                      this.state.author === 'Thomas Shelby'? (this.state.ava = 'https://sun9-18.userapi.com/c854324/v854324158/163df5/Y52VCm9baHc.jpg?ava=1') : ""
                
                }
            })
            .then(function (data) {  
                console.log('Request succeeded with JSON response', data);  
              }) 
              .catch(function (error) {  
                console.log('Request failed', error);  
              })


            saveUsersTweetsSuccess({
                    name: this.state.author,
                    content: this.state.content,
                    image : this.state.image,
                    nickname: "@" + this.state.author.toLocaleLowerCase().toString().replace(/\s/g, ''),
                    photo: this.state.author === 'Harry Poter'? (this.state.ava = 'https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg?w=600&quality=85') : 
                      this.state.author === 'John Cena'? (this.state.ava = 'https://sun6-16.userapi.com/c846020/v846020635/71579/UKw0hOXcuFs.jpg?ava=1') : 
                      this.state.author === 'Thomas Shelby'? (this.state.ava = 'https://sun9-18.userapi.com/c854324/v854324158/163df5/Y52VCm9baHc.jpg?ava=1') : ""

            })                        

            this.setState({
                content:'',
                author:'',
                image: ''
            })
        }else{
            alert('Some fields are empty or not found this user!')
        }
      }
   
    return (
        <Background>
        <center>
        <Input
          onChange={this.changeContent}
          value={this.state.content}
          type='text' 
          placeholder='Content*'
        />
        <Input
          onChange={this.changeImage}
          value={this.state.image}
          type='text' 
          placeholder='Image url*'
        />
        <List onChange={this.changeAuthor}>
              <option defaultChecked>--Choose--</option>
              <option value="Harry Poter"> Harry Poter </option>
              <option value="John Cena"> John Cena </option>
              <option value="Thomas Shelby"> Thomas Shelby </option>
        </List> 
        <Button onClick={saveValueInput}>Add</Button>
        </center>
      </Background>
    );
  }
}


const mapActionsToProps = (dispatch)=>{
  return{
    saveUsersTweetsSuccess: bindActionCreators(saveUsersTweetsSuccess,dispatch)
  }
}

const mapStateToProps = (state)=>{
  let arr = [];
  state.tweets.forEach( curr => arr.push(curr) );
  return { res: arr, data:state.data };
}

export default connect(mapStateToProps,mapActionsToProps)(AddUser);