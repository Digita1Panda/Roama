import React, { useState } from "react";
import './login.css';
import { Link, useNavigate } from "react-router-dom";


export default function Login(props){

    //Set initial state for login form
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });
    // const [errors, setErrors] = useState({});

    const navigate = useNavigate();
    
    const handleInputChange = (event) => {
        //Get the value and name of field whose input changed
        let value = event.target.value;
        const name = event.target.name;

        //update state
        setLoginData({
            //copy of object 
            ...loginData,
            [name]: value,
        });
        // console.log(loginData);
    }

    const handleFormSubmit = (event) => {
        //prevent default behaiviour on form submit
        event.preventDefault();
        navigate('/home');
        props.setUserData({
            username: loginData.username,
            firstname: loginData.firstname,
            lastname: loginData.lastname,
            email: loginData.email
        })
        // console.log(loginData);
        //check user exists in list of signed up users
        // const listOfUsers = JSON.parse(localStorage.getItem("usersRoama"));
        // console.log(listOfUsers);
        // if(listOfUsers !== null){
            
        //     const loggedInUser = listOfUsers.filter(user => user.username === loginData.username);
            
        //     if(loggedInUser.length === 1){
        //         // console.log(loggedInUser)
        //         props.setUserData({
        //             username: loggedInUser[0].username,
        //             firstname: loggedInUser[0].firstname,
        //             lastname: loggedInUser[0].lastname,
        //             email: loggedInUser[0].email
        //         })
        //         navigate('/home');
        //     }else {
        //         alert("Incorrect login details!");
        //     }
        // } else {
        //     alert("Please sign up!")
        // }
    }


    return(
        <div className="signPage d-flex bg-primary vh-100 justify-content-center align-items-center">                
            <form className= "signForm p-3 bg-white rounded d-flex flex-column justify-content-center align-items-center" >
                <img className="w-50 mb-3" src="/roama-logo.png" alt="Roama" />
                <div className="form-group mb-3 w-100">
                    <input 
                        type="text"
                        className="form-control" 
                        placeholder="Username"
                        name="username"
                        value={loginData.username}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group w-100">
                    <input 
                        type="password"
                        className="form-control" 
                        placeholder="Password"
                        name="password"
                        value={loginData.password}
                        onChange={handleInputChange}
                    />
                </div>
                <small className="form-text mb-3">
                    <a href="#">Forgot Password?</a>
                </small>
                <button 
                    type="submit" 
                    className="btn signBtn mt-3 w-100 rounded border-0"
                    onClick={handleFormSubmit}
                >Log in
                </button>   
                <hr className="mt-4 w-100"/>
                <div className="mb-3">
                    <small>
                        New to Roama? 
                        <Link to='/signup' className="ms-2 ">Sign up</Link>
                    </small>
                </div>                    
            </form>
        </div>
    )
}