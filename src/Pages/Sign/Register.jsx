import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputField from '../../Components/Common/InputField'
import Password from '../../Components/Common/Password'
import Button from '../../Components/Common/Button'

const Register = () => {
    const[email,setEmail] = useState("")
    const[username,setUsername] = useState("")
    const[password,setPassword] = useState("")
    const[accept,setAccept] = useState(false)
    const[error,setError] = useState({})

    const navigate = useNavigate()

    const validate = () => {
        const newErrors = {}

        if(!email) newErrors.email = "Email Required"
        else if (!/\S+@\S+\.\S+/.test(email))
            newErrors.email = "Enter valid"

        if(!username) newErrors.username = "Required"
        else if(username.length <3)
            newErrors.username = "Username must be at least 3 characters"

        if(!password) newErrors.password = "Required"
        else if(password.length < 6)
            newErrors.password = "Password must be at least 6 characters"

        if(!accept) newErrors.terms = "You must accept terms and conditions"

        setError(newErrors)
        return Object.keys(newErrors).length === 0
    }

      const handleRegister = () => {
        if(!validate()) return;


        const users = JSON.parse(localStorage.getItem("user")) || [];
        users.push({ email, username, password });
         localStorage.setItem("user", JSON.stringify(users));

         navigate("/login");

      }
  return (
     <div className="min-h-screen flex justify-center items-center bg-[#FFFFFF] p-4">
      <div className="w-[450px] bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-1 text-[#202224]">Create an Account</h2>
        <InputField 
        label="Email"
        placeholder="Enter" 
        value={email}
        onChange={(e) => {
            setEmail(e.target.value)
            setError({...error,email:""})
        }}   error={error.email}
        />

        <InputField label="username" placeholder="Enter" value={username}
        onChange={(e) => {
            setUsername(e.target.value)
            setError({...error,username:""})
        }} error={error.username}
        />
        <Password label="Password" placeholder='Enter' value={password} 
        onChange={(e) => {
            setPassword(e.target.value)
            setError({...error,password:""})
        }} error={error.password}
        />

        <div>
            <input type='checkbox' checked={accept} onChange={(e) => {
                setAccept(e.target.checked)
                setError({...error,terms:""})
            }}
            />
            <span>I accept</span>
        </div>
        {error.terms && (<p className="text-red-500 text-xs mb-4">{error.terms}</p>)}

        <Button  label='Sign Up' className='w-full bg-[#4880FF] text-white py-2 rounded-md text-lg hover:bg-[#487CFF]' onClick={handleRegister}
        />

           <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <span
            className="text-[#5A8CEF] cursor-pointer underline font-bold"
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  )
}

export default Register
