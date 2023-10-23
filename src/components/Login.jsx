import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Login = () => {
  
    const [user, setUser] = useState({
        email:"",
        password:"",
    });
    
    const [err, setError] = useState(null);

    const navigate = useNavigate();

    const {login} = useContext(AuthContext);

    const handleChange = (e) =>{
        setUser(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async e =>{
        e.preventDefault();
        if (!user.email || !user.password) {
            setError('Email and password are required.');
            return;
          }
        try {
            await login(user);
            navigate("/dashboard");

        } catch (err) {
            setError(err.response.data.error);
        }
    }
    return (
        
    <div  class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

        <div class="w-full bg-white rounded-lg shadow dark md:mt-0 sm:max-w-md xl:p-0 ">

            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-[#32CD32]  md:text-2xl " >Login</h1>
                <form>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                        <input type="email" onChange={handleChange} name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required="" />
                    </div>

                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                        <input type="password" onChange={handleChange} name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                    </div>

                    <br />
                    <div>   
                        <button type="submit" onClick={handleClick} class="w-full text-white bg-[#0E327A] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login</button>
                        {err && <p class="text-center text-[#ff0000]">{err}</p>}
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <a href="/signup" class="font-medium text-[#0E327A] hover:underline ">Sign up</a>
                        </p>
                    </div>

                </form>
            </div>

        </div>

    </div>

  )
}

export default Login