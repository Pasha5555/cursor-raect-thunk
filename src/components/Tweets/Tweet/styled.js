import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 900px;
    height: 550px;
    background-color: #15202B;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.2rem;
    border-radius: 10px;
    top: 25%;
    left: 25%;
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
    margin: 3%;
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

export const Message = styled.div`
    display: flex;
    line-height: 0;
    font-size: 1.3rem;
`;

export const PostPhotoBlock = styled.div`
    margin-top: 10px;
    width: 95%;
    height: 70%;
`;

export const PostPhoto = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
`;
export const MainContent = styled.div`
    max-width: 80%;
    height: 95%;
    margin-top: -13px;
`;

export const Ikons = styled.div`
    margin-top: 15px;
    margin-right: 35px;
`;

export const Span = styled.span`
    margin-left: 5px;
    color: ${ props => props.fon ? 'rgb(163, 163, 236)' :'rgb(167, 167, 201)'};
    cursor: pointer;
    /* rgb(167, 167, 201); */
`;

export const Button = styled.button`
    width: 10px;
`;

