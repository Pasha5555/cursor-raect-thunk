import React from 'react';

import { Container, Avatar, MainContent, NickName, Ava, Header, MainData} from "../styles/post_styled.js";


function User(props){
    const {name, photo, nickname, date} = props;

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
                </Header>
            </MainContent>
            
        </Container>
    );
};

export default User;
