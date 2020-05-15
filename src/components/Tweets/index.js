import React, { Component } from 'react';

import Tweet from './Tweet';
import { PostBlock } from '../users/styles/post_styled';
import { connect } from 'react-redux';

class Tweets extends Component {
  render () {
    return (
        <center>
        <div>
          {
           this.props.res.map((curr, index)=>{
             return (
             <PostBlock>
               <Tweet 
               key = {index} 
               comments = {10}
               retweets = {40}
               likes = {100} 
               id = {index} 
               {...curr} 
               name = {curr.name}
               />
              </PostBlock>
              )
            })
          }
        </div>
        </center>
    );
  }
}

const mapStateToProps = (state)=>{
  let arr = [];
  state.tweets.forEach( curr => arr.push(curr) );
   return { res: arr };
}

export default connect(mapStateToProps)(Tweets);


