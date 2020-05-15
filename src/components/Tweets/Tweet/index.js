import React, { useState } from 'react';

import { Container, Avatar, MainContent, NickName, Ava, Header, MainData, Message, Span, PostPhoto, PostPhotoBlock, Ikons} from "./styled.js"
import './ikons.css';


function Tweet(props){
    const {name, photo, nickname, content, image, date, comments, retweets, likes, uploads} = props;
    const [countComments, setCountComments] = useState(0);
    const [countRetweet, setCountRetweet] = useState(0);
    const [countLikes, setCountLikes] = useState(0);
    const [button, setButton] = useState(false);

    return(
        <Container>
            <Ava>
                <Avatar src= {photo} />
            </Ava>
            <MainContent>
                <Header>
                    <MainData>
                        <h2>{name}</h2>
                        <NickName>{nickname} {date}</NickName>
                    </MainData>
                    <Message>
                      <p>{content}</p>
                    </Message>
                </Header>
                <PostPhotoBlock>
                     <PostPhoto src={image}/>
                </PostPhotoBlock>
                <Ikons>
                    <i onClick={() => setCountComments(countComments >= 1 ? countComments-1 : countComments+1)} 
                       class="fa fa-comment"
                    >  <Span fon = {button} onClick={()=>setButton(!button)}>{comments + countComments}</Span>
                    </i>
                      
                    <i onClick={() => setCountRetweet(countRetweet >= 1 ? countRetweet-1 : countRetweet+1 )} 
                       class="fa fa-retweet"
                    >  <Span >{retweets + countRetweet}</Span>
                    </i>

                    <i onClick={() => setCountLikes(countLikes >= 1 ? countLikes-1 : countLikes+1)} 
                       class="fas fa-heart"
                    >  <Span>{likes + countLikes}</Span>
                    </i>

                    <i class="fas fa-upload"><Span>{uploads}</Span></i>
                </Ikons>
            </MainContent>
        </Container>
    );
};

export default Tweet;
