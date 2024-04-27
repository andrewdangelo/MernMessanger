import React, { useState } from 'react';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your registration logic here
        console.log('Registering user:', username);
        console.log('Password:', password);
    };

    return (
        <div className='bg-blue-50 h-screen flex items-center'> 
        
            <form onSubmit={handleSubmit} className='w-64 mx-auto mb-12'>
                
                    <input
                        type="text"
                        id="username"
                        placeholder='username'
                        className='block w-full mb-2 rounded-sm p-2 border'
                        value={username}
                        onChange={handleUsernameChange}
                    />
                
                
                    <input
                        type="password"
                        id="password"
                        placeholder='password'
                        className='block w-full mb-2 rounded-sm p-2 border'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                
                <button type="submit" className='bg-blue-500 text-white block w-full rounded-sm p-2'>Register</button>
            </form>
        </div>
    );
};

export default Register;