import React from 'react'
import { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material'
import styled from '@emotion/styled';

const Component = styled(Box)`
width:400px;
margin: auto;
margin-top: 50px;
box-shadow: 5px 2px 5px 2px rgba(0,0,0, 0.6);
`;
const Image = styled('img')({
    width: '200px',
    margin: '0 auto',
    display: 'flex',
    padding: '50px 0 0 0'
});

const Wrapper = styled(Box)`
    display: flex;
    flex:1;
    flex-direction: column;
    padding: 0px 35px;
    padding-bottom: 20px;
    &>div, &> button,  &> p {
        margin-top: 20px;
        text-align: center;
    }
`;
const LoginButton = styled(Button)`
    text-transform: none;
    background: #fb641b;
    border-radius: 2px;
    color: white;
    heigth: 40px;
    font-size: 18px;
`;
const Text = styled(Typography)`
    color: #878787;
`
const CreateAccountBtn = styled(Button)`
    text-transform: none;
    background: #fff;
    border-radius: 2px;
    color: #0357ff;
    heigth: 40px;
    font-size: 18px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;
// this is used for signup form value store in object
const singupInitialValue ={
    name:'',
    username:'',
    password:''
}
const Login = () => {
    const [account, setAccount] = useState('Login');
    // const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
    
    
    const toggleSignup = () => {
        setAccount('Signup');
    }  
    const toggleLogin = () => {
        setAccount('Login');
    }

// it makes changense when oninput function called
    const [signup, setSignup]=useState(singupInitialValue);
    const onInputChange = (e) =>{
        setSignup({...signup, [e.target.name]:e.target.value});
    }

    return (
        <Component>
            <Box>
                <Image src= '../images/logo.png' alt="Login" />
                {
                    account === 'Login' ?
                        <Wrapper>
                            <TextField id="standard-basic" label="Enter Username" variant="standard" />
                            <TextField id="standard-basic" label="Enter Password" variant="standard" />
                            <LoginButton variant="contained">Login</LoginButton>
                            <Text>
                                Don't have an account?
                            </Text>
                            <CreateAccountBtn onClick={()=>toggleSignup()}>
                                Create an account
                            </CreateAccountBtn>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField id="standard-basic" onChange={(e)=>onInputChange(e)} label="Enter Your Name" name="name" variant="standard" required/>
                            <TextField id="standard-basic" onChange={(e)=>onInputChange(e)} label="Enter Username" name="username" variant="standard" required unique/>
                            <TextField id="standard-basic" onChange={(e)=>onInputChange(e)} label="Enter Password" name="password" variant="standard" required />
                            <CreateAccountBtn onClick={()=>signup()}>Signup</CreateAccountBtn>
                            <Text>
                                or
                            </Text>
                            <LoginButton onClick={()=>toggleLogin()} variant="contained">
                                Already have an account
                            </LoginButton>
                        </Wrapper>
                }
            </Box>
        </Component>
    )
}

export default Login