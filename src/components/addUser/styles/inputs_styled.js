import styled from 'styled-components';

export const Input = styled.input`
    width: 250px;
    height: 30px;
    padding: 2px 3px 2px 7px;
    border: 2px solid rgb(85, 85, 151);
    color: white;
    border-radius:3px;
    background: #15202B;;
    border-radius: 5px;
    opacity: 0.7;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const List = styled.select`
    margin-bottom: 25px;
    border: 2px solid rgb(85, 85, 151);
    display: flex;
    flex-direction: column;
`;
export const Background = styled.div`
     /* background-color: rgb(179, 179, 196); */
`;

export const Button = styled.button`
    width: 100px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid black;
    color: white;
    background-color: rgb(85, 85, 151);
    margin-bottom: 50px;
    cursor: pointer;
`;

export const PostBlock = styled.div`
    margin-bottom: 50px;
`;