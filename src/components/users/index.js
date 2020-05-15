import React, { Component } from 'react';

import User from './user/index.js';
import { userData } from './usersData/index.js';
import { Background, PostBlock } from './styles/post_styled';
import { connect } from 'react-redux'

class Users extends Component {
  state = {
    users: userData
  }

  render () {
    return (
      <Background>
        <center>
        <div>
          {
           this.props.res.map((curr, index)=>{
             return (
             <PostBlock>
               <User key = {curr+index} id = {index} {...curr} />
              </PostBlock>
              )
            })
          }
        </div>
        </center>
      </Background>
    );
  }
}

const mapStateToProps = (state)=>{
  let arr = [];
  state.data.forEach( curr => arr.push(curr) );
   return { res: arr };
}

export default connect(mapStateToProps)(Users);