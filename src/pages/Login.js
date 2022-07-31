import React from 'react';
import '../css/Login.css';
import { Logo } from '../components/';
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';

function Login(props) {
    return (
        <div className={"App App-center-x " + props.bgColor}>
            <div className="container">
                <div className="container-header">
                    <Logo size="small" />
                    <Link to="/register" id="nav-link">
                        register instead
                    </Link>
                </div>
                <div className="inner-container">
                    <div className="login-form">
                        <h2 id="primary-title">Login</h2>
                        <div className="api-login-container">
                            <div id="googleAPIOAuth2box">

                            </div>
                        </div>
                        <form id="user-data">
                            <input type="text" id="email" name="email" placeholder="Email"></input>
                            <input type="password" id="password" name="password" placeholder="Password"></input>
                            <Link to="/password-reset" id="forgot-password">
                                Forgot password
                            </Link>
                            <div id="remember-box">
                                <input type="checkbox" id="remember-me" name="remember"></input>
                                <label htmlFor="remember-me">Remember me</label>
                            </div>
                        </form>
                    </div>
                    <Stack
                        spacing={1}
                        direction="row"
                        alignItems="center"
                        flexWrap="wrap"
                    >
                        <Link to="/" id="back-link">
                            <Button
                                variant="contained"
                                id="form-back"
                                style={{
                                    backgroundColor: "#FFA500"
                                }}
                            >
                                <NavigateBeforeIcon /> &nbsp;
                                Back
                            </Button>
                        </Link>
                        <Link to="#" id="next-link">
                            <Button 
                                id="form-next" 
                                variant="contained" 
                                color="primary" 
                                style={{ 
                                    backgroundColor: "#30D5C8" 
                                }}>

                                Next &nbsp;
                                <NavigateNextIcon />
                            </Button>
                        </Link>
                    </Stack>
                </div>
            </div>
        </div >
    );
}

export default Login;