import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 170px;
    background-color: #15202B;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 10px;
    border-style: groove;
`;

export const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100px; 
    border: 3px solid black;
    box-shadow: 0 0 5px rgb(122, 122, 160); 
`;

export const Ava = styled.div`
    display: flex;
    margin: 30px;
`;

export const MainData = styled.div`
    display: flex;
    height: 100px;
    margin-top: 20px;
    line-height: 0;
`;
export const NickName = styled.h3`
    color: rgb(93, 93, 133);;
    margin-left: 40px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    margin-top: 20px;
`;

export const MainContent = styled.div`
    max-width: 80%;
    height: 95%;
    margin-top: -13px;
`;

export const Background = styled.div`
     background-color: rgb(179, 179, 196);
`;

export const PostBlock = styled.div`
    margin-bottom: 5px;
`;