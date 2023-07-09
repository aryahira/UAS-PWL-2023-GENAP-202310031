import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
    const [formData, setFormData] = useState({ 
    username: "", 
    password: "" 
  }) 
 
  const [data, setData] = useState([]); 
 
  const [isUsernameValid, setIsUsernameValid] = useState(true); 
  const [isPasswordValid, setIsPasswordValid] = useState(true); 
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); 
 
  const handleChange = (event) => { 
    const { name, value } = event.target; 
    setFormData((prevState) => ({ 
        ...prevState, 
        [name]: value, 
    })); 
  }; 
 
  const handleSubmit = async (event) => { 
    event.preventDefault(); 
 
    // Check if username exists 
    const isUsernameExist = data.some((item) => item.username === formData.username); 
 
    if (!isUsernameExist) { 
      setIsUsernameValid(false); 
      return; 
    } 
 
    // Check if password is correct 
    const user = data.find((item) => item.username === formData.username); 
 
    if (user.password !== formData.password) { 
      setIsPasswordValid(false); 
      return; 
    } 
 
    if (isUsernameExist && user) { 
      window.location.href = '/home' 
    } 
  }; 
 
  const fetchData = async () => { 
        try { 
            const response = await fetch('http://localhost:3001/registrasi'); 
            const jsonData = await response.json(); 
            setData(jsonData); 
        } catch (error) { 
            console.log(error); 
        } 
  }; 
 
  useEffect(() => { 
    fetchData(); 
  }, []) 
 
  useEffect(() => { 
    const isFormValid = formData.username !== "" && formData.password !== ""; 
    setIsButtonDisabled(!isFormValid); 
  }, [formData]);

  return (
    <div className='akun'>
      <div className='akun-user'>

        <h1 className='login'>
            Login
        </h1>

    <br/>
        <form className='isil' onSubmit={handleSubmit}>
            <div className="form-group">
                {!isUsernameValid && (
                <label 
                for="exampleInputUsername1">
                Username
                </label>
                )}
                <input type="username" 
                className="form-control" 
                id="exampleInputUsername1" 
                placeholder="Enter username" 
                name="username" 
                value={formData.username} 
                onChange={handleChange}
                />
            </div>
        
    <br/>    
            <div className="form-group">
                {!isPasswordValid && (
                <label 
                for="exampleInputPassword1">
                    Password
                </label>
                )}
                <input 
                type="password" 
                className="form-control" 
                id="exampleInputPassword1" 
                placeholder="Password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange}
                />
            </div>

    <br/>   
            <div className='pindah'>
            <h6 className='gak-punya-akun'>
                Don't have an account?
                <Link to={"/signup"}>
                <button type="masuk"
                className="btn msk">
                    Sign Up
                </button>
                </Link>
            </h6>
            </div> 

        <br/>
            <button 
            variant="success"
            type="submit" 
            className="btn btn-primary sbt">
                Login
            </button>

        </form>
        </div>
    </div>
  )
}
