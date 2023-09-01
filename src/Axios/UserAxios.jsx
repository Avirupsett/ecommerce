import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const UserAxios = () =>{
    const navigate = useNavigate();
    
    const getToken = () =>{
        const tokenString = sessionStorage.getItem('userToken');
        const user_token = JSON.parse(tokenString);
        return user_token;
    }

    const getUser = () =>{
        const tokenString = sessionStorage.getItem('userData');
        const user_detail = JSON.parse(tokenString);
        return user_detail;
    }
    const [userToken, setuserToken] = useState(getToken());
    const [userData, setuserData] = useState(getUser());

    const saveData = (userData,userToken) =>{
        sessionStorage.setItem('userToken',JSON.stringify(userToken));
        sessionStorage.setItem('userData',JSON.stringify(userData));
        setuserToken(userToken);
        setuserData(userData);
    
        navigate('/dashboard');
    }
    const http = axios.create({
        baseURL:"https://ecomapi.local/api",
        headers:{
            "Content-type":"application/json"
        }
    });
    return{
        setuserToken:saveData,
        userToken,
        userData,
        getToken,
        http
    }
}


export default UserAxios;