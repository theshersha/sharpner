import React, { useState } from 'react';
export default function SignUp() {
    const[email, setEmail] = useState('');
    const[password, setpassword] = useState('');
    const handleSubmit=(e)=>{e.preventDefault()
     console.log(email,password);  
    }
    return (
        <div>
            <h3>Please SignUp</h3>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div class="input-field col s6">
                    <input type='email' placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                    <input type='password' placeholder="password" onChange={(e) => setpassword(e.target.value)} />
                </div>
                <button type='submit' className='btn blue'>Logout</button>
            </form>
        </div>
    )
}
