import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const intialData={
        username:'',email:'',password:''
    }
    const [value,setValue]= useState(intialData);
    const [error,setError]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setValue({...value,[name]:value});
        console.log(value);
    }
    const navigate = useNavigate();

    const submitHandler=(e)=>{
        e.preventDefault();
        setError(Validite(value));
        setIsSubmit(true);
        navigate('/home');

    }

    useEffect(()=>{
        console.log(error);
        if(Object.keys(error).length===0 && isSubmit){
            console.log(value);
        }
    },[error])

    const Validite=(value)=>{
        const error={};
        if(!value.username){
            error.username='Please enter your username';
        }
        if(!value.email){   
            error.email='Please enter your email';
        }
        if(!value.password){
            error.password='Please enter your password';
        }else if(value.password.length<5){
            error.password='Password must be 5 characters long';
        }
        return error;

    }
  return (
    <div className='container'>

    <form onSubmit={submitHandler}>
        <h1 className='text-3xl font-bold text-center mb-4'>Login Form</h1>
        <div className='ui divider'></div>
        <div className='flex flex-col gap-y-1'>
            <div className='field flex flex-col'>
                <label className=''>Username</label>
                <input type='text' name='username' className='border border-gray-600 rounded-md p-1' placeholder='Enter username' value={value.username} 
                onChange={handleChange}></input>
            </div>
            <p>{error.username}</p>
            <div className='field flex flex-col'>
                <label>Email</label>
                <input type='email' name='email' className='border border-gray-600 rounded-md p-1' placeholder='Enter email' value={value.email}
                onChange={handleChange}></input>
            </div>
            <p>{error.email}</p>
            <div className='field flex flex-col'>
                <label>Password</label>
                <input type='password' name='password' className='border border-gray-600 rounded-md p-1' placeholder='Enter password' value={value.password}
                onChange={handleChange}></input>
            </div>
            <p>{error.password}</p>

            <button className='fluid ui button blue mt-3'>Submit</button>
        </div>
    </form>
    </div>
  )
    }

export default Login
